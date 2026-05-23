---
title: "Vendi Novelty Scores for Out-of-Distribution Detection"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.10062"
author: "Amey P. Pasarkar, Adji Bousso Dieng"
categories: ["cs.LG", "cs.CV"]
---

arXiv:2602.10062v2 Announce Type: replace Abstract: Out-of-distribution (OOD) detection is critical for the safe deployment of machine learning systems. Existing post-hoc detectors typically rely on model confidence scores or likelihood estimates in feature space, often under restrictive distributional assumptions. In this work, we introduce a third paradigm and formulate OOD detection from a diversity perspective. We propose the Vendi Novelty Score (VNS), an OOD detector based on the Vendi Scores (VS), a family of similarity-based diversity metrics. VNS quantifies how much a test sample increases the VS of the in-distribution feature set, providing a principled notion of novelty that does not require density modeling. VNS is linear-time, non-parametric, and naturally combines class-conditional (local) and dataset-level (global) novelty signals. Across multiple image classification benchmarks and network architectures, VNS achieves state-of-the-art OOD detection performance. Remarkably, VNS retains this performance when computed using only 1% of the training data, enabling deployment in memory- or access-constrained settings.

---

📖 [Read original article](https://arxiv.org/abs/2602.10062)