---
title: "When Does Adaptation Win? Scaling Laws for Meta-Learning in Quantum Control"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2601.18973"
author: "Nima Leclerc, Chris Miller, Nicholas Brawand"
categories: ["cs.LG", "cs.AI", "cs.SY", "eess.SY", "quant-ph"]
---

arXiv:2601.18973v4 Announce Type: replace-cross Abstract: Quantum hardware suffers from intrinsic device heterogeneity and environmental drift, forcing practitioners to choose between suboptimal non-adaptive controllers or costly per-device recalibration. We derive a scaling law lower bound for meta-learning showing that the adaptation gain (expected fidelity improvement from task-specific gradient steps) saturates exponentially with gradient steps and scales linearly with task variance, providing a quantitative criterion for when adaptation justifies its overhead. Validation on quantum gate calibration shows negligible benefits for low-variance tasks but >40% fidelity gains on two-qubit gates under extreme out-of-distribution conditions (10$\times$ the training noise), with implications for reducing per-device calibration time on cloud quantum processors. Further validation on classical linear-quadratic control confirms these laws emerge from general optimization geometry rather than quantum-specific physics. We further introduce a few-shot pre-adaptation protocol that estimates the optimal adaptation budget from $N{=}3$-5 probe steps within 3-19% relative error across out-of-distribution regimes.

---

📖 [Read original article](https://arxiv.org/abs/2601.18973)