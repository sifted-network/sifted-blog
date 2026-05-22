---
title: "Rebalancing Reference Frame Dominance to Improve Motion in Image-to-Video Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19398"
author: "Wooseok Jeon, Seungho Park, Seunghyun Shin, Sangeyl Lee, Hyeonho Jeong, Hae-Gon Jeon"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.19398v2 Announce Type: replace-cross Abstract: Image-to-video models often generate videos that remain overly static, compared to text-to-video models. While prior approaches mitigate this issue by weakening or modifying the image-conditioning signal, they often require additional training or sacrifice fidelity to the reference image. In this work, we identify reference-frame dominance as a key mechanism behind motion suppression. We observe that non-reference frames in I2V models allocate excessive self-attention to reference-frame key tokens, causing reference information to be over-propagated across time and suppressing inter-frame dynamics. Based on this finding, we propose DyMoS (Dynamic Motion Slider), a training-free and model-agnostic method that rebalances the attention pathway from generated frames to the reference frame during initial denoising steps. DyMoS leaves both the input image and model weights unchanged and introduces a single scalar parameter for continuous control over motion strength. Experiments across multiple state-of-the-art I2V backbones demonstrate that DyMoS consistently improves motion dynamics while maintaining visual quality and fidelity to the reference image.

---

📖 [Read original article](https://arxiv.org/abs/2605.19398)