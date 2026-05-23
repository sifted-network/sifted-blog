---
title: "Attend Locally, Remember Linearly: Linear Attention as Cross-Frame Memory for Autoregressive Video Diffusion"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.16579"
author: "Kunyang Li, Mubarak Shah, Yuzhang Shang"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.16579v2 Announce Type: replace-cross Abstract: Autoregressive (AR) video diffusion is a powerful paradigm for streaming and interactive video generation. However, its reliance on softmax self-attention leads to quadratic compute complexity in sequence length and memory usage due to key-value caching, which limits its scalability to long video horizons. Existing remedies (e.g., sparse attention and KV-cache compression) reduce per-step cost but still rely on a linearly growing cache or irreversibly discard past context, and thus fail to address linear memory growth and streaming context management. To address this scalability bottleneck, we propose ARL2 (Attend Locally, Remember Linearly), a hybrid attention module that replaces quadratic cross-frame attention with a fixed-size recurrent state. We decompose self-attention into two branches: an intra-frame softmax branch for spatial detail and local dependencies, and an inter-frame gated recurrent linear branch that maintains a fixed-size state for streaming context. Our key insight is that softmax attention captures fine-grained local interactions, while a recurrent state provides controllable long-range memory. This design achieves linear-time scaling with constant memory while improving temporal consistency over the full-softmax model. To prevent noisy intermediate states from corrupting memory, we update the recurrent state only after the denoised pass. To avoid within-frame information asymmetry, all tokens share the same pre-update state rather than sequential updates. To the best of our knowledge, this is the first work to convert a pretrained AR video diffusion model into a hybrid linear attention architecture, through an efficient two-stage training scheme for AR video. With 75% of layers replaced by hybrid linear attention, the model achieves up to 2.26 wall-clock speedup and 54% memory reduction, while maintaining comparable quality with improving temporal consistency.

---

📖 [Read original article](https://arxiv.org/abs/2605.16579)