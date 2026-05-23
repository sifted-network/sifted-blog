---
title: "CCLab: Adversarial Testing of Learning- and Non-Learning-Based Congestion Controllers"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21915"
author: "Zhi Chen, Shehab Sarar Ahmed, Chenkai Wang, Brighten Godfrey, Gang Wang"
categories: ["cs.CR", "cs.LG"]
---

arXiv:2605.21915v1 Announce Type: cross Abstract: Congestion controllers (CCs) are critical to network performance, and yet their robustness under adverse conditions remains insufficiently understood. While recent learning-based CCs have demonstrated strong performance in controlled environments, it is unclear how they compare to traditional CCs when controllers' input signals are corrupted or when environmental conditions become systematically challenging. In this paper, we introduce CCLab, an adversarial testing framework for systematically evaluating the robustness of both learning-based and non-learning-based CCs. CCLab includes a reinforcement learning (RL)-based adversarial agent that operates in a closed loop with the congestion control policy, generating bounded perturbations either on input signals (feature-level) or on external network conditions (environment-level), while preserving realism through explicit constraints. Using this framework, we compare learning-based CCs with non-learning-based CCs under both feature-level and environment-level adversarial conditions. While both types of CCs suffer from performance degradation under adversarial testing, we find that learning-based CCs, in general, are more robust than traditional human-designed algorithms. Finally, we show that our adversarial traces can be used to train more robust CCs that outperform existing learning-based CCs under both challenging and normal conditions.

---

📖 [Read original article](https://arxiv.org/abs/2605.21915)