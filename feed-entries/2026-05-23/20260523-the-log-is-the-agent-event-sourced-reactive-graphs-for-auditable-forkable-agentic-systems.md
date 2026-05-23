---
title: "The Log is the Agent: Event-Sourced Reactive Graphs for Auditable, Forkable Agentic Systems"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21997"
author: "Yohei Nakajima"
categories: ["cs.AI", "cs.MA"]
---

arXiv:2605.21997v1 Announce Type: new Abstract: Most agent frameworks are built around the language model: a conversation loop comes first, then tools, then rules, and finally a logging layer bolted on for observability, with state persisted as retrievable "memory." We describe ActiveGraph, a runtime that inverts this arrangement. The append-only event log is the source of truth; the working graph is a deterministic projection of that log; and behaviors--ordinary functions, classes, LLM-backed routines, or logic attached to typed edges--react to changes in the graph and emit new events. No component instructs another; coordination happens entirely through the shared graph. This single design decision yields three properties that retrieval-and-summarization memory systems do not provide: deterministic replay of any run from its log, cheap forking that branches a run at any event without re-executing the shared prefix, and end-to-end lineage from a high-level goal down to the individual model call that produced each artifact. We present the architecture, a determinism contract that makes replay sound, and a worked diligence example whose full causal structure is reconstructable from the log alone. We discuss--without claiming to demonstrate--why this substrate is unusually well suited to self-improving agents, and how it extends the BabyAGI lineage and prior graph-memory research.

---

📖 [Read original article](https://arxiv.org/abs/2605.21997)