---
title: "Bernini: Latent Semantic Planning for Video Diffusion"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22344"
author: "Bernini Team, Chenchen Liu, Junyi Chen, Lei Li, Lu Chi, Mingzhen Sun, Zhuoying Li, Yi Fu, Ruoyu Guo, Yiheng Wu, Ge Bai, Zehuan Yuan"
categories: ["cs.CV", "cs.AI", "cs.MM"]
---

arXiv:2605.22344v1 Announce Type: cross Abstract: Multimodal large language models (MLLMs) and diffusion models have each reached remarkable maturity: MLLMs excel at reasoning over heterogeneous multimodal inputs with strong semantic grounding, while diffusion models synthesize images and videos with photorealistic fidelity. We argue that these two families can be unified through a simple division of labor: MLLMs perform semantic planning, while diffusion models render pixels from high-level semantic guidance and low-level visual features. Building on this idea, we propose Bernini, a unified framework for video generation and editing. An MLLM-based planner predicts the target semantic representation directly in the ViT embedding space, and a DiT-based renderer synthesizes pixels conditioned on this plan, augmented by text features and, for editing, source VAE features for detail preservation. Because semantics serve as the interface, the planner and renderer can be trained separately and only lightly co-trained, preserving the pretrained strengths of both components while keeping training efficient. To better handle multiple visual inputs, we introduce Segment-Aware 3D Rotary Positional Embedding (SA-3D RoPE), and further incorporate chain-of-thought reasoning in the planner to better transfer understanding into generation. Bernini achieves state-of-the-art performance across a wide range of video generation and editing benchmarks, with the MLLM's pretrained understanding translating into strong generalization on challenging editing tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.22344)