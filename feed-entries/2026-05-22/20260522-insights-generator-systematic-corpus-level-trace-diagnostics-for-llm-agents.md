---
title: "Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21347"
author: "Akshay Manglik (Emily), Apaar Shanker (Emily), Kaustubh Deshpande (Emily), Jason Qin (Emily), Yash Maurya (Emily), Veronica Chatrath (Emily), Vijay S. Kalmath (Emily), Levi Lentz (Emily), Yuan (Emily), Xue"
categories: ["cs.AI", "cs.LG", "cs.SE"]
---

arXiv:2605.21347v2 Announce Type: new Abstract: Diagnosing failures in LLM agents remains largely manual. Practitioners inspect a small subset of execution traces, form ad-hoc hypotheses, and iterate. This process misses patterns that only emerge across trace populations and does not scale to production corpora where individual traces span tens of thousands of tokens. We formalize the problem of corpus-level trace diagnostics. Given a corpus of execution traces, the goal is to produce grounded natural-language insights that characterize systematic behavioral patterns across trace groups, each linked to supporting evidence. We present the Insights Generator (IG), a multi-agent system that answers diagnostic questions by proposing and testing hypotheses across the trace corpus to produce an evidence-backed insights report. We evaluate IG across qualitative and objective dimensions, spanning rubric-based report assessment and downstream performance improvements achieved by implementing IG insights. Human experts using IG reports improve scaffold performance by 30.4pp over the unmodified baseline scaffold, and coding agents leveraging IG-derived insights show consistent and stable gains. Across benchmarks, IG's scout-investigator architecture produces findings comparable in detection coverage to competing approaches, while domain experts rated IG reports as leading depth and evidence quality.

---

📖 [Read original article](https://arxiv.org/abs/2605.21347)