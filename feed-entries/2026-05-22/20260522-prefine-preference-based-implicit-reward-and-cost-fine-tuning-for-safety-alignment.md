---
title: "PREFINE: Preference-Based Implicit Reward and Cost Fine-Tuning for Safety Alignment"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21225"
author: "Richa Verma, Bavish Kulur, Sanjay Chawla, Balaraman Ravindran"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21225v1 Announce Type: cross Abstract: We address the problem of making a pre-trained reinforcement learning (RL) policy safety-aware by incorporating cost constraints without retraining it from scratch. While costs could be numerically encoded, we assume a more general setting is when costs are provided as preferences. Given a reward-optimized policy and a small dataset of preferred (low-cost) and dispreferred (high-cost) trajectories, our goal is to fine-tune the policy to generate low-cost behaviors while retaining high rewards. Unlike standard RLHF in language models, where preferences are defined over responses to the same prompt, our setting involves trajectory-level preferences in continuous control environments. We introduce PREFINE: Preference-based Implicit Reward and Cost Fine-Tuning for Safety Alignment which is a preference-based fine-tuning method that adapts Direct Preference Optimization (DPO), which is now widely used for LLM fine-tuning, to the sequential decision making setting. PREFINE constructs policy-sampled counterfactual trajectories to establish meaningful preference contrasts and jointly optimizes for reward retention and safety alignment. Empirically, PREFINE reduces constraint violations and catastrophic failures by over 60% while maintaining original reward behavior. PREFINE produces policies that achieve low-cost, high-reward performance with significantly improved data and computational efficiency compared to full offline RL or imitation learning, bridging preference alignment and safe policy adaptation in continuous domains.

---

📖 [Read original article](https://arxiv.org/abs/2605.21225)