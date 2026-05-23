---
title: "Twice Sequential Monte Carlo for Tree Search"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2511.14220"
author: "Yaniv Oren, Joery A. de Vries, Pascal R. van der Vaart, Matthijs T. J. Spaan, Wendelin B\\\"ohmer"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2511.14220v3 Announce Type: replace-cross Abstract: Model-based reinforcement learning (RL) methods that leverage search are responsible for many milestone breakthroughs in RL. Sequential Monte Carlo (SMC) recently emerged as an alternative to the Monte Carlo Tree Search (MCTS) algorithm which drove these breakthroughs. SMC is easier to parallelize and more suitable to GPU acceleration. However, it also suffers from large variance and path degeneracy which prevent it from scaling well with increased search depth, i.e., increased sequential compute. To address these problems, we introduce Twice Sequential Monte Carlo Tree Search (TSMCTS). Across discrete and continuous environments TSMCTS outperforms the SMC baseline as well as a popular modern version of MCTS as a policy improvement operator, scales favorably with sequential compute, reduces estimator variance and mitigates the effects of path degeneracy while retaining the properties that make SMC natural to parallelize.

---

📖 [Read original article](https://arxiv.org/abs/2511.14220)