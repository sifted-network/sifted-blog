---
title: "Mechanisms of Misgeneralization in Physical Sequence Modeling"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20299"
author: "Kento Nishi, Raphael Tang, Karun Kumar, Core Francisco Park, Hidenori Tanaka"
categories: ["cs.LG", "cs.AI", "cs.RO"]
---

arXiv:2605.20299v1 Announce Type: cross Abstract: Generative sequence models are often trained to plan motion in physical domains, from robotics to mechanical simulations. When constructing a dataset to train such a model, engineers may curate demonstrations to specify how trajectories should be distributed over a physical quantity like travel distance or mechanical energy. For example, a roboticist building a maze navigation agent might choose demonstrations whose travel distances cover a fixed range uniformly, hoping to constrain the agent's expected power usage. We find that standard deep learning can violate this intent: each generated trajectory can seem plausible on its own, but the aggregate distribution over the physical quantity is wrong. We call this failure physical misgeneralization, and develop an account of its mechanism. Using controlled synthetic tasks, we show that physical misgeneralization arises when local errors typical of the model class propagate through the physical measurement to shift the recovered distribution. We estimate these errors with a data deviation kernel, and we use it to predict which physical quantities gain or lose mass in both our synthetic and more applied maze navigation and double-pendulum motion tasks. Finally, our mechanistic interpretation helps identify which mitigation strategies are structurally promising, and we use it to propose a kernel-informed intervention.

---

📖 [Read original article](https://arxiv.org/abs/2605.20299)