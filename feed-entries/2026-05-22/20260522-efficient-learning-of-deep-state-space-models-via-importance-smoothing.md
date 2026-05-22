---
title: "Efficient Learning of Deep State Space Models via Importance Smoothing"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21108"
author: "John-Joseph Brady, Nikolas Nusken, Yunpeng Li"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21108v1 Announce Type: cross Abstract: Latent state space systems are ubiquitous in statistical modelling, arising naturally when a time series is observed through a noisy measurement function, however training deep state space models (DSSM) at scale remains difficult. Two largely distinct strategies and literatures have developed around the training of DSSMs. Firstly, auto-encoding DSSMs train generative DSSMs by optimising a variational lower bound. Secondly, DSSMs trained by back-propagating the outputs of a classical sequential Monte Carlo algorithm (SMC). Such approaches can train DSSMs for discriminative as well as generative tasks, however, due to the sequentiality of their forward pass, scale poorly on modern hardware. We propose a new training method \emph{parallel variational Monte Carlo} (PVMC) that bridges the gap between the paradigms, and can be used robustly to train DSSMs for both discriminative and generative tasks. Our method achieves state-of-the-art or better results on a set of baseline experiments and trains $10\times$ faster than the fastest competing SMC approach.

---

📖 [Read original article](https://arxiv.org/abs/2605.21108)