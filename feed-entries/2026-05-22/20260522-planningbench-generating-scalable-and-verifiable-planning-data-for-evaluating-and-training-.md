---
title: "PlanningBench: Generating Scalable and Verifiable Planning Data for Evaluating and Training Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20873"
author: "Ziliang Zhao, Zenan Xu, Shuting Wang, Hongjin Qian, Yan Lei, Minda Hu, Zhao Wang, Shihan Dou, Zhicheng Dou, Pluto Zhou"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.20873v1 Announce Type: new Abstract: Planning is a fundamental capability for large language models (LLMs) because such complex tasks require models to coordinate goals, constraints, resources, and long-term consequences into executable and verifiable solutions. Existing planning benchmarks, however, usually treat planning data as fixed collections of instances rather than controllable generation targets. This limits scenario coverage, ties difficulty to surface-level proxies rather than structural sources, and offers limited support for scalable generation, automatic verification, or planning-oriented training. We introduce PlanningBench, a framework for generating scalable, diverse, and verifiable planning data for both evaluation and training. PlanningBench starts from real planning scenarios and abstracts practical workflows into a structured taxonomy of more than 30 task types, subtasks, constraint families, and difficulty factors. Guided by this taxonomy, a constraint-driven synthesis pipeline instantiates self-contained planning problems with adaptive difficulty control, quality filtering, and instance-level verification checklists. This shifts planning data construction from fixed benchmark collection to controllable generation while preserving realistic task grounding. We use PlanningBench to evaluate open-source and closed-source frontier LLMs, and find that current models still struggle to produce complete solutions under coupled constraints. Beyond evaluation, reinforcement learning on verified PlanningBench data improves performance on unseen planning benchmarks and broader instruction-following tasks. Further analysis suggests that determinate or well-specified optimal solutions provide clearer reward signals and more stable training dynamics. Overall, PlanningBench provides a controllable source of planning data for diagnosing and improving generalizable planning abilities in LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2605.20873)