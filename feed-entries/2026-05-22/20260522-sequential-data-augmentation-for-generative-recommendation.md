---
title: "Sequential Data Augmentation for Generative Recommendation"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2509.13648"
author: "Geon Lee, Bhuvesh Kumar, Clark Mingxuan Ju, Tong Zhao, Kijung Shin, Neil Shah, Liam Collins"
categories: ["cs.LG", "cs.IR"]
---

arXiv:2509.13648v3 Announce Type: replace Abstract: Generative recommendation plays a crucial role in personalized systems, predicting users' future interactions from their historical behavior sequences. A critical yet underexplored factor in training these models is data augmentation, the process of constructing training data from user interaction histories. By shaping the training distribution, data augmentation directly and often substantially affects model generalization and performance. Nevertheless, in much of the existing work, this process is simplified, applied inconsistently, or treated as a minor design choice, without a systematic and principled understanding of its effects. Motivated by our empirical finding that different augmentation strategies can yield large performance disparities, we conduct an in-depth analysis of how they reshape training distributions and influence alignment with future targets and generalization to unseen inputs. To systematize this design space, we propose GenPAS, a generalized and principled framework that models augmentation as a stochastic sampling process over input-target pairs with three bias-controlled steps: sequence sampling, target sampling, and input sampling. This formulation unifies widely used strategies as special cases and enables flexible control of the resulting training distribution. Our extensive experiments on benchmark and industrial datasets demonstrate that GenPAS yields superior accuracy, data efficiency, and parameter efficiency compared to existing strategies, providing practical guidance for principled training data construction in generative recommendation. Our code is available at https://github.com/snap-research/GenPAS.

---

📖 [Read original article](https://arxiv.org/abs/2509.13648)