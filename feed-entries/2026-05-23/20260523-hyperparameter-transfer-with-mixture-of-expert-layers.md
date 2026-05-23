---
title: "Hyperparameter Transfer with Mixture-of-Expert Layers"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.20205"
author: "Tianze Jiang, Blake Bordelon, Cengiz Pehlevan, Boris Hanin"
categories: ["cs.LG"]
---

arXiv:2601.20205v3 Announce Type: replace Abstract: Mixture-of-Experts (MoE) layers have emerged as an important tool in scaling up modern neural networks by decoupling total trainable parameters from activated parameters in the forward pass for each token. However, sparse MoEs add complexity to training due to (i) new trainable parameters (router weights) that, like all other parameter groups, require hyperparameter (HP) tuning; (ii) new architecture scale dimensions (number of and size of experts) that must be chosen and potentially taken large. To make HP selection cheap and reliable, we propose a new parameterization for transformer models with MoE layers when scaling model width, depth, number of experts, and expert (hidden) size. Our parameterization is justified by a novel dynamical mean-field theory (DMFT) analysis. When varying different model dimensions trained at a fixed token budget, we find empirically that our parameterization enables reliable HP transfer across models from 51M to over 2B total parameters. We further take HPs identified from sweeping small models on a short token horizon to train larger models on longer horizons and report performant model behaviors.

---

📖 [Read original article](https://arxiv.org/abs/2601.20205)