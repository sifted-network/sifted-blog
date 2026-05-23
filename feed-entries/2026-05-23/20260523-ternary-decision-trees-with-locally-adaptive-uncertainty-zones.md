---
title: "Ternary Decision Trees with Locally-Adaptive Uncertainty Zones"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22740"
author: "William Smits"
categories: ["cs.LG"]
---

arXiv:2605.22740v1 Announce Type: new Abstract: Decision trees partition the feature space using hard binary thresholds, assigning identical confidence to instances far from a decision boundary and to those directly on it. We introduce ternary decision trees, which augment each split node with an uncertainty zone of half-width delta centered on the optimal threshold. Instances in this zone receive predictions formed by weighted blending of both child subtrees and are flagged as boundary-uncertain, signaling that downstream applications may treat these predictions differently. Crucially, delta is computed locally at each node from statistics already available during standard CART split finding, requiring no external noise specification. We propose and evaluate five delta-estimation methods: quality-plateau (plateau width of the split criterion curve), class-overlap (empirical class-distribution overlap), gain-ratio (split quality relative to split entropy), node-bootstrap (threshold variance under node-level resampling), and margin (SVM-inspired distance to the nearest cross-class training example). Evaluated across 72 OpenML-CC18 datasets with 5-fold cross-validation, all five methods with probabilistic routing significantly outperform standard CART on decided accuracy (Wilcoxon signed-rank, p < 0.001). The margin method achieves the best efficiency (0.104 accuracy gain per unit of boundary-uncertain flagging rate), wins on 42 of 72 datasets, and requires zero additional hyperparameters. Analysis on three Breiman synthetic benchmarks reveals that margin is self-calibrating on clean data while node-bootstrap and quality-plateau best track theoretical irreducible error. Experiments on four medical and financial datasets demonstrate practical value: on mammography, node-bootstrap achieves +0.71% decided accuracy by flagging 10.8% of screening cases as boundary-uncertain.

---

📖 [Read original article](https://arxiv.org/abs/2605.22740)