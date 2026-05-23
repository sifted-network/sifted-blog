---
title: "Teaching Language Models to Forecast Research Success Through Comparative Idea Evaluation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21491"
author: "Srujan P Mule, Aniketh Garikaparthi, Manasi Patwardhan"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.21491v1 Announce Type: cross Abstract: As language models accelerate scientific research by automating hypothesis generation and implementation, a new bottleneck emerges: evaluating and filtering hundreds of AI-generated ideas without exhaustive experimentation. We ask whether LMs can learn to forecast the empirical success of research ideas before any experiments are run. We study comparative empirical forecasting: given a benchmark-specific research goal and two candidate ideas, predict which will achieve better benchmark performance. We construct a dataset of 11,488 idea pairs grounded in objective outcomes from PapersWithCode. While off-the-shelf 8B-parameter models struggle (30% acc.), SFT dramatically boosts performance to 77.1%, outperforming GPT-5 (61.1%). By framing evaluation as a reasoning task via Reinforcement Learning with Verifiable Rewards (RLVR), we train models to discover latent reasoning paths, achieving 71.35% acc. with interpretable justifications. Through additional ablations and out-of-distribution tests, we show robustness to surface-level heuristics and transfer to both a cross-domain time-split test set and an independently constructed test set. Our results demonstrate that compute-efficient small language models can serve as effective, objective verifiers, offering a scalable path for autonomous scientific discovery.

---

📖 [Read original article](https://arxiv.org/abs/2605.21491)