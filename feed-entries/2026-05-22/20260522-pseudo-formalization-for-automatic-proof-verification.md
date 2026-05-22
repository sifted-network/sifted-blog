---
title: "Pseudo-Formalization for Automatic Proof Verification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20531"
author: "Slim Barkallah, Luke Bailey, Kaiyue Wen, Mohammed Abouzaid, Tengyu Ma"
categories: ["cs.LO", "cs.LG"]
---

arXiv:2605.20531v1 Announce Type: cross Abstract: Reliable verification of proofs remains a bottleneck for training and evaluating AI systems on hard mathematical reasoning. Fully formal proofs, in languages like Lean, are easy to verify because they are unambiguous and modular. Most proofs, particularly those written by AI systems, have neither property, and translating them into formal languages remains challenging in many frontier math settings. We propose Pseudo-Formalization (PF), a proof format that captures the modularity and precision of formal proofs while retaining the flexibility of natural language. A Pseudo-Formal proof is decomposed into self-contained modules, each stating its premises, conclusion, and proof in natural language. To verify the correctness of a regular natural language proof, an LLM translates it to Pseudo-Formal and then verifies each module independently, an algorithm we call Block Verification (BV). We evaluate PF+BV on two benchmarks spanning olympiad and research-level mathematics, where it pareto-dominates LLM-as-judge baselines on error-finding precision and recall. To support future work, we release our research-level proof verification benchmark ArxivMathGradingBench.

---

📖 [Read original article](https://arxiv.org/abs/2605.20531)