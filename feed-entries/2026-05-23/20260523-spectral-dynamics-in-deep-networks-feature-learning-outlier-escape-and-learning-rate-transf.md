---
title: "Spectral Dynamics in Deep Networks: Feature Learning, Outlier Escape, and Learning Rate Transfer"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.07870"
author: "Clarissa Lauditi, Cengiz Pehlevan, Blake Bordelon"
categories: ["cond-mat.dis-nn", "cs.AI", "stat.ML"]
---

arXiv:2605.07870v2 Announce Type: replace-cross Abstract: We study the evolution of hidden-weight spectra in wide neural networks trained by (stochastic) gradient descent. We develop a two-level dynamical mean-field theory (DMFT) that jointly tracks bulk and outlier spectral dynamics for spiked ensembles whose spike directions remain statistically dependent on the random bulk. We apply this framework to two settings: (1) infinite-width nonlinear networks in mean-field/$\mu$P scaling and (2) deep linear networks in the proportional high-dimensional limit, where width, input dimension, and sample size diverge with fixed ratios. Our theory predicts how outliers evolve with training time, width, output scale, and initialization variance. In deep linear networks, $\mu$P yields width-consistent outlier dynamics and hyperparameter transfer, including width-stable growth of the leading NTK mode toward the edge of stability (EoS). In contrast, NTK parameterization exhibits strongly width-dependent outlier dynamics, despite converging to a stable large-width limit. We show that this bulk+outlier picture is descriptive of simple tasks with small output channels, but that tasks involving large numbers of outputs (ImageNet classification or GPT language modeling) are better described by a restructuring of the spectral bulk. We develop a toy model with extensive output channels that recapitulates this phenomenon and show that edge of the spectrum still converges for sufficiently wide networks.

---

📖 [Read original article](https://arxiv.org/abs/2605.07870)