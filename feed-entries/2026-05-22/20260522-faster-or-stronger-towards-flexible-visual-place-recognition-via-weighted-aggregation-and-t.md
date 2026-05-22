---
title: "Faster or Stronger: Towards Flexible Visual Place Recognition via Weighted Aggregation and Token Pruning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20551"
author: "Zichao Zeng, June Moh Goo, Junwei Zheng, Weijia Fan, Jiaming Zhang, Rainer Stiefelhagen, Jan Boehm"
categories: ["cs.CV", "cs.AI", "cs.RO"]
---

arXiv:2605.20551v1 Announce Type: cross Abstract: Visual Place Recognition (VPR) aims to match a query image to reference images of the same place in a large-scale database. Recent state-of-the-art methods employ Vision Transformers (ViTs) as backbone foundation models to extract patch-level features that are robust to viewpoint, illumination, and seasonal variations, which are then aggregated into a compact global descriptor for retrieval. Most existing aggregation methods uniformly pool patch tokens into learned clusters, despite the fact that different clusters often encode distinct spatial or semantic patterns and contribute unequally to VPR performance. To address this limitation, we propose Weighted Aggregated Descriptor (WeiAD), which assigns weights to clusters during aggregation, producing more discriminative global representations. Beyond accuracy, retrieval latency is a critical concern for large-scale deployments and resource-constrained edge devices. Prior work mainly reduces latency by compressing global descriptors, while overlooking the cost of feature extraction, an issue exacerbated by ViT-based backbones. We therefore introduce WeiToP, a VPR-oriented token pruning framework that reduces feature extraction cost via self-distillation, where aggregation-induced token importance supervises a lightweight pruning module attached to an early transformer layer, enabling inference-time token pruning. After a single joint training phase, WeiToP enables plug-and-play token pruning at inference time, allowing flexible and on-demand control over the accuracy-efficiency trade-off without additional training. Moreover, WeiToP outperforms existing token pruning methods adapted from general vision tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.20551)