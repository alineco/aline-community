---
name: multi-document-deal-analysis
description: "Reviews all the documents of a deal together, maps how they relate, and finds conflicts, gaps and inconsistent terms between them. Use for a transaction made of several agreements, such as an MSA with order forms and amendments."
license: Apache-2.0
disable-model-invocation: true
metadata:
  display-name: "Multi-Document Deal Analysis"
  author: Aline
  category: "Contract review"
  version: "1.0.0"
---

# Multi-Document Deal Analysis

Please analyze **[ATTACH ALL DEAL DOCUMENTS]** as a unified package and identify any inconsistencies or gaps.

## Instructions (delete before submit)

*Fill in all **[bracketed fields]**, check/uncheck boxes as needed, attach all deal documents, and submit.*

---

## Your Information

### Deal Overview
- **Transaction type**: **[e.g., SaaS purchase, M&A, vendor engagement]**
- **Our role**: 
  - [ ] Customer/Buyer
  - [ ] Vendor/Seller
  - [ ] Other: **[Specify]**

- **Total deal value**: **[$ if known]**

### Key Concerns (Uncheck categories that do not apply)
- [x] **Document consistency** (Do documents conflict?)
- [x] **Order of precedence** (Which document governs if conflict?)
- [x] **Financial exposure** (Total costs and liability)
- [x] **Missing documents** (Are all expected docs included?)
- [x] **Term & termination** (Do MSA and SOW terms align?)
- [x] **Data & IP rights** (Consistent across documents?)
- [ ] **Other**: **[Specify]**

### Documents Included
List the documents you're attaching:
1. **[Document name]** - **[e.g., Master Services Agreement]**
2. **[Document name]** - **[e.g., SOW 1]**
3. **[Document name]** - **[e.g., Data Processing Agreement]**
4. **[Additional documents as needed]**

---

## What You'll Receive

A comprehensive deal package analysis including:

1. **Transaction Summary** (2-3 sentences): Parties, deal type, value, structure
2. **Document Relationship Map**: How documents connect and order of precedence
3. **Consistency Analysis**: Conflicts between documents and which governs
4. **Consolidated Terms**: Financial, liability, IP/data terms across all documents
5. **Gap Analysis**: Missing documents or provisions
6. **Critical Issues**: Top 3-5 risks across entire deal with recommendations
7. **Final Assessment**: Proceed / Proceed with changes / Do not proceed

---

## Analysis Instructions

**Provide a unified deal analysis reviewing all documents as one package:**

### 1. Transaction Summary
Briefly explain: transaction type, parties, our role, total deal value, term, and key business purpose.

### 2. Document Relationship & Hierarchy
- List all documents with their primary purpose
- Confirm order of precedence (which document governs if conflict?)
- Flag if order of precedence is NOT specified (this is an issue)
- Show how documents connect (e.g., MSA → SOW 1 → SOW 1 Exhibit; DPA attached to MSA)

### 3. Consistency Analysis
**Only analyze if document consistency is a selected concern:**

**Conflicting Provisions:**
If documents conflict, use table format:

| Issue | Document 1 Says | Document 2 Says | Which Governs | Recommended Fix |
|-------|-----------------|-----------------|---------------|-----------------|
| [Issue] | [Summary] | [Summary] | [Per precedence] | [Action] |

**Definition Consistency:**
If key terms are defined differently across documents:

| Term | Document 1 Definition | Document 2 Definition | Consistent? |
|------|----------------------|----------------------|-------------|
| [Term] | [Definition] | [Definition] | ✅/❌ |

### 4. Consolidated Terms Summary
Analyze terms **across all documents** for selected concern areas:

**Financial Terms:**
- Total deal value breakdown by document
- Pricing (by SOW/component)
- Payment terms
- Price increases
- Expenses and taxes

**Term & Termination:**
- Master term vs. SOW terms
- Renewal provisions
- Termination for convenience/breach
- Effect of MSA termination on SOWs

**Liability Provisions:**
- Liability cap (per document and aggregate)
- Uncapped categories
- Indemnification scope
- Insurance requirements

**IP & Data:**
- Data ownership across documents
- Deliverable ownership
- License grants
- Confidentiality and DPA status

### 5. Gap Analysis
**If missing documents is a selected concern:**

- Are expected documents present or missing? (e.g., DPA, Security Addendum, SLA, Insurance Certificates, BAA)
- Are there missing provisions that should be in one of the documents?
- Impact of each gap (Critical / High / Medium / Low)

### 6. Critical Issues Across Documents
List 3-5 most significant issues found across entire deal package:
- Issue description
- Which documents affected
- Risk level (🔴 Critical | 🟠 High | 🟡 Medium)
- Recommended action

### 7. Financial Summary
**If financial exposure is a selected concern:**

**Total Commitment:**
- Fixed fees, variable/usage fees, implementation/setup costs
- Annual recurring revenue
- Total Year 1 and Total Contract Value

**Maximum Exposure:**
- Liability cap, indemnification exposure, penalties
- Total maximum exposure

### 8. Deal Priorities
List top 3-5 negotiation priorities across all documents:
- Priority ranking
- Issue and affected document(s)
- Must-have or nice-to-have?
- Recommendation

### 9. Final Recommendation
**Overall Deal Assessment:**
- ✅ **Proceed** — Documents are consistent and acceptable
- 🟡 **Proceed with Changes** — Address listed items before signing
- 🔴 **Do Not Proceed** — Significant issues require resolution

Include brief summary (3-4 sentences) of recommendation and key next steps.

**Output Guidelines:**
- Focus on cross-document issues and inconsistencies
- Prioritize critical risks over minor discrepancies
- Be specific about which documents contain which issues
- Consolidate similar terms from multiple documents
- Only expand on areas relevant to selected concerns
- If documents are consistent in an area, state "Aligned across documents" in one line
