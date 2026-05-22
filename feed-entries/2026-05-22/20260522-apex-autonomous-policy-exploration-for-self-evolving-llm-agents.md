---
title: "APEX: Autonomous Policy Exploration for Self-Evolving LLM Agents"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21240"
author: "Yibo Li, Jiashuo Yang, Zhi Zheng, Zhiyuan Hu, Yuan Sui, Shizun Wang, Yufei He, Bryan Hooi"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21240v1 Announce Type: cross Abstract: LLM agents have shown strong performance across a wide range of complex tasks, including interactive environments that require long-horizon decision making. But these agents cannot learn on the fly at test time. Self-evolving agents address this by accumulating memory and reflection across episodes rather than requiring model-weight updates. However, these agents often suffer from exploration collapse: as memory grows, behavior concentrates around familiar high-reward routines, reducing the chance of discovering better alternatives. To address this problem, we propose Autonomous Policy EXploration (APEX), which builds and maintains an explicit strategy space through a strategy map-a directed acyclic graph of milestones with prerequisite dependency edges. In APEX, Fork Discovery expands the map with evidence-grounded unexplored directions, while Policy Selection balances exploration and exploitation during planning. Evaluated on nine Jericho text-adventure games and WebArena, a realistic web interaction benchmark, APEX outperforms all baselines. Extensive ablations validate each component's contribution and demonstrate robustness across diverse settings, demonstrating APEX's effectiveness for sustained exploration in self-evolving agents.

---

📖 [Read original article](https://arxiv.org/abs/2605.21240)