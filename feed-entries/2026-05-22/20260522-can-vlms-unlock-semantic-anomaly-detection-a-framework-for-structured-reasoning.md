---
title: "Can VLMs Unlock Semantic Anomaly Detection? A Framework for Structured Reasoning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.18034"
author: "Roberto Brusnicki, David Pop, Yuan Gao, Mattia Piccinini, Johannes Betz"
categories: ["cs.CV", "cs.AI", "cs.RO"]
---

arXiv:2510.18034v3 Announce Type: replace-cross Abstract: Autonomous driving systems remain critically vulnerable to the long-tail of rare, out-of-distribution semantic anomalies. While VLMs have emerged as promising tools for perception, their application in anomaly detection remains largely restricted to prompting proprietary models - limiting reliability, reproducibility, and deployment feasibility. To address this gap, we introduce SAVANT (Semantic Anomaly Verification/Analysis Toolkit), a novel model-agnostic reasoning framework that reformulates anomaly detection as a layered semantic consistency verification. By applying SAVANT's two-phase pipeline - structured scene description extraction and multi-modal evaluation - existing VLMs improve their scores in detecting anomalous driving scenarios from input images. Our approach replaces ad hoc prompting with semantic-aware reasoning, transforming VLM-based detection into a principled decomposition across four semantic domains. We show that across a balanced set of real-world driving scenarios, applying SAVANT improves VLM's absolute recall by approximately 18.5% compared to prompting baselines. Moreover, this gain enables reliable large-scale annotation: leveraging the best proprietary model within our framework, we automatically labeled around 10,000 real-world images with high confidence. We use the resulting high-quality dataset to fine-tune a 7B open-source model (Qwen2.5-VL) to perform single-shot anomaly detection, achieving 90.8% recall and 93.8% accuracy - surpassing all models evaluated while enabling local deployment at near-zero cost. By coupling structured semantic reasoning with scalable data curation, we provide a practical solution to data scarcity in semantic anomaly detection for autonomous systems. Supplementary material: https://TUM-AVS.github.io/SAVANT/.

---

📖 [Read original article](https://arxiv.org/abs/2510.18034)