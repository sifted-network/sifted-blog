---
title: "AMUSE: Anytime Muon with Stable Gradient Evaluation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22432"
author: "Jueun Kim, Baekrok Shin, Jihun Yun, Beomhan Baek, Minhak Song, Chulhee Yun"
categories: ["cs.LG"]
---

arXiv:2605.22432v1 Announce Type: new Abstract: Modern deep learning commonly relies on AdamW with prescribed learning rate schedules, but recent works challenge both components: Schedule-Free optimization removes explicit schedules via iterate averaging, and Muon improves the update geometry by orthogonalizing momentum for matrix parameters. Despite Muon's strong empirical performance, its underlying mechanism remains partially understood. We study Muon through the river-valley loss landscape, where useful training progress occurs along a flat, low-curvature bulk subspace (the river), while high-curvature dominant directions form steep valley walls that induce oscillations. We empirically show that while Muon's orthogonalization accelerates river progress by increasing the bulk component, it also amplifies dominant-direction noise, causing oscillatory trajectories. Building on this, we propose Anytime MUon with Stable gradient Evaluation (AMUSE), which integrates Muon's rapid bulk progress with the stabilizing effect of Schedule-Free averaging. AMUSE uses a time-varying interpolation coefficient that initially evaluates gradients near the fast Muon sequence for rapid adaptation, then gradually shifts toward the stable averaged sequence to suppress valley-wall oscillations. As a result, AMUSE requires no learning rate schedules and supports anytime training. Across vision tasks and large language model pretraining, AMUSE consistently improves the performance-iteration Pareto frontier over (Schedule-Free) AdamW and Muon.

---

📖 [Read original article](https://arxiv.org/abs/2605.22432)