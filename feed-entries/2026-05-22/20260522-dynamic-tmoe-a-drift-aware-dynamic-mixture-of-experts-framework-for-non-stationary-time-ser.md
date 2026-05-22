---
title: "Dynamic TMoE: A Drift-Aware Dynamic Mixture of Experts Framework for Non-Stationary Time Series Forecasting"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20678"
author: "Jiawen Zhu, Shuhan Liu, Di Weng, Yingcai Wu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20678v1 Announce Type: cross Abstract: Non-stationary time series forecasting is challenged by evolving distribution shifts that static models struggle to capture. While Mixture-of-Experts (MoE) architectures offer a promising paradigm for decoupling complex drift patterns, existing approaches are limited by fixed expert pools and memoryless routing, hampering their ability to adapt to abrupt regime shifts. To address this, we propose Dynamic TMoE, a framework that unifies architectural evolution with temporal continuity during learning phase. By detecting distribution shifts via Maximum Mean Discrepancy (MMD), we dynamically instantiate heterogeneous experts and prune redundant ones to optimize capacity. Additionally, a temporal memory router leverages recurrent states and an anomaly repository to ensure stable, context-aware expert selection without requiring test-time updates. Experiments on nine benchmarks demonstrate state-of-the-art performance, reducing MSE by 10.4% and MAE by 7.8%. Code is available at https://github.com/andone-07/Dynamic-TMoE.

---

📖 [Read original article](https://arxiv.org/abs/2605.20678)