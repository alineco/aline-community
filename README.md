# Aline Community

Agent skills for in-house legal teams, published by [Aline](https://aline.co).

Each skill is a folder with a `SKILL.md` file in the open [Agent Skills](https://agentskills.io) format. Aline loads them into **Community**, and any agent that reads Agent Skills, such as Claude Code, can use them too.

[![Validate skills](https://github.com/alineco/aline-community/actions/workflows/validate.yml/badge.svg)](https://github.com/alineco/aline-community/actions/workflows/validate.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

## Skills

<!-- skills:start -->
### Contract review

| Skill | What it does |
| --- | --- |
| [Commercial Contract Review](skills/commercial-contract-review) | Reviews a commercial contract against the focus areas you pick and returns an overview, risks with quotes from the contract, unusual or missing provisions, and recommended next steps. Use for a first-pass review of an MSA, services agreement or other commercial contract. |
| [Compare Contract Versions](skills/compare-contract-versions) | Compares two versions of a contract and lists every material change, grouped by category, with whether each change helps or hurts your position. Use when a counterparty sends back a redline or a new draft. |
| [Contract Risk Summary](skills/contract-risk-summary) | Scores the risks in a contract by category, with a heat map and mitigation steps for each risk. Use when you need a short risk picture of a contract for a business owner or an approver. |
| [Lease Abstract](skills/lease-abstract) | Turns a commercial lease into a lease abstract with parties, rent, key dates, renewal and termination options, and obligations. Use when you need the key terms of a lease on one page. |
| [Multi-Document Deal Analysis](skills/multi-document-deal-analysis) | Reviews all the documents of a deal together, maps how they relate, and finds conflicts, gaps and inconsistent terms between them. Use for a transaction made of several agreements, such as an MSA with order forms and amendments. |
| [NDA Review](skills/nda-review) | Reviews an NDA against the concerns you pick and says whether the terms are acceptable, with red flags and suggested changes. Use for an incoming mutual or one-way NDA. |
| [Vendor Agreement Review](skills/vendor-agreement-review) | Reviews a vendor agreement from the customer side, covering commercial terms, legal terms and negotiation points. Use when your company is buying from a vendor and needs to know what to push back on. |

### Drafting

| Skill | What it does |
| --- | --- |
| [Draft Board Consent](skills/draft-board-consent) | Drafts a written consent of the board of directors, with WHEREAS and RESOLVED clauses for each matter and signature blocks. Use when the board needs to approve something without holding a meeting. |
| [Draft Company Policy](skills/draft-company-policy) | Drafts a complete internal company policy with purpose, scope, requirements, responsibilities and enforcement. Use when you need a first draft of a new policy, such as acceptable use, expenses or remote work. |
| [Executive Approval Email](skills/executive-approval-email) | Writes an email asking an executive to approve a contract, with a deal summary, a key terms table, the risks and a clear ask. Use when a signed-off contract needs executive approval before signature. |
| [Improve Communication](skills/improve-communication) | Rates a draft email or memo for clarity, structure, tone and persuasiveness, explains what to change, and returns a revised draft. Use before sending an important message to a client, executive or counterparty. |

### Privacy and vendors

| Skill | What it does |
| --- | --- |
| [Data Processing Agreement (DPA) Review](skills/data-processing-agreement-dpa-review) | Checks a data processing agreement against the GDPR Article 28 requirements, scores it, and suggests language for each gap. Use when reviewing a vendor DPA or a DPA a customer asks you to sign. |
| [Privacy Policy Review](skills/privacy-policy-review) | Reviews a vendor's privacy policy for privacy risk, with special attention to how your data may be used for AI and machine learning. Use when evaluating a new tool or vendor that will handle your data. |
| [SaaS Terms Review](skills/saas-terms-review) | Reviews a SaaS provider's terms of service for problem provisions, including AI training on your data, liability and termination. Use before your company signs up for a SaaS product on click-through terms. |

### Research

| Skill | What it does |
| --- | --- |
| [Explain Legal Concept](skills/explain-legal-concept) | Explains a legal concept in plain English, with why it matters, how it works in practice and what to watch for. Use when someone outside legal asks what a term or doctrine means. |
| [Legal Alert Review](skills/legal-alert-review) | Reads a legal or regulatory alert and says whether and how it applies to your company, what it affects and what to do next. Use when a law firm alert or a regulatory update lands and you need to know if it matters. |
<!-- skills:end -->

## Use the skills

### In Aline

Every skill here is already in Aline. Open **Community** in the left menu, pick a skill, and add it to your organization. In chat, type `/` and the skill name to run it.

### In Claude Code

```
/plugin marketplace add alineco/aline-community
/plugin install aline-legal@aline-community
```

### In another agent

Copy a folder from `skills/` into the folder your agent reads skills from.

## How a skill is laid out

```
skills/nda-review/
  SKILL.md         frontmatter and instructions (required)
  references/      longer material the instructions point to (optional)
```

The frontmatter of every skill in this repository looks like this:

```yaml
---
name: nda-review                # matches the folder name
description: "What the skill does and when to use it."
license: Apache-2.0
metadata:
  display-name: "NDA Review"    # the title Aline shows
  author: Aline
  category: "Contract review"   # the README section
  version: "1.0.0"
---
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before you open a pull request. Every pull request runs `npm run check`, which validates each `SKILL.md` and checks that this README and `.claude-plugin/marketplace.json` are up to date.

## Disclaimer

These skills help with legal work. They are not legal advice, and a qualified lawyer should review what they produce before anyone relies on it.

## License

[Apache 2.0](LICENSE). A skill folder may include its own `LICENSE` file, which then applies to that folder.
