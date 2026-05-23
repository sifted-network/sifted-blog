---
title: "Value-Gradient Hypothesis of RL for LLMs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21654"
author: "Arip Asadulaev, Daniil Ognev, Karim Salta, Martin Takac"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.21654v1 Announce Type: cross Abstract: Reinforcement learning substantially improves pretrained language models, but it remains understudied why critic-free methods such as PPO and GRPO work as well as they do, and when they should provide the largest gains. We develop a value-gradient perspective of critic-free RL for LLM post-training. First, under a differentiable rollout and additive-noise parameterization, we show that the actor update is value-gradient-like in expectation: the backward pass propagates costates whose conditional expectation equals the value gradient. Second, for discrete transformer policies, we show that autodifferentiation through attention produces empirical costates that approximate this value signal, with an error controlled by the sampling gap and policy entropy. These results motivate a decomposition of RL impact into value gradient signal and reachable reward headroom, yielding a criterion for when RL should be most effective along a pretraining trajectory.

---

📖 [Read original article](https://arxiv.org/abs/2605.21654)