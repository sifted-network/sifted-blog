---
title: "Metis: Learning to Jailbreak LLMs via Self-Evolving Metacognitive Policy Optimization"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.10067"
author: "Huilin Zhou, Jian Zhao, Yilu Zhong, Zhen Liang, Xiuyuan Chen, Yuchen Yuan, Tianle Zhang, Chi Zhang, Lan Zhang, Xuelong Li"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.10067v3 Announce Type: replace-cross Abstract: Red teaming is critical for uncovering vulnerabilities in Large Language Models (LLMs). While automated methods have improved scalability, existing approaches often rely on static heuristics or stochastic search, rendering them brittle against advanced safety alignment. To address this, we introduce Metis, a framework that reformulates jailbreaking as inference-time policy optimization within an adversarial Partially Observable Markov Decision Process (POMDP). Metis employs a self-evolving metacognitive loop to perform causal diagnosis of a target's defense logic and leverages structured feedback as a semantic gradient to refine its policy, offering enhanced interpretability through transparent reasoning traces. Extensive evaluations across 10 diverse models demonstrate that Metis achieves the strongest average Attack Success Rate (ASR) among compared methods at 89.2%, maintaining high efficacy on resilient frontier models (e.g., 76.0% on O1 and 78.0% on GPT-5-chat) where traditional baselines exhibit substantial performance degradation. By replacing redundant exploration with directed optimization, Metis reduces token costs by an average of 8.2x and up to 11.4x. Our analysis reveals that current defenses remain vulnerable to internally-steered, closed-loop reasoning trajectories under the tested settings, highlighting a critical need for next-generation defenses capable of reasoning about safety dynamically during inference.

---

📖 [Read original article](https://arxiv.org/abs/2605.10067)