---
title: "TextTeacher: What Can Language Teach About Images?"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22098"
author: "Tobias Christian Nauen, Stanislav Frolov, Brian Bernhard Moser, Federico Raue, Ahmed Anwar, Andreas Dengel"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2605.22098v1 Announce Type: cross Abstract: The platonic representation hypothesis suggests that sufficiently large models converge to a shared representation geometry, even across modalities. Motivated by this, we ask: Can the semantic knowledge of a language model efficiently improve a vision model? As an answer, we introduce TextTeacher, a simple auxiliary objective that injects text embeddings as additional information into image classification training. TextTeacher uses readily available image captions, a pre-trained and frozen text encoder, and a lightweight projection to produce semantic anchors that efficiently guide representations during training while leaving the inference-time model unchanged. On ImageNet with standard ViT backbones, TextTeacher improves accuracy by up to +2.7 percentage points (p.p.) and yields consistent transfer gains (on average +1.0 p.p.) under the same recipe and compute. It outperforms vision knowledge distillation, yielding more accuracy at a constant compute budget or similar accuracy, but 33% faster. Our analysis indicates that TextTeacher acts as a feature-space preconditioner, shaping deeper layers in the first stages of training, and aiding generalization by supplying complementary semantic cues. TextTeacher adds negligible overhead, requires no costly multimodal training of the target model and preserves the simplicity and latency of pure vision models. Project page with code and captions: https://nauen-it.de/publications/text-teacher

---

📖 [Read original article](https://arxiv.org/abs/2605.22098)