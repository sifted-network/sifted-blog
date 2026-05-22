---
title: "Security Document Classification with a Fine-Tuned Local Large Language Model: Benchmark Data and an Open-Source System"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20368"
author: "Ivan Dobrovolskyi"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.20368v1 Announce Type: cross Abstract: Organizations that scan documents for sensitive information face a practical problem. Cloud services require data to be sent to external infrastructure, while rule-based tools often miss threats that depend on context. This study presents TorchSight, an open-source local system for security document classification built around a fine-tuned Qwen 3.5 27B model. The model was trained on 78,358 samples from 13 permissively licensed sources and GPT-4 synthetic data covering seven security categories and 51 subcategories. In the main evaluation on 1,000 documents, the model reached 95.0% category-level accuracy (95% confidence interval: 93.5-96.2). The tested commercial models scored 75.4-79.9% under the same prompting protocol. On a separate external set of 500 held-out samples, the model reached 93.8% accuracy, which suggests that performance extends beyond the main benchmark, although the margin depends on dataset composition and difficult boundary cases. The results show that a fine-tuned local model can support accurate security document classification while keeping document processing under local control.

---

📖 [Read original article](https://arxiv.org/abs/2605.20368)