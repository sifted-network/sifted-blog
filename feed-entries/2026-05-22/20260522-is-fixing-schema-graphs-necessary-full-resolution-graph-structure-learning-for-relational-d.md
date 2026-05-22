---
title: "Is Fixing Schema Graphs Necessary? Full-Resolution Graph Structure Learning for Relational Deep Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21475"
author: "Yi Huang, Qingyun Sun, Jia Li, Xingcheng Fu, Jianxin Li"
categories: ["cs.LG"]
---

arXiv:2605.21475v1 Announce Type: new Abstract: Relational prediction tasks are fundamental in many real-world applications, where data are naturally stored in relational databases (RDBs). Relational Deep Learning (RDL) addresses this problem by modeling RDBs as graphs and applying graph neural networks (GNNs) for end-to-end learning. However, the full-resolution property is commonly adopted as a design principle in graph construction for RDBs to preserve relational semantics, which leads most existing methods to rely on fixed graph structures. In this paper, we propose FROG, a Full-Resolution and Optimizable Graph Structure Learning} framework for RDL that formulates relational structure learning as a learnable table role modeling problem, allowing tables to contribute as nodes and edges in message passing. We further design role-driven message passing mechanisms to capture relational semantics, enabling joint optimization of graph structure and GNN representations. To ensure semantic consistency, we introduce functional dependency constraints that regularize representations across table and entity levels. Extensive experiments demonstrate that our method outperforms existing approaches and reveal how table roles impact downstream tasks, offering new insights into graph construction for RDL

---

📖 [Read original article](https://arxiv.org/abs/2605.21475)