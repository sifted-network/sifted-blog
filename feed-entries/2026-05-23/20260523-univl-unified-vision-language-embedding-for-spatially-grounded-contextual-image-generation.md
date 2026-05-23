---
title: "UniVL: Unified Vision-Language Embedding for Spatially Grounded Contextual Image Generation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21611"
author: "Jiayun Wang, Yu Wang, Weijie Gan, Zhenting Wang, Wei Wei"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21611v1 Announce Type: cross Abstract: We introduce spatially grounded contextual image generation, a controllable image generation task that reframes the conditioning paradigm. Instead of supplying a reference image and a global text prompt through two separate encoders, one for vision and one for language, UniVL is trained to bind semantics to spatial locations directly from a single unified visual input, where the textual instruction is rendered onto the spatial mask. This removes the need for a standalone text encoder at inference time. The resulting model supports contextual image generation by following user-specified instructions about what should appear where, while substantially reducing computation. To address this task, we propose a framework in which the UniVL encoder, adapted from an optical-character-recognition-pretrained backbone, reads the unified condition optically and produces a UniVL embedding, fVIL, that fuses visual and semantic intent with spatial locations in a single token sequence. A two-stage pipeline first aligns UniVL with the VAE embedding space and then conditions a pretrained diffusion backbone entirely on UniVL embeddings, eliminating the standalone text encoder, such as T5. Although this reframing uses a deliberately minimal text interface, it yields strong empirical gains. On UniVL-ImgGen, a benchmark of 477K mask-annotated images that we construct for training and evaluation, UniVL improves image quality over text-prompted baselines, reducing FID from 14 to 11 and increasing PSNR from 16 to 20. It also eliminates the text encoder entirely, reducing inference TFLOPs by up to 52% and runtime by up to 44%. Additional ablation studies validate the contributions of the proposed components, paving the way for efficient, spatially grounded image generation with a unified conditioning paradigm.

---

📖 [Read original article](https://arxiv.org/abs/2605.21611)