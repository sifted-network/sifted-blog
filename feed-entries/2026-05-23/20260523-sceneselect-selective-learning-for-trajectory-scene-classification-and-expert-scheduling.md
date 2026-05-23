---
title: "SceneSelect: Selective Learning for Trajectory Scene Classification and Expert Scheduling"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.24514"
author: "Xinrun Wang, Deshun Xia, Yuxi Sun, Weijie Zhu"
categories: ["cs.LG"]
---

arXiv:2604.24514v2 Announce Type: replace Abstract: Accurate trajectory prediction is fundamentally challenging due to high scene heterogeneity - the severe variance in motion velocity, spatial density, and interaction patterns across different real-world environments. However, most existing approaches typically train a single unified model, expecting a fixed-capacity architecture to generalize universally across all possible scenarios. This conventional model-centric paradigm is fundamentally flawed when confronting such extreme heterogeneity, inevitably leading to a severe generalization gap, degraded accuracy, and massive computational waste. To overcome this bottleneck, rather than refining restricted model-centric architectures, we propose selective learning, a novel scene-centric paradigm. It explicitly analyzes the characteristics of the underlying scene to dynamically route inputs to the most appropriate expert models. As a concrete implementation of this paradigm, we introduce SceneSelect. Specifically, SceneSelect utilizes unsupervised clustering on interpretable geometric and kinematic features to discover a latent scene taxonomy. A highly decoupled classification module is then trained to assign real-time inputs to these scene categories, and a highly extensible, plug-and-play scheduling policy automatically dispatches the trajectory sequence to the optimal expert predictor. Crucially, this decoupled design ensures excellent generalization capabilities, allowing seamless integration with different off-the-shelf models and robust adaptation across new datasets without requiring computationally expensive joint retraining. Extensive experiments on three public benchmarks (ETH-UCY, SDD, and NBA) demonstrate that our method consistently outperforms strong single-model and ensemble baselines, achieving an average improvement of 10.5%, showcasing the effectiveness of scene-aware selective learning.

---

📖 [Read original article](https://arxiv.org/abs/2604.24514)