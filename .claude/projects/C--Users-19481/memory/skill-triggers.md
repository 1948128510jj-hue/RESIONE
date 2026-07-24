---
name: skill-triggers
description: 用户常用话术→Skill/工具映射，帮助主动识别并调用
metadata: 
  node_type: memory
  type: feedback
  originSessionId: cf0972d5-25c0-4de9-aa25-9bba43868a98
---

## 话术 → Skill 映射表

当用户说以下话术时，我应该**主动**调用对应 Skill，不等用户指明：

### RESIONE 产品相关
| 用户话术 | 调用的工具 | 理由 |
|----------|-----------|------|
| "选哪个树脂" / "推荐" / "对比" / "哪个适合" | **deepseek-eyes** → 扫产品册 → 对比数据 | 产品册在桌面，评分表+TDS 全有 |
| "TDS" / "参数" / "指标" | **deepseek-eyes** 扫产品册 TDS 页 | 网页搜不到完整数据 |
| 多产品、多维度深度对比 | **deep-research** | 全系分析一次性拉全 |

### 同步相关
| 用户话术 | 执行操作 |
|----------|----------|
| "同步" / "推送" / "下班" | `bash ~/claude-config/push-sync.sh` |
| "git pull" / "拉取" | `cd ~/claude-config && git pull` |

### 开发信/外贸邮件
| 用户话术 | 调用的 Skill |
|----------|-------------|
| "开发信" / "外贸邮件" / "经销商邮件" / "写邮件给" / "跟进邮件" | **distributor-outreach** |

### 图片/视觉
| 用户话术 | 调用的 Skill |
|----------|-------------|
| "看图" / "图片" / "截图" / "这个是什么" + 图片 | **deepseek-eyes** |
| "扫出来" / "提取" / "识别" + PDF/图片 | **deepseek-eyes** |

### 设置/配置
| 用户话术 | 调用的 Skill |
|----------|-------------|
| "设置" / "配置" / "权限" / "允许" | **update-config** |
| "快捷键" / "按键" / "绑定" | **keybindings-help** |

### 网站/代码
| 用户话术 | 执行操作 |
|----------|----------|
| "网站文件" / "www.resione" | 提醒用户网站文件在另一台电脑，需 git 推送 |

---

**Why:** 用户明确指出我应该"一次性准确"，主动调用对的 Skill 而不是绕弯路。他不想每次都手动指定用哪个工具。

**How to apply:** 听到产品选材 → 立刻列产品册路径 + 上 EYE。听到同步 → 直接跑 push-sync.sh。不等用户说"你用 XX skill"。
