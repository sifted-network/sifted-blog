---
title: "Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21470"
author: "Caleb Winston, Ron Yifeng Wang, Azalia Mirhoseini, Christos Kozyrakis"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21470v1 Announce Type: cross Abstract: Computer-use agents (CUA) automate tasks specified with natural language such as "order the cheapest item from Taco Bell" by generating sequences of calls to tools such as click, type, and scroll on a browser. Current implementations follow a sequential fetch-screenshot-execute loop where each iteration requires an LLM call, resulting in high latency and frequent errors from incorrect tool use. We present agent just-in-time (JIT) compilation, an alternative that compiles task descriptions directly into executable code that is free to include LLM calls, tool calls, and parallelization. Our approach comprises three components: (1) JIT-Planner, which generates multiple code plans, validates each against tool specifications, and selects the minimum-cost candidate; (2) JIT-Scheduler, which explores parallelization strategies via Monte Carlo cost estimation from learned latency distributions; and (3) an invariant-enforcing tool protocol specifying precondition and postcondition state requirements that reduce the rate of generating plans with incorrect tool use. Across 5 web applications, JIT-Planner achieves $10.4\times$ speedup and $+28\%$ accuracy over Browser-Use, while JIT-Scheduler achieves $2.4\times$ speedup and $+9\%$ accuracy over OpenAI CUA.

---

📖 [Read original article](https://arxiv.org/abs/2605.21470)