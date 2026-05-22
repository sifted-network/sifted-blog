---
title: "Task-Agnostic Noisy Label Detection via Standardized Loss Aggregation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.10165"
author: "Inhyuk Park, Doohyun Park"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.10165v2 Announce Type: replace-cross Abstract: Noisy labels are common in large-scale medical imaging datasets due to inter-observer variability and ambiguous cases. We propose a statistically grounded and task-agnostic framework, Standardized Loss Aggregation (SLA), for detecting noisy labels at the sample level. SLA quantifies label reliability by aggregating standardized fold-level validation losses across repeated cross-validation runs. This formulation generalizes discrete hard-counting schemes into a continuous estimator that captures both the frequency and magnitude of performance deviations, yielding interpretable and statistically stable noisiness scores. Experiments on a public fundus dataset demonstrate that SLA consistently outperforms the hard-counting baseline across all noise levels and converges substantially faster, especially under low noise ratios where subtle loss variations are informative. Samples with high SLA scores indicate potentially ambiguous or mislabeled cases, guiding efficient re-annotation and improving dataset reliability for any classification task.

---

📖 [Read original article](https://arxiv.org/abs/2605.10165)