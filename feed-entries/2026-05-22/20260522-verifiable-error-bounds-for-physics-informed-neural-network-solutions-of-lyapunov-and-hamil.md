---
title: "Verifiable Error Bounds for Physics-Informed Neural Network Solutions of Lyapunov and Hamilton-Jacobi-Bellman Equations"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.19545"
author: "Jun Liu"
categories: ["eess.SY", "cs.LG", "cs.SY", "math.OC"]
---

arXiv:2603.19545v2 Announce Type: replace-cross Abstract: Many core problems in nonlinear systems analysis and control can be recast as solving partial differential equations (PDEs) such as Lyapunov and Hamilton-Jacobi-Bellman (HJB) equations. Physics-informed neural networks (PINNs) have emerged as a promising mesh-free approach for approximating their solutions, but in most existing works there is no rigorous guarantee that a small PDE residual implies a small solution error. This paper develops verifiable error bounds for approximate solutions of Lyapunov and HJB equations, with particular emphasis on PINN-based approximations. For both the Lyapunov and HJB PDEs, we show that a verifiable residual bound yields relative error bounds with respect to the true solutions as well as computable a posteriori estimates in terms of the approximate solutions. For the HJB equation, this also yields certified upper and lower bounds on the optimal value function on compact sublevel sets and quantifies the optimality gap of the induced feedback policy. We further show that one-sided residual bounds already imply that the approximation itself defines a valid Lyapunov or control Lyapunov function. We illustrate the results with numerical examples.

---

📖 [Read original article](https://arxiv.org/abs/2603.19545)