---
title: "Corrected Integrated Laplace Approximation for Bayesian Inference in Latent Gaussian Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20345"
author: "Jinlin Lai, Charles C. Margossian, Daniel R. Sheldon"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.20345v1 Announce Type: cross Abstract: Latent Gaussian models (LGMs) are a popular class of Bayesian hierarchical models that include Gaussian processes, as well as certain spatial models and mixed-effect models. Efficient Bayesian inference of LGMs often requires marginalizing out the latent variables. For LGMs with a non-Gaussian likelihood, exact marginalization is not possible and a popular approach is to do approximate marginalization with an integrated Laplace approximation (ILA). Using ILA produces an approximate posterior which, in some settings, can differ significantly from the correct posterior, which impacts downstream applications. We propose an importance sampling scheme to correct the error introduced by ILA. By increasing the number of samples in importance sampling, the posterior with ILA converges to the correct posterior. This idea is realized with various techniques, including pseudo-marginalization, quasi-Monte Carlo and randomized quasi-Monte Carlo. We implement our methods in an automatic differentiation framework to support gradient-based algorithms when doing inference on the hyperparameters. For the latter, we specifically consider the use of Hamiltonian Monte Carlo. We demonstrate the benefits of reduced error in various applied models.

---

📖 [Read original article](https://arxiv.org/abs/2605.20345)