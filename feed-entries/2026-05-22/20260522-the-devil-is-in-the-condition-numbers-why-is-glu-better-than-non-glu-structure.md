---
title: "The Devil is in the Condition Numbers: Why is GLU Better than non-GLU Structure?"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20749"
author: "Xingyu Lyu, Qianqian Xu, Zhiyong Yang, Peisong Wen, Qingming Huang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20749v1 Announce Type: cross Abstract: Gated Linear Units (GLU) and their variants are widely adopted in modern open-source large language model architectures and consistently outperform their non-gated counterparts, yet the underlying reasons for this advantage remain unclear. In this work, we study GLU by analyzing two-layer networks in the neural tangent kernel (NTK) regime. Our analysis reveals that the GLU structure reshapes the NTK spectrum, leading to a smaller condition number and a more compact eigenvalue distribution. Building on this finding, we further analyze the resulting training dynamics and show how the reshaped spectrum leads to faster convergence of GLU models, including a characteristic loss-crossing phenomenon observed between GLU and non-GLU models. Finally, we empirically observe that GLU has limited impact in reducing the generalization gap on various models, including ViT and GPT-2, suggesting that its primary benefit lies in accelerating optimization rather than reducing the generalization gap.

---

📖 [Read original article](https://arxiv.org/abs/2605.20749)