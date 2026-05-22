---
title: "Q-Net: Queue Length Estimation via Kalman-based Neural Networks"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2509.24725"
author: "Ting Gao, Elvin Isufi, Winnie Daamen, Erik-Sander Smits, Serge Hoogendoorn"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2509.24725v3 Announce Type: replace-cross Abstract: Estimating queue lengths at signalized intersections is a long-standing challenge in traffic management. Partial observability of vehicle flows complicates this task despite the availability of two privacy-preserving data sources: (i) aggregated vehicle counts from loop detectors near stop lines, and (ii) aggregated floating car data (aFCD) that provide segment-wise average speed measurements. However, how to integrate these sources with differing spatial and temporal resolutions for queue length estimation is rather unclear. Addressing this question, we present Q-Net: a queue estimation framework built upon a state-space formulation. This design addresses key challenges in queue modeling, such as violations of traffic conservation assumptions. Q-Net follows the Kalman predict-update structure and maintains physical interpretability in both the state evolution and measurement models. Q-Net uses an AI-augmented Kalman filter to learn time-varying gain dynamics from data. The framework supports real-time implementation and improves spatial transferability by grouping aFCD measurements into fixed-size local groups, making the number of learnable parameters independent of section length. Evaluations on urban main roads in Rotterdam, the Netherlands, show that Q-Net outperforms baseline methods, tracks queue formation and dissipation accurately, and mitigates aFCD-induced delays. By combining data efficiency, interpretability, real-time applicability, and spatial transferability, Q-Net makes accurate queue length estimation possible without costly sensing infrastructure like cameras or radar.

---

📖 [Read original article](https://arxiv.org/abs/2509.24725)