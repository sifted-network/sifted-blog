---
title: "SymbolicLight V1: Spike-Gated Dual-Path Language Modeling with High Activation Sparsity and Sub-Billion-Scale Pre-Training Evidence"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21333"
author: "Ting Liu"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.21333v1 Announce Type: cross Abstract: Natively trained spiking language models struggle to combine Transformer-like language quality, stable multi-domain pre-training, and high activation sparsity. We present SymbolicLight V1, a spike-gated dual-path language model that combines binary Leaky Integrate-and-Fire spike dynamics with a continuous residual stream. Its Dual-Path SparseTCAM module replaces dense self-attention with an exponential-decay aggregation path for long-range memory and a spike-gated local attention path for short-range precision, complemented by a dynamic context-conditioned decoding head and a bilingual tokenizer. A 194M-parameter SymbolicLight V1 model trained from scratch on a 3B-token Chinese-English corpus reaches held-out validation PPL 8.88-8.93 across four independent runs at >89% per-element activation sparsity. It trails GPT-2 201M by 7.7% in PPL while surpassing GPT-2 124M under the reported comparison. Component ablations at matched 0.5B-token training budgets show that the spike-gated local attention path is the largest contributor, and that replacing LIF dynamics with a deterministic top-k mask at matched sparsity causes a larger degradation, indicating that temporal integration rather than sparsity alone drives performance. We also report a 0.8B-parameter scale-up run trained on 48.8B tokens as evidence of optimization and sparsity preservation, not as a primary quality comparison. Current dense-hardware inference is slower than GPT-2, so neuromorphic deployment is presented as a future sparsity-driven opportunity rather than an achieved hardware speedup.

---

📖 [Read original article](https://arxiv.org/abs/2605.21333)