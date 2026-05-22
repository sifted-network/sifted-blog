---
title: "MedCRP-CL: Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discovery"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20297"
author: "Ziyuan Gao"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20297v1 Announce Type: cross Abstract: Medical image segmentation faces a fundamental challenge in continual learning: data arrives sequentially from heterogeneous sources, yet effective continual learning requires discovering which tasks share sufficient structure to benefit from joint learning. Existing methods either apply uniform constraints across all tasks, causing catastrophic forgetting when tasks conflict, or require predefined task groupings that cannot anticipate future task diversity. We introduce MedCRP-CL, a framework that performs online task structure discovery and structure-aware continual learning. Leveraging the Chinese Restaurant Process (CRP), our method dynamically infers task groupings from clinical text prompts as tasks arrive, without requiring predefined cluster counts or access to future tasks. We term these discovered groupings semantic modalities, as they capture finer-grained structure than physical imaging modalities by integrating anatomical region and pathological context. Guided by this discovered structure, we maintain semantic modality-specific LoRA adapters regularized by intra-modality EWC, ensuring parameter isolation across dissimilar task groups while facilitating knowledge transfer within similar ones. The framework is also replay-free, storing only aggregate statistics rather than raw patient data. Experiments on 16 medical segmentation tasks across four imaging modalities demonstrate that MedCRP-CL achieves 73.3% Dice score with only 4.1% forgetting, outperforming the best baseline by 8.0% while requiring 6$\times$ fewer parameters. Code is available at https://github.com/zygao930/MedCRP-CL.

---

📖 [Read original article](https://arxiv.org/abs/2605.20297)