---
title: "MuKV: Multi-Grained KV Cache Compression for Long Streaming Video Question-Answering"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22269"
author: "Junbin Xiao, Jiajun Chen, Tianxiang Sun, Xun Yang, Angela Yao"
categories: ["cs.CV", "cs.AI", "cs.MM"]
---

arXiv:2605.22269v1 Announce Type: cross Abstract: Long streaming video QA remains challenging due to growing visual tokens and limited reasoning length of large language models (LLMs). KV-caching stores the Key-Value (KV) of the historical tokens via LLM prefill and enables more efficient streaming QA. However, existing methods cache every one or two frames, causing redundant memory usage and losing fine-grained spatial details within frame or temporal contexts across frames. This paper proposes MuKV, a method that features a multi-grained KV cache compression module and a semi-hierarchical retrieval approach to improve both efficiency and accuracy for long streaming VideoQA. For the offline KV cache, MuKV extracts visual representations at patch-, frame-, and segment-levels. The multiple levels of granularity preserve both local cues and global temporal context, while maintaining efficiency with a dual signal token compression mechanism guided by self-attention and frequency. For online QA, MuKV designs a semi-hierarchical retrieval method to retrieve relevant KV caches for answer generation. Experiments on long-streaming VideoQA benchmarks show that MuKV significantly improves answer accuracy, without sacrificing memory and online QA efficiency. Moreover, our compression mechanism alone brings consistent benefits across answer accuracy, memory, and QA efficiency over baselines, showcasing highly effective contribution.

---

📖 [Read original article](https://arxiv.org/abs/2605.22269)