---
title: "Implicit Safety Alignment from Crowd Preferences"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21822"
author: "Qian Lin, Daniel S. Brown"
categories: ["cs.AI"]
---

arXiv:2605.21822v1 Announce Type: new Abstract: Reinforcement Learning from Human Feedback (RLHF) can reveal implicit objectives such as safety considerations that go beyond task completion. In this work, we focus on the common safety criteria embedded in crowd preference datasets, where different users may express distinct preferences or objectives, yet follow similar safety principles. Our aim is to discover shared safety criteria from crowd preferences and then transfer them to downstream RL tasks to regularize agent behavior and enforce safety. We first show that direct reward combination-optimizing a preference-learned reward model together with downstream task rewards-has inherent limitations. Motivated by this, we propose Safe Crowd Preference-based RL, a hierarchical framework that extracts safety-aligned skills from crowd preferences and composes them via a high-level policy to safely solve downstream tasks. Experiments across safe RL environments and a preliminary LLM-style task with diverse user goals and shared safety constraints demonstrate that our approach substantially lowers safety costs without access to explicit safety rewards, while achieving task performance comparable to oracle methods trained with ground-truth safety signals.

---

📖 [Read original article](https://arxiv.org/abs/2605.21822)