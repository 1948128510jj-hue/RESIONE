---
name: claude-code-skills-ecosystem
description: "Claude Code Skills ecosystem — Superpowers, install commands, token costs, recommended combos"
metadata: 
  node_type: memory
  type: reference
  originSessionId: d4d650f1-9f0f-41ca-a6e5-f9558d868793
---

## Superpowers 技能套件

### 安装（一条命令）
```
/plugin install superpowers@claude-plugins-official
```
安装后 `/exit` 重启 Claude Code，看到 `"Superpowers loaded successfully"` 即激活。

### Token 开销

| 场景 | 消耗 |
|------|------|
| 启动时 14 个 Skill 元数据 | ~2,500 tokens 固定 |
| 激活单个 Skill | < 5,000 tokens |
| 工作时同时激活 | 1-3 个 Skill |

- **复杂任务**：省 ~14% token（规划避免返工）
- **简单任务**：会浪费 token（被流程拦截）
- **日常混合**：基本持平

### 14 个 Skill 流水线

| 阶段 | Skill | 功能 |
|------|-------|------|
| 设计 | `brainstorming` | 苏格拉底式问答，梳理需求 |
| 规划 | `writing-plans` | 2-5 分钟粒度任务计划 |
| 环境 | `using-git-worktrees` | 隔离工作空间 |
| 执行 | `subagent-driven-development` | 独立子 Agent + 双阶段审查 |
| 执行 | `executing-plans` | 批量执行，支持检查点 |
| 执行 | `dispatching-parallel-agents` | 并行调度子 Agent |
| 质量 | `test-driven-development` | RED-GREEN-REFACTOR |
| 质量 | `requesting-code-review` | 规格+代码双维度审查 |
| 质量 | `receiving-code-review` | 处理审查反馈 |
| 调试 | `systematic-debugging` | 4 阶段根因分析 |
| 调试 | `verification-before-completion` | 无证据不完成 |
| 交付 | `finishing-a-development-branch` | 4 种分支收尾选项 |
| 元技能 | `writing-skills` | TDD 方式编写 Skill |
| 元技能 | `using-superpowers` | 1% 规则自动触发约束 |

### 推荐安装组合

**最小组合（~500 tokens）：**
```
/plugin install document-skills@anthropic-agent-skills
npx skills add OthmanAdi/planning-with-files -g
```

**标准开发组合（~1,200 tokens）：**
```
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
npx skills add OthmanAdi/planning-with-files -g
npx skills add obra/superpowers -g
```

### 避坑

- 简单任务（写正则、加日志）不要用 Superpowers，会被 brainstorming 拦截浪费 token
- 大功能用全套流程，小修小补用原生 Claude Code

---

## 当前配置 (2026-06-14)

### Superpowers 配置
- ✅ **brainstorming** — 默认启用（唯一启用的子技能）
- ✅ **using-superpowers** — 元技能，保持启用
- ❌ 其余 12 个子技能已禁用（SKILL.md → SKILL.md.disabled）
  - 需要时手动恢复：重命名 `SKILL.md.disabled` → `SKILL.md`
  - 路径：`~/.claude/plugins/superpowers/skills/<skill-name>/`

### gstack
- ✅ 已安装（Garry Tan 的 70+ 技能套件）
- 路径：`~/.claude/skills/gstack/`
- 安装方式：`git clone https://github.com/garrytan/gstack.git`

### 其他已安装 Skills
通过 `~/.claude/skills/` 目录管理：

| Skill | 用途 |
|-------|------|
| deepseek-eyes | 视觉识别（百炼 qwen3-vl-plus） |
| amazon-analyse | 亚马逊竞品分析 |
| product-research | Sorftime 选品调研 |
| category-selection | 品类选择 |
| keyword-research | 关键词研究 |
| review-analysis | 评论分析 |
| serenity-stock | A股投研 |
| pdf / docx / pptx / xlsx | 文档处理 |
| video-dub | 视频配音 |
| wan-video | 视频生成 |
| ps-image | PS 图片处理 |
| code-review / simplify / security-review / review / verify | 代码质量 |
| deep-research | 深度调研 |
| loop | 循环任务 |
| mcp-builder | MCP 构建 |
| planning-with-files (7 variants) | Manus 风格文件规划（EN/AR/DE/ES/ZH/ZHT/PI） |
| compliance-* | 合规系列（10 个） |
| frontend-design | 前端设计（Anthropic 官方，540K installs） |
| ralph / prd | PRD 生成 + Ralph Loop JSON 转换 |
| gstack | 70+ 技能套件（Garry Tan） |
