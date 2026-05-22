---
title: "Reinforcement Learning with Discrete Diffusion Policies for Combinatorial Action Spaces"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2509.22963"
author: "Haitong Ma, Ofir Nabati, Aviv Rosenberg, Bo Dai, Oran Lang, Craig Boutilier, Na Li, Shie Mannor, Lior Shani, Guy Tenneholtz"
categories: ["cs.LG"]
---

arXiv:2509.22963v3 Announce Type: replace Abstract: Reinforcement learning (RL) struggles to scale to large, combinatorial action spaces common in many real-world problems. This paper introduces a novel framework for training discrete diffusion models as highly effective policies in these complex settings. Our key innovation is an efficient online training process that ensures stable and effective policy improvement. By leveraging policy mirror descent (PMD) to define an ideal, regularized target policy distribution, we frame the policy update as a distributional matching problem, training the expressive diffusion model to replicate this stable target. This decoupled approach stabilizes learning and significantly enhances training performance. Our method achieves state-of-the-art results and superior sample efficiency across a diverse set of challenging combinatorial benchmarks, including DNA sequence generation, RL with macro-actions, and multi-agent systems. Experiments demonstrate that our diffusion policies attain superior performance compared to other baselines.

---

📖 [Read original article](https://arxiv.org/abs/2509.22963)