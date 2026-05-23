---
title: "Heterogeneous Agent Collaborative Reinforcement Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.02604"
author: "Zhixia Zhang, Zixuan Huang, Gongxun Li, Huaiyang Wang, Chengyi Yuan, Xin Xia, Deqing Wang, Fuzhen Zhuang, Shuai Ma, Ning Ding, Yaodong Yang, Jianxin Li, Yikun Ban"
categories: ["cs.LG"]
---

arXiv:2603.02604v2 Announce Type: replace Abstract: We introduce Heterogeneous Agent Collaborative Reinforcement Learning (HACRL), a new Reinforcement Learning from Verifiable Reward (RLVR) problem that addresses the inefficiencies of isolated multi-agent on-policy optimization. HACRL enables collaborative optimization with independent execution: heterogeneous agents share verified rollouts during training to mutually improve, while operating independently at inference time. Unlike LLM-based multi-agent reinforcement learning (MARL), HACRL does not require coordinated deployment, and unlike on-/off-policy distillation, it enables bidirectional mutual learning among heterogeneous agents rather than one-directional homogeneous teacher-to-student transfer. Building on this problem, we propose HACPO, a collaborative RL algorithm that enables principled rollout sharing to maximize sample utilization and cross-agent knowledge transfer. To mitigate capability discrepancies and policy distribution shifts, HACPO introduces four tailored mechanisms with theoretical guarantees on unbiased advantage estimation. Extensive experiments across diverse heterogeneous model combinations and reasoning benchmarks show that HACPO consistently improves all participating agents, outperforming GSPO with double rollouts by an average of 3.6% while using only half the rollout cost.

---

📖 [Read original article](https://arxiv.org/abs/2603.02604)