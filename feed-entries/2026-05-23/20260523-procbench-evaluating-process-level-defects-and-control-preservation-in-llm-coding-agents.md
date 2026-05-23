---
title: "ProcBench: Evaluating Process-Level Defects and Control Preservation in LLM Coding Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20251"
author: "Jiawei He, Jie Jia, Chenbo Liu, Chaoyi Xue, Yapeng Song, Xikai Yang, Dong Sun"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2605.20251v2 Announce Type: replace-cross Abstract: Existing benchmarks for LLM coding agents primarily evaluate final outcomes. While useful for measuring overall capability, these metrics provide limited visibility and often miss defects that arise during execution. We present ProcBench, a benchmark for execution-process evaluation in LLM coding agents. ProcBench organizes recurrent execution defects into a reusable ontology covering 11 defect types in 4 categories, and evaluates agent trajectories through standardized process evidence rather than final outcomes alone. To support comparison across heterogeneous agents, ProcBench standardizes raw logs into a unified trajectory representation and reports calibrated scorecards over process-level findings. In addition, ProcBench uses control preservation as a way to quantify execution-process quality, capturing whether execution remains interpretable, interruptible, correctable, reversible, and able to hand back authority when needed. We evaluate ProcBench on 200 cases sampled from three benchmarks: AndroidBench, TerminalBench, and SWE-bench-Verified. Results show that ProcBench can be instantiated with useful reliability, provides more stable semantics than direct thresholding, and reveals meaningful differences in execution quality that are often overlooked by conventional outcome-based evaluation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20251)