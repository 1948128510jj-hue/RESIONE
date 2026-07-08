---
name: feedback-document-toc
description: PDF文档超过4页必须先生成目录(Table of Contents)，用户偏好有目录的长文档
metadata: 
  node_type: memory
  type: feedback
  originSessionId: b7478abb-7400-4ad7-a98a-30fc796ccb11
---

超过4页的PDF文档，必须先做一个目录（Table of Contents）放在文档开头。

**Why:** 用户明确要求。长文档没有目录翻阅困难，目录能快速定位内容。

**How to apply:** 在生成任何预计超过4页的HTML/PDF文档时，第一页放置目录，列出所有章节标题及对应页码。目录格式简洁清晰，条目后标注页码。生成前评估内容量——如果可能超过4页就自动加上目录。
