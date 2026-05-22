---
title: "Letting Trajectories Spread: Quality-Preserving Control for Diverse Flow Matching"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.09060"
author: "Jingxuan Wu, Zhenglin Wan, Xingrui Yu, Yuzhe Yang, Bo An, Ivor Tsang, Yang You"
categories: ["cs.AI", "cs.CV"]
---

arXiv:2510.09060v2 Announce Type: replace Abstract: Flow-based text-to-image models follow deterministic trajectories, making it costly to explore diverse modes under limited sampling budgets. Existing approaches to improving diversity often rely on retraining or degrade image fidelity. To address this limitation, we present a training-free, inference-time control mechanism that makes the flow itself diversity-aware. Our core insight is to encourage diversity through guidance that is geometrically decoupled from the mode's quality-seeking direction. Our method simultaneously encourages lateral spread among trajectories via a feature-space objective and reintroduces uncertainty through a time-scheduled stochastic perturbation. Crucially, this perturbation is projected to be orthogonal to the generation flow, a geometric constraint that allows it to boost variation without degrading image details or prompt fidelity. Theoretically, we show that this design monotonically increases a volume surrogate while approximately preserving the marginal distribution, providing a principled explanation for the robustness of generation quality. Empirically, across multiple text-to-image settings under fixed sampling budgets, our method consistently improves diversity metrics such as the Vendi Score and Brisque over strong baselines, while upholding image quality and alignment.

---

📖 [Read original article](https://arxiv.org/abs/2510.09060)