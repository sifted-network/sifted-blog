---
title: "Inducing Permutation Invariant Priors in Bayesian Optimization for Carbon Capture and Storage Applications"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.02409"
author: "Sofianos Panagiotis Fotias, Vassilis Gaganis"
categories: ["cs.LG"]
---

arXiv:2605.02409v2 Announce Type: replace Abstract: Bayesian Optimization is an iterative method, tailored to optimizing expensive black box objective functions. Surrogate models like Gaussian Processes, which are the gold standard in Bayesian Optimization, can be inefficient for inputs with permutation symmetries, as the most common kernels employed are better suited for vector inputs rather than unordered sets of items. Motivated by this issue, we turn to permutation invariant Bayesian Optimization for well placement in Carbon Capture and Storage projects. The high fidelity black box simulator is instructed to operate wells under group control, giving rise to permutation symmetries within injector and producer groups that cannot be exploited with standard GP kernels. In this work, our main contribution is a novel Gaussian Process kernel (GP-Perm) that encodes permutation invariance by comparing sets through a stable divergence between their induced empirical representations, and can be combined with standard kernels for additional vector-valued inputs. As a learned invariant baseline, we also consider a Deep Kernel Learning model (DKL-DS) using the Deep Sets architecture to learn a permutation-invariant embedding. We evaluate the proposed methodology across 8 use cases, comprising seven synthetic benchmarks and one realistic CCS case study (Johansen formation)

---

📖 [Read original article](https://arxiv.org/abs/2605.02409)