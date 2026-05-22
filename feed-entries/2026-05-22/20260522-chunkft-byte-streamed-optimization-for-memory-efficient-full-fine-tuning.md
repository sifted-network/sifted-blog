---
title: "ChunkFT: Byte-Streamed Optimization for Memory-Efficient Full Fine-Tuning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21177"
author: "Yongkang Liu, Zijing Wang, Mengjie Zhao, Ercong Nie, Mingyang Wang, Qian Li, Feiliang Ren, Shi Feng, Daling Wang, Hinrich Sch\\\"utze"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.21177v1 Announce Type: new Abstract: This work presents \textsc{ChunkFT}, a memory-efficient fine-tuning framework that reformulates full-parameter fine-tuning around a dynamically activated working set. \textsc{ChunkFT} enables gradient computation for arbitrary sub-tensors without modifying the network architecture, providing an algorithmic foundation for optimizing arbitrary sub-networks while avoiding standard dense gradient computation. We provide a theoretical convergence analysis of \textsc{ChunkFT} in the deterministic setting. Empirically, we apply \textsc{ChunkFT} to fine-tune Llama 3-8B and Llama 3-70B using a single RTX 4090-24GB GPU and 2$\times$ H800-80GB GPUs, respectively. Full-parameter fine-tuning of a 7B model with a 1K input length requires only 13.72GB of GPU memory. The results demonstrate the effectiveness of \textsc{ChunkFT} in memory usage, running time, and optimization quality. Moreover, downstream evaluations on language understanding, mathematical reasoning, and MT-Bench show that \textsc{ChunkFT} consistently outperforms existing memory-efficient baselines. Notably, \textsc{ChunkFT} achieves performance comparable to, and in some cases exceeding, full-parameter fine-tuning. Our repository is on https://github.com/misonsky/chunk.

---

📖 [Read original article](https://arxiv.org/abs/2605.21177)