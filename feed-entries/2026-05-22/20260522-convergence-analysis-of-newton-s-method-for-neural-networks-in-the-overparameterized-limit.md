---
title: "Convergence Analysis of Newton's Method for Neural Networks in the Overparameterized Limit"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.08352"
author: "Konstantin Riedl, Konstantinos Spiliopoulos, Justin Sirignano"
categories: ["cs.LG", "math.PR", "stat.ML"]
---

arXiv:2605.08352v2 Announce Type: replace Abstract: A convergence analysis is developed for the regularized Newton method for training neural networks (NNs) in the overparameterized limit. As the number of hidden units tends to infinity, the NN training dynamics converge in probability to the solution of a deterministic limit equation involving a ``Newton neural tangent kernel'' (NNTK). Explicit rates characterizing this convergence are provided and, in the infinite-width limit, we prove that the NN converges exponentially fast to the target data (i.e., a global minimizer with zero loss). We show that this convergence is uniform across the frequency spectrum, addressing the spectral bias inherent in gradient descent. The eigenvalues of the NTK for gradient descent accumulate at zero, leading to slow convergence for target data with high-frequency components. In contrast, the NNTK has uniformly lower bounded eigenvalues if the regularization parameter is selected appropriately, allowing Newton's method to converge more quickly for data with high-frequency components. Mathematical challenges that need to be addressed in our analysis include the implicit parameter update of the Newton method with a potentially indefinite Hessian matrix and the fact that the dimension of this linear system of equations tends to infinity as the NN width grows. This complicates deriving the training dynamics in the overparameterized limit as well as proving the convergence of the finite-width dynamics thereto. The analysis identifies a scaling formula for selecting the regularization parameter, which we show can vanish at a suitable rate as the number of hidden units becomes larger. We prove that, for sufficiently large numbers of hidden units, the regularized Hessian remains positive definite during training and the Newton updates for individual NN parameters converge to zero, showing that the model behaves as a linearization around the initialization.

---

📖 [Read original article](https://arxiv.org/abs/2605.08352)