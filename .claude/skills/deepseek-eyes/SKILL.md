---
name: deepseek-eyes
description: "Use this skill to read and analyze images. When the user shares an image, asks what's in a picture, or needs visual analysis, invoke this skill with the image file path."
---

# deepseek-eyes — Image Vision Skill

This skill gives Claude Code the ability to "see" images by routing them through Alibaba DashScope's vision model (qwen3-vl-plus).

## When to Use

- User shares an image/screenshot
- User asks "what's in this picture?"
- User needs visual analysis of a chart, UI, document, etc.
- User says keywords like: 看图, 图片, 截图, 识别, 提取, EYE, 眼睛

## How to Use

Run the eyes.py script with the image path:

```bash
python eyes.py <image_path>
```

Or with python3:
```bash
python3 eyes.py <image_path>
```

The script will return a detailed description of the image content.

## Setup Requirements

1. Install dashscope: `pip install dashscope` (or `pip3 install dashscope`)
2. Set environment variable: `DASHSCOPE_API_KEY=your_key`
3. The API key can be obtained from https://dashscope.console.aliyun.com/

## Notes

- Uses qwen3-vl-plus model by default
- Supports PNG, JPG, JPEG, WEBP formats
- Supports both local file paths and URLs
