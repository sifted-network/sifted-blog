---
title: "Governance by Construction for Generalist Agents"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20874"
author: "Segev Shlomov, Iftach Shoham, Alon Oved, Ido Levy, Sami Marreed, Harold Ship, Offer Akrabi, Sergey Zeltyn, Avi Yaeli, Nir Mashkif"
categories: ["cs.AI", "cs.SE"]
---

arXiv:2605.20874v1 Announce Type: new Abstract: Enterprise agents are increasingly expected to operate autonomously across tools and interfaces, yet production deployments require governance by construction. Systems must specify which actions are allowed, when human oversight is required, and what information may be exposed, without rebuilding the agent for each domain. This demo presents CUGA's policy system, a modular policy-as-code layer that composes with a generalist LLM agent to deliver predictable, auditable, and compliance-aware behavior in compound workflows without model fine-tuning. We present a runtime governance architecture that enforces policy interventions at every critical stage of execution. Rather than passively constraining behavior, policies intercept the agent at five structural checkpoints: upstream of planning (Intent Guard), within the system prompt to steer reasoning (Playbook), at the tool-call boundary to enforce proper usage (Tool Guide), outside the reasoning loop as a Human-in-the-Loop gate for high-risk actions (Tool Approvals), and at the output stage to filter and structure the final response (Output Formatter). Together, these stages embed governance continuously across the agent's execution pipeline rather than treating it as an afterthought. Using a healthcare scenario and a multi-layered enforcement intervention, the demo shows dynamic playbook injection for structured tool-sequence enforcement, intent guards that block malicious or accidental harmful requests, and human-in-the-loop tool approval checkpoints for potentially destructive actions. The artifact illustrates how typed governance primitives enable faster, safer deployment of enterprise agentic systems while improving policy adherence and execution consistency.

---

📖 [Read original article](https://arxiv.org/abs/2605.20874)