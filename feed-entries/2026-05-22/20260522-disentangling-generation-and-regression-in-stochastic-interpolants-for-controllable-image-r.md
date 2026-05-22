---
title: "Disentangling Generation and Regression in Stochastic Interpolants for Controllable Image Restoration"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21381"
author: "Yi Liu, Jia Ma, Wengen Li, Jihong Guan, Shuigeng Zhou, Yichao Zhang"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21381v1 Announce Type: cross Abstract: Recent advances in Image Restoration (IR) have been largely driven by generative methods such as Diffusion Models and Flow Matching, which excel in synthesizing realistic textures while suffering from slow multi-step inference and compromised pixel fidelity. In contrast, classical regression-based IR methods excel precisely in these aspects, offering single-step efficiency and high pixel-level reconstruction fidelity. To bridge this gap, we propose DiSI, a unified framework that Disentangles the underlying Stochastic Interpolant process into independent generation and regression components. This decoupling endows DiSI with remarkable versatility, enabling a continuous and controllable transition from a pure regression process to a fully generative one. Technically, we instantiate this framework with two specific sampling trajectories, accompanied by a unified sampler for high-quality, few-step inference on arbitrary trajectories. Furthermore, we design a dual-branch U-Net style transformer network in pixel space, using a dedicated branch to enhance conditional guidance while ensuring high throughput. Extensive experiments demonstrate that DiSI efficiently achieves competitive results on various IR tasks, while uniquely offering the inference-time flexibility to control the distortion-perception trade-off within a single model.

---

📖 [Read original article](https://arxiv.org/abs/2605.21381)