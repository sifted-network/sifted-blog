---
title: "The Matching Principle: A Geometric Theory of Loss Functions for Nuisance-Robust Representation Learning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22800"
author: "Vishal Rajput"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.22800v1 Announce Type: cross Abstract: Robustness, domain adaptation, photometric and occlusion invariance, compositional generalisation, temporal robustness, alignment safety, and classical anisotropic regularisation are usually treated as separate problems with separate method families. This paper argues that much of their shared structure is one statistical problem: estimate the covariance of label-preserving deployment nuisance, then regularise the encoder Jacobian along a matrix whose range covers that covariance (the matching principle). CORAL, adversarial training, IRM, augmentation, metric learning, Jacobian penalties, and alignment-style constraints are different estimators of that object, not independent robustness tricks. In the linear-Gaussian model we prove closed-form optimality (Theorem A), including cube-root water-filling within the matched range; necessity of range coverage for quadratic Jacobian penalties (Theorem G); the same range dichotomy at deep global minima; and two falsification controls (Lemma C; Corollaries E), with seven conditional consistency lemmas (D1-D7) for estimation under standard identifiability assumptions. We introduce the Trajectory Deviation Index (TDI), a label-free probe of embedding sensitivity when task accuracy or Jacobian Frobenius norm is insufficient. Thirteen pre-registered blocks from classical ML through Qwen2.5-7B test the predicted matched, then isotropic, then wrong-W ordering on geometry and deployment drift; twelve pass, and the sole exception (Office-31) is an eigengap failure named before the run. At 7B scale, matched style-PMH improves selective honesty and preserves Style TDI where standard DPO degrades it. The contribution is naming the deployment nuisance covariance, stating what the regulariser must do, and supplying a closed-form falsifiable theory once that object is identified, not universality on every leaderboard.

---

📖 [Read original article](https://arxiv.org/abs/2605.22800)