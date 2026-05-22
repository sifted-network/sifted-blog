---
title: "FAIR-Pruner: A Flexible Framework for Automatic Layer-Wise Pruning via Tolerance of Difference"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2508.02291"
author: "Chenqing Lin, Mostafa Hussien, Chengyao Yu, Bingyi Jing, Ruixing Ming, Kim Khoa Nguyen, Mohamed Cheriet"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2508.02291v3 Announce Type: replace-cross Abstract: Structured pruning is a standard tool for compressing deep neural networks, but its practical performance depends on how sparsity is allocated across layers. We propose FAIR-Pruner, a search-free framework for adaptive layer-wise structured pruning. FAIR-Pruner uses two within-layer rankings: a removal-oriented signal that proposes candidate units and a protection-oriented signal that identifies task-sensitive units. Its core component, Tolerance of Difference (ToD), measures the overlap between the removal prefix and the protected tail, and uses a shared tolerance level to induce non-uniform pruning depths across layers. As a default vision instantiation, FAIR-Pruner combines a Wasserstein-based U-Score for class-conditional unit separability with a Taylor-based R-Score for task-level sensitivity; the same ToD allocation rule can also be paired with alternative removal signals. Theoretically, we analyze ToD through the population R-Score, derive rank-based control of the high-R-Score mass entering the pruning set, and identify an additive exchange condition for same-budget comparison with uniform pruning. Experiments on CIFAR-10, CIFAR-100, SVHN, and ImageNet across VGG, ResNet, DenseNet, ConvNeXt, and DeiT show strong accuracy--compression trade-offs. Prune-only experiments on routed-expert Qwen1.5-MoE-A2.7B-Chat further examine architectural extensibility under matched expert budgets. FAIR-Pruner is released as a pip-installable open-source package.

---

📖 [Read original article](https://arxiv.org/abs/2508.02291)