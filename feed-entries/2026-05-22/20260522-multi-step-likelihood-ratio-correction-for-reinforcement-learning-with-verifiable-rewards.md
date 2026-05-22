---
title: "Multi-Step Likelihood-Ratio Correction for Reinforcement Learning with Verifiable Rewards"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20865"
author: "Deokgyu Yoon, Hyungkyu Kang, Joongkyu Lee, Byeongchan Kim, Gyungin Shin, Sungrae Park, Min-hwan Oh"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20865v1 Announce Type: cross Abstract: Reinforcement learning with verifiable rewards (RLVR) plays a pivotal role in improving the reasoning ability of large language models. However, widely used PPO surrogate objectives are fundamentally local, as they rely on a local approximation of the exact policy gradient objective. While this approximation improves stability by reducing the variance induced by importance sampling, it also introduces structural bias into the surrogate objective, which must be controlled through trust region mechanisms. In this work, we introduce the $N$-step forward trace, which augments the PPO surrogate objective using the cumulative likelihood ratio of the next $N-1$ tokens. Building on this idea, we propose $N$-Step Forward-Trace Policy Optimization (NFPO), a practical RLVR algorithm that integrates the $N$-step forward trace into the masked policy gradient framework. NFPO provides a continuous bridge between the PPO surrogate objective and the exact policy gradient objective, offering a principled mechanism for controlling the bias-variance trade-off. Our theoretical analysis shows that, with an appropriate choice of $N$, the proposed objective yields a tighter policy-improvement bound than the standard PPO surrogate. Experiments on comprehensive reasoning benchmarks demonstrate that NFPO consistently improves performance, supporting our theoretical findings.

---

📖 [Read original article](https://arxiv.org/abs/2605.20865)