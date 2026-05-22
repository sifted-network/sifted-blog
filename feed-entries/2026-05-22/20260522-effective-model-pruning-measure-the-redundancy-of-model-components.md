---
title: "Effective Model Pruning: Measure The Redundancy of Model Components"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2509.25606"
author: "Yixuan Wang, Dan P. Guralnik, Saiedeh Akbari, Warren E. Dixon"
categories: ["cs.LG"]
---

arXiv:2509.25606v3 Announce Type: replace Abstract: This article initiates the study of a basic question about model pruning. Given a vector $s$ of importance scores assigned to model components, how many of the scored components could be discarded without sacrificing performance? We propose Effective Model Pruning (EMP), which derives the desired sparsity directly from the score distribution using the notion of effective sample size from particle filtering, also known as the inverse Simpson index. Rather than prescribe a pruning criterion, EMP supplies a universal adaptive threshold derived from the distribution of the score $s$ over the model components: EMP maps $s$ to a number $N_{eff}=N_{eff}(s)$, called the effective sample size. The $N-N_{eff}$ lowest scoring components are discarded. A tight lower bound on the effective mass $s_{eff}$ (the sum of retained normalized scores) in terms of $N_{eff}$ is derived. This process yields models with a provable upper bound on the loss change relative to the original dense model. Numerical experiments are performed demonstrating this phenomenon across a variety of network architectures including MLPs, CNNs, Transformers, LLMs, and KAN. It is also shown that EMP addresses a rich set of pruning criteria such as weight magnitude, attention score, KAN importance score, and even feature-level signals such as image pixels.

---

📖 [Read original article](https://arxiv.org/abs/2509.25606)