---
title: "On the Suboptimality of GP-UCB under Polynomial Effective Optimism"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2312.01386"
author: "Wenjia Wang, Xiaowei Zhang"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2312.01386v2 Announce Type: replace Abstract: Gaussian process upper confidence bound (GP-UCB) is widely used for sequential optimization of expensive black-box functions. Although many upper bounds on its cumulative regret have been established in the literature, whether GP-UCB is minimax optimal remains open. We study this question through the effective optimism level, defined as the product of the exploration coefficient and the regularization parameter in kernel ridge regression. Under a uniform confidence assumption, we prove a new regret lower bound for GP-UCB with Mat\'ern kernels. The bound shows that polynomial growth of the effective optimism level, up to logarithmic factors, rules out the minimax-optimal regret rate. Since this is the regime covered by most existing analyses, our result identifies a concrete obstacle to proving minimax optimality for standard GP-UCB. More broadly, it suggests that the gap between current upper bounds and minimax lower bounds may reflect a real limitation of the algorithm, not only of the analysis.

---

📖 [Read original article](https://arxiv.org/abs/2312.01386)