---
title: "Conceptualizing Embeddings: Sparse Disentanglement for Vision-Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22679"
author: "Piotr Kubaty, Patryk Marsza{\\l}ek, {\\L}ukasz Struski, Adam Wr\\'obel, Jacek Tabor, Marek \\'Smieja"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.22679v1 Announce Type: cross Abstract: Vision-language models learn powerful multimodal embeddings, yet their internal semantics remain opaque. While sparse autoencoders (SAEs) can extract interpretable features, they rely on expanding the representation dimension, which compromises the original geometry and introduces redundancy. We introduce CEDAR (Conceptual Embedding Disentanglement via Adaptive Rotation), a post-hoc method that reveals the compositional structure of pretrained embeddings without increasing dimensionality. By learning an invertible transformation with a top-$k$ sparsity bottleneck, CEDAR concentrates semantic information into axis-aligned disentangled coordinates. In CLIP-like architecture, individual coordinates can be interpreted with textual concepts, while for generative models such as BLIP, they can be decoded into natural language descriptions. Experiments demonstrate that CEDAR achieves a competitive reconstruction-sparsity trade-off while producing explanations that are more interpretable and better aligned with human perception. Our results suggest that the apparent entanglement in vision-language representations can be resolved through a suitable change of basis, eliminating the need for overcomplete expansions.

---

📖 [Read original article](https://arxiv.org/abs/2605.22679)