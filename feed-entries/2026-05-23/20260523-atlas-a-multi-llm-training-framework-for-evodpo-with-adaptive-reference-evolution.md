---
title: "ATLAS: A Multi-LLM Training Framework for EvoDPO with Adaptive Reference Evolution"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.02709"
author: "Ujin Jeon, Jiyong Kwon, Madison Ann Sullivan, Caleb Eunho Lee, Guang Lin"
categories: ["cs.AI"]
---

arXiv:2602.02709v3 Announce Type: replace Abstract: Recent multi-LLM agent systems have shown promising capabilities for automated problem-solving, yet they predominantly rely on frozen agents or static fine-tuning pipelines. To address this limitation, our primary contribution is ATLAS (Adaptive Task-distributed Learning for Agentic Self-evolution), a multi-agent framework where specialized meta-agents collaboratively train and refine an active agent toward a domain-specific policy. A core challenge in iterative preference learning within these pipelines is the reliance on fixed reference models, which typically leads to overly conservative updates or training stagnation. To overcome this, the framework's algorithmic engine utilizes Evolving Direct Preference Optimization (EvoDPO). EvoDPO employs an inspection agent to perform adaptive, proxy-KL gated reference policy updates based on continuous training telemetry. We evaluate this full framework across a diverse set of challenging environments-including non-stationary contextual bandits, partial differential equations (PINNs), and combinatorial optimization tasks (TSP, Bin Packing). Through comparison against fixed-reference, adaptive-reference, and external automated-discovery baselines, our results suggest that ATLAS combines supporter-driven exploration with EvoDPO-driven stability to improve long-horizon evaluator-driven self-improvement.

---

📖 [Read original article](https://arxiv.org/abs/2602.02709)