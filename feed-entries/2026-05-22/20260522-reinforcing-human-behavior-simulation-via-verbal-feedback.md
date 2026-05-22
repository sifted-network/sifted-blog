---
title: "Reinforcing Human Behavior Simulation via Verbal Feedback"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20506"
author: "Weiwei Sun, Xuhui Zhou, Jiarui Liu, Weihua Du, Haojia Sun, Yiqing Xie, Qianou Ma, Sihao Chen, Mengting Wan, Longqi Yang, Pei Zhou, Sherry Wu, Sean Welleck, Graham Neubig, Yiming Yang, Maarten Sap"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.20506v1 Announce Type: new Abstract: Humans learn social norms and behaviors from verbal feedback (e.g., a parent saying "that was rude" or a friend explaining "here's why that hurt"). Yet, learning from feedback for LLMs has largely focused on domains like code and math, where RL rewards are directly verifiable and condensed into scalar values. As LLMs are increasingly used to simulate human behavior, e.g., standing in for users, patients, students, and other personas, there is a pressing need to make them more human-like, which requires embracing a fundamentally different kind of signal: feedback that is verbal, subjective, and multi-faceted. We present DITTO, a model trained by treating verbal feedback as a first-class signal in reinforcement learning. After each rollout, DITTO receives verbal feedback and generates a feedback-conditioned improved rollout; both outputs are jointly optimized with GRPO, distilling verbal guidance into the base policy without requiring feedback at test time. We also introduce SOUL (Simulation gym Of hUman-Like behavior), a unified benchmark and training data suite spanning 10 tasks across six categories: Theory of Mind, character role play, social skill, learner simulation, user simulation, and persona simulation. DITTO achieves an average 36% improvement over the base model and exceeds GPT-5.4 on 6 of 10 SOUL benchmarks, demonstrating that RL with verbal feedback is a promising direction for training LLMs to simulate human behavior.

---

📖 [Read original article](https://arxiv.org/abs/2605.20506)