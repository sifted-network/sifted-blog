---
title: "Optimization Hyper-parameter Laws for Large Language Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2409.04777"
author: "Xingyu Xie, Kuangyu Ding, Shuicheng Yan, Kim-Chuan Toh, Tianwen Wei"
categories: ["cs.LG", "math.OC"]
---

arXiv:2409.04777v4 Announce Type: replace Abstract: Large Language Models have driven significant AI advancements, yet their training is resource-intensive and highly sensitive to hyper-parameter selection. While scaling laws provide valuable guidance on model size and data requirements, they fall short in choosing dynamic hyper-parameters, such as learning-rate (LR) schedules, that evolve during training. To bridge this gap, we present Optimization Hyper-parameter Laws (Opt-Laws), a framework that predicts final training loss as a function of LR schedule, model size, and data size. Grounded in SDE-based convergence and escape analyses, Opt-Laws yield interpretable convergence and escape features that predict final training loss across model scales, enabling schedule pre-selection from small-scale experiments. Empirically, Opt-Laws achieve a 94% Top-2 hit rate for identifying near-optimal schedule candidates on held-out configurations, correctly identify the best-performing schedule family in all five evaluated out-of-family settings, and detect training divergence with F1 = 0.92.

---

📖 [Read original article](https://arxiv.org/abs/2409.04777)