---
title: "CRAFT: Conflict-Resolved Aggregation for Federated Training"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21317"
author: "Ziqi Wang, Qiang Liu, Nils Thuerey"
categories: ["cs.LG"]
---

arXiv:2605.21317v1 Announce Type: new Abstract: The aggregation of conflicting client updates remains a fundamental bottleneck in federated learning (FL) under heterogeneous data distributions. Naive averaging can produce a global update that improves the global objective while conflicting with specific clients, causing degradation for those clients. In this work, we propose CRAFT (Conflict-Resolved Aggregation for Federated Training), a new aggregation framework that treats the global update as a geometric correction problem. We formulate aggregation as finding the update closest to a reference direction while satisfying conflict-free alignment constraints. We derive a closed-form expression for the constrained optimization problem, avoiding the computational overhead of iterative solvers. Furthermore, we use a layer-wise adaptation to address conflicts at varying feature granularities. We provide a theoretical analysis showing that CRAFT promotes a common-descent structure and mitigates conflicts through its projection geometry. Extensive experiments on heterogeneous benchmarks demonstrate that CRAFT improves the accuracy of the global model while reducing performance disparity across clients compared with state-of-the-art baselines. The source code for CRAFT is available at https://github.com/tum-pbs/CRAFT.

---

📖 [Read original article](https://arxiv.org/abs/2605.21317)