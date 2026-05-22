---
title: "Single-Thread JPEG Decoder Benchmarks Mis-Evaluate ML Data Loaders"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.08731"
author: "Vladimir Iglovikov, Dmitry Kosarevsky"
categories: ["cs.PF", "cs.LG"]
---

arXiv:2605.08731v2 Announce Type: replace-cross Abstract: JPEG decode is routine ML infrastructure, but Python decoder choices are often justified by single-process, single-thread microbenchmarks. We audit this evaluation assumption with thirteen Python-accessible JPEG decode paths on five matched 16 vCPU Google Cloud CPUs: Intel Emerald Rapids, AMD Zen 4, AMD Zen 5, ARM Neoverse V2, and ARM Neoverse N1. ImageNet validation is the workload, not a new dataset contribution: each run decodes the full 50,000-image split from memory and reports single-thread throughput for all decoders, PyTorch \texttt{DataLoader} throughput for eligible decoders at worker counts $\{0,2,4,8\}$, and decoder skip behavior. The evaluation protocol changes the supported conclusion. On Neoverse V2, \texttt{imageio} is ninth in single-thread throughput yet lands in the top DataLoader tier with \texttt{torchvision}; on Zen 4, \texttt{torchvision} rises from seventh single-thread to the top measured DataLoader tier; on Neoverse N1, \texttt{imagecodecs} is the single-thread leader but fifth at peak DataLoader throughput. We also find that worker-count conclusions differ between Zen 4 and Zen 5, TensorFlow has a large single-thread ARM penalty, and strict native JPEG decoders/wrappers reject the same rare ImageNet JPEG. For PyTorch DataLoader workloads, \texttt{torchvision} and \texttt{simplejpeg} form the strongest measured zero-skip tier: \texttt{torchvision} has the highest mean normalized throughput, while \texttt{simplejpeg} has the highest minimum. OpenCV remains a robust general-purpose fallback above 90\% of the platform-local winner on every tested CPU. We release raw JSON, generated tables/figures, and an executable local/cloud benchmark framework.

---

📖 [Read original article](https://arxiv.org/abs/2605.08731)