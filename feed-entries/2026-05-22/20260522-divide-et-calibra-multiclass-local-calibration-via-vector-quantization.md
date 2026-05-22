---
title: "Divide et Calibra: Multiclass Local Calibration via Vector Quantization"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21060"
author: "Cesare Barbera, Lorenzo Perini, Giovanni De Toni, Andrea Passerini, Andrea Pugnana"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.21060v1 Announce Type: cross Abstract: Accurate and well-calibrated Machine Learning (ML) models are mandatory in high-stakes settings, yet effective multiclass calibration remains challenging: global approaches assume calibration errors are homogeneous across the latent space, while local methods often rely on latent-space dimensionality reduction, which leads to information loss. To address these issues, we propose a compositional approach to multiclass calibration, where region-specific calibration maps are constructed from shared codeword-dependent factors. We instantiate this idea via Vector Quantization (VQ), which induces a structured partition of the representation space, and an indexed parameterization of Dirichlet concentrations that enables parameter sharing across regions. Our approach learns heterogeneous calibration maps that generalize well even to sparse regions of the latent space. Experiments on benchmark datasets show significant improvements in local calibration while maintaining competitive global calibration and predictive performance.

---

📖 [Read original article](https://arxiv.org/abs/2605.21060)