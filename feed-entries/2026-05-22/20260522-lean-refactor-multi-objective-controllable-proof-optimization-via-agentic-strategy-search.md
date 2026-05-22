---
title: "Lean Refactor: Multi-Objective Controllable Proof Optimization via Agentic Strategy Search"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20244"
author: "Jialin Lu, Soonho Kong, Rodrigo Stehling, Kaiyu Yang, Zhangyang Wang, Weiran Sun, Wuyang Chen"
categories: ["cs.LO", "cs.AI", "cs.CL", "cs.LG", "cs.SE"]
---

arXiv:2605.20244v1 Announce Type: cross Abstract: We present Lean Refactor, a plug-and-play retrieval-augmented agentic framework for multi-objective, controllable, and version-robust refactoring of Lean proofs. LLM-generated proofs are notoriously correct-but-verbose and brittle across library versions, yet existing refactoring works overlook three practical challenges: 1) Lean refactoring is natively multi-objective (proof length, compilation cost, and version compatibility are often in tension); 2) Lean repositories have fragile compatibility, whereas LLM releases are unaware of Lean/Mathlib versions; 3) Training-based pipelines require repeated fine-tuning with each new LLM release, scaling neither with model churn nor with Lean's release cycle. Lean Refactor steers a frozen agentic LLM with retrievals from a curated database of multi-objective refactoring strategies, each densely annotated with metadata such as supported Lean/Mathlib versions and expected compilation-cost reduction. Experiments show over $70\%$ token-level compression on competition benchmarks, over $20\%$ on research repositories, and up to $60\%$ compilation-time reduction, outperforming prior work and Claude Code. Version-filtered retrieval further improves compression on the target Lean version, and refactored miniF2F proofs exhibit stronger zero-shot version transfer to future Lean releases than their unrefactored counterparts.

---

📖 [Read original article](https://arxiv.org/abs/2605.20244)