---
title: "Distributional Alignment as a Criterion for Designing Task Vectors in In-Context Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20730"
author: "Jihoon Kwon, Jiwon Choi, Jy-yong Sohn"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20730v1 Announce Type: cross Abstract: In-context learning (ICL) allows large language models (LLMs) to adapt to new tasks through demonstrations, yet it suffers from escalating inference costs as context length increases. While task vectors offer a promising alternative by compressing demonstrations into compact hidden-state representations, their quality has been evaluated only through downstream task accuracy. This indirect criterion provides limited insight into how to design more effective task vector extraction methods. In this paper, we posit that inference using task vectors should align their predictive distribution with that of ICL. To quantify this, we introduce $d_{\text{NTP}}$, a metric that measures the discrepancy in next-token probabilities between task vector-based and ICL-based inference. Our empirical analysis reveals that $d_{\text{NTP}}$ serves as a performance proxy, exhibiting a strong negative correlation with downstream accuracy. Motivated by this, we develop Linear Task Vector (LTV), a method designed to minimize $d_{\text{NTP}}$ via a closed-form linear mapping that estimates demonstration effects through regression. Across eight classification benchmarks and five LLMs, LTV consistently outperforms existing task vector baselines, improving average accuracy by 9.2\% while reducing inference latency. We further show that LTV outperforms the baselines on regression tasks. Moreover, we investigate the transferability of LTV across different model scales; an aspect that has remained nascent in task vector research. Specifically, we empirically show that task vectors from a larger model can enhance a smaller model's performance by 6.4\%, suggesting a new utility for extracted task representations.

---

📖 [Read original article](https://arxiv.org/abs/2605.20730)