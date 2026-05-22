---
title: "Activation-Free Backbones for Image Recognition: Polynomial Alternatives within MetaFormer-Style Vision Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20839"
author: "Jeffrey Wang, Jonathan Gregory, Grigorios G. Chrysos"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20839v1 Announce Type: cross Abstract: Modern vision backbones treat pointwise activations (e.g., ReLU, GELU) and exponential softmax as essential sources of nonlinearity, but we demonstrate they are not required within MetaFormer-style vision backbones. We design activation-free polynomial alternatives for three core primitives (MLPs, convolutions, and attention), where Hadamard products replace standard nonlinearities to yield polynomial functions of the input. These modules integrate seamlessly into existing architectures: instantiated within MetaFormer, a modular framework for vision backbones, our PolyNeXt models match or exceed activation-based counterparts across model scales on ImageNet classification, ADE20K semantic segmentation, and out-of-distribution robustness. We also substantially outperform prior polynomial networks at reduced computational cost, showing that polynomial variants of standard modules beat complex custom architectures.

---

📖 [Read original article](https://arxiv.org/abs/2605.20839)