---
title: "Compute Only Once: UG-Separation for Efficient Large Recommendation Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.10455"
author: "Hui Lu, Zheng Chai, Shipeng Bai, Hao Zhang, Zhifang Fan, Kunmin Bai, Ke Sun, Yingwen Wu, Bingzheng Wei, Xiang Sun, Ziyan Gong, Tianyi Liu, Hua Chen, Deping Xie, Zhongkai Chen, Zhiliang Guo, Qiwei Chen, Yuchao Zheng"
categories: ["cs.IR", "cs.LG"]
---

arXiv:2602.10455v2 Announce Type: replace-cross Abstract: Driven by scaling laws, recommender systems increasingly rely on larger-scale models to capture complex feature interactions and user behaviors, but this trend also leads to prohibitive training and inference costs. While long-sequence models can reuse user-side computation through KV Caching, such reuse is difficult in TokenMixer-based dense feature interaction architectures, where user and group features are deeply entangled and mixed-up across layers. In this work, we present User-Group Separation (UG-Sep), an industrial large-scale framework that enables user-side computation reusable in TokenMixer-based dense interaction models for the first time. UG-Sep explicitly disentangles user-side and item-side information flows within token-mixing layers, ensuring that a subset of tokens preserves purely user-side representations across layers. This design allows the corresponding per-token computations to be reused across multiple samples, significantly reducing redundant inference cost. To compensate for the potential expressive capacity loss induced by masking, we further propose an Information Compensation strategy that adaptively reconstructs suppressed user-item interactions. Moreover, as UG-Sep substantially reduces user-side FLOPs and exposes memory-bound components, we incorporate W8A16 (8-bit weight, 16-bit activation) weight-only quantization to alleviate memory bandwidth bottlenecks and achieve additional acceleration. We conduct extensive offline evaluations and large-scale online A/B experiments at ByteDance to validate the effectiveness of UG-Sep. Results show that UG-Sep reduces inference latency by up to 20% without causing adverse changes to online user experience and commercial metrics on multiple influential business scenarios compared to TokenMixer at ByteDance, including Douyin Feed Recommendation, Hongguo Feed Recommendation, Chuanshanjia Ads, and Qianchuan Ads.

---

📖 [Read original article](https://arxiv.org/abs/2602.10455)