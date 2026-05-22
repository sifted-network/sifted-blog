---
title: "FT-Dojo: Towards Autonomous LLM Fine-Tuning with Language Agents"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.01712"
author: "Qizheng Li, Yifei Zhang, Xiao Yang, Xu Yang, Zhuo Wang, Weiqing Liu, Jiang Bian"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2603.01712v2 Announce Type: replace Abstract: Fine-tuning large language models for vertical domains remains labor-intensive, requiring practitioners to curate data, configure training, and iteratively diagnose model behavior. Despite growing interest in autonomous machine learning and language agents, end-to-end LLM fine-tuning has not been systematically studied as an interactive agent task. We introduce FT-Dojo, an interactive benchmark environment for autonomous LLM fine-tuning, comprising 13 tasks across 5 domains. Rather than a new collection of static datasets, FT-Dojo standardizes a task interface, shared raw-data repository, sandboxed execution environment, structured feedback protocol, and held-out evaluation procedure. We further develop FT-Agent, a fine-tuning-oriented autonomous framework that uses structured iteration planning, fail-fast validation, and multi-level feedback analysis to refine data and training strategies. Experiments show that FT-Agent provides a strong initial baseline, achieving the best performance on 10 out of 13 tasks, with additional controlled comparisons against frontier agents, open-source planning backbones, and multi-run statistics supporting the main findings. Case studies show that agents can recover from failures through cumulative learning, while still exposing limitations in causal diagnosis and long-horizon planning. The implementation is available at https://github.com/microsoft/rd-agent.

---

📖 [Read original article](https://arxiv.org/abs/2603.01712)