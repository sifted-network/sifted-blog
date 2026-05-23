---
title: "Asymmetric Virtual Memory Paging for Hybrid Mamba-Transformer Inference"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22416"
author: "An Xuan Nguyen"
categories: ["cs.LG", "cs.DC", "cs.PF"]
---

arXiv:2605.22416v1 Announce Type: new Abstract: Hybrid language models like Jamba mix attention layers with State Space Models (SSMs), creating two memory cache types with opposite profiles: Key-Value (KV) caches grow linearly with sequence length, while SSM states stay fixed per layer. Current inference engines handle this poorly. Unified pools pad SSM states to attention page sizes, wasting up to 7.3x capacity. Static dual pools cannot adapt when prompt distributions shift between requests. We present Asymmetric Virtual Memory Paging (AVMP). The allocator separates the two cache types into physically distinct pools behind a unified virtual address space, and migrates capacity between pools when one runs out. Migration triggers only on allocation failure, keeping behavior deterministic. We evaluate AVMP across 270 synthetic cells plus 60 cells of ShareGPT trace replay on an RTX 3060 12GB. Out-of-Memory events drop 7.6% and request throughput improves 1.83x to 13.3x across synthetic workloads and 2.36x on ShareGPT. All gains hold under paired-bootstrap 95% confidence intervals. A phase-time breakdown reveals two distinct mechanisms: shorter OOM recovery on capacity-pressured workloads, and faster allocation calls on KV-heavy workloads. Implementation is pure Python; Triton integration is future work.

---

📖 [Read original article](https://arxiv.org/abs/2605.22416)