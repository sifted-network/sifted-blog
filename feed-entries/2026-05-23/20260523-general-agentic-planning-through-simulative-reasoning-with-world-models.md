---
title: "General Agentic Planning Through Simulative Reasoning with World Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2507.23773"
author: "Mingkai Deng, Jinyu Hou, Zhiting Hu, Eric Xing"
categories: ["cs.AI", "cs.CL", "cs.LG", "cs.RO"]
---

arXiv:2507.23773v3 Announce Type: replace Abstract: What does it mean to plan? Current agentic systems, whether scaffolded workflows or end-to-end policies, rely on reactive decision-making: selecting the next action via a fixed procedure with at most undifferentiated adaptive computation (e.g., chain-of-thought) lacking explicit modeling of future outcomes. This limits generalizability, as each new task demands re-engineering rather than transfer of shared reasoning capacity. Humans, by contrast, plan by mentally simulating consequences of candidate actions within an internal world model, a capacity known as simulative reasoning (System II) that supports flexible, goal-directed behavior across diverse contexts. We argue that simulative reasoning through a world model provides a general-purpose planning mechanism for agentic systems, improving upon reactive policies (System I) by grounding decisions in predicted future states rather than pattern-matched responses. To verify this, we introduce SiRA (Simulative Reasoning Architecture), a goal-oriented architecture instantiating simulative reasoning using an LLM-based world model with natural-language belief states, while remaining model-agnostic. We evaluate across three qualitatively distinct task categories: constrained navigation, multi-hop information aggregation, and general instruction following, in a web-browser environment. Across all categories, simulative reasoning achieves up to 124% higher task completion rates than a matched reactive baseline, and increases constrained navigation success from 0% to 32.2% compared to a representative open-web agent. The persistent advantage across distinct task types suggests the benefit stems from generalizable counterfactual evaluation rather than task-specific tuning.

---

📖 [Read original article](https://arxiv.org/abs/2507.23773)