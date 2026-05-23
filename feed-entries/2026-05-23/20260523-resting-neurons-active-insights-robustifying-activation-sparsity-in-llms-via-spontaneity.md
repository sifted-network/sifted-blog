---
title: "Resting Neurons, Active Insights: Robustifying Activation Sparsity in LLMs via Spontaneity"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.12744"
author: "Haotian Xu, Jiannan Yang, Tian Gao, Tsui-Wei Weng, Tengfei Ma"
categories: ["cs.LG"]
---

arXiv:2512.12744v4 Announce Type: replace Abstract: Activation sparsity offers a compelling route to accelerate large language model (LLM) inference by selectively suppressing hidden activations, yet existing approaches exhibit severe accuracy degradation at high sparsity. We show that this failure stems from representational instability: *activation sparsity disrupts input-dependent activation learned during pretraining, inducing distribution shifts in hidden states.* We address this issue by reframing activation sparsity as a representational alignment problem and introducing **Spontaneous Neurons (SPON)**, a lightweight mechanism inspired by spontaneous neural activity in biological systems. SPON injects a small set of learnable, input-independent activation vectors that act as persistent representational anchors for sparse computation. These vectors are trained via distribution matching to the dense model and can be absorbed into bias terms after training, incurring negligible inference overhead. Across multiple LLM backbones, SPON consistently restores performance, stabilizes latent representations, and preserves generalization. Our results establish SPON as an effective and principled solution for reliable activation-sparse inference, and offer new insights into knowledge retention in LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2512.12744)