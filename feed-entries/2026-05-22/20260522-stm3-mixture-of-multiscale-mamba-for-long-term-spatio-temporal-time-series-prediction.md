---
title: "STM3: Mixture of Multiscale Mamba for Long-Term Spatio-Temporal Time-Series Prediction"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2508.12247"
author: "Haolong Chen, Liang Zhang, Zhengyuan Xin, Guangxu Zhu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2508.12247v2 Announce Type: replace-cross Abstract: Recently, spatio-temporal time-series prediction has developed rapidly, yet existing deep learning methods struggle with learning complex long-term spatio-temporal dependencies efficiently. The long-term spatio-temporal dependency learning brings two new challenges: 1) The long-term temporal sequence naturally includes multiscale information, which is hard to extract efficiently; 2) The multiscale temporal information from different nodes is highly correlated and hard to model. To address these challenges, we propose Spatio-Temporal Mixture of Multiscale Mamba (STM3). STM3 integrates a Multiscale Mamba architecture within a novel Disentangled Mixture-of-Experts (DMoE) framework to capture diverse multiscale information efficiently, while utilizing an adaptive graph causal network to model complex spatial dependencies. To ensure robust representation learning, we introduce a stable routing strategy and a causal contrastive learning strategy, which work in tandem with hierarchical information aggregation to guarantee scale distinguishability. We theoretically prove that STM3 achieves superior routing smoothness and guarantees pattern disentanglement for each expert. Extensive experiments on 10 real-world benchmarks across domains demonstrate STM3's superior performance, achieving state-of-the-art results in long-term spatio-temporal time-series prediction. Notably, on the PEMSD8 dataset, it achieves significant improvements, surpassing the second-best model by 7.1% in MAE, 8.5% in RMSE, and 15.9% in MAPE. Code is available at https://github.com/IfReasonable/STM3_KDD26.

---

📖 [Read original article](https://arxiv.org/abs/2508.12247)