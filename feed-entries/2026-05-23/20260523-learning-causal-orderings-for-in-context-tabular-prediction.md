---
title: "Learning Causal Orderings for In-Context Tabular Prediction"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22335"
author: "Sascha Xu, Sarah Mameche, Jilles Vreeken"
categories: ["cs.LG"]
---

arXiv:2605.22335v1 Announce Type: new Abstract: In-context learning for tabular data sets strong predictive standards in observational settings; it however primarily relies on correlational structure, which becomes unreliable under distribution shift or intervention. While established methods to discover causal structure exist, they are often focused on structure identifiability and decoupled from the predictive architectures that could benefit from them. To bridge these perspectives, we study how to simultaneously infer and enforce causal structure in the form of topological variable orderings into tabular prediction. Unlike standard architectures, our model TabOrder uses causal order-constrained attention, basing predictions only on features that precede a target under a learned causal order. Similar to causal discovery methods, TabOrder learns the optimal variable ordering in an unsupervised manner through a likelihood-based objective. We justify this choice under standard functional model classes and also study how sample missingness, a common challenge in tabular data, interacts with causal direction identification. Empirically, we confirm that TabOrder recovers accurate variable orderings while addressing prediction and imputation tasks, as well as gives insight into real-world biological data under intervention.

---

📖 [Read original article](https://arxiv.org/abs/2605.22335)