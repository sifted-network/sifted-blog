---
title: "DIVE: Embedding Compression via Self-Limiting Gradient Updates"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20689"
author: "Dongfang Zhao"
categories: ["cs.CL", "cs.AI", "cs.IR", "cs.LG"]
---

arXiv:2605.20689v1 Announce Type: cross Abstract: High-dimensional embeddings from large language models impose significant storage and computational costs on vector search systems. Recent embedding compression methods, including Matryoshka-Adaptor (EMNLP 2024), Search-Adaptor (ACL 2024), and SMEC (EMNLP 2025), enable dimensionality reduction through lightweight residual adapters, but their training objectives cause severe overfitting when labeled data is scarce, degrading retrieval performance below the frozen baseline. We propose \textsc{DIVE} (\textbf{D}imensionality reduction with \textbf{I}mplicit \textbf{V}iew \textbf{E}nsembles), a compression adapter that addresses this failure through two mechanisms. First, a self-limiting hinge-based triplet loss produces zero gradient once a triplet satisfies the margin constraint, bounding the total perturbation applied to the pretrained embedding space. Second, a head-wise NT-Xent contrastive loss treats multiple learned projections of each embedding as implicit views, providing dense self-supervised gradients that compensate for the sparsity of the triplet signal on small datasets. Across six BEIR datasets, \textsc{DIVE} outperforms all three baseline adapters on every dataset and at every evaluated compression ratio, with a 14M-parameter open-source implementation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20689)