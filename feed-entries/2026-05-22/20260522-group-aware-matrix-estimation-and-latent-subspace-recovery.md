---
title: "Group-Aware Matrix Estimation and Latent Subspace Recovery"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20559"
author: "Hamza Golubovic, Matthew Shen, Genevera I. Allen, Tarek M. Zikry"
categories: ["stat.ML", "cs.LG", "stat.AP", "stat.ME"]
---

arXiv:2605.20559v1 Announce Type: cross Abstract: Modern matrix completion problems often involve heterogeneous data whose rows simultaneously belong to many meta-categories, such as demographic and age groups in recommendation systems, or region and recording session labels in neural electrophysiological experiments. Standard low-rank estimators impose a single global latent geometry, which can recover average structure but may smooth away subgroup-specific variation, especially when observations are unevenly distributed across groups. We introduce Group-Aware Matrix Estimation (GAME), a convex estimator for overlapping subgroup-wise low-rank matrix estimation. GAME regularizes category-specific submatrices through overlapping nuclear-norm penalties, allowing related groups to borrow information while preserving local latent structure in a shared coordinate system. We provide finite-sample guarantees for both reconstruction error and subgroup-specific subspace recovery, showing how performance depends on sampling density, subgroup rank, and overlap structure. Experiments on synthetic, recommendation, ecological, and neuroscience datasets show that GAME is most beneficial in structured missingness regimes, where subgroup-aware regularization improves both reconstruction accuracy and latent subspace fidelity. Across these benchmarks, GAME is competitive or best among global low-rank, side-information, and modern imputation baselines, with the largest gains when subgroups exhibit distinct low-rank structure.

---

📖 [Read original article](https://arxiv.org/abs/2605.20559)