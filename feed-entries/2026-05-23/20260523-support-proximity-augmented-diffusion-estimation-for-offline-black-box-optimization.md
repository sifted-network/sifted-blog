---
title: "Support-Proximity Augmented Diffusion Estimation for Offline Black-Box Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.11246"
author: "Yonghan Yang, Ye Yuan, Zipeng Sun, Linfeng Du, Bowei He, Haolun Wu, Can Chen, Xue Liu"
categories: ["cs.LG"]
---

arXiv:2605.11246v2 Announce Type: replace Abstract: Offline black-box optimization aims to discover novel designs with high property scores using only a static dataset, a task fundamentally challenged by the out-of-distribution (OOD) extrapolation problem. Existing approaches typically bifurcate into inverse methods, which struggle with the ill-posed nature of mapping scores to designs, and forward methods, which often lack the distributional expressivity to quantify uncertainty effectively. In this work, we propose SPADE (Support-Proximity Augmented Diffusion Estimation), a novel framework that reimagines forward surrogate modeling through the lens of conditional generative modeling. SPADE models the forward likelihood p(y|x) using a diffusion model, but with two critical enhancements to tailor it for optimization: (1) a Calibrated Diffusion Estimation module that enforces global consistency in statistical moments and pairwise rankings, and (2) a Support-Proximity Regularization mechanism that implicitly internalizes the data manifold constraint p(x) via kNN-based density estimation. Theoretically, we prove that our regularization is first-order equivalent to maximizing a Bayesian posterior with a valid design prior. Empirically, SPADE achieves state-of-the-art performance across Design-Bench tasks and an LLM data mixture optimization benchmark.

---

📖 [Read original article](https://arxiv.org/abs/2605.11246)