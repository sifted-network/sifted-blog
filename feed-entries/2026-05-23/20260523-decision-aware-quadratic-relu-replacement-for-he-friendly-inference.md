---
title: "Decision-Aware Quadratic ReLU Replacement for HE-Friendly Inference"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22237"
author: "Rui Li, Wenyuan Wu, Weijie Miao"
categories: ["cs.CR", "cs.LG"]
---

arXiv:2605.22237v1 Announce Type: cross Abstract: Fully homomorphic encryption (FHE) supports only additions and multiplications, so FHE-only neural-network inference typically replaces ReLU with polynomials fitted over empirical activation intervals. Such interval fitting often requires higher-degree polynomials to control activation error, incurring homomorphic evaluation costs, while classification is determined by the final logit decision. We revisit ReLU replacement from a decision-aware perspective: given a trained single-hidden-layer ReLU MLP and a specified calibration set, can an HE-friendly low-degree polynomial replace ReLU without retraining while preserving calibration-set decisions? We focus on quadratic replacement, the lowest-degree choice that retains a genuine per-unit nonlinearity. For calibration sets positive-margin separable in the lifted space, we formulate quadratic replacement as a linear separation problem, yielding necessary and sufficient conditions for calibration-lossless replacement and a constructive algorithm for the coefficients. When the positive-margin condition fails -- typically due to a few misclassified calibration samples -- we extend the same geometric framework via reduced convex hulls and Lagrangian-dual soft-margin relaxations, which bound the influence of any single sample, converting the problem into smaller convex quadratic programs that yield approximately feasible coefficients with high empirical agreement on calibration-set decisions. In particular, at the maximal weight cap $\mu=1$, the reduced-convex-hull relaxation reduces to the convex-hull separation of the strictly separable case; the relaxation thus continuously extends the exact theory. Under CKKS, the quadratic replacement matches plaintext top-1 accuracy on multiple benchmarks, running 3.7--4.1$\times$ faster than Remez-7 in the activation module and 1.18--1.68$\times$ faster end-to-end.

---

📖 [Read original article](https://arxiv.org/abs/2605.22237)