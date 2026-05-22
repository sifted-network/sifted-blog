---
title: "FullFlow: Upgrading Text-to-Image Flow Matching Models for Bidirectional Vision--Language Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20316"
author: "Eric Tillmann Bill, Enis Simsar, Alessio Tonioni, Thomas Hofmann"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20316v1 Announce Type: cross Abstract: Modern text-to-image diffusion models encode rich visual priors, but expose them only through one-way text-conditioned generation. Existing unified vision--language models derived from them recover bidirectional capability through large-scale joint pretraining or substantial retraining of the text pathway, discarding the strong image prior the text-to-image backbone already encodes. We introduce \emph{FullFlow}, a parameter-efficient recipe that upgrades a pretrained rectified-flow text-to-image model into a bidirectional vision--language generator by training only LoRA adapters and lightweight text heads. FullFlow keeps images in their native continuous flow and adds a discrete insertion process for text. Separate image and text timesteps turn inference into trajectory selection in a two-dimensional generative space, enabling text$\rightarrow$image, image$\rightarrow$text, joint sampling, and partial-text prediction with a single backbone. On Stable Diffusion 3 (SD3) under an identical trainable-parameter count and matched LoRA rank, FullFlow improves text$\rightarrow$image FID from $62.7$ to $31.6$ and image$\rightarrow$text CIDEr from $2.0$ to $99.4$ over a LoRA equivalent following the previous SOTA formulation (Dual Diffusion) at matched wall-clock training time, while reducing peak VRAM from ${\sim}84$\,GB to ${\sim}38$\,GB and raising throughput by ${\sim}8\times$ on two RTX A5000 GPUs in under 24 hours, training only ${\sim}5\%$ of the backbone parameters. The same recipe transfers to FLUX.1-dev and supports downstream VQA through partial-text generation. These results show that strong bidirectional vision--language capability can be unlocked from pretrained text-to-image flow models without full multimodal pretraining.

---

📖 [Read original article](https://arxiv.org/abs/2605.20316)