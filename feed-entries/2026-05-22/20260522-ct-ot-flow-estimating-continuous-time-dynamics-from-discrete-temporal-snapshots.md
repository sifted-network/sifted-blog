---
title: "CT-OT Flow: Estimating Continuous-Time Dynamics from Discrete Temporal Snapshots"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2505.17354"
author: "Keisuke Kawano, Takuro Kutsuna, Naoki Hayashi, Yasushi Esaki, Hidenori Tanaka"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2505.17354v3 Announce Type: replace Abstract: In many real-world settings--e.g., single-cell RNA sequencing, mobility sensing, and environmental monitoring--data are observed only as temporally aggregated snapshots collected over finite time windows, often with noisy or uncertain timestamps, and without access to continuous trajectories. We study the problem of estimating continuous-time dynamics from such snapshots. We present Continuous-Time Optimal Transport Flow (CT-OT Flow), a two-stage framework that (i) infers high-resolution time labels by aligning neighboring intervals via partial optimal transport (POT) and (ii) reconstructs a continuous-time data distribution through temporal kernel smoothing, from which we sample pairs of nearby times to train standard ODE/SDE models. Our formulation explicitly accounts for snapshot aggregation and time-label uncertainty and uses practical accelerations (screening and mini-batch POT), making it applicable to large datasets. Across synthetic benchmarks and two real datasets (scRNA-seq and typhoon tracks), CT-OT Flow reduces distributional and trajectory errors compared with OT-CFM, [SF]\(^{2}\)M, TrajectoryNet, MFM, and ENOT.

---

📖 [Read original article](https://arxiv.org/abs/2505.17354)