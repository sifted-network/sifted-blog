---
title: "Scale-Calibrated Median-of-Means for Robust Distributed Principal Component Analysis"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20681"
author: "Kisung You"
categories: ["stat.ME", "cs.LG"]
---

arXiv:2605.20681v1 Announce Type: cross Abstract: Distributed principal component analysis (PCA) produces node-level estimates of both a mean vector and a principal subspace. Robustly aggregating these heterogeneous objects requires a relative scale between mean error and subspace error. We study a scale-calibrated median-of-means estimator for this problem using the product geometry of Euclidean space and the Grassmann manifold. A node-level PCA expansion shows that the mean component has the usual linear influence, whereas the subspace component is an eigengap-weighted covariance perturbation. We prove a local reduction showing that the proposed product-manifold median-of-means estimator is asymptotically equivalent to a scaled spatial median of node influence errors. This yields fixed-node non-Gaussian limits, growing-node Gaussian limits with finite-block bias, and an explicit scale-dependent covariance formula. We propose robust block-scale and inference-optimal calibration rules, establish high-probability median-of-means bounds, characterize factorwise bad-node influence, and prove node-bootstrap validity. Simulations and large-scale single-cell RNA-seq data show that scale calibration adapts to eigengap-driven subspace uncertainty and provides a robust distributed PCA summary.

---

📖 [Read original article](https://arxiv.org/abs/2605.20681)