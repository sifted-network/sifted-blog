---
title: "HORST: Composing Optimizer Geometries for Sparse Transformer Training"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21104"
author: "Tom Jacobs, Rohan Jain, Rebekka Burkholz"
categories: ["cs.LG"]
---

arXiv:2605.21104v1 Announce Type: new Abstract: Sparsifying transformers remains a fundamental challenge, as standard optimizers fail to simultaneously encourage sparsity and maintain training stability. Effective adaptive optimizers exhibit an implicit $L_{\infty}$ bias favoring stability, yet, sparsity requires an $L_1$ bias. To integrate sparsity, we propose a composition of optimizer steps, which we cast as non-commutative operators to analyze and combine their optimization geometry in a principled way. This yields HORST (Hyperbolic Operator for Robust Sparse Training), a modular optimizer that inherits stability from adaptive methods while inducing $L_1$ sparsity bias through a hyperbolic mirror map. Our experiments demonstrate its utility for sparse training of transformers on both vision and language tasks. HORST consistently and significantly outperforms AdamW baselines across all sparsity levels, with large gains at higher sparsity.

---

📖 [Read original article](https://arxiv.org/abs/2605.21104)