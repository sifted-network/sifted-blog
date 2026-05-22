---
title: "SAVER: Selective As-Needed Vision Evidence for Multimodal Information Extraction"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20713"
author: "Miaobo Hu, Shuhao Hu, Bokun Wang, Rui Chen, Xin Wang, Xiaobo Guo, Daren Zha, Jun Xiao"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2605.20713v1 Announce Type: cross Abstract: Multimodal IE in social media is difficult because a post may attach multiple images that are weakly related, redundant, or even misleading with respect to the text. In this setting, always-on multimodal fusion wastes computation and can amplify spurious visual cues. The core challenge is to decide, for each candidate span or marked entity pair, whether vision should be consulted at all and, if so, which small subset of images provides trustworthy evidence. We propose SAVER, a selective vision-as-needed framework for multimodal named entity recognition and multimodal relation extraction. SAVER uses a Conformal Groundability Gate (CGG) to estimate span-level visual groundability in MNER, derive pair-level activation in MRE from the two marked entities, and calibrate the activation threshold on a held-out split via a conformal-style procedure with Clopper--Pearson upper bounds. When activated, a submodular relevance--diversity selector chooses a compact evidence subset across images, which is then aggregated by a Set Transformer. An energy-inspired joint scoring head combines text, optional visual evidence, text--image consistency, and sparse routing for entity typing or relation classification. Experiments show that SAVER consistently improves F1 over strong text-only and always-on multimodal baselines, while reducing AURC, increasing activation coverage at a fixed risk level, and lowering FLOPs and P90 latency.

---

📖 [Read original article](https://arxiv.org/abs/2605.20713)