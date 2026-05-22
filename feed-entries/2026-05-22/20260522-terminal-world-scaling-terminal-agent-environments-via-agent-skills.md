---
title: "Terminal-World: Scaling Terminal-Agent Environments via Agent Skills"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20876"
author: "Zihao Cheng, Hongru Wang, Zeming Liu, Xinyi Wang, Xiangrong Zhu, Yuhang Guo, Wei Lin, Jeff Z. Pan, Yunhong Wang"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20876v1 Announce Type: cross Abstract: Terminal agents extend Large Language Models with the ability to execute tasks directly in command-line environments, but their progress is bottlenecked by the scarcity of high-quality training data. Existing approaches bootstrap from partial sources such as human-defined seeds or GitHub repositories to instantiate one component and then complete the rest, producing tasks confined to narrow seed distributions, environments misaligned with task semantics, and inefficient trajectories from unguided exploration. To address these limitations, we introduce Terminal-World, a fully automated pipeline that uses agent skills as the central synthesis primitive, which jointly encode what to accomplish, when to apply (preconditions and environment state), and how to execute, enabling task instructions, environments, and teacher trajectories to be co-derived. To further broaden the synthesis space, Terminal-World composes skills into skill teams and skill graphs for multi-role and cross-domain task synthesis. Using this pipeline, we construct 5,723 training environments and train Terminal-World-8B/14B/32B, evaluated across 6 benchmarks where the Terminal-World series consistently outperforms terminal-agent baselines. Notably, using the same teacher model and only 1.2% of the training data, Terminal-World-32B surpasses Nemotron-Terminal-32B on Terminal-Bench 2.0 by +4.5 Pass@1 (31.5) and achieves 43.8 Pass@3.

---

📖 [Read original article](https://arxiv.org/abs/2605.20876)