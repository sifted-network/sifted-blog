---
title: "Divergence is Uncertainty: A Closed-Form Posterior Covariance for Flow Matching"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.00941"
author: "Jiarui Xing, Song Wang, Jian Wang"
categories: ["cs.LG", "cs.CV"]
---

arXiv:2605.00941v3 Announce Type: replace Abstract: Flow matching has become a leading framework for generative modeling, but quantifying the uncertainty of its samples remains an open problem. Existing approaches retrain the model with auxiliary variance heads, maintain costly ensembles, or propagate approximate covariance through many integration steps, trading off training cost, inference cost, or accuracy. We show that none of these trade-offs is necessary. By extending Tweedie's formula from the denoising setting to the flow matching interpolant, we derive an exact, closed-form expression for the posterior covariance at every point along the generative trajectory. The result depends on a single quantity, namely the divergence of the learned velocity field, which can be computed post-hoc on any pre-trained flow matching model, requiring no retraining and no architectural modification. For one-step generators such as MeanFlow, the same formula yields the end-to-end generation uncertainty in a single forward pass, eliminating the multi-step variance propagation required by all prior methods. Experiments on MNIST confirm that the resulting per-pixel uncertainty maps are semantically meaningful, concentrating on digit boundaries where inter-sample variation is highest, and that the scalar uncertainty score tracks actual prediction error, all at roughly $10^4 \times$ less total compute than ensembling or Monte Carlo dropout.

---

📖 [Read original article](https://arxiv.org/abs/2605.00941)