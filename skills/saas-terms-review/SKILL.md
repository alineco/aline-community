---
name: saas-terms-review
description: "Reviews a SaaS provider's terms of service for problem provisions, including AI training on your data, liability and termination. Use before your company signs up for a SaaS product on click-through terms."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "SaaS Terms Review"
  author: Aline
  category: "Privacy and vendors"
  version: "1.0.0"
---

# SaaS Terms Review

Please review the terms of service for **[ATTACH TERMS OF SERVICE]** and identify any problematic provisions.

**Service name**: **[Name of SaaS product]**

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach the terms, and submit.*

---

## Your Information

### Our Context
- **We are**: **[Company Name]**
- **We will use this for**: **[Purpose/use case]**
- **Data we'll provide**: **[Type of data - e.g., customer info, employee data, business documents]**

### Key Concerns (Uncheck categories that do not apply)
- [x] **AI/ML data usage** (Can our data train their models?)
- [x] **Data ownership & exit** (Can we get our data back? Port to another service?)
- [x] **Privacy & security** (GDPR, CCPA compliance, security standards)
- [x] **Pricing & renewals** (Auto-renewal, price increases, refunds)
- [x] **Service levels** (Uptime guarantees, support, SLAs)
- [x] **Liability** (Are they adequately liable for failures or breaches?)
- [ ] **Other**: **[Specify]**

### Compliance Needs (Optional)
- **We must comply with**: **[e.g., HIPAA, SOC 2, GDPR, industry requirements]**

---

## What You'll Receive

A practical SaaS terms analysis including:

1. **Service Overview** (2-3 sentences): What it does, data involved, overall risk
2. **AI & Data Usage Assessment** (Critical): How our data may be used, especially for AI training
3. **Key Risk Areas**: Analysis of selected concern areas with risk levels
4. **Top 5 Issues**: Most concerning terms with recommendations
5. **Final Recommendation**: Proceed / Proceed with caution / Do not proceed

---

## Analysis Instructions

**Provide a focused SaaS terms review following these guidelines:**

### 1. Service Overview
Briefly summarize:
- What does this service do?
- What data will we provide to them?
- Overall risk assessment: Low/Medium/High (with one-sentence rationale)

### 2. AI & Data Usage Analysis (CRITICAL SECTION)
This is the most important section for modern SaaS products.

**Analyze how our data may be used:**

| Question | What Terms Say | Risk Level |
|----------|---------------|------------|
| Does service use AI/ML? | [Yes/No/Unclear] | |
| Can our data train AI models? | [Yes/No/Unclear - quote terms] | 🟢🟡🔴 |
| Can we opt out of AI training? | [Yes/No/Unclear] | 🟢🟡🔴 |
| Do they use third-party AI services? | [Which ones?] | 🟢🟡🔴 |
| Are AI outputs owned by us? | [Yes/No/Unclear] | 🟢🟡🔴 |

**AI/ML Risk Assessment:**
- 🟢 **Acceptable** — Clear opt-out, no training on customer data, or adequate anonymization
- 🟡 **Needs Clarification** — Terms are ambiguous, ask vendor for clarification
- 🔴 **Unacceptable** — Customer data used for training without clear opt-out

Provide 2-3 sentence analysis of AI/data usage risk.

### 3. Key Risk Areas Analysis
For **each selected concern area**, analyze relevant terms:

**Data Rights & Ownership** (if selected):
- Who owns our data?
- License granted to vendor (what can they do with it?)
- Aggregated/anonymized data rights
- Data portability on exit
- Data deletion on termination
- Risk Level: 🟢🟡🔴 with brief explanation

**Privacy & Security** (if selected):
- Security certifications (SOC 2, ISO 27001)
- Encryption (at rest and in transit)
- Breach notification timeframe
- DPA available? GDPR/CCPA compliance?
- Does this meet our compliance needs?
- Risk Level: 🟢🟡🔴 with brief explanation

**Pricing & Financial Terms** (if selected):
- Pricing model and payment terms
- Auto-renewal? (notice period to cancel?)
- Price increase provisions (how much, how often?)
- Refund policy
- Risk Level: 🟢🟡🔴 with brief explanation

**Service Levels** (if selected):
- Uptime commitment (what %)
- SLA credits (what compensation for downtime?)
- Support levels included
- Maintenance windows
- Risk Level: 🟢🟡🔴 with brief explanation

**Termination & Exit** (if selected):
- Can we terminate for convenience? Notice period?
- Data retrieval period after termination
- Transition assistance provided?
- Penalties for early termination?
- Risk Level: 🟢🟡🔴 with brief explanation

**Liability** (if selected):
- Limitation of liability (cap amount)
- Exclusions/carve-outs
- Indemnification (do they indemnify for breaches?)
- Warranty disclaimers
- Risk Level: 🟢🟡🔴 with brief explanation

For each risk area, cite specific problematic language if found.

### 4. Top 5 Concerning Provisions
Highlight most problematic terms across all areas:

| # | Provision | Exact Quote | Why It's Risky | Risk Level |
|---|-----------|-------------|----------------|------------|
| 1 | [Provision] | [Quote] | [Impact] | 🔴🟡 |
| 2 | [Provision] | [Quote] | [Impact] | 🔴🟡 |
| 3 | [Provision] | [Quote] | [Impact] | 🔴🟡 |
| 4 | [Provision] | [Quote] | [Impact] | 🔴🟡 |
| 5 | [Provision] | [Quote] | [Impact] | 🔴🟡 |

Focus on material issues, not minor points.

### 5. Missing Provisions
Identify important protections that are absent:

- [Missing provision] - Why it matters
- [Missing provision] - Why it matters
- [Missing provision] - Why it matters

### 6. Questions for Vendor
Before proceeding, ask vendor to clarify:

1. [Specific question about ambiguous term]
2. [Question about data usage]
3. [Question about security/compliance]
4. [Question about service levels]

Only include questions about genuine ambiguities or missing info.

### 7. Final Recommendation
**Recommendation:**
- ✅ **Proceed** — Terms are acceptable for intended use
- 🟡 **Proceed with Caution** — Acceptable with specific conditions or clarifications
- 🔴 **Do Not Proceed** — Terms are unacceptable as written

**Key Concerns** (top 2-3):
1. [Primary concern]
2. [Secondary concern]
3. [Third concern]

**Required Before Signing** (if proceeding with caution):
- Obtain DPA
- Confirm AI training opt-out
- Negotiate specific terms: [list]
- Security documentation review
- [Other requirements]

Include 2-3 sentence rationale for recommendation.

**Output Guidelines:**
- Lead with AI/data usage analysis (most critical for modern SaaS)
- Focus on selected concern areas, not exhaustive review
- Be specific about what's risky and why
- Cite exact problematic language
- Only include risk areas that actually have issues
- If area has no concerns, state "Standard terms, no issues" in one line
- Connect risks to business impact
- Make recommendation clear and actionable
