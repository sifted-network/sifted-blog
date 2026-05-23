---
title: "Live Music Diffusion Models: Efficient Fine-Tuning and Post-Training of Interactive Diffusion Music Generators"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22717"
author: "Zachary Novack, Stephen Brade, Haven Kim, Hugo Flores Garc\\'ia, Nithya Shikarpur, Chinmay Talegaonkar, Suwan Kim, Valerie K. Chen, Julian McAuley, Taylor Berg-Kirkpatrick, Cheng-Zhi Anna Huang"
categories: ["cs.SD", "cs.AI", "cs.LG", "cs.MM"]
---

arXiv:2605.22717v1 Announce Type: cross Abstract: Interactive streaming music generation promises the use of generative models for live performance and co-creation that is impossible with offline models. However, SOTA models exist in the discrete-AR regime, requiring industrial levels of compute for both training and inference. In this work, we investigate whether audio diffusion models, with their wide support in the open-source community but non-streaming bidirectional nature, can be repurposed efficiently into interactive models accessible on consumer hardware. By taking a critical look at the modern pipeline for block-wise outpainting diffusion, we identify critical inefficiencies during inference that result in strictly worse computational efficiency than their discrete-AR counterparts. We propose Live Music Diffusion Models (LMDMs), a simple modification of the generative diffusion process that recovers, and then outperforms, the inference complexity of the discrete Live Music Models (LMMs) through block-wise KV Caching. Unlike LMMs, LMDMs further enable stable post-training alignment through our novel ARC-Forcing paradigm, reducing error accumulation without any explicit RL or reward models. We demonstrate the application of LMDMs in a number of creative domains, including text-conditioned generation, sketch-based music synthesis, and jamming. We finally show how LMDMs can be used as a generative instrument in a real artist-AI collaboration, utilizing LMDMs as a "generative delay" to transform musicians' improvisation live for variable timbral effects while running locally on a consumer gaming laptop.

---

📖 [Read original article](https://arxiv.org/abs/2605.22717)