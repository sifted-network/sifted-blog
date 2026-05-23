---
title: "Fair Dataset Distillation via Cross-Group Barycenter Alignment"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.00185"
author: "Mohammad Hossein Moslemi, Nima Hosseini Dashtbayaz, Zhimin Mei, Bissan Ghaddar, Boyu Wang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.00185v2 Announce Type: replace-cross Abstract: Dataset Distillation aims to compress a large dataset into a small synthetic one while maintaining predictive performance. We show that as different demographic groups exhibit distinct predictive patterns, the distillation process struggles to simultaneously preserve informative signals for all subgroups, regardless of whether group sizes are mildly or severely imbalanced. Consequently, models trained on distilled data can experience substantial performance drops for certain subgroups, leading to fairness gaps. Crucially, these gaps do not disappear by merely correcting group imbalance, since they stem from fundamental mismatches in subgroup predictive patterns rather than from sample-size disparities alone. We therefore formally analyze the interaction between these two sources of bias and cast the solution as identifying a group-imbalance-agnostic barycenter of the predictive information that induces similar representations across all subgroups. By distilling toward this shared aggregate representation, we show that group fairness concerns can be reduced. Our approach is compatible with existing distillation methods, and empirical results show that it substantially reduces bias introduced by dataset distillation. Code is available at https://github.com/mhmoslemi/COBRA.

---

📖 [Read original article](https://arxiv.org/abs/2605.00185)