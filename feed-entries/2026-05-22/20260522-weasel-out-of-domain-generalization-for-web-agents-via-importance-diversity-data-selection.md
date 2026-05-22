---
title: "Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20291"
author: "Fatemeh Pesaran zadeh, Seyeon Choi, Xing Han L\\`u, Siva Reddy, Gunhee Kim"
categories: ["cs.LG"]
---

arXiv:2605.20291v1 Announce Type: new Abstract: Large language models (LLMs) have enabled web agents that follow natural language goals through multi-step browser interactions. However, agents fine-tuned on specific trajectories and domain often struggle to generalize out of domain, and offline training can be compute-inefficient due to noisy, redundant trajectories and long accessibility-tree (AXTree) states. To address both issues, we propose Weasel, a trajectory selection method for offline training of web agents. Weasel selects a fixed-budget subset of trajectory steps by optimizing an objective that balances unary importance with pairwise diversity over states, websites, and interaction patterns, solving efficiently with a greedy algorithm. We further improve efficiency with target-centered AXTree pruning that keeps only content around the ground-truth action target, and we mitigate style mismatch for reasoning-native models by replacing expert traces with model-generated, style-consistent rationales. Across AgentTrek and NNetNav training datasets, evaluations in WebArena, WorkArena, and MiniWob, and experiments with Qwen2.5-7B, Gemma3-4B, and Qwen3-8B, Weasel improves out-of-domain performance while reducing training cost, producing roughly 9.7-12.5$\times$ training speedups over standard fine-tuning. We make the code available at https://github.com/fatemehpesaran310/weasel.

---

📖 [Read original article](https://arxiv.org/abs/2605.20291)