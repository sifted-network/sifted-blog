---
title: "OmniISR: A Unified Framework for Centralized and Federated Learning via Intermediate Supervision and Regularization"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20276"
author: "Wei-Bin Kou, Guangxu Zhu, Ming Tang, Chen Zhang, Lisheng Wu, Lei Zhou, Yujiu Yang"
categories: ["cs.LG"]
---

arXiv:2605.20276v1 Announce Type: new Abstract: The global deployment of edge intelligence operates across heterogeneous legal frameworks. While some regions permit centralized learning (CL) via cloud data aggregation, others enforce strict data localization, necessitating federated learning (FL). This operational dichotomy introduces two incompatible optimization regimes (i.e., unbiased global gradients yet coupled with internal covariate shift in CL versus biased, drift-prone local updates in FL), resulting in that any naive integration of the two lacks rigorous theoretical guarantees. To fill this gap, we propose OmniISR, a unified framework that fuses pure CL, pure FL, and hybrid CL-FL training modes via equipping intermediate supervision and regularization (ISR) signals at multiple hidden layers. Specifically, we propose (i) to use mutual-information (MI) as intermediate supervision to align shifting internal covariate in CL and client-drifting representations in FL, and (ii) to adopt negative-entropy (NE) as intermediate regularizer to penalize overconfident prediction, preserve representational uncertainty, and avoid device-specific collapse. On the theory side, we derive (i) a unified, ISR-agnostic, and non-asymptotic O(1/sqrt(T)) convergence bound that shows the introduced ISR does not violate standard SGD convergence, (ii) a federated drift-bound that quantifies the ISR-reduced client drift, (iii) a gradient-alignment guarantee that ensures non-conflicting CL and FL updates under mild bias, and (iv) an explicit escape-time bound that indicates that CL-FL hybrid mixing enlarges effective stochasticity and accelerates escape from strict saddles. Extensive experiments demonstrate that OmniISR consistently improves model performance in both centralized and federated paradigms, reduces the CL-FL gap by 22.60%, and yields 37/48 paired metric wins across multiple FL algorithms.

---

📖 [Read original article](https://arxiv.org/abs/2605.20276)