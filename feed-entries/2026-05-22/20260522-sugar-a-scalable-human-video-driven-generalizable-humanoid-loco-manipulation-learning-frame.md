---
title: "SUGAR: A Scalable Human-Video-Driven Generalizable Humanoid Loco-Manipulation Learning Framework"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20373"
author: "Tianshu Wu, Xiangqi Kong, Yue Chen, Qize Yu, Hang Ye, Jia Li, Yizhou Wang, Hao Dong"
categories: ["cs.RO", "cs.AI", "cs.CV"]
---

arXiv:2605.20373v1 Announce Type: cross Abstract: Building humanoid robots capable of generalizable whole-body loco-manipulation in the real world remains a fundamental challenge. Existing methods either rely on laborious task-specific reward engineering, rigidly replay reference motions that fail to generalize, or depend on costly teleoperation that limits scalability. While human videos capture diverse human behaviors, motion priors inferred from them are inherently imperfect, suffering from occlusion, contact artifacts, and retargeting errors that render them unsuitable for direct policy learning. To address this, we present SUGAR, a scalable data-driven framework that converts diverse human videos into deployable humanoid loco-manipulation skills, without any task-specific reward engineering or reference-motion conditioning at inference. SUGAR proceeds in three stages. First, a fully automated pipeline extracts kinematic interaction priors including human-object motion trajectories and contact labels from unstructured human videos. Second, a privileged physics-based refiner uses a unified mimic reward and progressive state pool to transform imperfect priors into physically feasible, high-fidelity skills. Third, refined skills are distilled into a hierarchical autonomous policy consisting of a command generator and a command tracker. We evaluate SUGAR on six representative loco-manipulation tasks in simulation and real-world humanoid hardware. Our method substantially outperforms reference-tracking baselines, and performance scales clearly with the amount of human video data. It also achieves zero-shot real-world transfer with reliable closed-loop execution, autonomous failure recovery, and stable long-horizon performance under external perturbations. Project Page: https://tianshuwu.github.io/sugar-humanoid/

---

📖 [Read original article](https://arxiv.org/abs/2605.20373)