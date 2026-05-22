---
title: "Modeling Temporal scRNA-seq Data with Latent Gaussian Process and Optimal Transport"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20989"
author: "Mehmet Yigit Balik, Harri L\\\"ahdesm\\\"aki"
categories: ["cs.LG", "q-bio.GN"]
---

arXiv:2605.20989v1 Announce Type: new Abstract: Single-cell RNA sequencing provides insights into gene expression at single-cell resolution, yet inferring temporal processes from these static snapshot measurements remains a fundamental challenge. Current approaches utilizing neural differential equations and flows are sensitive to overfitting and lack careful considerations of biological variability. In this work, we propose a generative framework that models population trends using a latent heteroscedastic Gaussian process (GP) approximated by Hilbert space methods. To address the absence of genuine cell trajectories, we leverage an optimal transport (OT) objective that aligns generated and observed population distributions. Our method explicitly captures biological heterogeneity by incorporating cell-specific latent time and cell type conditioning to disentangle temporal asynchrony and trajectories to different cell types. We demonstrate state-of-the-art performance on complex interpolation and extrapolation benchmarks and introduce a novel gradient-based strategy for inferring perturbation trajectories.

---

📖 [Read original article](https://arxiv.org/abs/2605.20989)