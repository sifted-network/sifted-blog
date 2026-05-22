---
title: "WorldParticle: Unified World Simulation of Lagrangian Particle Dynamics via Transformer"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.15305"
author: "Caoliwen Wang, Minghao Guo, Siyuan Chen, Heng Zhang, Mengdi Wang, Xingyu Ni, Hanson Sun, Kunyi Wang, Zherong Pan, Kui Wu, Lingjie Liu, Yin Yang, Chenfanfu Jiang, Taku Komura, Wojciech Matusik, Peter Yichen Chen"
categories: ["cs.GR", "cs.LG"]
---

arXiv:2605.15305v4 Announce Type: replace-cross Abstract: A unified simulator that can model diverse physical phenomena without solver-specific redesign is a long-standing goal across simulation science. We present a learning-based particle simulator built on a single transformer architecture to model cloth, elastic solds, Newtonian and non-Newtonian fluids, granular materials, and molecular dynamics. Our model follows a prediction-correction design on a shared Lagrangian particle representation. An explicit predictor first advances particles under the known external forces, producing an intermediate state that captures externally driven motion but not inter-particle interactions. A learned corrector then predicts the residual position and velocity updates through three stages: a particle tokenizer that encodes local particle-particle, particle-boundary, and topology-guided interactions; a super-token encoder that hierarchically merges particle tokens into a compact set of super tokens via alternating self-attention and token merging; and a super-token decoder that lifts these super tokens back to particle resolution through cross-attention to predict per-particle position and velocity corrections. Progressive token merging reduces the attention cost at successive encoder layers by halving the token count at each level, and the decoder communicates through the compact super-token set rather than full particle-to-particle attention. Across the six dynamics categories, the same architecture generalizes to unseen materials, boundary configurations, initial conditions, and external forces. We further demonstrate downstream interactive control, inverse design, and learning from real-world manipulation data, reducing the need for per-phenomenon solver engineering.

---

📖 [Read original article](https://arxiv.org/abs/2605.15305)