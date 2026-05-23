---
title: "BioFormer: Rethinking Cross-Subject Generalization via Spectral Structural Alignment in Biomedical Time-Series"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22468"
author: "Guikang Du, Haoran Li, Xinyu Liu, Zhibo Zhang, Xiaoli Gong, Jin Zhang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22468v1 Announce Type: cross Abstract: Cross-subject generalization in biomedical time-series refers to training on data from some subjects and testing on unseen subjects.The key challenge is to suppress subject specific variability in BTS representations.Most existing methods implicitly suppress the variability through model building or subject adversarial learning, but rarely model it explicitly.We introduce spectral drift as a new perspective to characterize subject specific variability.Specifically, BTS signals under the same label often share consistent oscillatory structure, yet exhibit subject-dependent magnitude or phase shifts in specific frequency components, which we interpret as subject-specific variability. Building on this insight, we propose BioFormer.At its core is a Frequency-Band Alignment Module(FBAM) that generates band-wise modulation factors from the spectral distribution and adaptively adjusts amplitude and phase to align spectral structure, thereby mitigating variability.We further pair FBAM with Sample Conditional Layer Normalization, which infers normalization parameters from intrinsic signal statistics rather than subject identity, stabilizing cross-subject representations.Extensive experiments on six datasets demonstrate that BioFormer outperforms 12 baselines, yielding absolute F1-score improvements of 6%.

---

📖 [Read original article](https://arxiv.org/abs/2605.22468)