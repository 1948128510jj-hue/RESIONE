---
name: resume-personal-advantage-format
description: 简历个人优势部分使用段落式，不加圆点横线
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3a71fec7-4a79-43e1-9417-48d1374f00d5
---

黄健锋简历的"个人优势"部分不要用bullet points（圆点●），写成流畅的段落文字，不加任何符号前缀。

**Why:** 用户明确要求"把横线去掉"，段落式更简洁自然，区别于其他简历。
**How to apply:** 生成简历时，个人优势部分用 `text()` 逐行输出段落文字，不用 `bullet_list()` 函数。
