---
title: "Circle-RoPE: Cone-like Decoupled Rotary Positional Embedding for Large Vision-Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2505.16416"
author: "Chengcheng Wang, Jianyuan Guo, Hongguang Li, Yuchuan Tian, Ying Nie, Chang Xu, Kai Han"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2505.16416v3 Announce Type: replace-cross Abstract: Rotary Position Embedding (RoPE) is widely adopted in large language models, but when applied to vision-language models (VLMs) it couples text and image position indices and can introduce spurious cross-modal relative-position bias. We propose Per-Token Distance (PTD) to quantify cross-modal positional disentanglement, and prove that PTD = 0 is a sufficient condition to eliminate the geometric attention bias induced by RoPE. Guided by this criterion, we introduce Circle-RoPE, which remaps 2D image-token coordinates onto an annulus orthogonal to the text position axis, yielding a cone-like geometry where each text token is equidistant to all image tokens while preserving intra-image spatial structure. We further propose Alternating Geometry Encoding (AGE) to combine complementary geometric priors by alternating the decoupled geometry of Circle-RoPE and the grid-based prior of standard RoPE across layers. This design enables cross-modal positional disentanglement while preserving fine-grained intra-image spatial structure. Experiments on diverse VLM backbones and multimodal benchmarks show consistent gains in spatial grounding and visual reasoning. The code is available at https://github.com/lose4578/CircleRoPE.

---

📖 [Read original article](https://arxiv.org/abs/2505.16416)