---
title: "Accelerating Video Inverse Problem Solvers with Autoregressive Diffusion Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20624"
author: "Taesung Kwon, Jonghyun Park, Hyungjin Chung, Jong Chul Ye"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2605.20624v1 Announce Type: cross Abstract: Diffusion models provide powerful priors for zero-shot video inverse problems, but their real-time deployment is hindered by two inefficiencies: high initial latency caused by holistic video restoration, and low throughput resulting from multiple VAE passes to enforce measurement consistency in pixel space. To overcome these limitations, we propose Autoregressive Video Inverse problem Solver (AVIS). The AVIS framework leverages autoregressive video diffusion models to restore videos in a streaming manner, naturally eliminating latency bottlenecks. Specifically, AVIS initializes reverse diffusion with a measurement-consistent estimate, reducing the required sampling steps. Compared to leading non-autoregressive solvers, AVIS drastically reduces initial latency from 114s to 4s and increases throughput from 0.71 to 1.18 FPS while achieving superior restoration quality. We further introduce a highly accelerated variant, dubbed AVIS Flash, that enforces measurement consistency solely on the first chunk. AVIS Flash substantially boosts throughput to 5.91 FPS on a single RTX 4090 GPU while maintaining competitive performance and achieving a favorable efficiency-performance trade-off, paving the way toward real-time deployment.

---

📖 [Read original article](https://arxiv.org/abs/2605.20624)