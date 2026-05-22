---
title: "Robust Personalized Recommendation under Hidden Confounding in MNAR"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21066"
author: "Zongyu Li, Wanting Su, Tianyu Xia"
categories: ["cs.LG"]
---

arXiv:2605.21066v1 Announce Type: new Abstract: Recommender systems often rely on observational user--item interaction data, which is prone to selection bias due to users' selective interactions with items. Inverse propensity weighting and doubly robust estimators effectively mitigate selection bias under observed confounding, but are unreliable in the presence of hidden confounders. Existing approaches relying on randomized controlled trials (RCTs) or global sensitivity bounds are constrained in practice: RCTs demand costly experimental data, while global sensitivity bounds presume a uniformly bounded effect of unmeasured confounders on propensities through sensitivity analysis, thereby neglecting heterogeneity across user--item interactions. To overcome this limitation, we propose a novel framework, which estimates user--item level sensitivity bounds, thereby substantially relaxing the homogeneity assumption inherent in global sensitivity bounds named Personalized Unobserved-Confounding-aware Interaction Deconfounder (PUID). To ensure both robustness and predictive accuracy, we further develop an adversarial optimization strategy and propose a benchmark-guided variant (BPUID) that incorporates pre-trained models as stabilizing references. Extensive experiments on three real-world datasets demonstrate that our approach significantly outperforms global methods under hidden confounding, without requiring RCT data.

---

📖 [Read original article](https://arxiv.org/abs/2605.21066)