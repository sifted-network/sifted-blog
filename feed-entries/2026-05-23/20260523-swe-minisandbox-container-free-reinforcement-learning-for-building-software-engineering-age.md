---
title: "SWE-MiniSandbox: Container-Free Reinforcement Learning for Building Software Engineering Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.11210"
author: "Danlong Yuan, Wei Wu, Zhengren Wang, Xueliang Zhao, Huishuai Zhang, Dongyan Zhao"
categories: ["cs.SE", "cs.AI", "cs.LG"]
---

arXiv:2602.11210v4 Announce Type: replace-cross Abstract: Reinforcement learning (RL) has become a key paradigm for training software engineering (SWE) agents, but existing pipelines typically rely on per-task containers for isolation. At scale, pre-built container images incur substantial storage overhead, slow environment setup, and require container-management privileges. We propose SWE-MiniSandbox, a lightweight, container-free method that enables scalable RL training of SWE agents without sacrificing isolation. Instead of relying on per-instance containers, SWE-MiniSandbox executes each task in an isolated workspace backed by kernel-level mechanisms, substantially reducing system overhead. It leverages lightweight environment pre-caching techniques to eliminate the need for bulky container images. As a result, our approach lowers disk usage to approximately 5\% of that required by container-based pipelines and reduces environment preparation time to about 25\% of the container baseline. Empirical results demonstrate that SWE-MiniSandbox achieves evaluation performance comparable to standard container-based pipelines. By removing the dependency on heavy container infrastructure, SWE-MiniSandbox offers a practical and accessible foundation for scaling RL-based SWE agents, particularly in resource-constrained research environments.

---

📖 [Read original article](https://arxiv.org/abs/2602.11210)