---
title: "Polynomial-Time Robust Multiclass Linear Classification under Gaussian Marginals"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21428"
author: "Ilias Diakonikolas, Giannis Iakovidis, Mingchen Ma"
categories: ["cs.LG", "cs.DS"]
---

arXiv:2605.21428v1 Announce Type: new Abstract: We study the task of agnostic learning of multiclass linear classifiers under the Gaussian distribution. Given labeled examples $(x, y)$ from a distribution over $\mathbb{R}^d \times [k]$, with Gaussian $x$-marginal, the goal is to output a hypothesis whose error is comparable to that of the best $k$-class linear classifier. While the binary case $k=2$ has a well-developed algorithmic theory, much less is known for $k \ge 3$. Even for $k=3$, prior robust algorithms incur exponential dependence on the inverse of the desired accuracy in both complexity and representation size. In this work, we develop new structural results for multiclass linear classifiers and use them to design fully polynomial-time robust learners with dimension-independent error guarantees. Our first result shows that the standard multiclass perceptron algorithm requires super-polynomially many samples and updates, even with clean labels and Gaussian marginals, revealing a basic obstruction absent in the binary case. Our main positive result is a pairwise improper-learning framework which yields an efficient learner with error $\widetilde O(k^{3/2}\sqrt{\mathrm{opt}})+\epsilon$ for general $k$. Additionally, we develop a sharper localization-based framework which leads to error $O(\mathrm{opt})+\epsilon$ for $k=3$, and error $\mathrm{poly}(k)\mathrm{opt}+\epsilon$ for geometrically regular $k$-class linear classifiers.

---

📖 [Read original article](https://arxiv.org/abs/2605.21428)