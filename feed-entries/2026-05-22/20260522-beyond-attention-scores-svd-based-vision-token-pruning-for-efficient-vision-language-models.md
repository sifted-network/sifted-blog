---
title: "Beyond Attention Scores: SVD-Based Vision Token Pruning for Efficient Vision-Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.11530"
author: "Yvon Apedo, Martyna Poreba, Michal Szczepanski, Samia Bouchafa"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2604.11530v2 Announce Type: replace-cross Abstract: Vision-Language Models (VLMs) have revolutionized multi-modal learning by jointly processing visual and textual information. Yet, they face significant challenges due to the high computational and memory demands of processing long sequences of vision tokens. Many existing methods rely on local heuristics, such as attention scores or token norms. However, these criteria suffer from positional bias and information dispersion, limiting their ability to preserve essential content at high pruning ratios and leading to performance degradation on visually detailed images. To address these issues, we propose SVD-Prune, a training-free, plug-and-play token pruning method based on Singular Value Decomposition. It decomposes the vision token feature matrix and selects the top-k tokens using statistical leverage scores, ensuring only tokens contributing most to the dominant global variance are preserved. Experiments show that SVD-Prune consistently outperforms prior pruning methods under extreme vision token budgets, maintaining strong performance even with 32 and 16 vision tokens.

---

📖 [Read original article](https://arxiv.org/abs/2604.11530)