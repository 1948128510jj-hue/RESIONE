---
name: cost-saving-research-module
description: "Manual background check method — 0.12 RMB vs 5.70 RMB workflow, no adversarial verification, bilingual output"
metadata: 
  node_type: memory
  type: reference
  date: 2026-06-24
  source: "Used for LaonMedi background check, derived from comparing Eon Dental deep-research (146万 token) vs manual (2.5万 token)"
  originSessionId: 0125bfc8-6101-4518-9f59-b74a93c75afb
---

## Cost-Saving Background Check Module

### When to Use
- Prospect/vendor/partner background checks
- Any research where "directionally correct" is sufficient (not legal/financial due diligence)
- User explicitly asks to save tokens

### The Method (4 Steps, No Workflow)

```
Step 1: 2-3 parallel WebSearch calls
  → One in English (company name + industry keywords)
  → One in Chinese (company name + 供应链/融资/负面)
  → One specific angle (partnerships, product, funding)

Step 2: 1 WebFetch on the company's own website
  → Read About Us / Product pages directly

Step 3: 1 targeted negative search
  → "[company name] complaint review lawsuit"

Step 4: Manual synthesis into 6-section report
  → See template below
```

### The 6-Section Template (Bilingual CN/EN)

```
1. Company Profile 公司档案 (table: name, founded, HQ, CEO, funding, IP)
2. Core Product 核心产品 (what they sell, key features)
3. Key Partnerships 关键合作 (who they work with, strategic meaning)
4. Business Model 商业模式 (how they make money, competitors)
5. Negative/Risk 负面与风险 (complaints, risks, red flags)
6. Relevance to RESIONE 与RESIONE的关系 (threat, opportunity, action)
```

### Cost Comparison

| | Deep-Research Workflow | Manual Module |
|------|:--:|:--:|
| Token | 1,460,000 | ~25,000 |
| Cost (DeepSeek V4 Pro) | 5.70 RMB | **0.12 RMB** |
| Time | 7 min | 30 sec |
| Verification | 3-vote adversarial | None (source diversity instead) |
| Confidence | High | Medium (good enough for outreach) |

### Key Principle
Source diversity replaces adversarial verification. 5 different sources saying similar things = reasonable confidence without the token burn.

### Anti-Patterns
- Don't use deep-research workflow unless the user explicitly asks for "exhaustive" or "legal-grade" verification
- Don't verify claims unless the finding is surprising or mission-critical
- Don't fetch the same page twice
- One round of searches, write the report. Don't iterate.

Related: [[outreach-pain-point-module]] [[foreign-trade-outreach-framework]] [[resione-product-database]]
