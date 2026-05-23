---
title: "Evaluating Large Language Models as Live Strategic Agents: Provider Performance, Hybrid Decomposition, and Operational Gaps in Timed Risk Play"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22238"
author: "H. C. Ekne"
categories: ["cs.AI"]
---

arXiv:2605.22238v1 Announce Type: new Abstract: Static benchmarks capture only part of how large language models behave in practice. Real systems place models inside repeated loops with time limits, formatting constraints, and failure modes. We study this setting in a timed multi-phase Risk environment with explicit victory targets and repeated planning and execution cycles. In a replicated 32-game cross-provider championship under frozen rules, gemini-3.1-pro-preview won 20 of 32 games against gpt-5.1, claude-opus-4-7, and kimi-k2.6, and the pooled winner distribution differs strongly from an equal-strength null (p approx 1.5 x 10^-5). We then separate planning from execution by standardizing execution on a cheaper Gemini Flash scaffold. Under this design, a pooled 32-game planner bakeoff is consistent with near-equality (p approx 0.821), which indicates that much of the earlier provider spread came from end-to-end system behavior rather than planning alone. To study mechanism, we analyze saved planning and execution traces from the provider championship. Gemini refers to the terminal objective far more often than the other models and increases that focus as victory approaches. Gemini also converts more turns into deep conquest chains, even though it is not the cleanest runtime. These results show that live-agent performance depends on objective tracking, execution conversion, cost, and runtime reliability, and they support evaluating LLMs as components in bounded workflows rather than as isolated benchmark respondents.

---

📖 [Read original article](https://arxiv.org/abs/2605.22238)