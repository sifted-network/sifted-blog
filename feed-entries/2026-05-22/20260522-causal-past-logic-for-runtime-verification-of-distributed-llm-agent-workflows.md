---
title: "Causal Past Logic for Runtime Verification of Distributed LLM Agent Workflows"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20923"
author: "Benedikt Bollig"
categories: ["cs.LO", "cs.AI", "cs.PL"]
---

arXiv:2605.20923v1 Announce Type: cross Abstract: Distributed LLM agent workflows should not be monitored as if they produced a single sequential log. In an asynchronous execution, a decision can only depend on events that are causally visible to the lifeline that makes it: an event that appears earlier in some log may still be unknown locally. We extend the ZipperGen agent-workflow framework with Causal Past Logic (CPL), a small past-time temporal logic for guards in conditionals and while loops. In addition to standard past-time modalities such as previous and since, a guard can inspect the latest causally visible event of another lifeline and selected variables stored there. The formula is a source-level guard: it is evaluated online by the owner lifeline and can influence control flow at runtime. We give a vector-clock monitor with latest-value views and prove that the locally computed monitor value coincides with the denotational semantics of the guard at the current event. Thus runtime verification becomes part of the coordination language itself, rather than a post-hoc check over an execution log.

---

📖 [Read original article](https://arxiv.org/abs/2605.20923)