---
title: "End2Reg: Learning Task-Specific Segmentation for Markerless Registration in Spine Surgery"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.13402"
author: "Lorenzo Pettinari, Sidaty El Hadramy, Michael Wehrli, Philippe C. Cattin, Daniel Studer, Carol C. Hasler, Maria Licci"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2512.13402v2 Announce Type: replace-cross Abstract: Intraoperative navigation in spine surgery demands millimeter-level accuracy. Currently, this is achieved through radiation-intensive intraoperative imaging and bone-anchored markers that are invasive and disrupt surgical workflow. Markerless RGB-D registration methods offer a promising alternative. However, existing approaches rely on weak segmentation labels to isolate relevant anatomical structures, potentially propagating errors through the registration process. We present End2Reg, an end-to-end deep learning framework that jointly optimizes segmentation and registration, eliminating the need for segmentation labels and manual steps. The network learns task-specific segmentation masks optimized for registration, guided solely by the registration objective without explicit segmentation supervision. End2Reg achieves state-of-the-art performance on ex- and in-vivo benchmarks, reducing median Target Registration Error by 32% and mean Root Mean Square Error by 61%, while maintaining robust performance under partial occlusions. Ablation results confirm that end-to-end optimization significantly improves registration accuracy. Overall, End2Reg advances towards fully automatic, markerless intraoperative navigation. Code and interactive visualizations are available at: https://lorenzopettinari.github.io/end-2-reg/.

---

📖 [Read original article](https://arxiv.org/abs/2512.13402)