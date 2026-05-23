---
title: "Temporal Contrastive Transformer for Financial Crime Detection: Self-Supervised Sequence Embeddings via Predictive Contrastive Coding"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21490"
author: "Danny Butvinik (NICE Actimize), Yonit Marcus (NICE Actimize), Nitzan Tal (NICE Actimize), Gabrielle Azoulay (NICE Actimize)"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.21490v1 Announce Type: new Abstract: We introduce the Temporal Contrastive Transformer (TCT), a representation learning framework designed to capture contextual temporal dynamics in sequences of financial transactions. The model is trained using a self-supervised contrastive objective to produce embeddings that encode behavioral patterns over time, with the goal of supporting downstream fraud detection tasks. We evaluate TCT in a realistic setting by using the learned embeddings as input features to a gradient boosting classifier. Experimental results show that embeddings alone achieve meaningful predictive performance (AUC 0.8644), indicating that the model captures non-trivial temporal structure. However, when combined with domain-engineered features, no measurable improvement is observed over the baseline (AUC 0.9205 vs. 0.9245), suggesting that the learned representations largely overlap with existing feature abstractions. These findings position TCT as a promising representation learning approach that captures relevant behavioral signal, while highlighting the challenges of achieving additive value over strong domain features. The results reflect an intermediate stage in the development of temporal representation learning for financial crime detection and motivate further research on model architecture, training objectives, and integration strategies. At this early stage, achieving performance comparable to a strong feature-engineered baseline is itself a meaningful outcome, indicating that learned representations approximate domain-specific features without manual engineering. While not yet production-ready, these results point to a promising direction for reducing reliance on feature engineering in financial crime detection.

---

📖 [Read original article](https://arxiv.org/abs/2605.21490)