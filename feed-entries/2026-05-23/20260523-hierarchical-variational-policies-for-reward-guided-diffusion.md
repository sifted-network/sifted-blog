---
title: "Hierarchical Variational Policies for Reward-Guided Diffusion"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21661"
author: "Kushagra Pandey, Farrin Marouf Sofian, Jan Niklas Groeneveld, Felix Draxler, Stephan Mandt"
categories: ["cs.LG", "cs.AI", "cs.CV"]
---

arXiv:2605.21661v1 Announce Type: cross Abstract: Adapting pretrained diffusion models to downstream objectives such as inverse problems often requires expensive test-time guidance or optimization. We propose a principled framework for generating high-quality reward-aligned samples at substantially reduced inference cost. Our approach formulates test-time adaptation as a hierarchical variational model, where control is amortized into a lightweight yet expressive stochastic policy. This formulation naturally supports few-step diffusion sampling: large step sizes enable fast inference, while the learned policy maintains sample quality by providing structured per-step control. The resulting fully amortized sampler achieves a strong quality--speed tradeoff, matching or exceeding recent test-time scaling baselines while requiring significantly less compute. For example, on 4x super-resolution, our method achieves better perceptual quality with more than 5x faster inference compared to the best-performing baseline. We further extend our approach to a semi-amortized regime that combines cheap amortized proposals with limited test-time optimization, achieving state-of-the-art perceptual quality across several challenging inverse problems.

---

📖 [Read original article](https://arxiv.org/abs/2605.21661)