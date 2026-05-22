---
title: "Behavior-Consistent Deep Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21214"
author: "Marcel Hussing, Liv G. d'Aliberti, Claas Voelcker, Benjamin Eysenbach, Eric Eaton"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21214v2 Announce Type: cross Abstract: Reinforcement learning (RL) often exhibits high variance across training runs, leading to unreliable performance and posing a major challenge to deployment in real-world domains. In this work, we address the challenge of cross-run policy divergence by formalizing the problem of behavior-consistent RL, where the objective is to obtain policies that are both high-performing and distributionally similar across training runs. Our key observation is that maximum-entropy RL provides a direct mechanism for controlling behavioral divergence by anchoring runs to a common (uniform) prior. We prove that, for Boltzmann policies, choosing the temperature proportional to $Q$-function disagreement bounds the pairwise KL divergence between the induced policies. However, we also show that na\"ively increasing entropy might impair policy optimization while amplifying off-policy error. Building upon these observations, we propose $Q$-value Expectile Disagreement (QED), a state-dependent temperature schedule that uses double-critic disagreement as a single-run proxy for cross-run disagreement. Empirically, we demonstrate that across 18 continuous-control tasks, QED reduces across-run divergence by two orders of magnitude without sacrificing performance, resulting in a considerable reduction in return variance at modest sample-efficiency costs.

---

📖 [Read original article](https://arxiv.org/abs/2605.21214)