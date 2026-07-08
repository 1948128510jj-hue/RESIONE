---
name: crm-setup-other-pc
description: 另一台电脑CRM部署步骤 — 新电脑已装Python+Claude，一句话启动
metadata: 
  node_type: memory
  type: reference
  originSessionId: 4c8c30b7-c5b1-4be6-9e5f-4930e61a2ebd
---

## 新电脑 CRM 部署

另一台工作电脑已安装 Python 和 Claude Code。

### 一句部署

到新电脑上打开 Claude，按顺序说：

**第一步：**
> "帮我拉取 claude-config 仓库"

**第二步：**
> "帮我运行 crm/一键部署.bat"

### 文件位置

- 仓库：`github.com/1948128510jj-hue/claude-config`
- CRM 目录：`crm/`
- 启动文件：`crm/RESIONE_CRM.bat`
- 一键部署：`crm/一键部署.bat`
- 端口：8767
- 访问：`http://localhost:8767`

### 注意事项

- 数据库 `crm_data.db` 自动创建，新电脑从零开始
- 要去旧电脑拷贝 `crm_data.db` 才能带数据过去
- 截图工具需要单独双击 `截图工具.bat`（如果桌面上有的话）
- gstack 功能需要安装 Node.js，没有的话抓取功能降级为 Python-only
