---
title: "4D-GSW: Kinematic-Aware Spatio-Temporal Consistent Watermarking for 4D Gaussian Splatting"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22342"
author: "Sifan Zhou, Hang Zhang, Yuhang Wang, Ming Li"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22342v1 Announce Type: cross Abstract: While 4D Gaussian Splatting (4DGS) has revolutionized high-fidelity dynamic reconstruction, safeguarding the intellectual property of these assets remains an open challenge. Conventional steganographic techniques often neglect the underlying kinematic manifolds, triggering non-physical artifacts such as severe temporal flickering and "FVD collapse". To address this, we propose \textbf{4D-GSW}, a kinematic-aware watermarking framework designed to embed robust copyright information while preserving high spatio-temporal consistency. Unlike prior 4D steganography that primarily focuses on opacity-guided invisibility, our approach explicitly addresses the physical coherence of motion trajectories. We introduce a \textbf{Spatio-Temporal Curvature (STC)} metric to identify "Dynamic Instants," adaptively gating watermark gradient injection to shield critical motion manifolds from non-physical perturbations. To ensure global coherence across complex deformations, we formulate a joint \textbf{HMM-MRF energy minimization} model that synchronizes watermark phases within both temporal trajectories and spatial neighborhoods. Furthermore, an \textbf{anisotropic gradient routing} mechanism ensures that watermark embedding remains strictly decoupled from photometric reconstruction fidelity. Extensive experiments have demonstrated the superior performance of our method in robustly hiding watermarks while resisting various attacks and maintaining high rendering quality and spatiotemporal consistency.

---

📖 [Read original article](https://arxiv.org/abs/2605.22342)