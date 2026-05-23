---
title: "ASAP: Attention Sink Anchored Pruning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22372"
author: "Jaehyuk Lee, Hanyoung Kim, Yanggee Kim, Donghun Lee"
categories: ["cs.LG"]
---

arXiv:2605.22372v1 Announce Type: new Abstract: Vision Transformers (ViTs) face severe computational bottlenecks due to the quadratic complexity of self-attention at high resolutions. Existing token reduction methods rely on local metrics - such as single-layer attention scores - that are inherently vulnerable to the attention sink phenomenon, where uninformative tokens are paradoxically preserved over salient foreground objects. We propose ASAP (Attention Sink Anchored Pruning), a training-free framework that recasts this sink as a feature. Modeling ViT information flow as a Lazy Random Walk, ASAP identifies the sink as a dominant accumulator of probability mass. By computing the diffusion distance to the sink within the cumulative transition matrix, ASAP partitions tokens via Radial Diffusion Clustering and compresses background redundancy through Transition Weight Pooling in a single shot. Extensive experiments across image, video, and vision-language tasks demonstrate ASAP outperforms state-of-the-art methods, accelerating throughput by up to 48% while maintaining - or even exceeding - baseline accuracy.

---

📖 [Read original article](https://arxiv.org/abs/2605.22372)