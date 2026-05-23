---
title: "Don't Forget the Critic: Value-Based Data Rehearsal for Multi-Cyclic Continual Reinforcement Learning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22454"
author: "Benjamin Poole, Andrew Quinn, Li Yang, Minwoo Lee"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22454v1 Announce Type: cross Abstract: Data rehearsal has emerged as a leading approach for mitigating catastrophic forgetting in Continual Reinforcement Learning (CRL). However, existing work remains confined to policy gradient frameworks, regularizing only actors due to the performance degradation incurred by critic regularization. This actor-centric approach overlooks the potential of data rehearsal for value function approximation. Moreover, existing evaluations in CRL rarely consider multi-cyclic environments where task sequences repeat, a critical real-world scenario that exacerbates forgetting and plasticity. We investigate data rehearsal for Deep Q-Networks using Q-value regularization in multi-cyclic settings and propose Qreg+NWLU which introduces two simple modifications: (1) continuous data rehearsal that dynamically collects and updates stored Q-values throughout training, and (2) "No-Wait" regularization that applies immediately rather than after the first task. Together, these modifications yield improvements in learning efficiency, forgetting mitigation, and knowledge transfer over Qreg and conventional CRL methods within value function approximation settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.22454)