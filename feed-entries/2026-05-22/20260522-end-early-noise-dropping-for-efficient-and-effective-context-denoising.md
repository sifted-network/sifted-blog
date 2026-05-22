---
title: "END: Early Noise Dropping for Efficient and Effective Context Denoising"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2502.18915"
author: "Hongye Jin, Pei Chen, Jingfeng Yang, Zhengyang Wang, Fangran Mo, Jinghan Zhang, Meng Jiang, Yifan Gao, Binxuan Huang, Xinyang Zhang, Zheng Li, Tianyi Liu, Huasheng Li, Bing Yin"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2502.18915v3 Announce Type: replace-cross Abstract: Large Language Models (LLMs) have demonstrated remarkable performance across a wide range of natural language processing tasks. However, they are often distracted by irrelevant or noisy context in input sequences that degrades output quality. This problem affects both long- and short-context scenarios, such as retrieval-augmented generation, table question-answering, and in-context learning. We reveal that LLMs can implicitly identify whether input sequences contain useful information at early layers, prior to token generation. Leveraging this insight, we introduce Early Noise Dropping (\textsc{END}), a novel approach to mitigate this issue without requiring fine-tuning the LLMs. \textsc{END} segments input sequences into chunks and employs a linear prober on the early layers of LLMs to differentiate between informative and noisy chunks. By discarding noisy chunks early in the process, \textsc{END} preserves critical information, reduces distraction, and lowers computational overhead. Extensive experiments demonstrate that \textsc{END} significantly improves both performance and efficiency across different LLMs on multiple evaluation datasets. Furthermore, by investigating LLMs' implicit understanding to the input with the prober, this work also deepens understanding of how LLMs do reasoning with contexts internally.

---

📖 [Read original article](https://arxiv.org/abs/2502.18915)