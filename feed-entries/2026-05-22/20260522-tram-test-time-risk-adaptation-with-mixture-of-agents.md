---
title: "TRAM: Test-Time Risk Adaptation with Mixture of Agents"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2408.08812"
author: "Mohamad Fares El Hajj Chehade, Amrit Singh Bedi, Amy Zhang, Hao Zhu"
categories: ["cs.LG"]
---

arXiv:2408.08812v2 Announce Type: replace Abstract: Deployed reinforcement learning agents often face safety requirements that are specified only after training, such as new hazard maps, revised risk thresholds, or behavioral alignment constraints. We study zero-update deployment-time adaptation, where a fixed library of risk-neutral source policies is reused under a newly specified reward-risk tradeoff. We propose TRAM (Test-Time Risk Adaptation via Mixture of Agents), a source-scored composition rule that evaluates each source policy under the target reward and an occupancy-based deployment risk, then selects actions using risk-adjusted source scores. Unlike training-time risk-sensitive methods tied to a fixed surrogate such as return variance, TRAM supports spatial barrier exposure, divergence from a reference behavior, and local volatility risks specified at test time. We explicitly characterize TRAM as a surrogate method: it does not solve the full occupancy-control problem of the stitched policy, but admits a measurable source-hull mismatch term connecting source-scored risk to realized risk. Experiments in gridworlds, MuJoCo Reacher, Safety-Gymnasium, and an LLM alignment setting show that TRAM reduces deployment risk while preserving reward, without requiring any parameter updates at test time.

---

📖 [Read original article](https://arxiv.org/abs/2408.08812)