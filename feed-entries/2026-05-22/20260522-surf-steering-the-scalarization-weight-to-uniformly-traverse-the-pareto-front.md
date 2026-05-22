---
title: "SURF: Steering the Scalarization Weight to Uniformly Traverse the Pareto Front"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20619"
author: "Liuyuan Jiang, Chentong Huang, Lisha Chen"
categories: ["cs.LG", "math.OC", "stat.ML"]
---

arXiv:2605.20619v1 Announce Type: new Abstract: Scalarization is widely used in multi-objective optimization owing to its simplicity and scalability. In many applications, the goal is to generate solutions that represent diverse user preferences, ideally with uniform coverage of the Pareto front (PF). However, uniformly sampling scalarization weights usually induces non-uniform coverage of the PF. We explain this mismatch through a geometric analysis of the scalarization path. As the scalarization weight varies, the corresponding solutions trace the PF with a generally non-uniform traversal speed. This speed induces an arc-length cumulative distribution function (CDF); inverting this CDF map yields a principled rule for selecting weights that produce uniform PF coverage. Building on this insight, we propose SURF (Sampling Uniformly along the PaReto Front). For structured problems, including bi-objective bandits, we derive closed-form expressions for this CDF map and the resulting PF-aware weight sampling rule. For general problems, SURF alternates between CDF reconstruction and weight sampling. Theoretically, we show that under provable conditions, SURF converges linearly to an unavoidable finite-sampling floor. Empirically, experiments on bandits, multi-objective-gymnasium, and multi-objective LLM alignment demonstrate that SURF efficiently achieves more uniform PF coverage than baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.20619)