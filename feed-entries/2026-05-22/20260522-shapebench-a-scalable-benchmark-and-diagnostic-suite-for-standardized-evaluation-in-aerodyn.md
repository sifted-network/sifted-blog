---
title: "ShapeBench: A Scalable Benchmark and Diagnostic Suite for Standardized Evaluation in Aerodynamic Shape Optimization"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20763"
author: "Shaghayegh Fazliani, Krissh Chawla, Jack Guo, Yiren Shen, Matthias Ihme, Madeleine Udell"
categories: ["cs.LG"]
---

arXiv:2605.20763v1 Announce Type: new Abstract: Rapid progress in aerodynamic shape optimization (ASO) has outpaced currently-available standardized evaluation frameworks. Fair comparison requires a unified benchmark spanning diverse shape classes, objective formulations, and matched-budget state-of-the-art baselines. We introduce ShapeBench, an open-source ASO benchmark with a unified API spanning 103 tasks across eight shape categories and multiple optimization regimes. Each ShapeBench task includes a validated surrogate for fast search; when feasible, a high-fidelity Computational Fluid Dynamics (CFD) pipeline for final verification is available, enabling systematic fidelity-gap analysis. ShapeBench provides a reproducible protocol with well-configured baselines to compare fairly using a consistent budget metric, allowing for comparison among both classical and LLM-driven methods, including general-purpose optimizers and a new domain-specialized evolutionary LLM baseline, ShapeEvolve. Results on ShapeBench demonstrate substantial variance in optimizer rankings across shape categories and problem formulations, with mean pairwise Spearman $\rho = 0.013$, so single-task conclusions do not reliably generalize across problem classes. The benchmark is also far from saturation; classical methods are rarely applicable across all shape categories and tasks, further highlighting the need for more general-purpose approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.20763)