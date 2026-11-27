---
name: privacy-policy-review
description: "Reviews a vendor's privacy policy for privacy risk, with special attention to how your data may be used for AI and machine learning. Use when evaluating a new tool or vendor that will handle your data."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "Privacy Policy Review"
  author: Aline
  category: "Privacy and vendors"
  version: "1.0.0"
---

# Privacy Policy Review

Please review the privacy policy for **[ATTACH PRIVACY POLICY]** and assess privacy risks.

**Vendor/Service name**: **[Company/Service Name]**

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach the privacy policy, and submit.*

---

## Your Information

### Context
- **We are evaluating**: **[Service/vendor name]**
- **They will access**: **[Type of data - e.g., customer data, employee info, business documents]**
- **Our company**: **[Your company name]**
- **Our industry**: **[Industry]**

### Key Concerns (Uncheck categories that do not apply)
- [x] **AI/ML training** (Is our data used to train their models?)
- [x] **Data sharing** (Who do they share data with?)
- [x] **Data retention** (How long is data kept?)
- [x] **International transfers** (Is data transferred outside our jurisdiction?)
- [x] **User rights** (Can we access, delete, export data?)
- [ ] **Other**: **[Specify]**

### Compliance Requirements (Optional)
- **We must comply with**: **[e.g., GDPR, CCPA, HIPAA]**

---

## What You'll Receive

A practical privacy policy analysis including:

1. **Vendor Overview** (2-3 sentences): What they do, data they access, overall privacy risk
2. **AI & Data Usage** (Critical): How our data may be used, especially for AI/ML
3. **Key Privacy Issues**: Analysis of selected concern areas
4. **Red Flags**: Most concerning provisions
5. **Final Assessment**: Acceptable / Conditionally acceptable / Not acceptable

---

## Analysis Instructions

**Provide a focused privacy policy review following these guidelines:**

### 1. Vendor Overview
Based on privacy policy, briefly explain:
- What does this vendor do? (services/products)
- What data will they access or process if we use their services?
- Overall privacy risk: Low/Medium/High (with brief rationale)

### 2. AI & Data Usage (CRITICAL)
This is the most important section for modern privacy policies.

**How our data may be used:**

| Question | What Policy Says | Risk Level |
|----------|-----------------|------------|
| Does vendor use AI/ML? | [Yes/No/Unclear] | |
| Can our data train AI models? | [Yes/No/Unclear - quote policy] | 🟢🟡🔴 |
| Can we opt out of AI training? | [Yes/No/Unclear] | 🟢🟡🔴 |
| Is training data anonymized first? | [Yes/No/Unclear] | 🟢🟡🔴 |
| Do they use third-party AI services? | [Which services?] | 🟢🟡🔴 |
| Do they create derivative datasets? | [Yes/No/Unclear] | 🟢🟡🔴 |

**AI/ML Risk Assessment:**
- 🟢 **Acceptable** — Clear opt-out, no training on identifiable customer data, or adequate anonymization
- 🟡 **Needs Clarification** — Ambiguous terms, request clarification from vendor
- 🔴 **Unacceptable** — Customer data used for training without clear opt-out or protection

Provide 2-3 sentence assessment of AI/data usage risk.

### 3. Key Privacy Issues Analysis
For **each selected concern area**, analyze:

**Data Sharing** (if selected):
- Who do they share data with? (Third parties, affiliates, sub-processors)
- Under what circumstances?
- Do they sell personal information? (CCPA consideration)
- Can data be used for advertising/marketing?
- Risk Level: 🟢🟡🔴 with brief explanation

**Data Retention** (if selected):
- How long is data kept?
- Deletion procedures (can we request deletion?)
- Retention exceptions (legal/compliance holds)
- What happens after account termination?
- Risk Level: 🟢🟡🔴 with brief explanation

**International Transfers** (if selected):
- Is data transferred outside EEA/origin country?
- What safeguards exist? (SCCs, BCRs, adequacy decisions)
- Where is data processed/stored?
- Transfer impact assessment done?
- Risk Level: 🟢🟡🔴 with brief explanation

**User Rights** (if selected):
- Access: Can we access our data? ✅❌
- Correction: Can we correct data? ✅❌
- Deletion: Can we delete data? ✅❌
- Portability: Can we export data? ✅❌
- Opt-out: Can we opt out of specific uses? ✅❌
- How easy is it to exercise these rights?
- Risk Level: 🟢🟡🔴 with brief explanation

**Security & Compliance** (if selected):
- Security measures described (encryption, access controls, monitoring)
- Breach notification procedures (timeframe?)
- GDPR compliance stated?
- CCPA compliance stated?
- Security certifications mentioned? (SOC 2, ISO 27001)
- Risk Level: 🟢🟡🔴 with brief explanation

Cite specific concerning language if found.

### 4. Red Flags Summary
List 3-5 most concerning provisions:

| # | Provision | Exact Quote | Why It's Concerning | Risk Level |
|---|-----------|-------------|---------------------|------------|
| 1 | [Issue] | [Quote] | [Impact] | 🔴🟡 |
| 2 | [Issue] | [Quote] | [Impact] | 🔴🟡 |
| 3 | [Issue] | [Quote] | [Impact] | 🔴🟡 |

Focus on material privacy risks, not theoretical concerns.

### 5. Missing or Inadequate Protections
Identify important privacy protections that are weak or absent:

- [Missing/inadequate protection] - Why it matters
- [Missing/inadequate protection] - Why it matters
- [Missing/inadequate protection] - Why it matters

### 6. Questions for Vendor
Before proceeding, clarify these points:

1. [Specific question about data usage]
2. [Question about AI training opt-out]
3. [Question about data sharing/sub-processors]
4. [Question about compliance or security]

Only include questions about genuine gaps or ambiguities.

### 7. Final Assessment
**Privacy Assessment:**
- ✅ **Acceptable** — Privacy practices meet our standards
- 🟡 **Conditionally Acceptable** — Acceptable with additional contractual protections
- 🔴 **Not Acceptable** — Privacy practices don't meet our requirements

**Key Concerns** (top 2-3):
1. [Primary concern]
2. [Secondary concern]
3. [Third concern if applicable]

**Required Contractual Protections** (if conditionally acceptable):
- Obtain separate DPA with specific terms
- Confirm AI training opt-out in writing
- Get list of sub-processors and approval rights
- Require specific security measures in contract
- [Other requirements]

Include 2-3 sentence rationale for assessment.

**Output Guidelines:**
- Lead with AI/data usage (most critical for modern services)
- Focus on selected concern areas, not every policy section
- Be specific about what's problematic and why
- Quote exact concerning language
- Only expand on areas with actual issues
- If area is acceptable, state "Standard practices, no concerns" in one line
- Connect privacy risks to business/compliance impact
- Distinguish between vendor's rights and actual privacy risk
- Consider whether contractual protections can address gaps
- Make recommendation clear and actionable
