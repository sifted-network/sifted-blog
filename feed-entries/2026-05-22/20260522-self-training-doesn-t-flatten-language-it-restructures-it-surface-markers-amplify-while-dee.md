---
title: "Self-Training Doesn't Flatten Language -- It Restructures It: Surface Markers Amplify While Deep Syntax Dies"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20602"
author: "Ming Liu"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.20602v1 Announce Type: cross Abstract: Successive self-training on a language model's own outputs is widely characterized as a process of flattening: diversity drops, distributions narrow, and the text becomes "more like itself." We provide evidence that this characterization is incomplete. Across eleven generations of self-training on five models (GPT-2 124M, Pythia-410M, Pythia-1.4B, OPT-1.3B, Pythia-2.8B), language is not flattened uniformly -- it is restructured. Surface markers (discourse connectives, hedges, em-dashes) rise, while mid- and deep-syntactic structures (questions, parentheticals, passives, subjunctives) collapse. We formalize this asymmetric collapse as the Structural Depth Hypothesis (SDH): the per-generation decay rate of a linguistic feature is predicted primarily by its structural depth -- the number of nested syntactic dependencies it requires -- and only secondarily by its generation-zero output frequency. Pooling 17-feature panels from five models spanning three architecture families (N=85), the pooled Spearman correlation is rho=0.540 (p < 10^{-6}; cluster-bootstrap 95% CI [0.434, 0.634]), while frequency is a substantially weaker predictor (rho=0.225). A matched human-text fine-tuning control yields rho=0.039 (p=0.88), confirming the gradient is self-training-specific. We further document a Superficial Complexity Paradox: aggregate complexity proxies (dep-tree depth, TTR, word length) all rise as the underlying clause structure dies, with direct implications for training-data curation and LLM-text detection.

---

📖 [Read original article](https://arxiv.org/abs/2605.20602)