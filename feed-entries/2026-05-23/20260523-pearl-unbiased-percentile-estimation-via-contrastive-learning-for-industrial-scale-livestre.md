---
title: "PEARL: Unbiased Percentile Estimation via Contrastive Learning for Industrial-Scale Livestream Recommendation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21752"
author: "Blake Gella, Wei Wu, Yuhao Yin, Zexi Huang, Zikai Wang, Emily Liu, Junlin Zhang, Wentao Guo, Qinglei Wang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21752v1 Announce Type: cross Abstract: Recommender systems trained on user interaction data are susceptible to behavioral intensity imbalance--a systematic distortion arising from heterogeneous engagement patterns across users. This imbalance skews feedback signals such that observed interactions no longer faithfully reflect true preferences, causing models to disproportionately amplify signals from highly active users while underrepresenting others, which ultimately degrades recommendation quality and robustness at scale. To address this issue, we propose a nonparametric contrastive percentile approximation framework, PEARL, that models relative preference signals instead of absolute engagement magnitudes. Building upon relative advantage debiasing, PEARL leverages real contrastive interaction samples to approximate percentile relationships directly, without relying on auxiliary distribution estimation models. We provide theoretical justification demonstrating that such pairwise comparisons yield unbiased estimates of percentile-based preference signals. For broader applicability, we introduce a prediction-based bootstrapping mechanism for percentile smoothing to handle sparse and discrete feedback, alongside a generalized value-weighted formulation and a co-training strategy to enhance both modeling flexibility and representation learning. Extensive offline experiments demonstrate that PEARL effectively mitigates behavioral bias and consistently improves recommendation performance across multiple ranking targets. Deployed in a production livestream platform with a combined user base of billions, online A/B testing confirms substantial real-world gains: +2.10% Watch Duration, +0.80% Consumption Amount, +1.49% Interaction Rate, and -6.91% Report Rate.

---

📖 [Read original article](https://arxiv.org/abs/2605.21752)