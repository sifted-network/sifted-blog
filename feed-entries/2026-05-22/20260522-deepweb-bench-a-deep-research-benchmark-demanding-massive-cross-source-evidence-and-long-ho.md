---
title: "DeepWeb-Bench: A Deep Research Benchmark Demanding Massive Cross-Source Evidence and Long-Horizon Derivation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21482"
author: "Sixiong Xie, Zhuofan Shi, Haiyang Shen, Jiuzheng Wang, Siqi Zhong, Mugeng Liu, Chongyang Pan, Peilun Jia, Baoqing Sun, Xiang Jing, Yun Ma"
categories: ["cs.AI"]
---

arXiv:2605.21482v1 Announce Type: new Abstract: Deep research, in which an agent searches the open web, collects evidence, and derives an answer through extended reasoning, is a prominent use case for frontier language models. Frontier deep research products score high on existing benchmarks, making it difficult to distinguish their capabilities from current evaluation data alone. We introduce DeepWeb-Bench, a deep research benchmark that is substantially harder than existing benchmarks for the current frontier. Difficulty comes from three properties of the data itself: each task requires massive evidence collection, cross-source reconciliation, and long-horizon multi-step derivation. We represent these three sources of difficulty as four capability families (Retrieval, Derivation, Reasoning, and Calibration) and report results sliced by family. Every reference answer is accompanied by a source-provenance record with four disclosure levels and cross-source checks where available, making scores easier to audit against the underlying evidence. We evaluate DeepWeb-Bench on nine frontier models and report three findings: (1) retrieval is not the bottleneck, as retrieval failures account for only 12-14% of errors while derivation and calibration failures account for over 70%; (2) strong and weak models fail in qualitatively different ways, with strong models' errors dominated by incomplete derivation and weak models' by hallucinated precision; and (3) models exhibit genuine specialization across domains, with cross-model agreement of only rho = 0.61 and per-case disagreement reaching 18.8 percentage points. The public benchmark release includes the data, rubrics, and evaluation code.

---

📖 [Read original article](https://arxiv.org/abs/2605.21482)