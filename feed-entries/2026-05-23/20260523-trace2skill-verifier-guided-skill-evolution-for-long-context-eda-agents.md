---
title: "Trace2Skill: Verifier-Guided Skill Evolution for Long-Context EDA Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21810"
author: "Zijian Du, Nathaniel Pinckney"
categories: ["cs.AI", "cs.MA"]
---

arXiv:2605.21810v1 Announce Type: new Abstract: Complex Verilog Design Problems (CVDP) challenge hardware LLM agents because solving them requires localizing verifier-relevant RTL, testbenches, include paths, and build dependencies inside large repository snapshots, making precise edits, and recovering from sparse hidden-verifier failures. We present Trace2Skill, a test-time scaling framework that improves a hardware agent without RTL-specialized model fine-tuning. Rather than training a new model or only sampling more candidate solutions, Trace2Skill treats the agent's natural-language skill as an evolvable policy. It mines repeated rollout traces for success and failure modes, converts them into dense diagnostics and oracle lessons, and uses an oracle, mutator, and selector loop to produce task-specific skills that guide later search, editing, validation, and recovery. Because final pass/fail labels are often too coarse for hard failures, Trace2Skill also supports bounded runtime dense verifier feedback that returns sanitized functional observations while keeping hidden harnesses and reference solutions inaccessible to the agent. This feedback helps guide skill evolution and agent execution by connecting skill text, verifier evidence, and downstream behavior. Across hard CVDP tasks that defeat the seed CVDP agent, including tasks that also defeat frontier coding agents, Trace2Skill with dense verifier feedback substantially improves task pass rates and produces breakthrough passes on previously unsolved tasks, without requiring high-quality fine-tuning data, specialized RTL model training, or model weight updates. The same framework provides a general test-time scaling strategy that can extend beyond digital design to other verifiable EDA tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.21810)