---
title: "On the Wasserstein Gradient Flow Interpretation of Drifting Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.05118"
author: "Arthur Gretton, Li Kevin Wenliang, Alexandre Galashov, James Thornton, Valentin De Bortoli, Arnaud Doucet"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.05118v2 Announce Type: replace-cross Abstract: Recently, Deng et al. (2026) proposed Generative Modeling via Drifting (GMD), a novel framework for generative tasks. This note presents an analysis of GMD through the lens of Wasserstein Gradient Flows (WGF), i.e., the path of steepest descent for a functional in the space of probability measures, equipped with the geometry of optimal transport. Unlike previous WGF-based contributions, GMD can be thought of as directly targeting a fixed point of a specific WGF flow. We demonstrate three main results: first, that one algorithm proposed by Deng et al. (2026) corresponds to finding the limiting point of a WGF on the KL divergence, with Parzen smoothing on the densities. Second, that the algorithm actually implemented by Deng et al. (2026) corresponds to a different procedure, which bears some resemblance to the fixed point of a WGF on the Sinkhorn divergence, but lacks certain desirable properties of the latter. Third, the same same idea can be extended to the limiting point of other WGFs, including the Maximum Mean Discrepancy (MMD), the sliced Wasserstein distance, and GAN critic functions.

---

📖 [Read original article](https://arxiv.org/abs/2605.05118)