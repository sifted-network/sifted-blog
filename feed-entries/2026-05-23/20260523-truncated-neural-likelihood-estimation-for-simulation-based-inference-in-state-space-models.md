---
title: "Truncated Neural Likelihood Estimation for Simulation-Based Inference in State-Space Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21805"
author: "Kostas Tsampourakis, V\\'ictor Elvira"
categories: ["stat.CO", "cs.LG", "stat.ML"]
---

arXiv:2605.21805v1 Announce Type: cross Abstract: State-space models (SSMs) are powerful probabilistic tools for modeling time-varying systems with latent dynamics. Inference in SSMs involves the estimation of latent states and parameters. In this work, we focus on parameter inference, which for SSMs is in general a very challenging problem due to the intractability of the likelihood. Recently, neural estimation methods, such as sequential neural likelihood (SNL), have shown promising results in Bayesian inference problems. In this paper, we show that SNL, when applied to the SSM setting, suffers important limitations, such as requiring a large amount of simulated samples to achieve a moderate performance, scaling poorly with sequence length, while not being amortized. We then introduce a novel inference algorithm called truncated-SNL (T-SNL), which addresses the limitations of SNL. Our algorithm is more accurate, more stable and robust during training, more scalable to longer temporal sequences, and can be amortized when new observations become available. Our experiments show that T-SNL is sample-efficient, robust, and flexible algorithm which outperforms other approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.21805)