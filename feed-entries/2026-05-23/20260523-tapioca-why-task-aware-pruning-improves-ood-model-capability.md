---
title: "TAPIOCA: Why Task- Aware Pruning Improves OOD model Capability"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.14738"
author: "Krish Sharma, Omar Naim, Soumadeep Saha, Vinija Jain, Aman Chadha, Nicholas Asher"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.14738v2 Announce Type: replace-cross Abstract: Recent work has promoted task-aware layer pruning as a way to improve model performance on particular tasks, as shown by TALE. In this paper, we investigate when such improvements occur and why. We show first that, across controlled polynomial regression tasks and large language models, such pruning yields no benefit on in-distribution (ID) data but consistently improves out-of-distribution (OOD) accuracy. We further show empirically that OOD inputs induce layerwise norm and pairwise-distance profiles that deviate from the corresponding ID profiles. This leads to a geometric explanation of task-aware pruning: each task induces a task-adapted geometry, characterized empirically by the representation profiles observed on ID inputs. OOD inputs can introduce a distorted version of the task-adapted geometry. Task-aware pruning identifies layers that create or amplify this distortion; by removing them, it shifts OOD representational norms and pairwise distances toward those observed on the adapted distribution. This realigns OOD inputs with the model's task-adapted geometry and improves performance. We provide causal evidence through controlled distribution shifts and residual-scaling interventions, and demonstrate consistent behavior across model scales.

---

📖 [Read original article](https://arxiv.org/abs/2605.14738)