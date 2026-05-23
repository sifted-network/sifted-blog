---
title: "What are the Right Symmetries for Formal Theorem Proving?"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22257"
author: "Krzysztof Olejniczak, Radoslav Dimitrov, Xingyue Huang, Bernardo Cuenca Grau, Jinwoo Kim, \\.Ismail \\.Ilkan Ceylan"
categories: ["cs.LG", "cs.AI", "cs.LO"]
---

arXiv:2605.22257v1 Announce Type: cross Abstract: Formal theorem provers based on large language models (LLMs) are highly sensitive to superficial variations in problem representation: semantically equivalent statements can exhibit drastically different proof success rates, revealing a failure to respect structural symmetries inherent in formal mathematics. This raises a central question: what are the right symmetries for formal theorem proving? We introduce rewriting categories, a category-theoretic framework capturing the compositional, generally non-invertible transformations induced by proof tactics, and use it to formalize two symmetry notions: proof equivariance, governing how proof distributions transform under rewrites, and success invariance (i.e., invariance of success probability), requiring equivalent statements to be solved with the same probability. We observe that state-based next-tactic provers naturally satisfy proof equivariance by operating on proof states. In contrast, state-of-the-art LLM-based provers satisfy neither property, exhibiting large performance variation across equivalent formulations. To mitigate this, we propose test-time methods that aggregate over equivalent rewritings of the input, showing theoretically that they recover success invariance in the sampling limit, and empirically, that they improve robustness and performance under fixed inference budgets. Our results highlight symmetry as a key missing inductive bias in LLM-based theorem proving and suggest test-time computation as a practical route to approximate it.

---

📖 [Read original article](https://arxiv.org/abs/2605.22257)