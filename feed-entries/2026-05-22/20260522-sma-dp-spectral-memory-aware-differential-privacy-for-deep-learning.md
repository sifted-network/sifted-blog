---
title: "SMA-DP: Spectral Memory-Aware Differential Privacy for Deep Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20450"
author: "Mohammad Partohaghighi, Roummel Marcia"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.20450v1 Announce Type: new Abstract: Differentially private stochastic gradient descent (DP-SGD) enables private deep learning through per-example clipping and calibrated Gaussian noise, but its high-variance updates can reduce utility on challenging datasets. We propose \textbf{SMA-DP-SGD}, a \textbf{Spectral Memory-Aware Differentially Private Stochastic Gradient Descent} method that augments DP-SGD with a fractional memory branch built only from previously privatized noisy releases. WeightWatcher-inspired power-law spectral exponents provide group-wise reliability signals, instantiated layer-wise in our experiments, to adapt the decay and effective memory depth. Private-history alignment, norm matching, and warm-up activation stabilize the memory contribution. Privacy remains transparent: conditioned on the private release history, the memory branch is fixed, and the only newly data-dependent term is the current clipped sum scaled by a fixed coefficient \(\beta\). Hence, SMA-DP-SGD preserves a clean conditional sensitivity structure and exactly recovers group-wise DP-SGD when \(\beta=1\). Experiments on CIFAR-100, CIFAR-10, and MNIST show competitive or superior accuracy over several DP optimization baselines, with the largest gains on CIFAR-100 and CIFAR-10. CIFAR-10 ablations show that \(\beta\) controls the privacy--utility trajectory, while spectral and memory diagnostics confirm a controlled short-to-moderate effective memory depth and a small memory-branch ratio. Runtime analysis shows that the mechanism incurs additional overhead, about \(2.94\times\) DP-SGD in our CIFAR-10 implementation, revealing a practical trade-off between adaptive private memory and computational cost.

---

📖 [Read original article](https://arxiv.org/abs/2605.20450)