---
title: "ZEBRA: Zero-shot Budgeted Resource Allocation for LLM Orchestration"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20485"
author: "May Hamri, Inbal Talgam-Cohen"
categories: ["cs.LG"]
---

arXiv:2605.20485v1 Announce Type: new Abstract: As autonomous agents increasingly execute end-to-end tasks under fixed monetary budgets, the pressing open question shifts from whether the budget is respected, to how to spend it effectively. Existing budget-aware methods typically control reasoning step-by-step within a single agent, or learn resource allocation policies via RL. None address how to split a budget across the composing phases of a multi-agent pipeline at inference time. We propose ZEBRA, a zero-shot framework that reduces multi-phase budget allocation to a continuous nonlinear knapsack problem: an LLM controller estimates per-phase utility curves, and a water-filling search on the Lagrange multiplier returns the per-phase split. Additive and multiplicative aggregations are unified under the same solver. On a $150$-task APPS coding benchmark, both ZEBRA variants outperform LLM-direct (budget allocation directly by an LLM) on every aggregate metric. At a budget of $\alpha = 0.5$ of the unconstrained spend, ZEBRA recovers $94.4\%$ of unconstrained quality, versus $88.1\%$ for LLM-direct. The advantage is statistically significant and transfers beyond coding: on a $3$-phase HotpotQA pipeline, ZEBRA beats LLM-direct by $14.3$pp, with allocations empirically robust to curve-estimation noise. On HotpotQA, ZEBRA arrives at a different budget split (near-balanced) compared to the APPS one (skewed towards a refinement phase), showing adaptation to the pipeline structure. More broadly, we show that lightweight algorithmic guidance at inference time can improve the economic behavior of autonomous multi-agent systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.20485)