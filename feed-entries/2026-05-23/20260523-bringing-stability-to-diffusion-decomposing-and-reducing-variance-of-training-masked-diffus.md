---
title: "Bringing Stability to Diffusion: Decomposing and Reducing Variance of Training Masked Diffusion Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2511.18159"
author: "Mengni Jia, Mengyu Zhou, Yihao Liu, Xiaoxi Jiang, Guanjun Jiang"
categories: ["cs.LG"]
---

arXiv:2511.18159v2 Announce Type: replace Abstract: Masked diffusion models (MDMs) are a promising alternative to autoregressive models (ARMs), but they suffer from inherently much higher training variance. High variance leads to noisier gradient estimates and unstable optimization, so even equally strong pretrained MDMs and ARMs that are competitive at initialization often diverge after task-specific training, with MDMs falling far behind. There has been no theoretical explanation or systematic solution. We derive the first decomposition of MDM training variance into three sources: (A) masking pattern noise, (B) masking rate noise, and (C) data noise, while ARMs are only affected by (C). This explains the fundamental training gap. Building on this foundation, we design six variance-reduction methods, including two core methods: (1) P-POTS, a Pareto-optimal t sampler that minimizes training variance by sampling harder t values more often with appropriately smaller update steps, and (2) MIRROR, which uses negatively correlated samples to reduce (A). Experiments show that compared to standard MDM training, our methods improve accuracy by 7-8% on complex reasoning tasks, while simultaneously reducing run-to-run variability to near ARM levels, substantially narrowing the gap with strong ARM baselines; in most settings, even the best baseline runs remain below the worst run of our method.

---

📖 [Read original article](https://arxiv.org/abs/2511.18159)