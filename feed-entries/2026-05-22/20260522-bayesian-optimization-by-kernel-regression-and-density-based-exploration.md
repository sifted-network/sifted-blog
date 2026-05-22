---
title: "Bayesian Optimization by Kernel Regression and Density-based Exploration"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2502.06178"
author: "Tansheng Zhu, Hongyu Zhou, Ke Jin, Xusheng Xu, Qiufan Yuan, Lijie Ji"
categories: ["math.OC", "cs.LG", "stat.ML"]
---

arXiv:2502.06178v5 Announce Type: replace-cross Abstract: Bayesian optimization is highly effective for optimizing expensive-to-evaluate black-box functions, but it faces significant computational challenges due to the cubic per-iteration cost of Gaussian processes, which results in a total time complexity that is quartic with respect to the number of iterations. To address this limitation, we propose a novel algorithm, Bayesian optimization by kernel regression and density-based exploration (BOKE). BOKE uses kernel regression for efficient function approximation, kernel density for exploration, and integrates them into the confidence bound criteria to guide the optimization process, thus reducing computational costs to quadratic. Our theoretical analysis rigorously establishes the global convergence of BOKE under noisy evaluations. Through extensive numerical experiments on both synthetic and real-world optimization tasks, we demonstrate that BOKE not only performs competitively compared to Gaussian process-based methods and several other baseline methods but also exhibits superior computational efficiency. These results highlight BOKE's effectiveness in resource-constrained environments, providing a practical approach for optimization problems in engineering applications.

---

📖 [Read original article](https://arxiv.org/abs/2502.06178)