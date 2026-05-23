---
title: "Near-Optimal Convergence of Accelerated Gradient Methods under Generalized and $(L_0, L_1)$-Smoothness"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2508.06884"
author: "Alexander Tyurin"
categories: ["math.OC", "cs.LG"]
---

arXiv:2508.06884v2 Announce Type: replace-cross Abstract: We study first-order methods for convex optimization problems with functions $f$ satisfying the recently proposed $\ell$-smoothness condition $||\nabla^{2}f(x)|| \le \ell\left(||\nabla f(x)||\right),$ which generalizes the $L$-smoothness and $(L_{0},L_{1})$-smoothness. While accelerated gradient descent AGD is known to reach the optimal complexity $O(\sqrt{L} R / \sqrt{\varepsilon})$ under $L$-smoothness, where $\varepsilon$ is an error tolerance and $R$ is the distance between a starting and an optimal point, existing extensions to $\ell$-smoothness either incur extra dependence on the initial gradient, suffer exponential factors in $L_{1} R$, or require costly auxiliary sub-routines, leaving open whether an AGD-type $O(\sqrt{\ell(0)} R / \sqrt{\varepsilon})$ rate is possible for small-$\varepsilon$, even in the $(L_{0},L_{1})$-smoothness case. We resolve this open question. Leveraging a new Lyapunov function and designing new algorithms, we achieve $O(\sqrt{\ell(0)} R / \sqrt{\varepsilon})$ oracle complexity for small-$\varepsilon$ and virtually any $\ell$. For instance, for $(L_{0},L_{1})$-smoothness, our bound $O(\sqrt{L_0} R / \sqrt{\varepsilon})$ is provably optimal in the small-$\varepsilon$ regime and removes all non-constant multiplicative factors present in prior accelerated algorithms.

---

📖 [Read original article](https://arxiv.org/abs/2508.06884)