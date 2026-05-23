---
title: "Enhancing Multimodal Large Language Models for Safety-Critical Driving Video Analysis"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22185"
author: "Tomaso Trinci, Henrique Pi\\~neiro Monteagudo, Leonardo Taccari"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.22185v1 Announce Type: cross Abstract: Recent advancements in Multimodal Large Language Models (MLLMs) have demonstrated impressive capabilities in general visual understanding. However, their application to safety-critical driving scenarios remains limited by an inability to accurately perceive and reason about rare high-stakes dynamic events, such as collisions or near-collisions. To address this, we introduce a pipeline that enhances MLLM perception by fusing downsampled video frames with synchronized high-frequency telematics data (IMU and GPS) and semantic insights from specialized computer vision models. Our pipeline generates high-quality pseudo-labels, including descriptive captions and question-answer pairs, specifically designed to train MLLMs to identify and describe Safety-Critical Events (SCEs) in real-world driving footage. We show the effectiveness of our approach fine-tuning the open-source QwenVL-2.5 model via DoRA adapters: our experiments demonstrate significant improvements in identifying and explaining safety-critical events, with fewer than 50M trainable parameters and limited computational budget.

---

📖 [Read original article](https://arxiv.org/abs/2605.22185)