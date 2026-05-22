---
title: "RealUserSim: Bridging the Reality Gap in Agent Benchmarking via Grounded User Simulation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20204"
author: "Ming Zhu, Juntao Tan, Rithesh Murthy, Jielin Qiu, Liangwei Yang, Wenting Zhao, Silvio Savarese, Shelby Heinecke, Huan Wang"
categories: ["cs.HC", "cs.AI"]
---

arXiv:2605.20204v1 Announce Type: cross Abstract: LLM-based user simulation is the primary mechanism for end-to-end agent evaluation, yet simulated users are poor proxies for real humans: unconstrained LLM defaults produce a Formalism Ceiling (style match rates of 6-8% against real users), while hand-crafted behavioral directives trigger Directive Amplification, where models hyper-interpret instructions into unnatural behavioral extremes that vary dramatically across simulator models. We present RealUserSim, the first user simulation framework grounded in real behavioral data. From 14,000+ authentic human-LLM conversations (WildChat), we extract 7,275 executable behavioral profiles and use them to ground LLM simulators. A fidelity benchmark (PT3) on 600 conversations across 71+ domains with anti-leakage controls shows that grounded simulation raises match rate from 24.2% to 45.3% across five behavioral dimensions. Agent evaluation on TauBench with 6 simulator models and extensive analysis shows that grounded simulation acts as a realistic stress test, surfacing three failure mechanisms invisible to cooperative simulators (mean -3.2% to -3.5% task success degradation), while Directive Amplification in existing benchmarks produces unrealistic behavior that compromises the validity of agent evaluation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20204)