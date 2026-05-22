---
title: "Instant GPU Efficiency Visibility at Fleet Scale"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20799"
author: "Connor Pedersen, Dong H. Ahn, Michel Migdal, Collin Neale, Nik Konyuchenko"
categories: ["cs.DC", "cs.LG"]
---

arXiv:2605.20799v1 Announce Type: cross Abstract: We present Overall FLOP Utilization (OFU), a hardware-level, precision-agnostic GPU efficiency metric for AI workloads on HPC systems, derived from two on-chip performance counters: Tensor Pipe Activity and SM clock frequency. OFU requires no application instrumentation and works across GPU generations and numeric precisions. We characterize five properties of the OFU approximation -- tile quantization, floating-point precision scaling, clock sampling noise, Tensor Core clock domains, and non-tensor undercounting -- through controlled GEMM experiments on H100 and GB200 across FP16, TF32, FP8, and NVFP4. After tile-quantization correction, OFU predicts application-level MFU to within <=2 percentage points. Against 608 production training jobs, OFU achieves r = 0.78 correlation with application-level MFU and surfaces two framework-level FLOPs miscalculations. Deployed across large-scale GPU fleets, OFU has detected a 2.5x efficiency regression and tracked precision-dependent utilization changes in mixed-precision pretraining. Our evaluation and operational experience suggest OFU is a practical, deployment-ready complement to application-level MFU for continuous fleet-wide efficiency monitoring.

---

📖 [Read original article](https://arxiv.org/abs/2605.20799)