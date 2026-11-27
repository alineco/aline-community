---
name: nda-review
description: "Reviews an NDA against the concerns you pick and says whether the terms are acceptable, with red flags and suggested changes. Use for an incoming mutual or one-way NDA."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "NDA Review"
  author: Aline
  category: "Contract review"
  version: "1.0.0"
---

# NDA Review

Please review **[ATTACH NDA]** and assess whether the terms are acceptable.

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach your NDA, and submit.*

---

## Your Information

### NDA Type
- **Is this**:
  - [ ] Mutual NDA (both parties share confidential information)
  - [ ] One-way NDA (only one party discloses)
  - [ ] Unsure

### Key Concerns (Uncheck categories that do not apply)
- [x] **Definition scope** (Is confidential information too broadly defined?)
- [x] **Duration** (How long do obligations last?)
- [x] **Permitted uses** (Can we use info for evaluation/negotiation?)
- [x] **Standard exceptions** (Publicly available, independently developed, etc.)
- [x] **Unusual terms** (IP transfer, non-compete, non-solicitation)
- [ ] **Other**: **[Specify]**

### Additional Context (Optional)
- **Purpose**: **[Why are we signing? e.g., evaluating partnership, M&A talks]**
- **Governing law preference**: **[State/Country]**

---

## What You'll Receive

A focused NDA analysis including:

1. **Executive Summary** (2-3 sentences): Parties, mutual/one-way, purpose, overall risk
2. **Key Provisions Analysis**: Assessment of critical terms with risk levels
3. **Red Flag Provisions**: Atypical or problematic terms that require attention
4. **Recommended Changes**: Specific amendments needed
5. **Final Recommendation**: Sign as-is / Sign with changes / Do not sign

---

## Analysis Instructions

**Provide a concise NDA review following these guidelines:**

### 1. Executive Summary
Identify: parties, mutual or one-way, purpose, effective date, and overall risk assessment (Low/Medium/High).

### 2. Key Provisions Analysis
Analyze these provisions **only if relevant to selected concerns** in table format:

| Provision | What NDA Says | Risk Level | Analysis & Recommendation |
|-----------|---------------|------------|---------------------------|
| Definition of Confidential Information | [Summary] | 🟢🟡🔴 | [1-2 sentences] |
| Standard Exceptions | [Present/Missing] | 🟢🟡🔴 | [1-2 sentences] |
| Purpose Limitations | [Summary] | 🟢🟡🔴 | [1-2 sentences] |
| Permitted Disclosures | [Summary] | 🟢🟡🔴 | [1-2 sentences] |
| Duration of Obligations | [Term] | 🟢🟡🔴 | [1-2 sentences] |
| Return/Destruction | [Summary] | 🟢🟡🔴 | [1-2 sentences] |
| Remedies | [Summary] | 🟢🟡🔴 | [1-2 sentences] |

Only include provisions that are relevant to selected concerns or have issues.

### 3. Red Flag Provisions
**Immediately flag if ANY of these are present** in table format:

| Red Flag | Contract Quote | Why It's Concerning | Recommended Action |
|----------|----------------|---------------------|-------------------|
| [Issue] | [Exact language] | [Explanation] | [Delete/Revise/Negotiate] |

**Red flags to check for:**
- ❌ IP transfer or assignment (NDAs should NOT transfer IP)
- ❌ Indemnification obligations (unusual for standard NDA)
- ❌ Non-solicitation or non-compete clauses
- ❌ Residual knowledge clauses (can undermine protections)
- ❌ Broad audit rights (excessive for confidentiality agreement)
- ❌ Unlimited liability or attorney's fees provisions
- ❌ Overly long duration (>5 years for non-trade secrets)

### 4. Recommended Changes
If you identified 🔴 High Risk or red flag items, provide:
1. Priority ranking of top 3 issues
2. Specific redline suggestions or negotiation points

### 5. Final Recommendation
- ✅ **Sign as-is** — Standard terms, ready to execute
- 🟡 **Sign with minor changes** — Acceptable with noted modifications
- 🔴 **Do not sign without significant changes** — Material issues must be addressed

Include brief explanation (2-3 sentences).

**Output Guidelines:**
- Focus on non-standard or problematic terms
- Standard/favorable terms can be summarized quickly
- Be specific about what language to change
- Prioritize red flags over minor improvements
- Keep analysis concise (1-2 sentences per item)
