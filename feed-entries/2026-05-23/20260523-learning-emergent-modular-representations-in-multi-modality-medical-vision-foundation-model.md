---
title: "Learning Emergent Modular Representations in Multi-modality Medical Vision Foundation Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21861"
author: "Yuting He, Chenyu You, Shuo Li"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21861v1 Announce Type: cross Abstract: Multi-modality medical vision (MV) foundation models (FM) are fundamentally challenged by pronounced Non-IID feature statistics across heterogeneous imaging modalities. Monolithic self-supervised optimization on such data induces conflicting gradients, driving representations to collapse toward modality-dominant shortcuts. This work reframes this failure as an imbalance between specialization and coordination in emergent modularity, and proposes Director-Experts (DEX), a modular network that explicitly regulates these dynamics in stacked modules. Each DEX module comprises a pool of experts, dynamically adapted by our image-wise activation strategy, autonomously specializing in modality-dominant statistics, together with a director, updated via our group exponential moving average, which distills multi-expert knowledge into a shared space for semantic integration across modalities, thus driving the emergence of modular representations. We curate a new benchmark, Medical Vision Universe, over 4 million images across 10 modalities, which provides a FM-level pre-training with the broadest coverage of distinct imaging modalities to our DEX. Extensive evaluations on 26 downstream tasks demonstrate improved optimization behavior and transferability, indicating DEX as a principled step toward general-purpose multi-modality medical AI. Our code and dataset will be opened at https://github.com/YutingHe-list/DEX.

---

📖 [Read original article](https://arxiv.org/abs/2605.21861)