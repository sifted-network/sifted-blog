---
title: "Tunable MAGMAX: Preference-Aware Model Merging for Continual Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20803"
author: "Kei Hiroshima, Kento Uchida, Shinichi Shirakawa"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20803v1 Announce Type: cross Abstract: Continual learning (CL) aims to train models sequentially on multiple tasks while mitigating catastrophic forgetting of previously learned knowledge. Recent advances in large pre-trained models (LPMs) and model merging techniques, such as MAGMAX, have demonstrated effective CL performance by combining task-specific parameters. However, existing methods primarily focus on average performance across all tasks and do not adequately address how to construct models accommodating different deployment environments or varying user preferences. This paper proposes a model merging framework, termed Tunable MAGMAX, which enables preference-aware control of task-specific performance in CL. Our method introduces a preference vector that controls the number of elements selected from each task vector during model merging, allowing us to adjust the merged model performance according to their deployment needs. We further propose a method for automatically constructing appropriate preference vectors by leveraging small amounts of target environment data and datasets from model training tasks, thereby eliminating the need for manual specification. The experimental result on CL benchmark tasks demonstrates that Tunable MAGMAX effectively controls task-wise performance and successfully adapts merged models to various target environments. The proposed Tunable MAGMAX achieves superior or comparable performance to baseline methods, making it a practical solution for deploying CL models to various environments where the preferences of each task performance differ.

---

📖 [Read original article](https://arxiv.org/abs/2605.20803)