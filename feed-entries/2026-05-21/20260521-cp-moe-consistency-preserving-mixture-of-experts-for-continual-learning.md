---
title: "CP-MoE: Consistency-Preserving Mixture-of-Experts for Continual Learning"
date: "2026-05-21"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20247"
author: "Yang Liu, Toan Nguyen, Flora D. Salim"
categories: ["cs.LG", "cs.AI", "cs.CL", "cs.CV"]
---

arXiv:2605.20247v1 Announce Type: new Abstract: Catastrophic forgetting remains a major obstacle to continual learning in large language models (LLMs) and vision--language models (VLMs). Although Mixture-of-Experts (MoE) architectures offer an efficient path to scaling, existing LoRA-based MoE continual learning methods still face a fundamental trade-off: they either isolate experts too aggressively, limiting knowledge transfer across tasks, or allow task-specific updates to overwrite important existing parameters, leading to severe forgetting. To address this, we propose CP-MoE, a continual learning framework built around a transient expert that captures early task-specific updates and guides their integration into stable experts. CP-MoE introduces a consistency-preserving routing bias, which uses the transient expert to estimate representation similarity with stable experts and steer routing towards more compatible expert selection, and a transient expert-guided regularisation mechanism, which selectively protects important historical parameters during merging. Together, these components reduce parameter interference and forgetting while preserving cross-task knowledge transfer. We validate CP-MoE on both unimodal and multimodal continual learning benchmarks with LLM-based and VLM-based MoE models. On SuperNI benchmark, spanning diverse sequential language tasks, CP-MoE achieves state-of-the-art performance and stronger zero-shot transfer to unseen tasks. On VQA v2 dataset, it scales effectively to multimodal visual reasoning, consistently reduces forgetting, and outperforms strong MoE baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.20247)