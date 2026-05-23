---
title: "Temporal Aware Pruning for Efficient Diffusion-based Video Generation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.17837"
author: "Sheng Li, Yang Sui, Junhao Ran, Bo Yuan, Yue Dai, Xulong Tang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.17837v2 Announce Type: replace-cross Abstract: Video diffusion models have recently enabled high-quality video generation with ViT-based architectures, but remain computationally intensive because generation requires attention computation over long spatiotemporal sequences. Token pruning has proven effective for ViTs and VLMs. However, most prior pruning methods are attention-based and operate per frame, failing to ensure the vital temporal coherence across frames in video generation tasks. In practice, naively adopting attention-only pruning causes noticeable degradation due to worsened background consistency, flickering, and reduced image quality. To address this, we propose TAPE, a training-free Temporal Aware Pruning for Efficient diffusion-based video generation. TAPE (i) applies temporal smoothing to align token-importance across adjacent frames and suppress selection jitter; and (ii) performs token reselection in selected layers to align token pruning with layers' diverse semantic focus and avoid error accumulation in specific areas; it also (iii) adopt a timestep-level budget scheduling that prunes aggressively at early noisy steps and relaxes pruning during fidelity-critical refinement. The experimental results show that TAPE delivers significant speedups while preserving high visual fidelity, outperforming prior token reduction approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.17837)