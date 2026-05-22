---
title: "Frontier: Towards Comprehensive and Accurate LLM Inference Simulation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21312"
author: "Yicheng Feng, Xin Tan, Yangtao Deng, Yimin Jiang, Yibo Zhu, Hong Xu"
categories: ["cs.DC", "cs.AI", "cs.LG"]
---

arXiv:2605.21312v1 Announce Type: cross Abstract: Modern LLM serving is no longer homogeneous or monolithic. Production systems now combine disaggregated execution, complex parallelism, runtime optimizations, and stateful workloads such as reasoning, agents, and RL rollouts. Simulation is attractive for exploring this growing design space, yet existing simulators lack the architectural completeness and decision-grade fidelity it demands. Their monolithic-replica abstractions are ill-suited to disaggregated serving, while average-case analytical proxies can distort SLA predictions and even reverse optimization conclusions. We present Frontier, a discrete-event simulator for modern LLM inference serving. Frontier features a disaggregated abstraction. It captures the structure and dynamics of modern serving systems by modeling co-location, Prefill-Decode Disaggregation (PDD), and Attention-FFN Disaggregation (AFD) with role-specific cluster workers, incorporating key runtime optimizations (e.g., CUDA Graphs, speculative decoding) within the scheduler-batch-engine loop, and supporting stateful requests for emerging workloads. It further provides accurate and generalizable predictions of computation, communication, and memory costs across diverse serving scenarios with complex workload compositions. On 16-H800 GPU testbed, Frontier achieves an average throughput error below 4%. Compared with state-of-the-art simulators, it reduces end-to-end latency error from 44.9% to 6.4% under co-location and from 51.7% to 2.6% under disaggregation. It scales to over 1K GPUs on commodity CPUs and enables new use cases such as SLA-dependent Pareto frontier exploration, heterogeneous disaggregated allocation, agentic reasoning scheduling validation, and RL post-training reconfiguration.

---

📖 [Read original article](https://arxiv.org/abs/2605.21312)