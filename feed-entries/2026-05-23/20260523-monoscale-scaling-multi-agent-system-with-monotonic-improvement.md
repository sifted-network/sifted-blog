---
title: "MonoScale: Scaling Multi-Agent System with Monotonic Improvement"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2601.23219"
author: "Shuai Shao, Yixiang Liu, Bingwei Lu, Weinan Zhang"
categories: ["cs.MA", "cs.AI"]
---

arXiv:2601.23219v2 Announce Type: replace-cross Abstract: In recent years, LLM-based multi-agent systems (MAS) have advanced rapidly, using a router to decompose tasks and delegate subtasks to specialized agents. A natural way to expand capability is to scale up the agent pool by continually integrating new functional agents or tool interfaces, but naive expansion can trigger performance collapse when the router cold-starts on newly added, heterogeneous, and unreliable agents. We propose MonoScale, an expansion-aware update framework that proactively generates a small set of agent-conditioned familiarization tasks, harvests evidence from both successful and failed interactions, and distills it into auditable natural-language memory to guide future routing. We formalize sequential augmentation as a contextual bandit and perform trust-region memory updates, yielding a monotonic non-decreasing performance guarantee across onboarding rounds. Experiments on GAIA and Humanity's Last Exam show stable gains as the agent pool grows, outperforming naive scale-up and strong-router fixed-pool baselines.

---

📖 [Read original article](https://arxiv.org/abs/2601.23219)