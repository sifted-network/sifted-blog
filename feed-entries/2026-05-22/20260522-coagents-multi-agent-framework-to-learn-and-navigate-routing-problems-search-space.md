---
title: "COAgents: Multi-Agent Framework to Learn and Navigate Routing Problems Search Space"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20618"
author: "Oleksandr Yakovenko, Mahdi Mostajabdaveh, Cheikh Ahmed, Abdullah Ali Sivas, Xiaorui Li, Zirui Zhou, Mao Kun"
categories: ["cs.AI"]
---

arXiv:2605.20618v1 Announce Type: new Abstract: Although Vehicle Routing Problems (VRP) are essential to many real-world systems, they remain computationally intractable at scale due to their combinatorial complexity. Traditional heuristics rely on handcrafted rules for local improvements and occasional \textit{jumps} to escape local minima, but often struggle to generalize across diverse instances. We introduce \textbf{COAgents}, a cooperative multi-agent framework that models the search process as a graph: nodes represent solutions, and edges correspond to either local refinements or large perturbations for diversification (i.e., jumps). A \textit{Partial Search Graph} (PSG) is dynamically constructed during search, enabling COAgents to train a Node Selection Agent and a Move Selection Agent to guide intensification, and a Jump Agent to trigger well-timed explorations of new regions. Unlike end-to-end learning approaches, COAgents cleanly separates problem-agnostic search control from compact domain-specific encoding, facilitating adaptability across tasks. Extensive experiments on the CVRP and VRPTW benchmarks show that COAgents remains competitive with several learn-to-search baselines on CVRP and sets a new state of the art among learning-based methods on the more challenging VRPTW instances, reducing the gap to the best-known solutions by 14\% at $N\!=\!100$ and 44\% at $N\!=\!50$ relative to the strongest neural solver (POMO), and by 21\% and 40\% respectively relative to ALNS. Code is available at https://github.com/mahdims/COAgents.

---

📖 [Read original article](https://arxiv.org/abs/2605.20618)