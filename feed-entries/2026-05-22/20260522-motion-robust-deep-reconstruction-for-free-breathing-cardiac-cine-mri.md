---
title: "Motion-Robust Deep Reconstruction for Free-Breathing Cardiac Cine MRI"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20687"
author: "Mahmut Yurt, Kanghyun Ryu, Zhitao Li, Xucheng Zhu, Xianglun Mao, Martin Janich, Marcus Alley, Kawin Setsompop, John Pauly, Shreyas Vasanawala, Ali Syed"
categories: ["eess.IV", "cs.LG"]
---

arXiv:2605.20687v1 Announce Type: cross Abstract: Conventional cardiac cine MRI relies on breath-hold Cartesian acquisitions, which are vulnerable to motion artifacts and can be uncomfortable or infeasible, particularly for pediatric and other noncompliant patients who cannot reliably hold their breath. Free-breathing radial acquisitions can alleviate these limitations, but robust reconstruction at high acceleration remains challenging due to prominent streak artifacts. To address these limitations, we propose Cine-DL, a clinically oriented framework that couples targeted k-space preprocessing with fast, model-based deep reconstruction. In this pipeline, raw free-breathing radial data undergo retrospective cardiac binning and respiratory gating to resolve cardiac phases and discard motion-corrupted spokes. We then introduce Streak Optimized Coil Compression (SOC), which explicitly preserves cardiac signals while suppressing peripheral interference that typically drives the streak artifacts. The resulting 2D+t cine series is reconstructed with an unrolled network that alternates a ResNet proximal operator with physics-based data consistency updates solved via conjugate gradient. We further employ a memory-efficient training strategy that reduces peak memory usage. We evaluate Cine-DL on free-breathing volunteer data against established baselines (k-t SENSE and iGRASP) and demonstrate clinical translation via hospital deployment on newly acquired patient data. Our experiments show that Cine-DL consistently improves quantitative metrics and visual fidelity, supporting a practical route toward routine, time-sensitive clinical adoption of free-breathing cine MRI.

---

📖 [Read original article](https://arxiv.org/abs/2605.20687)