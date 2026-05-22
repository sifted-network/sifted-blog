---
title: "Conflict-Aware Additive Guidance for Flow Models under Compositional Rewards"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20758"
author: "Xuehui Yu, Fucheng Cai, Meiyi Wang, Xiaopeng Fan, Harold Soh"
categories: ["cs.AI", "cs.CV", "cs.LG", "cs.RO"]
---

arXiv:2605.20758v1 Announce Type: new Abstract: Inference-time guided sampling steers state-of-the-art diffusion and flow models without fine-tuning by interpreting the generation process as a controllable trajectory. This provides a simple and flexible way to inject external constraints (e.g., cost functions or pre-trained verifiers) for controlled generation. However, existing methods often fail when composing multiple constraints simultaneously, which leads to deviations from the true data manifold. In this work, we identify root causes of this off-manifold drift and find that the approximation error scales severely with gradient misalignment. Building on these findings, we propose Conflict-Aware Additive Guidance ($g^\text{car}$), a lightweight and learnable method, which actively rectifies off-manifold drift by dynamically detecting and resolving gradient conflicts. We validate $g^\text{car}$ across diverse domains, ranging from synthetic datasets and image editing to generative decision-making for planning and control. Our results demonstrate that $g^\text{car}$ effectively rectifies off-manifold drift, surpassing baselines in generation fidelity while using light compute. Code is available at https://github.com/yuxuehui/CAR-guidance.

---

📖 [Read original article](https://arxiv.org/abs/2605.20758)