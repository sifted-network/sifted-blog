---
title: "PALS: Power-Aware LLM Serving for Mixture-of-Experts Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21427"
author: "Can Hankendi, Rana Shahout, Minlan Yu, Ayse K. Coskun"
categories: ["cs.AI", "cs.DC"]
---

arXiv:2605.21427v1 Announce Type: new Abstract: Large language model (LLM) inference has become a dominant workload in modern data centers, driving significant GPU utilization and energy consumption. While prior systems optimize throughput and latency by batching, scheduling, and parallelism, they largely treat GPU power as a static constraint rather than a controllable resource. In this paper, we present a power-aware runtime for LLM serving, PALS, that treats GPU power caps as a first-class control knob and jointly optimizes them with software parameters such as batch size. The system combines lightweight offline power-performance models with a feedback-driven controller to select configurations that satisfy throughput targets while maximizing energy efficiency. We implement PALS within an existing LLM serving framework, vLLM, demonstrating that it requires no model retraining or API changes. Across multi-GPU systems and both dense and mixture-of-experts (MoE) models, PALS improves energy efficiency by up to 26.3%, reduces QoS violations by 4x to 7x under power constraints, and tracks dynamic power budgets. These results highlight the potential of integrating power control directly into LLM inference runtimes, enabling energy-proportional and grid-interactive AI systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.21427)