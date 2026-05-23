---
title: "TO-Agents: A Multi-Agent AI Pipeline for Preference-Guided Topology Optimization"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21622"
author: "Isabella A. Stewart, Hongrui Chen, Faez Ahmed"
categories: ["cs.AI"]
---

arXiv:2605.21622v1 Announce Type: new Abstract: Topology optimization can generate efficient structures, but designers often must manually translate qualitative intent, such as desired visual style, product experience, or manufacturability into solver settings that are not directly tied to those preferences. We present TO-Agents, a multi-agent AI framework that connects natural-language design intent with iterative topology optimization. The framework converts a human-provided problem description into validated solver inputs, runs a topology optimization solver, renders the resulting 3D topology, and uses multi-view vision-language reasoning with an independent judge agent to critique each result and revise solver parameters. We evaluate the framework on two long-horizon design tasks: a cantilever beam benchmark and a phone-stand product design. In both tasks, the designer specifies an aesthetic preference for hierarchically branched structures inspired by natural tree morphologies, and the system performs four revision cycles across ten independent replicates. TO-Agents produces at least one preference-aligned design in 60% of trials for each case study, corresponding to up to 6x more successful trials than an ablated pipeline without visual or historical feedback. Judge scores and human evaluations show that the pipeline can identify effective parameter levers, recover from poor revisions, and expand design exploration. A manufacturing agent further post-processes top-ranked designs for additive manufacturing, enabling end-to-end intent-to-prototype design. We also identify failure modes, including overshooting, selective memory, misplaced tools, and incorrect parameter reasoning. These results suggest that agentic topology optimization can shift designers from low-level parameter tuning toward higher-level specification of form and function, while highlighting safeguards needed for reliable autonomous engineering design.

---

📖 [Read original article](https://arxiv.org/abs/2605.21622)