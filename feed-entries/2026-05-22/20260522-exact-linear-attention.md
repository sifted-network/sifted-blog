---
title: "Exact Linear Attention"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.18848"
author: "Weinuo Ou"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.18848v2 Announce Type: replace-cross Abstract: This paper introduces Exact Linear Attention (ELA), a mechanism that achieves linear computational complexity for Transformer attention by exploiting the exact decomposition property of kernel functions, thereby eliminating approximation error. We identify and address two key limitations of prior linear attention -- gradient explosion and token attention dilution -- by imposing kernel constraints that ensure non-negativity, discriminability, and geometric interpretability. Several kernel functions are proposed, including the Hadamard Exp Kernel, Summation Squared Euclidean Distance Kernel, and Subtraction Squared Euclidean Distance Kernel, each tailored for specific attention behaviors. Beyond the core attention formulation, the paper presents three engineering innovations: (1) a Hyper-Link structure that replaces traditional residual connections to mitigate gradient degradation; (2) a Memory Lobe module based on bidirectional linear attention, which captures "transformation flow" across layers to implement qualitative memory and an implicit reinforcement learning paradigm; and (3) a routing-score-based bias mechanism for Mixture-of-Experts (MoE) to improve interpretability and semantic alignment. Experimental results demonstrate that ELA achieves up to 6x faster decoding speed and 75% reduction in KV cache memory usage compared to full attention, while maintaining comparable or superior training performance. The proposed memory module accelerates convergence and enhances generalization. Furthermore, we extend the linear attention principle to vision models, yielding YOLO-LAT, which attains up to 4.3x GPU inference speedup and 7.9x parameter reduction with competitive detection accuracy. These results underline the broad applicability of exact linear attention for scaling Transformer models to ultra-long sequences and efficient visual tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.18848)