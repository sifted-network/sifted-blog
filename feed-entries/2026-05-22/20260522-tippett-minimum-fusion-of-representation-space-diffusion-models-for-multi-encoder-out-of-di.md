---
title: "Tippett-minimum Fusion of Representation-space Diffusion Models for Multi-Encoder Out-of-Distribution Detection"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20502"
author: "Neelkamal Bhuyan"
categories: ["cs.LG", "cs.AI", "cs.CV", "stat.AP", "stat.ML"]
---

arXiv:2605.20502v1 Announce Type: cross Abstract: We address out-of-distribution (OOD) detection across the full spectrum of distribution shifts -- global domain changes, semantic divergence, texture differences, and covariate corruptions -- through a multi-encoder fusion of per-encoder representation-space diffusion models (RDMs). We statistically identify each encoder's sensitivity to specific shift types from ID data alone and introduce EncMin2L -- an encoder-agnostic two-level $\min(\cdot)$-gate that combines and calibrates per-encoder diffusion-based likelihood detectors without OOD labels, outperforming monolithic multi-encoder baselines at $2.3\times$ lower parameter cost. Two ID-data diagnostics: $\eta^2$ (class-conditional F-test) and $\Delta\mu$ (log-likelihood shift under synthetic corruptions) -- quantify encoder specialization, while a Tippett minimum $p$-value combination aggregates per-encoder scores into a single, calibration-stable OOD signal. EncMin2L achieves $\geq 0.94$ AUROC across all four shift types simultaneously, outperforming the state-of-the-art representation-space diffusion OOD detectors across overlapping benchmarks.

---

📖 [Read original article](https://arxiv.org/abs/2605.20502)