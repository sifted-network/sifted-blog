---
title: "Dooly: Configuration-Agnostic, Redundancy-Aware Profiling for LLM Inference Simulation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.07985"
author: "Joon Ha Kim, Geon-Woo Kim, Anoop Rachakonda, Daehyeok Kim"
categories: ["cs.DC", "cs.AI"]
---

arXiv:2605.07985v2 Announce Type: replace-cross Abstract: Selecting the optimal LLM inference configuration requires evaluation across hardware, serving engines, attention backends, and model architectures, since no single choice performs best across all workloads. Profile-based simulators are the standard tool, yet they hardcode their operation set to a specific configuration and re-profile every operation from scratch, making exploration prohibitively expensive. This cost stems from a missing structural understanding: every input dimension of each operation is fixed by the model configuration or determined by the incoming request. Many model-configuration values (e.g., head size, layer count) recur across models, so the same operation runs in many configurations; a single sweep over the request-dependent dimensions can serve them all. We present Dooly, which exploits this structure to achieve configuration-agnostic, redundancy-aware profiling. Dooly performs a single inference pass, labels each input dimension with its origin via taint propagation, and selectively profiles only operations absent from its latency database; stateful operations such as attention are isolated by reusing the serving engine's own initialization code, eliminating manual instrumentation. It builds latency regression models based on the database, which becomes a drop-in backend for existing simulators. Across two GPU platforms, three attention backends, and diverse model architectures, Dooly achieves simulation accuracy within 5% MAPE for TTFT and 8% for TPOT while reducing profiling GPU-hours by 56.4% across 12 models compared to the existing profiling approach. We have open-sourced Dooly at https://github.com/dooly-project.

---

📖 [Read original article](https://arxiv.org/abs/2605.07985)