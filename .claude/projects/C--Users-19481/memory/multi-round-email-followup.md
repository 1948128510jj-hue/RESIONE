---
name: multi-round-email-followup
description: Multi-round B2B email outreach methodology — timing, templates, multi-channel strategy, and rules for Jenson (RESIONE dental resin sales)
metadata:
  type: project
---

# Multi-Round Email Outreach Playbook

**Why:** Jenson is doing B2B dental resin export sales via LinkedIn InMail, WhatsApp, and email. Most replies (42%) come from follow-ups #2-5, not the first email. A structured 4-round sequence at the right cadence 3x reply rates vs single-send.

**How to apply:** Every new prospect enters a 4-round sequence. Never stop at one email. Use the templates below. Track in CRM Excel.

---

## Core Data Points

- 1st email = ~58% of all replies. Rounds 2-5 = remaining 42%
- 4-7 emails = 3x response rate vs 1-3 emails
- Breakup email (round 4) = highest single reply rate: 30-40%
- 80% of B2B deals require 5+ touches
- 44% of salespeople give up after 1 email — following up puts you in the top 7%

---

## Standard 4-Round Sequence (B2B Manufacturing/Export)

| Round | Day | Gap | Strategy | CTA |
|---|---|---|---|---|
| Email 1 | Day 1 | - | Value proposition. 50-80 words. Specific to their company/role. | "Worth a conversation?" |
| Email 2 | Day 4 | 3 days | NEW angle. If Email 1 was about accuracy, Email 2 is about cost or batch consistency. 30-50 words. | "Is now a good time?" |
| Email 3 | Day 10 | 6 days | Concrete value: TDS, case study, comparison data, shipment photo. 50-80 words. | "Want me to send details?" |
| Email 4 | Day 20 | 10 days | Breakup. Respectful close. Leave door open. 30-40 words. | "Reply anytime if priorities change." |

**Spacing rule:** Start tight, then widen. 3 days -> 6 days -> 10 days. Never consecutive days.

---

## Content Rules (NEVER break these)

1. Every email MUST bring new value — rotate: specs -> case -> comparison -> industry insight
2. Never "just checking in" or "did you receive my last email"
3. Never fake Re:/Fwd: — destroys trust permanently
4. Each email shorter than the last
5. One CTA per email, soft asks > hard asks ("Worth a look?" > "Can we meet Tuesday 2pm?")
6. Plain text, under 80 words, mobile-friendly
7. Same email thread (preserves context)
8. After 4 rounds no reply = suppress 60-90 days, then re-activate with fresh angle

---

## Multi-Channel Layering (3-5x better than email-only)

| Channel | Touches per sequence | Best use |
|---|---|---|
| LinkedIn InMail | 2-3 | Round 1 + Round 3 |
| WhatsApp | 1-2 | After sample shipped + 3 days after delivery |
| Email | 3-5 | Primary follow-ups + document sharing |
| LinkedIn engagement | Ongoing | Comment on their posts, DON'T sell |

**Middle East special rules:**
- WhatsApp = #1 business channel
- Work week: Sunday-Thursday. Weekend: Friday-Saturday
- Ramadan: morning only, low productivity afternoons
- Tone can be less formal on WhatsApp

---

## Send Timing

- Best days: Tuesday-Thursday (prospect's local timezone)
- Best times: 7-9 AM or 4-6 PM local
- Avoid: Monday (inbox overload), Friday (weekend mindset)
- Middle East: Sun-Thu, avoid Thu afternoon + all Friday

---

## GitHub Tools (for future scaling)

| Tool | Best for | Tech needed |
|---|---|---|
| free_outbound_agent | AI-written multi-step sequences + LinkedIn | Python |
| Coldr | Dead-simple CSV-based sending | Node.js (zero config) |
| Linki | LinkedIn + Email in one campaign, Web UI | Docker |
| Warmbly | Full CRM + warmup + sequences | Docker + Postgres |

**Current recommendation:** Manual with Excel CRM. Switch to tools when >50 active prospects.

---

## RESIONE-Specific Templates

All 4 rounds written and stored in `Desktop/多轮邮件开发手册.pdf`.

### Round 1 (Day 1) — Value Prop
Subject: `D01S dental model resin — scan-ready, 92 Shore D`
Body: Introduce self, D01S key specs (accuracy, scan-ready, 50+ countries), soft CTA.

### Round 2 (Day 4) — Different Angle
Subject: `A different angle on dental model resin`
Body: New pain point (batch consistency instead of accuracy), lower the psychological barrier ("if now is not a good time, just tell me").

### Round 3 (Day 10) — Concrete Value
Subject: `D01S vs standard model resin — spec comparison`
Body: Hard numbers (flexural 39 vs 25 MPa, 92D vs 85D), offer TDS or sample.

### Round 4 (Day 20) — Breakup
Subject: `Closing the loop — D01S`
Body: Respectful close. "I'll close this out on my end. If priorities change, reply anytime."

---

## Current Active Sequences (as of 2026-07-09)

| Prospect | Round 1 sent | Round 2 due | Round 3 due | Round 4 due |
|---|---|---|---|---|
| Macee (Modern Dental) | Jul 8 | Jul 13 | Jul 20 | Jul 28 |
| Harsh (FiLAMONT) | Jul 8 | Jul 10 | Jul 17 | Jul 28 |
| Richie (Modern Dental) | Jul 8 | Do NOT follow separately | - | - |
| Ronald Chan | Jul 8 | Jul 15 | Jul 22 | Jul 28 |
| Sandeep (CROWNTEC) | Jul 8 | Jul 15 | Jul 22 | Jul 28 |
| Muna | Jul 8 | Jul 15 | Jul 22 | Jul 28 |

**Rule for Modern Dental:** Macee and Richie are same company. Only follow up with Macee. Do NOT chase both.

---

## Key Sources

- Woodpecker: follow-up reply rate data
- Apollo.io: multi-touch sequence benchmarks
- Lemlist/Instantly: 2025-2026 cold email statistics
- RevenueGrid/Mixmax: B2B sequence templates
- GitHub: free_outbound_agent, linki, warmbly, coldr
- Chinese foreign trade practice: 外贸多轮跟进策略 (Geeksend, 探迹)
