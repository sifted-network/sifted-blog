---
title: "Finite-Particle Convergence Rates for Conservative and Non-Conservative Drifting Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22795"
author: "Krishnakumar Balasubramanian"
categories: ["stat.ML", "cs.AI", "cs.LG", "math.ST", "stat.TH"]
---

arXiv:2605.22795v1 Announce Type: cross Abstract: We propose and analyze a conservative drifting method for one-step generative modeling. The method replaces the original displacement-based drifting velocity by a kernel density estimator (KDE)-gradient velocity, namely the difference of the kernel-smoothed data score and the kernel-smoothed model score. This velocity is a gradient field, addressing the non-conservatism issue identified for general displacement-based drifting fields. We prove continuous-time finite-particle convergence bounds for the conservative method on $\R^d$: a joint-entropy identity yields bounds for the empirical Stein drift, the smoothed Fisher discrepancy of the KDE, and the squared center velocity. The main finite-particle correction is a reciprocal-KDE self-interaction term, and we give deterministic and high-probability local-occupancy conditions under which this term is controlled. We keep the quadrature constants explicit and track their possible bandwidth dependence: the root residual-velocity rate $N^{-1/(d+4)}$ holds under an additional $h$-uniform quadrature regularity condition, while a more general growth condition yields the optimized root rate $N^{-(2-\beta)/(2(d+4-\beta))}$, where $0\le \beta<2$. We also analyze the non-conservative drifting method with Laplace kernel, corresponding to the original displacement-based velocity proposed in~\cite{deng2026drifting}. For this method, a sharp companion kernel decomposes the velocity into a positive scalar preconditioning of a sharp-score mismatch plus a Laplace scale-mismatch residual, producing an analogous finite-particle rate with an unavoidable residual term. Finally, we explain how the continuous-time residual-velocity bounds translate into one-step generation guarantees through the explicit drift size $\eta$.

---

📖 [Read original article](https://arxiv.org/abs/2605.22795)