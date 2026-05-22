---
title: "Optimized Federated Knowledge Distillation with Distributed Neural Architecture Search"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21322"
author: "Chaimaa Medjadji, Sylvain Kubler, Yves Le Traon, Guilain Leduc, Sadi Alawadi, Feras M. Awaysheh"
categories: ["cs.LG"]
---

arXiv:2605.21322v1 Announce Type: new Abstract: Federated Learning (FL) enables collaborative model training without centralizing data. However, real-world deployments must simultaneously address statistical heterogeneity across client data (non-IID), system heterogeneity in device capabilities, and communication efficiency. Existing FL approaches mitigate these challenges through improved aggregation, personalization, or knowledge distillation, but they almost universally assume a fixed client architecture, limiting adaptability to heterogeneous data complexity and hardware constraints. This architectural constraint often leads to suboptimal trade-offs between accuracy and efficiency in real-world FL systems. This work introduces FedKDNAS, a distillation-driven FL framework that combines client-side neural architecture selection with distillation of server-coordinated knowledge. Each client autonomously selects a lightweight model under accuracy-resource constraints. It then trains it locally using a hybrid objective combining supervised learning and knowledge distillation and shares only predictions on a public reference set. The server then aggregates and smooths these predictions, optionally combining them with a teacher model, to produce stable distillation targets for the next round. Extensive evaluation on six datasets against six representative FL baselines (FedAvg, Ditto, FedMD, FedDF, FedDistill, Local-KD) demonstrates that FedKDNAS consistently achieves superior Pareto efficiency, improving accuracy by up to 15\% under non-IID conditions, reducing client CPU usage by approximately 28\%, and decreasing communication overhead by up to 44 times while maintaining lightweight logit-based communication.

---

📖 [Read original article](https://arxiv.org/abs/2605.21322)