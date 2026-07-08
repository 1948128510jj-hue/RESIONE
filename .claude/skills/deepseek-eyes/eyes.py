#!/usr/bin/env python3
"""
deepseek-eyes: Image vision skill for Claude Code
Uses Alibaba DashScope qwen3-vl-plus to analyze images.
"""

import os
import sys
import base64
import json

def get_image_base64(image_path):
    """Read image file and return base64 encoded string."""
    with open(image_path, 'rb') as f:
        return base64.b64encode(f.read()).decode('utf-8')

def get_mime_type(image_path):
    """Determine MIME type from file extension."""
    ext = os.path.splitext(image_path)[1].lower()
    mime_map = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.gif': 'image/gif',
        '.bmp': 'image/bmp',
    }
    return mime_map.get(ext, 'image/png')

def analyze_image(image_path):
    """Analyze image using DashScope vision model."""
    api_key = os.environ.get('DASHSCOPE_API_KEY')
    if not api_key:
        print("ERROR: DASHSCOPE_API_KEY environment variable not set.")
        print("Get your API key from https://dashscope.console.aliyun.com/")
        sys.exit(1)

    # Check if image exists
    if not os.path.exists(image_path):
        print(f"ERROR: Image file not found: {image_path}")
        sys.exit(1)

    mime_type = get_mime_type(image_path)
    image_b64 = get_image_base64(image_path)

    try:
        import dashscope
        from dashscope import MultiModalConversation
    except ImportError:
        print("ERROR: dashscope not installed. Run: pip install dashscope")
        sys.exit(1)

    dashscope.api_key = api_key

    messages = [
        {
            "role": "user",
            "content": [
                {"image": f"data:{mime_type};base64,{image_b64}"},
                {"text": "请详细描述这张图片的内容。包含所有可见的文字、数字、UI元素、表格、图表等。"}
            ]
        }
    ]

    try:
        response = MultiModalConversation.call(
            model='qwen3-vl-plus',
            messages=messages,
        )

        if response.status_code == 200:
            output = response.output
            if output and 'choices' in output and len(output['choices']) > 0:
                content = output['choices'][0]['message']['content']
                # Handle both string and list content
                if isinstance(content, list):
                    for item in content:
                        if isinstance(item, dict) and 'text' in item:
                            print(item['text'])
                        elif isinstance(item, str):
                            print(item)
                else:
                    print(content)
            else:
                print("No content in response")
                print(json.dumps(output, indent=2, ensure_ascii=False))
        else:
            print(f"API Error (status {response.status_code}): {response.message}")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python eyes.py <image_path>")
        sys.exit(1)

    analyze_image(sys.argv[1])
