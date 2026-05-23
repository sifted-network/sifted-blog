---
title: "Harnesses for Inference-Time Alignment over Execution Trajectories"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21516"
author: "Boyuan Wang, Bochao Li, Minghan Wang, Yuxin Tao, Fang Kong"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21516v1 Announce Type: cross Abstract: Harness engineering has emerged as an important inference-time technique for large language model (LLM) agents, aiming to improve long-term performance through task decomposition and guided execution. However, more elaborate harnesses are not uniformly better: increasing decomposition or guidance can sometimes improve execution, but can also reduce final task success. We study harness design through the lens of inference-time trajectory alignment. This perspective separates harness into two mechanisms: task decomposition, which structures a task into sub-goals, and guided execution, which reshapes local action distributions during execution. This decomposition allows us to quantify how workflow granularity, retry budgets, and guidance-induced action reweighting shape the performance limits of harness design. It further reveals concrete failure modes, including over-decomposition, over-pruning, and hallucinated execution. We validate these predictions through controlled synthetic experiments and real terminal agent benchmarks. Inspired by the theory, we further show that effective harnesses can be partial: specifying only the initial steps and leaving the remaining execution to agent can achieve higher pass rate than fully structured workflows.

---

📖 [Read original article](https://arxiv.org/abs/2605.21516)