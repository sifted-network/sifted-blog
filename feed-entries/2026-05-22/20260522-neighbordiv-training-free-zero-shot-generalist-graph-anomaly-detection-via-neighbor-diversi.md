---
title: "NeighborDiv: Training-free Zero-shot Generalist Graph Anomaly Detection via Neighbor Diversity"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20879"
author: "Kaifeng Wei, Teng Liu, Liang Dong, Xiubo Liang, Yuke Li"
categories: ["cs.LG"]
---

arXiv:2605.20879v1 Announce Type: new Abstract: Graph Anomaly Detection (GAD) is increasingly shifting to Generalist GAD (GGAD) for cross-domain "one-for-all" detection, but existing GGAD methods predominantly rely on the neighbor consistency principle, falling into the \textbf{Node-to-Neighbor Consistency Paradigm} for anomaly quantification. These methods suffer from complex training pipelines, heavy training data dependency, high computational costs, and unstable cross-domain generalization. To address these limitations, we propose NeighborDiv, a training-free generalist graph anomaly detection framework based on neighbor diversity. Departing from the dominant Node-to-Neighbor Consistency Paradigm, we shift the focus to the \textbf{Neighbor-to-Neighbor Diversity Paradigm}, and uncover that the internal structural dispersion of a node's neighbor set is a powerful, independently discriminative anomaly signal. We quantify neighbor diversity via the variance of inter-neighbor feature similarities, which captures how a node organizes its local graph environment, and operates independently of conventional node-to-neighbor consistency frameworks. Extensive experiments under two standard GGAD evaluation paradigms show NeighborDiv achieves state-of-the-art performance, with relative gains of 10.25% in average AUC and 17.78% in average AP over the second-best baseline under Single-Domain Independent Training (SDIT), and 6.89%/9.58% in AUC/AP under Unified Multi-Domain Training (UMDT), respectively. Notably, NeighborDiv yields zero performance volatility across all datasets, eliminating training-set dependency and establishing a lightweight and highly practical GGAD framework.

---

📖 [Read original article](https://arxiv.org/abs/2605.20879)