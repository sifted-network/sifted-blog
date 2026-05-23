---
title: "Ratchet: A Minimal Hygiene Recipe for Self-Evolving LLM Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22148"
author: "Xing Zhang, Yanwei Cui, Guanghui Wang, Ziyuan Li, Wei Qiu, Bing Zhu, Peiyang He"
categories: ["cs.AI", "cs.CL"]
---

arXiv:2605.22148v1 Announce Type: new Abstract: Self-evolving skill libraries, pioneered by Voyager, let frozen LLM agents accumulate reusable knowledge without weight updates, yet recent evaluation shows that LLM-authored skills deliver $+0.0$pp over no-skill baselines while human-curated ones deliver $+16.2$pp: the bottleneck is not skill authoring but lifecycle management. We introduce \textbf{Ratchet}, a single-agent loop in which a frozen LLM writes, retrieves, curates, and retires its own natural-language skills. Ratchet integrates four candidate hygiene mechanisms: outcome-driven retirement, a bounded active-cap, meta-skill authoring guidance, and pattern canonicalisation. On MBPP+ hard-100 with Claude Opus 4.7, Ratchet lifts held-out pass@1 from a $0.258 \pm 0.047$ baseline to a late-window rolling mean of $0.584$ (peak $0.658 \pm 0.042$) across 100 rounds and 3 seeds, a $+0.328 \pm 0.018$ rolling-mean gain where the no-skill control drifts at $+0.002 \pm 0.005$; the same recipe transfers to an agentic solver on SWE-bench Verified ($+0.22$ peak lift over 20 rounds). Eight ablations (A1--A8) reveal that the minimal working recipe is smaller than our design suggests: retirement and the meta-skill authoring prior are load-bearing, while explicit deduplication (canonicalisation, cover-guard) is subsumed by the meta-skill itself. A non-divergence proposition shows that bounded cap and retirement threshold together prevent expected performance from drifting below the no-skills floor.

---

📖 [Read original article](https://arxiv.org/abs/2605.22148)