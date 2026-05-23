---
title: "CoFEH: LLM-driven Feature Engineering Empowered by Collaborative Bayesian Hyperparameter Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.09851"
author: "Beicheng Xu, Keyao Ding, Wei Liu, Yupeng Lu, Bin Cui"
categories: ["cs.LG"]
---

arXiv:2602.09851v2 Announce Type: replace Abstract: Feature Engineering (FE) is pivotal in automated machine learning (AutoML) but remains a bottleneck for traditional methods, which operate within rigid search spaces and lack domain awareness. While Large Language Models (LLMs) offer a promising alternative to generate unbounded operators with semantic reasoning, existing methods focus on isolated subtasks such as feature generation, falling short of free-form FE pipelines. Moreover, they are rarely coupled with hyperparameter optimization (HPO) of the downstream ML model, leading to greedy "FE-then-HPO" workflows that cannot capture strong FE-HPO interactions. In this paper, we present CoFEH, a collaborative framework that interleaves LLM-based FE and Bayesian HPO for robust end-to-end AutoML. CoFEH uses an LLM-driven FE optimizer powered by Tree of Thought (TOT) to explore flexible FE pipelines, a Bayesian optimization (BO) module to solve HPO, and a dynamic optimizer selector that adaptively interleaves FE and HPO steps. Crucially, we introduce a mutual conditioning mechanism that shares context between LLM and BO, enabling mutually informed decisions. Experiments show that CoFEH outperforms both traditional and LLM-based baselines in both standalone FE and joint FE+HPO settings.

---

📖 [Read original article](https://arxiv.org/abs/2602.09851)