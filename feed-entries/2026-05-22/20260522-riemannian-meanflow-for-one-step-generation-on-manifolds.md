---
title: "Riemannian MeanFlow for One-Step Generation on Manifolds"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.10718"
author: "Zichen Zhong, Haoliang Sun, Yukun Zhao, Yongshun Gong, Yilong Yin"
categories: ["cs.LG"]
---

arXiv:2603.10718v2 Announce Type: replace Abstract: Flow Matching enables simulation-free training of generative models on Riemannian manifolds, yet sampling typically still relies on numerically integrating a probability-flow ODE. We propose Riemannian MeanFlow (RMF), extending MeanFlow to manifold-valued generation where velocities lie in location-dependent tangent spaces. RMF defines an average-velocity field via parallel transport and derives a Riemannian MeanFlow identity that links average and instantaneous velocities for intrinsic supervision. We make this identity practical in a log-map tangent representation, avoiding trajectory simulation and heavy geometric computations. For stable optimization, we decompose the RMF objective into two terms and apply conflict-aware multi-task learning to mitigate gradient interference. RMF also supports conditional generation via classifier-free guidance. Experiments on spheres, tori, SO(3), and SE(3) demonstrate competitive one-step sampling with improved quality-efficiency trade-offs and substantially reduced sampling cost.

---

📖 [Read original article](https://arxiv.org/abs/2603.10718)