---
title: "SCI-Defense: Defending Manipulation Attacks from Generative Engine Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21948"
author: "Xucheng Yu, Haibo Jin, Huimin Zeng, Haohan Wang"
categories: ["cs.LG"]
---

arXiv:2605.21948v1 Announce Type: new Abstract: LLM-based ranking systems are vulnerable to Generative Engine Optimization (GEO) attacks, where adversaries inject semantic signals into product descriptions to artificially boost rankings. We propose SCI-Defense, a three-component defense framework combining Perplexity detection (PPL), Semantic Integrity Scoring (SIS), and Inter-Candidate Detection (ICD). SIS evaluates four manipulation dimensions: Authority Attribution (AA), Narrative Purposiveness (NP), Comparative Claims (CA), and Temporal Claims (TC). Evaluated on 600 Amazon product descriptions across 6 categories, SCI-Defense achieves Precision=1.000 and FPR=0.000, with Recall of 1.000, 0.952, and 0.830 against String, Reasoning, and Review attacks respectively. On 600 MS MARCO web passages, String attacks are blocked with perfect recall while Review attacks yield near-zero recall, as web passages lack the persuasion-oriented signals that SIS targets in product descriptions. We demonstrate that existing defenses -- PPL-only filters, SafetyClf content classifiers, and paraphrasing -- achieve zero recall against semantic manipulation attacks. We further demonstrate new attacks such as Specification Amplification and Use-Case Saturation can expose semantic relevance manipulation as a structural defense blind spot that suggests directions for future research.

---

📖 [Read original article](https://arxiv.org/abs/2605.21948)