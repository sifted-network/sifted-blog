---
title: "Block-Wise Differentiable Sinkhorn Attention: Tail-Refinement Gradients with a Gap-Aware Dustbin Bridge"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.08123"
author: "Dylan Forde"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.08123v2 Announce Type: replace Abstract: We study long-context balanced entropic optimal transport (OT) attention on TPU hardware through a stopped-base, fixed-depth tail-refinement surrogate. After a stopped $T$-step Sinkhorn solve, we unroll a short refinement tail and differentiate that surrogate exactly. For the reported $R=2$ TPU path, the backward pass contains four staircase plan factors. We prove an exact one-reference-tile schedule: the $R=2$ score cotangent is a single reference plan tile times an explicit modifier field built from vector cotangents and dual differences. This yields block-wise cost $O((T+R)LW)$, $O(Ld)$ input storage, and $O(L)$ additional HBM usage for fixed head dimension $d$ and band width $W$ on the balanced fixed-support path. We also formalize the current \texttt{dustbin\_block} path as the same unit-target surrogate on an augmented support, so the adjoint schedule lifts to the single-active-dustbin path used in our TPU runs; this bridge is algebraic and does not claim a general KL-unbalanced or arbitrary-capacity gap model. We provide a local surrogate-bias bound, an a posteriori bias certificate, and a projective contraction certificate for strictly positive active blocks. On synthetic masked problems, the optimized kernel matches exact autodiff of the same centered surrogate to within $10^{-5}$--$10^{-10}$. On TPU v6e-8, a four-configuration Pfam screen completes end-to-end, and a promoted balanced $R=2$ run sustains roughly $8.5$ examples per second through a three-hour budget, reaching step $1437$. Held-out Pfam test shards improve reconstruction from $5.57$ to $2.05$ and sparse CE from $5.53$ to $5.30$ relative to step $0$, with CE logged diagnostically rather than optimized directly; target-barycenter alignment metrics do not materially improve, and a deterministic diagonal reference remains stronger on those metrics.

---

📖 [Read original article](https://arxiv.org/abs/2605.08123)