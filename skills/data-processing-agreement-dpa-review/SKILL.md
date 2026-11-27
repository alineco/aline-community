---
name: data-processing-agreement-dpa-review
description: "Checks a data processing agreement against the GDPR Article 28 requirements, scores it, and suggests language for each gap. Use when reviewing a vendor DPA or a DPA a customer asks you to sign."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "Data Processing Agreement (DPA) Review"
  author: Aline
  category: "Privacy and vendors"
  version: "1.0.0"
---

# Data Processing Agreement (DPA) Review

Please review **[ATTACH DPA]** for GDPR Article 28 compliance and data protection best practices.

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach your DPA, and submit.*

---

## Your Information

### DPA Context
- **Our role**: 
  - [ ] Controller (we determine processing purposes)
  - [ ] Processor (we process on behalf of another)

- **Regulation focus**:
  - [ ] GDPR (EU data protection)
  - [ ] CCPA (California privacy)
  - [ ] Both
  - [ ] Other: **[Specify]**

### Key Concerns (Uncheck categories that do not apply)
- [x] **Sub-processor controls** (Do we approve sub-processors?)
- [x] **International data transfers** (Is data leaving EEA? Are SCCs attached?)
- [x] **Security measures** (Are technical safeguards adequate?)
- [x] **Audit rights** (Can we audit compliance?)
- [x] **Breach notification** (How quickly must we be notified?)
- [x] **Data deletion** (What happens to data after termination?)
- [ ] **Other**: **[Specify]**

### Additional Context (Optional)
- **Data sensitivity level**: **[e.g., PII, sensitive personal data, health data]**
- **Specific compliance requirements**: **[e.g., must meet GDPR Article 28]**

---

## What You'll Receive

A compliance-focused DPA analysis including:

1. **DPA Overview** (2-3 sentences): Parties, services covered, effective date
2. **GDPR Article 28 Compliance Score**: X/20 requirements satisfied
3. **Critical Gaps**: Missing or inadequate provisions with suggested language
4. **Key Risk Areas**: Sub-processors, international transfers, security measures
5. **Final Assessment**: Compliant / Partially Compliant / Non-Compliant with action items

---

## Analysis Instructions

**Provide a focused DPA compliance review following these guidelines:**

### 1. DPA Overview
Briefly identify: controller and processor, services covered, effective date, and overall compliance status.

### 2. GDPR Article 28 Compliance Checklist
Review DPA against these **essential** requirements in table format:

| # | Requirement | Status | Notes/Gaps |
|---|-------------|--------|------------|
| 1 | Type of personal data and data subjects specified | ✅/❌ | |
| 2 | Duration and nature/purpose of processing defined | ✅/❌ | |
| 3 | Processor acts only on documented instructions | ✅/❌ | |
| 4 | Confidentiality obligations for personnel | ✅/❌ | |
| 5 | Appropriate technical and organizational security measures | ✅/❌ | |
| 6 | Sub-processor requirements (consent, contracts, liability) | ✅/❌ | |
| 7 | Assistance with data subject rights (DSRs) | ✅/❌ | |
| 8 | Security and breach notification assistance | ✅/❌ | |
| 9 | Data deletion or return at contract end | ✅/❌ | |
| 10 | Audit rights and compliance demonstration | ✅/❌ | |
| 11 | Notification if instructions infringe law | ✅/❌ | |
| 12 | Records of processing maintained | ✅/❌ | |

**Compliance Score**: X/12 satisfied

For each ❌ Missing requirement, explain the gap and provide suggested language.

### 3. Additional Assessment Areas
**Only analyze if relevant to selected concerns:**

**Sub-Processors:**
- Are current sub-processors listed?
- Prior authorization required (general or specific)?
- Notification period for changes? Can controller object?

**International Transfers:**
- Does data transfer outside EEA?
- Transfer mechanism (SCCs/BCRs/Adequacy)? Are SCCs attached?
- Supplementary measures described?

**Security Measures:**
- Encryption (at rest and in transit)?
- Access controls and authentication?
- Incident response procedures?
- List specific gaps if inadequate

**Breach Notification:**
- Timeframe specified (e.g., 24-72 hours)?
- What information must be provided?

### 4. Critical Gaps Summary
List 3-5 most significant gaps or issues with:
- Priority level (Critical / High / Medium)
- What's missing or inadequate
- Suggested language to add

### 5. Final Assessment
**Compliance Status:**
- ✅ **GDPR Compliant** — Meets all Article 28 requirements
- 🟡 **Partially Compliant** — Minor gaps should be addressed
- 🔴 **Non-Compliant** — Significant gaps must be remediated

**Recommendation:**
- Accept DPA as-is
- Request specific amendments (list top 3)
- Reject DPA and request new version

Include brief rationale (2-3 sentences).

**Output Guidelines:**
- Focus on compliance gaps, not theoretical analysis
- Be specific about what's missing and what language to add
- Prioritize critical requirements over nice-to-haves
- Keep explanations concise (1-2 sentences)
- Only expand on areas relevant to selected concerns
