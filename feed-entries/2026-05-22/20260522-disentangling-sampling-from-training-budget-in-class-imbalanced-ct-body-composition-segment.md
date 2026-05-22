---
title: "Disentangling Sampling from Training Budget in Class-Imbalanced CT Body Composition Segmentation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20405"
author: "Iason Skylitsis, Dimitrios Karkalousos, Ivana I\\v{s}gum"
categories: ["eess.IV", "cs.AI", "cs.CV", "physics.med-ph"]
---

arXiv:2605.20405v1 Announce Type: cross Abstract: Class imbalance is a fundamental challenge in medical image segmentation, where frequent classes typically dominate training at the expense of rare classes. Loss-based approaches mitigate imbalance by reweighting the per-pixel loss within the batch, while sampling strategies control which images enter the batch. Yet neither explicitly controls which classes appear within the batch, leaving rare-class exposure only partially rebalanced. In this work, we adopt episodic sampling from few-shot learning to promote class-balanced batch construction in a fully supervised setting. We decouple episodic sampling from its conventional metric-learning context and evaluate it in body composition segmentation in CT. We compare episodic sampling against random and weighted sampling on nine muscle and adipose tissues, derived from 210 scans of the public SAROS dataset. Training is performed under full- and low-data regimes, with additional comparisons under matched training iteration budgets. Under full-data training, all three strategies performed comparably (mean Dice 0.882 for episodic, 0.878 for random and weighted). Under low-data training, episodic sampling outperformed random and weighted (0.787 vs. 0.758 and 0.762), driven by a 12-fold difference in training iterations. Under matched training budgets, random and weighted overfit earlier, while episodic improved for approximately three times more iterations before plateauing. Our findings identify the training iteration budget as under-recognized confound in sampling strategies, motivating iteration-aware evaluation protocols for small datasets. Furthermore, the residual advantage of episodic sampling is consistent with an implicit regularization effect of class-balanced batches, offering a low-cost, model-agnostic strategy for class-imbalanced medical image segmentation. Code is available at https://github.com/iasonsky/episodic-sampling.

---

📖 [Read original article](https://arxiv.org/abs/2605.20405)