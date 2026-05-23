---
title: "Safeguarding Text-to-Image Generative Models Against Unauthorized Knowledge Distillation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22060"
author: "Yilan Gao, Sida Huang, Hongyuan Zhang, Xuelong Li"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.22060v1 Announce Type: cross Abstract: Closed-weight generative services are increasingly deployed through query-based APIs, where users can obtain generated outputs while model parameters remain inaccessible. However, such deployment does not prevent model stealing: an attacker can repeatedly query the service, collect large volumes of released synthetic images, and use them as training data for a private substitute model. This query-output-driven process enables unauthorized knowledge distillation and capability replication without direct access to the original weights. To mitigate this threat, a practical defense should preserve the visual fidelity of released images, provide explicit control over perturbation magnitude, and scale efficiently to large-volume output release. We present WaveGuard, a single-pass, generator-based protection framework that safeguards released synthetic images under a user-specified perturbation budget. WaveGuard employs a frequency-aware perturbation generator to inject structured, imperceptible perturbations that maintain perceptual utility for benign viewers while reducing the usefulness of protected images as training data for unauthorized student models. Extensive experiments under WikiArt-related synthetic-output distillation settings show that WaveGuard achieves a favorable efficacy--fidelity--efficiency trade-off, with explicit imperceptibility control and substantial gains in protection efficiency.

---

📖 [Read original article](https://arxiv.org/abs/2605.22060)