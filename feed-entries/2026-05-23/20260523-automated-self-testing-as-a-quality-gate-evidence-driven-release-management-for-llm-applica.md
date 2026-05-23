---
title: "Automated Self-Testing as a Quality Gate: Evidence-Driven Release Management for LLM Applications"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.15676"
author: "Alexandre Cristov\\~ao Maiorano"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2603.15676v2 Announce Type: replace-cross Abstract: LLM applications are AI systems whose nondeterministic outputs and evolving model behavior make traditional testing insufficient for release governance. We present an automated self-testing framework that introduces quality gates with evidence-based release decisions (PROMOTE/HOLD/ROLLBACK) across five empirically grounded dimensions: task success rate, research context preservation, P95 latency, safety pass rate, and evidence coverage. We evaluate the framework through a longitudinal case study of an internally deployed multi-agent conversational AI system with specific marketing capabilities in active development, covering 38 evaluation runs across 20+ internal releases. The gate identified two ROLLBACK-grade builds in early runs and supported stable quality evolution over a four-week staging lifecycle while exercising persona-grounded, multi-turn, adversarial, and evidence-required scenarios. Statistical analysis (Mann-Kendall trends, Spearman correlations, bootstrap confidence intervals), gate ablation, and overhead scaling indicate that evidence coverage is the primary severe-regression discriminator and that runtime scales predictably with suite size. A human calibration study (n=60 stratified cases, two independent evaluators, LLM-as-judge cross-validation) reveals complementary multi-modal coverage: LLM-judge disagreements with the system gate (kappa=0.13) are attributable to structural failure modes - latency violations and routing errors - invisible in response text alone, while the judge independently surfaces content quality failures missed by structural checks, consistent with a multi-dimensional gate design. The framework, supplementary pseudocode, and calibration artifacts are provided to support AI-system quality assurance and independent replication.

---

📖 [Read original article](https://arxiv.org/abs/2603.15676)