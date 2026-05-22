---
title: "Distributed Direct Preference Optimization"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20696"
author: "Zhanhong Jiang"
categories: ["cs.LG"]
---

arXiv:2605.20696v1 Announce Type: new Abstract: Preference-based reinforcement learning (RL) is a key paradigm for aligning policies with human judgments, yet its theoretical behavior in distributed settings where preference data are fragmented across heterogeneous users remains poorly understood. Direct Preference Optimization (DPO) avoids explicit reward modeling but lacks convergence guarantees under federated and decentralized training, where communication constraints and non-IID preferences fundamentally alter optimization dynamics. We provide the first convergence and time-complexity analysis of DPO in distributed environments. Modeling personalized offline RL with user-specific preference distributions, we characterize the induced global optimization landscape. For federated DPO, we derive convergence rates that quantify the impact of client drift, communication frequency, and preference heterogeneity; for decentralized DPO, we establish convergence over general communication graphs and show how spectral connectivity governs optimization speed and consensus. Empirically, we corroborate our theoretical insights on standard alignment benchmarks, demonstrating that our proposed methods not only enjoy strong theoretical guarantees but also deliver robust and scalable performance in practice. The code base is available here.

---

📖 [Read original article](https://arxiv.org/abs/2605.20696)