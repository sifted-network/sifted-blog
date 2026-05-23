---
title: "MU-SHOT-Fi: Self-Supervised Multi-User Wi-Fi Sensing with Source-free Unsupervised Domain Adaptation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.01369"
author: "Ahmed Y. Radwan, Hina Tabassum"
categories: ["eess.SP", "cs.AI", "cs.LG"]
---

arXiv:2605.01369v2 Announce Type: replace-cross Abstract: Deep learning has been widely adopted for WiFi CSI-based human activity recognition (HAR) due to its ability to learn spatio-temporal features in a privacy-preserving and cost-effective manner. However, DL-based models generalize poorly across environments, a challenge amplified in multi-user settings where overlapping activities cause CSI entanglement and domain shifts. Practical deployments often limit access to labeled source data due to privacy constraints, motivating source-free adaptation using only unlabeled target-domain CSI and a pre-trained source model. In this paper, we propose MU-SHOT-Fi, a source-free unsupervised domain adaptation framework for single- and multi-user Wi-Fi sensing. MU-SHOT-Fi employs permutation-invariant set prediction with Hungarian matching during source training, followed by frozen-classifier backbone adaptation in the target domain. To enable stable adaptation without labels, we introduce occupancy-weighted information maximization that prevents model collapse by focusing diversity regularization on likely-occupied slots while excluding the dominant class from marginal entropy. Additionally, we employ binary rotation prediction as spatial self-supervision that exploits CSI frequency-time structure to learn domain-invariant features. For single-user scenarios, we introduce SU-SHOT-Fi by replacing occupancy weighting with standard information maximization and incorporating contrastive predictive coding to exploit temporal consistency. Extensive experiments on the WiMANS and Widar 3.0 datasets across cross-environment, cross-frequency, cross-orientation, and combined domain shifts demonstrate that MU-SHOT-Fi effectively recovers multi-user exact-activity classification performance under large domain shifts while maintaining accurate occupancy estimation and preventing collapse toward dominant classes.

---

📖 [Read original article](https://arxiv.org/abs/2605.01369)