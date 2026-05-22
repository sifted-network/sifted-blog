---
title: "FEAT: A Linear-Complexity Foundation Model for Extremely Large Structured Data"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.16513"
author: "Zhenghang Song, Tang Qian, Lu Chen, Yushuai Li, Zhengke Hu, Bingbing Fang, Yumeng Song, Junbo Zhao, Sheng Zhang, Tianyi Li"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2603.16513v3 Announce Type: replace-cross Abstract: Structured data is widely used in domains such as healthcare, finance, and scientific data management. Recent studies on structured data foundation models (SFMs) aim to support data analysis and mining tasks over such data, but still face scalability and generalization challenges when applied to real-world enterprise databases. First, many SFMs rely on full self-attention, which introduces an O(N^2) computational bottleneck and limits the number of tuples that can be processed jointly. Second, directly replacing attention with linear-complexity sequence models may conflict with the permutation-invariant nature of structured data, introducing artificial order bias and degrading representation quality. Moreover, models trained only on synthetic data may struggle to generalize to the heavy-tailed and heterogeneous distributions commonly found in real-world databases. To address these challenges, we propose FEAT, a linear-complexity foundation model for extremely large structured data. FEAT replaces quadratic attention with a multi-layer dual-axis encoding architecture. It integrates an adaptive-fusion bidirectional state-space model (AFBM) with convolutional gated linear attention (Conv-GLA), enabling cross-tuple contextualization in O(N) time while supporting permutation-invariant representation learning. To improve robustness under real-world data skewness, FEAT further adopts a hybrid structural causal pre-training pipeline with a robust reconstruction objective. Experiments on 12 real-world database benchmarks show that FEAT consistently outperforms representative SFMs on zero-shot tasks and scales linearly with structured-data sample length, achieving up to 50x faster inference latency.

---

📖 [Read original article](https://arxiv.org/abs/2603.16513)