---
title: "Beyond Numerical Features: CNN-Driven Algorithm Selection via Contour Plots for Continuous Black-Box Optimization"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20797"
author: "Yiliang Yuan, Xiang Shi, Mustafa Misir"
categories: ["cs.LG"]
---

arXiv:2605.20797v1 Announce Type: new Abstract: The present paper introduces a new representation-driven approach to per-instance algorithm selection, applied to black-box optimization, for automatically choosing the most promising solver from a fixed portfolio. Prior work in continuous optimization largely relies on numerical descriptors, including Exploratory Landscape Analysis features and learned embeddings such as Deep-ELA. This work studies a complementary representation: contour-map visualizations of probed landscapes. A CNN regressor takes multiple instance-specific contour views (stacked or encoded per view and aggregated) and predicts per-solver performance, enabling selection by the predicted best value. On the standard BBOB 2009 single-objective protocol, the resulting selectors significantly outperform the single best solver (SBS) and are competitive with feature-based baselines. A subsequent bi-objective evaluation under the DeepELA setting further indicates that the same image-based principle can be competitive when using windowed contour views. Overall, the results suggest that simple vision models can exploit spatial structure in probed landscapes for algorithm selection without handcrafted ELA features.

---

📖 [Read original article](https://arxiv.org/abs/2605.20797)