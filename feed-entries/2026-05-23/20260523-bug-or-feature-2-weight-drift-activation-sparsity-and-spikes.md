---
title: "Bug or Feature$^2$: Weight Drift, Activation Sparsity and Spikes"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.17659"
author: "Egor Shvetsov, Aleksandr Serkov, Shokorov Viacheslav, Redko Dmitry, Vladislav Goloshchapov, Evgeny Burnaev"
categories: ["cs.LG"]
---

arXiv:2605.17659v2 Announce Type: replace Abstract: The design of modern neural architectures has converged through incremental empirical choices, yet the mechanisms governing their training dynamics remain only partially understood. We identify and analyze a negative weight drift induced by the interaction between standard losses and positively biased activation functions. We prove that under MSE or cross-entropy loss, the gradient with respect to positive pre-activations is non-negative in expectation at initialization, driving downstream weights toward negative values during early training. The drift is intrinsic to optimization rather than data, and persists across architectures (MLP, ResNet, ViT, GPT-nano, MP-SENe) and asymmetric activation functions (ReLU, GELU, SiLU). Coupled with ReLU, weight drift produces activation sparsity reaching up to 90\% in GPT-nano. We characterize the sparsity-accuracy tradeoff across 79 configurations and identify a sharp accuracy cliff above $\sim$70\% activation sparsity. While ReLU$^2$ achieves a good sparsity--accuracy ratio in GPT-nano, it pathologically amplifies identified activation spikes in intermediate transformer layers. Clipping resolves this while preserving the representational benefits of squaring: clipped ReLU$^2$ outperforms its unclipped version, and GELU$^2$ achieves the lowest validation loss on GPT-nano. Code is available at https://github.com/On-Point-RND/BugOrFeature.

---

📖 [Read original article](https://arxiv.org/abs/2605.17659)