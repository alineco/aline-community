---
name: contract-risk-summary
description: "Scores the risks in a contract by category, with a heat map and mitigation steps for each risk. Use when you need a short risk picture of a contract for a business owner or an approver."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "Contract Risk Summary"
  author: Aline
  category: "Contract review"
  version: "1.0.0"
---

# Contract Risk Summary

Please assess the key risks in **[ATTACH CONTRACT]** and provide mitigation recommendations.

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach your contract, and submit.*

---

## Your Information

### Context
- **We are**: **[Company Name]**
- **Our role**:
  - [ ] Customer/Buyer
  - [ ] Vendor/Seller
  - [ ] Other: **[Specify]**

- **Contract value**: **[$ if known]**
- **Business purpose**: **[What are we trying to accomplish?]**

### Risk Focus Areas (Uncheck categories that do not apply)
- [x] **Financial risk** (Liability, indemnification, penalties)
- [x] **Performance risk** (Service levels, delivery obligations, warranties)
- [x] **Data & privacy risk** (Data breaches, GDPR/CCPA compliance)
- [x] **IP risk** (Ownership, licensing, infringement)
- [x] **Operational risk** (Termination difficulty, vendor lock-in)
- [x] **Compliance risk** (Regulatory, contractual, industry standards)
- [ ] **Other**: **[Specify]**

### Additional Context (Optional)
- **Risk tolerance**: **[e.g., conservative, moderate, aggressive]**
- **Specific concerns**: **[Any known deal-breakers or prior issues]**

---

## What You'll Receive

A focused risk assessment including:

1. **Executive Risk Summary** (3-4 sentences): Overall risk level, top risks, recommendation
2. **Risk Assessment by Category**: Detailed analysis of risks in selected focus areas
3. **Risk Heat Map**: Visual summary of risk levels across categories
4. **Top 5 Risk Mitigation Actions**: Specific steps to reduce exposure
5. **Go/No-Go Recommendation**: Proceed / Proceed with mitigations / Do not proceed

---

## Analysis Instructions

**Provide a concise, business-focused risk assessment following these guidelines:**

### 1. Executive Risk Summary
In 3-4 sentences, provide: overall risk level (Low/Medium/High), top 2-3 risks, potential impact on our business, and initial recommendation.

### 2. Risk Assessment by Selected Category

For **each selected risk focus area**, analyze:

**Financial Risk:**
- Liability exposure: cap amount, uncapped categories, aggregate exposure
- Indemnification obligations: what we must indemnify for, procedures, limitations
- Payment obligations: penalties, late fees, price increases
- Risk Level: 🟢🟡🔴 with brief explanation

**Performance Risk:**
- Service level commitments: SLAs, uptime guarantees, response times
- Delivery obligations: our responsibilities, penalties for non-performance
- Warranties: what's warranted vs. disclaimed
- Remedies if vendor/other party fails to perform
- Risk Level: 🟢🟡🔴 with brief explanation

**Data & Privacy Risk:**
- Data breaches: notification obligations, liability
- Privacy compliance: GDPR, CCPA, industry-specific regulations
- Data ownership and usage: AI training, third-party sharing
- Data protection measures: security requirements, DPA status
- Risk Level: 🟢🟡🔴 with brief explanation

**IP Risk:**
- IP ownership: who owns what we create or customize
- License restrictions: scope, limitations, perpetual vs. term-based
- IP indemnification: protection against infringement claims
- Background IP and derivatives
- Risk Level: 🟢🟡🔴 with brief explanation

**Operational Risk:**
- Termination difficulty: notice periods, penalties, locked-in terms
- Vendor dependencies: switching costs, data portability
- Assignment restrictions: can we transfer the contract?
- Business continuity: what happens if vendor fails or is acquired?
- Risk Level: 🟢🟡🔴 with brief explanation

**Compliance Risk:**
- Regulatory requirements: industry-specific obligations (HIPAA, SOX, etc.)
- Contractual compliance: can we meet our obligations?
- Insurance requirements: coverage types and amounts
- Audit and inspection rights
- Risk Level: 🟢🟡🔴 with brief explanation

For each risk, provide:
- Specific contract language creating the risk
- Potential business impact (quantify if possible)
- Likelihood of risk materializing (High/Medium/Low)

### 3. Risk Heat Map Summary
Create simple summary table:

| Risk Category | Risk Level | Key Concern |
|---------------|------------|-------------|
| Financial | 🟢🟡🔴 | [One sentence] |
| Performance | 🟢🟡🔴 | [One sentence] |
| Data & Privacy | 🟢🟡🔴 | [One sentence] |
| [etc.] | 🟢🟡🔴 | [One sentence] |

**Overall Deal Risk**: 🟢 Low | 🟡 Medium | 🔴 High

### 4. Top 5 Risk Mitigation Actions
Rank the most important actions to reduce risk:
1. **[Action]** - addresses **[specific risk]** - Priority: Critical/High/Medium
2. **[Action]** - addresses **[specific risk]** - Priority: Critical/High/Medium
3. Continue through top 5...

Be specific: "Add liability carve-out for data breaches" not "Improve liability terms"

### 5. Go/No-Go Recommendation
**Recommendation:**
- ✅ **Proceed** — Risks are acceptable with standard protections
- 🟡 **Proceed with Mitigations** — Acceptable if top 3-5 actions are implemented
- 🔴 **Do Not Proceed** — Risks are unacceptable even with mitigations

Include brief rationale (3-4 sentences) explaining the recommendation and any conditions.

**Output Guidelines:**
- Quantify risks where possible ($ exposure, time impact)
- Focus on material risks, not theoretical concerns
- Be specific about what creates risk and how to fix it
- Prioritize business impact over legal technicalities
- Only analyze selected focus areas in depth
- If a category has low risk, summarize in 1-2 sentences
- Connect risks to business outcomes, not just legal language
