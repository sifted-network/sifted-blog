---
title: "Runtime-Certified Bounded-Error Quantized Attention"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20868"
author: "Dean Calver"
categories: ["cs.LG", "cs.AI", "cs.SY", "eess.SY"]
---

arXiv:2605.20868v1 Announce Type: cross Abstract: KV cache quantization reduces the memory cost of long-context LLM inference, but introduces approximation error that is typically validated only empirically. Existing systems rely on average-case robustness, with no mechanism to detect or recover from failures at runtime. We present a tiered KV cache architecture that enables runtime-certified attention: INT8 keys and INT4 values are stored in GPU memory, while FP16 originals are retained in system RAM for deterministic fallback. A two-term error decomposition yields per-head, per-step bounds on (i) attention distribution distortion from key quantization and (ii) value reconstruction error. These bounds are computed online and used to drive adaptive precision selection and a multi-stage fallback ladder, which guarantees recovery to the exact dense attention output when required. Across PG-19, NIAH, and RULER benchmarks on LLaMA~3.1-8B with contexts up to 128K, the system matches dense FP16 KV quality within noise for language modelling and retrieval tasks, while recovering catastrophic failures observed in naive INT8/INT4 baselines. Value-sensitive tasks at short context expose a controlled trade-off between compression and fidelity, which can be eliminated via tighter value tolerances or FP16-value fallback. The certification is local (per-head, per-step) and does not guarantee end-to-end model correctness, but ensures that each attention computation is either bounded relative to an FP16 reference or exactly recovered via fallback. This reframes KV cache quantization as a runtime-verified computation rather than a fixed approximation. The goal is not raw speedups, but enabling safe deployment of aggressive KV compression under strict quality constraints.

---

📖 [Read original article](https://arxiv.org/abs/2605.20868)