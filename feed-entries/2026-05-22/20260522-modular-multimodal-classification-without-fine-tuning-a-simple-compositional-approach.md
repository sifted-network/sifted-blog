---
title: "Modular Multimodal Classification Without Fine-Tuning: A Simple Compositional Approach"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20674"
author: "Herman Bergstr\\\"om, Aditya Mehrotra, Rahul G. Krishnan"
categories: ["cs.LG"]
---

arXiv:2605.20674v1 Announce Type: new Abstract: We introduce CoMET, \textit{\textbf{C}omposing \textbf{M}odality \textbf{E}ncoders with \textbf{T}abular foundation models}, a simple yet highly competitive method for multimodal classification: pass each modality through a frozen pre-trained backbone, compress the resulting embeddings with PCA, and concatenate as input into a Tabular Foundation Model (TFM) for prediction. We show that PCA alone suffices to act as an adaptor yielding strong, robust performance across modalities. When the \texttt{CLS} tokens of the foundation model align poorly with downstream tasks, we propose \textbf{PALPooling}, a lightweight adaptive token pooler that consistently improves representation quality. By composing strong frozen representation learning backbones with TFMs, our approach achieves state-of-the-art results across diverse multimodal benchmarks without any training. On hierarchical tasks with large fine-grained class spaces, our approach enables fast and scalable classification, handling datasets with over 500,000 samples and 2,000 classes without any fine-tuning. Overall, our results show that the composition of foundation models is a simple, yet powerful, out-of-the-box solution for multimodal learning, challenging the necessity of complex, end-to-end training pipelines for new problems.

---

📖 [Read original article](https://arxiv.org/abs/2605.20674)