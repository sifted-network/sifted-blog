---
title: "Uniform-in-Time Weak Propagation-of-Chaos in Shallow Neural Networks"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22010"
author: "Margalit Glasgow, Joan Bruna"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.22010v1 Announce Type: cross Abstract: We consider one-hidden layer neural networks trained in the feature-learning regime using gradient descent, and relate the output of the finite-width network $f_{\hat{\rho}_t^m}$ to its infinite-width counterpart $f_{\rho_t^{MF}}$, which evolves in the mean-field dynamics. While constant-time horizon bounds for $\|f_{\rho_t^{MF}} - f_{\hat{\rho}_t^m}\|$ may be obtained via standard Gr\"onwall estimates, the long-time behavior of the fluctuation is a more delicate matter. Uniform-in-time bounds often rely on (local) strong convexity in the landscape or Logarithmic Sobolev inequalities present in noisy gradient dynamics. In this work, we establish non-asymptotic weak propagation-of-chaos that holds uniformly in time, obtained by exploiting instead the convergence rate of the mean-field deterministic Wasserstein-gradient-flow dynamics. Specifically, denoting by $L_t$ the mean-field excess MSE loss at time $t$ and $m$ the number of neurons, under standard regularity assumptions and the condition $\int_0^\infty L_t^{1/2} dt =O(\log d)$, we obtain the uniform in time bound $\|f_{\rho_t^{MF}}- f_{\hat{\rho}_t^m}\|^2 \lesssim \text{poly}(d) m^{-\min(1,c/6)}$ whenever $L_t \lesssim t^{-c}$. Our result holds in a noiseless setting and does not make any assumptions on the geometry of the landscape near the optimum, and extends seamlessly to other forms of discretization, including finite number of samples and time discretization. A key takeaway of our result is that whenever the convergence rate of the mean-field, population-loss dynamics is faster than $t^{-2}$, we can attain a loss of $\epsilon$ with only $\text{poly}(d/\epsilon)$ neurons, training samples, and GD steps.

---

📖 [Read original article](https://arxiv.org/abs/2605.22010)