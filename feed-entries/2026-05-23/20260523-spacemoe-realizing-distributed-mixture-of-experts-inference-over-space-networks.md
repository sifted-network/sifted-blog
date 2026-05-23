---
title: "SpaceMoE: Realizing Distributed Mixture-of-Experts Inference over Space Networks"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.00515"
author: "Zhanwei Wang, Huiling Yang, Min Sheng, Khaled B. Letaief, Kaibin Huang"
categories: ["cs.DC", "cs.AI", "cs.NI"]
---

arXiv:2605.00515v2 Announce Type: replace-cross Abstract: Leveraging continuous solar energy harvesting at high efficiency, space data centers are envisioned as a promising platform for executing energy-intensive large language models (LLMs). Recognizing this advantage, space and AI conglomerates (e.g., SpaceX, Google) are actively investing in this vision. One key challenge, however, is the efficient distributed deployment of a large-scale LLM in a satellite network due to the limited onboard computing and communication resources. This gives rise to a placement problem that involves partitioning and mapping model components to satellites such that the fundamentally different model architecture and network topology can be reconciled to ensure low-latency token generation. To address this problem, we present the Space Network of Mixture-of-Experts (SpaceMoE) framework targeting the distributed execution of a popular mixture-of-experts (MoE) model in space. The proposed placement strategies are two-level: (1) layer placement, which assigns MoE layers to satellite subnets; and (2) intra-layer expert placement, which assigns individual experts to satellites associated with the same layer/subnet. For layer placement, we exploit the ring-like communication pattern of autoregressive inference to partition the satellite constellation along the orbiting direction into subnets arranged on a ring, each hosting one MoE layer. Based on this architecture, we formulate and solve an optimization problem for intra-layer expert placement to map experts with heterogeneous activation probabilities onto satellites. The derived strategy reveals an intuitive principle: a frequently activated expert should be mapped to a satellite on a routing path with low expected latency. Experiments over a thousand-satellite constellation show that SpaceMoE achieves at least a threefold latency reduction compared with conventional random and ablation-based placement strategies.

---

📖 [Read original article](https://arxiv.org/abs/2605.00515)