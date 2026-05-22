---
title: "Beyond Augmented-Action Surrogates for Multi-Expert Learning-to-Defer"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.09414"
author: "Yannis Montreuil, Axel Carlier, Lai Xing Ng, Wei Tsang Ooi"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2604.09414v3 Announce Type: replace-cross Abstract: A learning-to-defer (L2D) system decides, for each input, whether to predict on its own or to hand it to one of several available experts. The very well established recipe trains classifier and router jointly by treating the $K$ classes and $J$ experts as competing actions in one shared $(K{+}J)$-action geometry. Subsequent work has proposed a series of incremental fixes within this geometry; we show that each still suffers, to varying severity, from an optimization-level pathology (target distortion, gradient amplification, winner-take-all starvation, set-mass collapse, or class--expert coupling) even under statistical consistency. We step outside the augmented-action family entirely and propose a decoupled surrogate: a softmax classifier head and an independent sigmoid head per expert, mirroring the two natural objects of the problem. We show that per-sample updates are then coordinatewise and the class--expert Hessian block is identically zero, and prove an excess-risk bound with calibration constant $\max\{2\sqrt{2},\sqrt{2J/\lambda}\}$ -- to our knowledge the first multi-expert L2D guarantee whose constant does not grow with the expert pool when the per-expert weight is held fixed. On controlled synthetic studies and on CIFAR-10, CIFAR-10H, and Covertype, it is the only method in our comparison that remains stable as the expert pool grows, preserves rare specialists, and improves over a standalone classifier on every real-data benchmark.

---

📖 [Read original article](https://arxiv.org/abs/2604.09414)