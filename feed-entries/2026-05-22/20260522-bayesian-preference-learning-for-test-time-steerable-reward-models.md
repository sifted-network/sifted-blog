---
title: "Bayesian Preference Learning for Test-Time Steerable Reward Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.08819"
author: "Jiwoo Hong, Shao Tang, Zhipeng Wang"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2602.08819v2 Announce Type: replace Abstract: Reward models are central to aligning language models with human preferences via reinforcement learning (RL). As RL is increasingly applied to settings such as verifiable rewards and multi-objective alignment, RMs are expected to encode more complex and multifaceted preference distributions. However, classifier RMs remain static once trained, limiting their adaptability at test time. We propose Variational In-Context Reward Modeling (ICRM), a novel Bayesian reward modeling objective that enables test-time steerability via in-context preference demonstrations. ICRM casts reward modeling as amortized variational inference over a latent preference probability under the Bradley-Terry model using a conjugate Beta prior. We show that ICRM adapts to unseen preference distributions at test time for both single and multi-objective settings. With more demonstrations, ICRM improves RM-Bench accuracy from 60.5 to 70.8, achieves lower calibration error than a generative judge on moral dilemma preferences, and expands the attainable Pareto frontier under conflicting preferences. We further study the practical applicability of ICRM for RL training, showing that it can effectively encode verifiable rewards by outperforming a conventional RM in math reasoning. Finally, we provide theoretical guarantees that the variational objective admits a global interior optimum with finite confidence, and we analyze how KL regularization mitigates reward over-optimization.

---

📖 [Read original article](https://arxiv.org/abs/2602.08819)