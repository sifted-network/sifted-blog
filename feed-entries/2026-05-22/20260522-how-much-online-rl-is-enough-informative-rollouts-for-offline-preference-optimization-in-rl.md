---
title: "How Much Online RL is Enough? Informative Rollouts for Offline Preference Optimization in RLVR"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21266"
author: "Richa Verma, Balaraman Ravindran"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21266v1 Announce Type: cross Abstract: Reinforcement Learning from Verifiable Rewards (RLVR) has emerged as a powerful paradigm for reasoning in language models, with GRPO as its primary example. However, GRPO requires continuous online rollout generation, making it computationally expensive and difficult to scale. While Direct Preference Optimization (DPO) offers a stable and efficient offline alternative, it is typically expected to underperform w.r.t. online RL methods such as GRPO when trained on rollouts from a cold supervised fine-tuned (SFT) policy. We introduce G2D (GRPO to DPO)}, a three-stage pipeline that performs a short GRPO warm-up, constructs a static preference dataset, and fine-tunes a model offline with DPO. Across a set of values of the number of online steps (K) in GRPO on Qwen2.5-7B and Llama-3.1-8B, we find that offline DPO with moderate warm-up matches or outperforms GRPO at substantially lower compute cost in our setting. On Qwen2.5-7B, G2D at K=150 achieves 62.4% on MATH-500, outperforming GRPO (51.6%) by 10.8% at ~4x lower compute. On Llama-3.1-8B, G2D at K=500 achieves 49.4%, surpassing GRPO in our experimental setting. We show that performance is not governed by the number of preference pairs, which does not vary much w.r.t. K, but by their informativeness. Moderate warm-up produces rollouts with calibrated uncertainty, yielding stronger contrastive signal, while excessive warm-up leads to overconfident policies and less informative data. Our results recast the offline-online gap in RLVR as primarily a data informativeness problem, and identify short online RL warm-up with appropriate difficulty calibration of the fine-tuning dataset as a compute-efficient alternative to online RL.

---

📖 [Read original article](https://arxiv.org/abs/2605.21266)