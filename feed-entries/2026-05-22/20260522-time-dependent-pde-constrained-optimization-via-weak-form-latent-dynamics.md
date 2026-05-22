---
title: "Time-Dependent PDE-Constrained Optimization via Weak-Form Latent Dynamics"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20639"
author: "April Tran, Terry Haut, David Bortz, Youngsoo Choi"
categories: ["math.OC", "cs.LG", "math.DS"]
---

arXiv:2605.20639v1 Announce Type: cross Abstract: Optimization problems constrained by high-dimensional, time-dependent partial differential equations require repeated forward and sensitivity solves, making high-fidelity optimization computationally prohibitive in many-query design and control settings. We present a weak-form latent-space reduced-order modeling framework for accelerating gradient-based PDE-constrained optimization. The proposed approach builds on Weak-form Latent Space Dynamics Identification (WLaSDI), which compresses high-dimensional solution trajectories into a low-dimensional latent representation and identifies parametric latent dynamics using weak-form system identification. By avoiding explicit numerical differentiation of training trajectories, the weak-form improves robustness to noisy data and yields more reliable surrogate dynamics for optimization. We formulate the resulting reduced PDE-constrained optimization problem and derive both direct-sensitivity and adjoint-based gradient expressions for the learned latent dynamics, enabling scalable gradient evaluation with respect to design parameters. The framework is demonstrated on three time-dependent benchmark problems: thermal radiative transfer for optimal hohlraum design, the two-stream instability Vlasov-Poisson system, and the inviscid Burgers equation. Across these examples, WLaSDI produces accurate optimal designs, remains robust under noisy training data, and delivers substantial computational savings, including speedups of up to five orders of magnitude relative to full-order optimization. These results demonstrate that weak-form latent dynamics provide an efficient and noise-robust surrogate foundation for gradient-based optimization of complex time-dependent PDE systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.20639)