---
title: "Spectral Souping: A Unified Framework for Online Preference Alignment"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20408"
author: "Yinlam Chow, Guy Tennenholtz, Ted Yun, James Harrison, Arthur Gretton, Andre Barreto, Bo Dai"
categories: ["cs.LG"]
---

arXiv:2605.20408v1 Announce Type: new Abstract: Reinforcement Learning from Human Feedback (RLHF) effectively aligns Large Language Models (LLMs) with aggregate human preferences but often fails to address the diverse and conflicting needs of individual users. To overcome this issue, we introduce Spectral Souping, a unified framework for efficient, online preference alignment. Our contribution is the discovery of a universal spectral representation within LLMs, which is proven to be highly amenable to model merging. This theoretical insight enables a two-phase methodology: we first learn a basis of specialized policies offline, each focused on a distinct, fine-grained preference dimension. An online adaptation algorithm then efficiently ``soups'' these policies at inference time, either by merging their outputs or parameters, enabling rapid model adaptation without the need for costly online retraining w.r.t. tailored preference rewards. Experiments on online preference alignment benchmarks demonstrate that our method achieves significant performance improvements over existing state-of-the-art approaches, presenting a scalable and computationally efficient solution for dynamically adapting LLMs to individual user preferences.

---

📖 [Read original article](https://arxiv.org/abs/2605.20408)