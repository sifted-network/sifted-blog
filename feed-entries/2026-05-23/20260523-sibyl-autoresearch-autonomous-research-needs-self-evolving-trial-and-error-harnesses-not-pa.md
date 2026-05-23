---
title: "Sibyl-AutoResearch: Autonomous Research Needs Self-Evolving Trial-and-Error Harnesses, Not Paper Generators"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22343"
author: "Chengcheng Wang, Qinhua Xie, Wei He, Jianyuan Guo, Shiqi Wang, Chang Xu"
categories: ["cs.MA", "cs.AI", "cs.SE"]
---

arXiv:2605.22343v1 Announce Type: cross Abstract: Autonomous research systems increasingly make the scientific workflow executable: agents can propose ideas, run code, inspect results, and draft papers. But executable workflows do not by themselves produce research judgment. We analyze where current systems lose trial experience: weak evidence becomes prose, pilot signals become broad claims, memory remains textual, and recurring process failures do not change later behavior. We introduce Sibyl-AutoResearch, a self-evolving AutoResearch framework built around Scientific Trial-and-Error Harnesses. A harness lets agents run bounded trials, preserve positive and negative outcomes, and route lessons into later planning, validation, claim scope, scheduling, critique, writing, and harness repair. We formalize this through two auditable conversion units: trial-to-behavior conversion, which links trial signals to later research actions, and trial-to-harness-behavior conversion, which links recurring process failures to system updates. We implement the framework in SIBYL, a file-backed autonomous research system that exposes the state, roles, memory, gates, and artifact traces needed to inspect these conversion paths. A retrospective audit identifies eight high-confidence conversion events, with a median latency of one iteration and a maximum latency of three iterations. A recovered-failure registry further shows how five naturally occurring failure classes, including duplicate results, stale numbers, and unsupported statistics, were blocked, downgraded, or routed into later repair. These traces do not establish a comparative performance claim; they show that the proposed conversion units are recoverable from realistic autonomous-research workspaces. The SIBYL framework and system are available at https://github.com/Sibyl-Research-Team/AutoResearch-SibylSystem.

---

📖 [Read original article](https://arxiv.org/abs/2605.22343)