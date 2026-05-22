---
title: "Deformba: Vision State Space Model with Adaptive State Fusion"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21308"
author: "Hongyu Ke, Jack Morris, Yongkang Liu, Satoshi Kitai, Kentaro Oguchi, Yi Ding, Haoxin Wang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21308v1 Announce Type: cross Abstract: State Space Models (SSMs) have emerged as a powerful and efficient alternative to Transformers, demonstrating linear-time complexity and exceptional sequence modeling capabilities. However, their application to vision tasks remains challenging. First, existing vision SSMs largely depend on manually designed fixed scanning methods to flatten image patches into sequences, which imposes predefined geometric structures and increases the complexity. Second, the broader adoption of vision SSMs is hindered in domains that require query-based interactions between distinct information streams. This is a result of the inherently causal and self-referential nature of SSMs designed for 1D sequence modeling tasks. This fusion mechanism is indispensable for critical perception tasks such as multi-view 3D fusion. To address these limitations, we propose Deformba, a context adaptive method that dynamically augments the spatial structural information while maintaining the linear complexity of SSMs. Deformba also allows multi-modal fusion like cross attention. To demonstrate the effectiveness and general applicability of Deformba, we test its performance on general 2D vision tasks such as image classification, object detection, and segmentation, as well as 3D vision tasks like BEV perception. Extensive experiments show that Deformba achieves strong performance across various visual perception benchmarks.

---

📖 [Read original article](https://arxiv.org/abs/2605.21308)