---
title: "SOPE: Stabilizing Off-Policy Evaluation for Online RL with Prior Data"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.05863"
author: "Carlo Romeo, Girolamo Macaluso, Alessandro Sestini, Andrew D. Bagdanov"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.05863v2 Announce Type: replace-cross Abstract: Incorporating prior data into online reinforcement learning accelerates training but typically forces a difficult trade-off between high computational costs and long, multi-stage training pipelines. While fixed-length stabilization phases are significantly more computationally efficient than static update schedules, they require task-dependent manual tuning, risking either the waste of prior knowledge or severe overfitting. To address this, we propose SOPE, an algorithm that uses an actor-aligned Off-Policy Policy Evaluation (OPE) signal as an automated early-stopping mechanism to dynamically control the length of offline training phases. By evaluating the critic on a held-out validation split under the current policy's action distribution, SOPE halts gradient updates exactly when out-of-distribution benefits saturate, eliminating the need for manual schedule tuning. Evaluated on 25 continuous control tasks from the Minari benchmark suite, SOPE improves baseline performance by up to 45.6% while reducing the required TFLOPs by up to 22x, thus balancing the tradeoff between sample and computational efficiency. These findings demonstrate that adaptive, evaluation-driven update schedules are more effective than relying on static, exhaustive update schedules.

---

📖 [Read original article](https://arxiv.org/abs/2605.05863)