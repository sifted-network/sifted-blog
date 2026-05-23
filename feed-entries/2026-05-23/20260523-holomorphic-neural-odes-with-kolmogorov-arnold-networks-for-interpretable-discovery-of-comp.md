---
title: "Holomorphic Neural ODEs with Kolmogorov-Arnold Networks for Interpretable Discovery of Complex Dynamics"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22235"
author: "Bhaskar Ranjan Karn, Dinesh Kumar"
categories: ["cs.LG", "math.DS"]
---

arXiv:2605.22235v1 Announce Type: new Abstract: Complex dynamical systems governed by holomorphic maps such as $z^2 + c$ exhibit fractal boundaries with extreme sensitivity to initial conditions. Accurately modelling these structures from data requires methods that respect the underlying complex-analytic geometry, yet Multi-Layer Perceptrons (MLPs) within Neural Ordinary Differential Equations (Neural ODEs) lack complex-analytic priors, violate the Cauchy--Riemann conditions, and function as opaque approximators incapable of yielding governing equations. We introduce Holomorphic KAN-ODE, a framework that replaces the MLP with a Kolmogorov-Arnold Network (KAN) whose learnable B-spline activations reside on network edges, and incorporates Cauchy--Riemann equations as a differentiable regularization to preserve holomorphic structure. We evaluate on six families of complex dynamical systems spanning polynomial and transcendental classes. With only 280 parameters ($16\times$ fewer than the MLP baseline), the network achieves velocity-field $R^2 > 0.95$ on all six systems, correctly identifies all six governing symbolic families through automatic spline-to-formula fitting, and reconstructs Julia set fractal boundaries with up to 98.0\% agreement. Crucially, the model exhibits only 4\% MSE degradation under 10\% observation noise versus $15.2\times$ for MLPs, and achieves 90.4\% improvement in transfer learning from quadratic to cubic dynamics. While the MLP attains lower pointwise reconstruction error due to its larger capacity, the KAN uniquely provides interpretable symbolic equations, enforced holomorphic structure, and superior noise resilience, capabilities that are entirely absent in black-box architectures. These results establish KANs as a parameter-efficient, interpretable alternative to MLPs for physics-informed discovery of holomorphic dynamics.

---

📖 [Read original article](https://arxiv.org/abs/2605.22235)