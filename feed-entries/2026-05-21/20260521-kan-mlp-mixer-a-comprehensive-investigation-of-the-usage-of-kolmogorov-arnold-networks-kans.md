---
title: "KAN-MLP-Mixer: A comprehensive investigation of the usage of Kolmogorov-Arnold Networks (KANs) for improving IMU-based Human Activity Recognition"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19031"
author: "Mengxi Liu, Sizhen Bian, Vitor Fortes, Francisco Calatrava Nicolas, Daniel Gei{\\ss}ler, Maximilian Kiefer-Emmanouilidis, Bo Zhou, Paul Lukowicz"
categories: ["cs.AI", "eess.SP"]
---

arXiv:2605.19031v1 Announce Type: new Abstract: Kolmogorov-Arnold Networks (KANs) have demonstrated an exceptional ability to learn complex functions on clean, low-dimensional data but struggle to maintain performance on noisy and imperfect real-world datasets. In contrast, conventional multi-layer perceptrons (MLPs) are far more tolerant to noise and computationally efficient. Replacing all MLP components with KANs in HAR models often degrades accuracy and computation efficiency, highlighting an open challenge: how to combine KANs' precision with MLPs' noise robustness and efficiency. To address this, we systematically explore various placements of KAN modules within deep HAR networks and propose a hybrid architecture that strategically synergizes the strengths of both paradigms, which uses a KAN-based input embedding layer, retains MLP layers for intermediate feature mixing, and introduces a specialized LarctanKAN module for final activity classification. Across eight public HAR datasets, the hybrid KAN-MLP model achieves an average macro F1 score relative improvement of 5.33\% compared pure-MLP model, significantly outperforming standalone KAN and MLP baselines. Furthermore, integrating this hybrid strategy into other state-of-the-art HAR architectures consistently boosts their performance. Our findings demonstrate that a carefully orchestrated combination of KAN, MLP, or other conventional neural components yields more robust and accurate HAR models for real-world wearable sensing environments.

---

📖 [Read original article](https://arxiv.org/abs/2605.19031)