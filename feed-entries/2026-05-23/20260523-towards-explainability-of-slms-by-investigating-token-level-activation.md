---
title: "Towards Explainability of SLMs by investigating Token Level Activation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22377"
author: "Sayantani Ghosh, Rajashik Datta, Amit Kumar Das, Amlan Chakrabarti"
categories: ["cs.LG"]
---

arXiv:2605.22377v1 Announce Type: new Abstract: Transformer-based language models such as BERT having 110M+ parameters have revolutionized natural language understanding, yet their internal mechanisms remain largely opaque to researchers and practitioners. Traditional attention-based interpretability methods often emphasize structurally important but semantically weak tokens such as punctuation marks rather than meaningful semantic relationships. This work introduces a lightweight and model-agnostic framework for quantifying token-level representational importance using hidden-state activation strengths at Layer 8 of BERT. The proposed Activation Flow Network (AFN) framework computes Token Activation Strength using the L2 norm of Layer-8 hidden representations, enabling direct ranking of semantically salient tokens. The study further introduces a threshold-based activation bucket formulation that partitions tokens into HIGH-activation and LOW-activation groups using an empirical upper-quartile activation boundary. Experimental observations demonstrate that semantically meaningful content words consistently occupy the HIGH-activation bucket and dominate representational activation shifts, while structurally supportive tokens contribute comparatively less. The results suggest that Layer 8 acts as a critical semantic consolidation zone balancing structural and semantic information processing. By revealing how activation magnitudes concentrate around semantically informative tokens, this work provides an interpretable and computationally efficient alternative to attentioncentric analysis, contributing toward transforming BERT from a "black box" into a more transparent "glass box" model for natural language understanding.

---

📖 [Read original article](https://arxiv.org/abs/2605.22377)