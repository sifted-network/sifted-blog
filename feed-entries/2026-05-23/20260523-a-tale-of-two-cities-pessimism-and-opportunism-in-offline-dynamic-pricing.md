---
title: "A Tale of Two Cities: Pessimism and Opportunism in Offline Dynamic Pricing"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2411.08126"
author: "Zeyu Bian, Zhengling Qi, Lan Wang"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2411.08126v2 Announce Type: replace-cross Abstract: We study offline dynamic pricing when historical data provide incomplete coverage of the price space such that some candidate prices, including the optimal one, may be entirely unobserved. This setting is common in practice and is especially difficult in dynamic environments. Existing offline reinforcement learning methods typically rely on full or partial coverage and can therefore perform poorly in such settings. We develop a nonparametric partial identification framework for offline dynamic pricing that exploits the monotonicity of demand in price to bound the value of unobserved prices. Within this framework, we formulate two dynamic decision rules: a pessimistic policy that maximizes worst-case revenue and an opportunistic policy that minimizes worst-case regret. These rules are tailored to a sequential no-coverage environment and are not direct extensions of existing pessimistic offline RL or static opportunistic approaches. We establish finite-sample regret bounds for both policies, recovering the standard rate when the optimal price is covered and quantifying the additional cost when it is not. We also develop efficient algorithms and show, through simulations and an airline ticket application, that our methods outperform standard offline RL baselines in no-coverage settings. Managerially, the framework provides a practical mapping from a firm's risk posture to its pricing policy: firms seeking revenue stability and downside protection should prefer the pessimistic policy, whereas firms willing to bear measured risk for potential gains from underexplored prices should prefer the opportunistic policy.

---

📖 [Read original article](https://arxiv.org/abs/2411.08126)