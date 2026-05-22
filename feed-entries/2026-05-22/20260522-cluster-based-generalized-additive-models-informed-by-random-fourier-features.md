---
title: "Cluster-Based Generalized Additive Models Informed by Random Fourier Features"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.19373"
author: "Xin Huang, Jia Li, Jun Yu"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2512.19373v3 Announce Type: replace-cross Abstract: In developing data-driven modeling methodologies, there is an ongoing need to reconcile the strong predictive performance of opaque black-box models with the transparency required for critical applications. This work introduces an interpretable and computationally tractable regression framework for heterogeneous data by combining response-informed spectral representation learning with localized additive modeling. The method first fits a random Fourier feature regression model and constructs a spectral feature map from the learned amplitudes and adaptively resampled frequencies, so that the representation reflects predictive variation in the data. This representation is then compressed by principal component analysis to obtain a low-dimensional latent embedding, in which a Gaussian mixture model performs soft regime discovery. Within each regime, a cluster-specific generalized additive model captures nonlinear covariate effects through interpretable spline-based univariate smooth functions. The final predictor is formed as a soft mixture of these local additive models, enabling flexible modeling of a nonlinear, heterogeneous structure while preserving interpretability. Numerical experiments across several benchmark regression datasets show that the proposed method consistently improves upon classical globally interpretable baselines while remaining competitive with more flexible black-box models. Overall, the framework provides a unified approach to heterogeneous regression that combines predictive adaptivity with interpretable local covariate effects.

---

📖 [Read original article](https://arxiv.org/abs/2512.19373)