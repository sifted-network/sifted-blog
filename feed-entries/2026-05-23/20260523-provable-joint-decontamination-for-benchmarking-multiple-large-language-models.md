---
title: "Provable Joint Decontamination for Benchmarking Multiple Large Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21543"
author: "Zhenlong Liu, Hao Zeng, Hongxin Wei"
categories: ["cs.LG"]
---

arXiv:2605.21543v1 Announce Type: new Abstract: Benchmark data contamination has become a central challenge in LLM evaluation: when evaluation examples appear in the training data of one or more audited models, reported performance can be inflated and cross-model comparisons become unreliable. A broad line of training-data detection work designs scores to quantify how strongly a model memorizes a given data point, but these score-based methods lack theoretical guarantees. Recent conformal approaches provide provable false-identification control for a single model; however, applying them separately to each model can produce model-specific benchmarks, undermining fair comparison across models. In this work, we formalize multi-model benchmark decontamination as a joint selection problem and propose Joint Envelope Conformal Selection (JECS), a conformal procedure that enables global contamination rate (GCR) control under stated assumptions. Specifically, JECS computes per-model conformal p-values, aggregates them by the per-item maximum, and reconstructs a conservative envelope of the max-p null distribution from right-tail observations above a data-driven threshold. By applying the adaptive Benjamini-Hochberg (BH) procedure to the envelope-rescaled values, we select a benchmark with provable GCR control. Extensive experiments across various models and benchmarks demonstrate that JECS achieves higher power than the max-p baseline while consistently maintaining the target GCR control.

---

📖 [Read original article](https://arxiv.org/abs/2605.21543)