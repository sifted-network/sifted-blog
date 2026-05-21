---
title: "Interference-Aware Multi-Task Unlearning"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19042"
author: "Ying-Hua Huang, Rui Fang, Hsi-Wen Chen, Ming-Syan Chen"
categories: ["cs.AI"]
---

arXiv:2605.19042v1 Announce Type: new Abstract: Machine unlearning aims to remove the contribution of designated training data from a trained model while preserving performance on the remaining data. Existing work mainly focuses on single-task settings, whereas modern models often operate in multi-task setups with shared backbones, where removing supervision for one task or instance can unintentionally affect others. We introduce multi-task unlearning with two settings: full-task unlearning, which removes a target instance from all tasks, and partial-task unlearning, which removes supervision only from selected tasks. We show that shared parameters couple the forget and retain sets, causing task-level interference on non-target tasks and instance-level interference on other instances. To address this issue, we propose an interference-aware framework that combines task-aware gradient projection, which constrains updates within task-specific subspaces, with instance-level gradient orthogonalization, which reduces conflicts between forget and retain signals. Experiments on two multi-task computer vision benchmarks across five tasks show that our method achieves effective unlearning while maintaining strong generalization, reducing UIS compared with the strongest baseline by 30.3% in full-task unlearning and 52.9% in partial-task unlearning.

---

📖 [Read original article](https://arxiv.org/abs/2605.19042)