---
title: "When Shared Knowledge Hurts: Spectral Over-Accumulation in Model Merging"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.05536"
author: "Yayuan Li, Ze Peng, Jian Zhang, Jintao Guo, Yue Duan, Yinghuan Shi"
categories: ["cs.LG", "cs.AI", "cs.CL", "cs.CV"]
---

arXiv:2602.05536v2 Announce Type: replace-cross Abstract: Model merging combines multiple fine-tuned models into a single model by adding their weight updates, providing a lightweight alternative to retraining. Existing methods primarily target resolving conflicts between task updates, leaving the failure mode of over-counting shared knowledge unaddressed. We show that when tasks share aligned spectral directions (i.e., overlapping singular vectors), a simple linear combination repeatedly accumulates these directions, inflating the singular values and biasing the merged model toward shared subspaces. To mitigate this issue, we propose Singular Value Calibration (SVC), a training-free and data-free post-processing method that quantifies subspace overlap and rescales inflated singular values to restore a balanced spectrum. Across vision and language benchmarks, SVC consistently improves strong merging baselines and achieves state-of-the-art performance. Furthermore, by modifying only the singular values, SVC improves the performance of Task Arithmetic by 13.0%. Code is available at https://github.com/lyymuwu/SVC.

---

📖 [Read original article](https://arxiv.org/abs/2602.05536)