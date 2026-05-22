---
title: "TelecomTS: A Multi-Modal Observability Dataset for Time Series and Language Analysis"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.06063"
author: "Austin Feng, Andreas Varvarigos, Ioannis Panitsas, Daniela Fernandez, Jinbiao Wei, Yuwei Guo, Jialin Chen, Ali Maatouk, Leandros Tassiulas, Rex Ying"
categories: ["cs.AI", "cs.IT", "cs.LG", "math.IT"]
---

arXiv:2510.06063v2 Announce Type: replace Abstract: Modern enterprises generate vast streams of time series metrics when monitoring complex systems, known as observability data. Unlike conventional time series from domains such as climate, observability data are zero-inflated, highly stochastic, and exhibit minimal temporal structure. Despite their importance, observability datasets remain underrepresented in public benchmarks due to proprietary restrictions and privacy concerns. Existing datasets are often anonymized and normalized, removing scale information and limiting their use for tasks such as anomaly detection, root cause analysis, and multi-modal reasoning. To address this gap, we introduce TelecomTS, a large-scale observability dataset derived from a 5G telecommunications network. TelecomTS features heterogeneous, de-anonymized covariates with explicit absolute scale information and provides a diverse suite of downstream tasks, including anomaly detection, root cause analysis, and multi-modal question-answering. Benchmarking state-of-the-art time series, language, reasoning, and multi-modal foundation models reveals that existing approaches struggle with the abrupt, noisy, and high-variance dynamics characteristic of observability data. Our experiments further underscore the importance of preserving covariates' absolute scale, emphasizing the need for foundation time series models that natively leverage scale information for practical real-world observability applications. The code is available at: https://github.com/Ali-maatouk/TelecomTS.

---

📖 [Read original article](https://arxiv.org/abs/2510.06063)