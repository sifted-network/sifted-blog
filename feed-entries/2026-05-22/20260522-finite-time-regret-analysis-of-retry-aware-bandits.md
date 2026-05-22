---
title: "Finite-Time Regret Analysis of Retry-Aware Bandits"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20854"
author: "Bingkui Tong, Junpei Komiyama, Soichiro Nishimori, Paavo Parmas"
categories: ["cs.LG"]
---

arXiv:2605.20854v1 Announce Type: new Abstract: We study a stochastic bandit algorithm motivated by retry-aware objectives that value the best outcome among multiple attempts, such as pass@$k$ and max@$k$. Given a posterior over arm values, ReMax chooses a sampling distribution that maximizes the posterior expected maximum reward over $M$ virtual draws. Although this objective was introduced in reinforcement learning as an exploration mechanism under uncertainty, its regret properties in bandit problems have remained unclear. For Gaussian rewards and the first nontrivial case $M=2$, we characterize the optimal ReMax distribution through an expected-improvement balance condition and prove the first sublinear regret bound for ReMax. Our analysis separates the usual saturation behavior of suboptimal arms from a ReMax-specific underestimation effect, in which the optimal arm may be sampled too rarely after an unfavorable estimate. This explains why ReMax can be more exploitative than Thompson sampling (TS) and why its regret analysis is technically delicate. Experiments support this picture: ReMax often outperforms KL-UCB and Thompson sampling under mild underestimation, while posterior-variance scaling empirically mitigates severe underestimation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20854)