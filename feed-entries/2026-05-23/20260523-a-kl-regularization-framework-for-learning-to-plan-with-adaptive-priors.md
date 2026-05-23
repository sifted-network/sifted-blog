---
title: "A KL-regularization Framework for Learning to Plan with Adaptive Priors"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.04280"
author: "\\'Alvaro Serra-Gomez, Daniel Jarne Ornia, Dhruva Tirumala, Thomas Moerland"
categories: ["cs.LG", "cs.AI", "cs.RO"]
---

arXiv:2510.04280v2 Announce Type: replace-cross Abstract: Effective exploration remains a central challenge in model-based reinforcement learning (MBRL), particularly in high-dimensional continuous control tasks where sample efficiency is crucial. A prominent line of recent work leverages learned policies as proposal distributions for Model-Predictive Path Integral (MPPI) planning. Initial approaches update the sampling policy independently of the planner distribution, typically maximizing a learned value function with deterministic policy gradient and entropy regularization. However, because the states encountered during training depend on the MPPI planner, aligning the sampling policy with the planner improves the accuracy of value estimation and long-term performance. To this end, recent methods update the sampling policy by minimizing KL divergence to the planner distribution or by introducing planner-guided regularization into the policy update. In this work, we unify these MPPI-based reinforcement learning methods under a single framework by introducing Policy Optimization-Model Predictive Control (PO-MPC), a family of KL-regularized MBRL methods that integrate the planner's action distribution as a prior in policy optimization. By aligning the learned policy with the planner's behavior, PO-MPC allows more flexibility in the policy updates to trade off Return maximization and KL divergence minimization. We clarify how prior approaches emerge as special cases of this family, and we explore previously unstudied variations. Our experiments show that these extended configurations yield significant performance improvements, advancing the state of the art in MPPI-based RL.

---

📖 [Read original article](https://arxiv.org/abs/2510.04280)