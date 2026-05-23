---
title: "Measuring Cross-Modal Synergy: A Benchmark for VLM Explainability"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22168"
author: "Jo\\\"el Roman Ky, Salah Ghamizi, Maxime Cordy"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.22168v1 Announce Type: new Abstract: Vision-Language Models (VLMs) map complex visual inputs to semantic spaces, but interpreting the cross-modal reasoning of VLMs currently relies on post-hoc explainers evaluated via unimodal perturbation metrics. We expose a limitation in this paradigm: because multimodal datasets contain language priors and modality biases, VLMs frequently exhibit cross-modal redundancy, allowing them to answer visual queries using text alone. Consequently, unimodal metrics penalize faithful explainers, triggering an evaluation collapse where visual and textual rankings fundamentally contradict each other. %(Kendall's $\tau = -0.06$). To resolve this, we introduce Synergistic Faithfulness ($\mathcal{F}_{syn}$), a scalable metric rooted in the Shapley Interaction Index that strictly isolates the joint Harsanyi dividend between modalities, serving as a highly accurate surrogate ($\rho = 0.92$) while achieving a $24\times$ computational speedup. Evaluating 8 distinct XAI methods across 3 VLM architectures and 3 benchmark datasets, reveals that explainers proposed for VLMs heavily over-index on visual salience and significantly underperform adapted attention-based methods in capturing true cross-modal synergy. By decoupling visual plausibility from cross-modal faithfulness, this work provides a rigorous evaluation framework required to safely audit VLM reasoning in high-stakes deployments.

---

📖 [Read original article](https://arxiv.org/abs/2605.22168)