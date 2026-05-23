---
title: "Bandit Convex Optimization with Gradient Prediction Adaptivity"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22191"
author: "Shuche Wang, Adarsh Barik, Vincent Y. F. Tan"
categories: ["cs.LG", "cs.IT", "math.IT"]
---

arXiv:2605.22191v1 Announce Type: new Abstract: Bandit convex optimization (BCO) is a fundamental online learning framework with partial feedback, where the learner observes only the loss incurred at the chosen decision point in each round. In this work, we investigate whether optimistic gradient predictions can improve worst-case regret guarantees in a prediction-adaptive manner. Specifically, given gradient predictions $m_t$, we seek regret bounds that scale with the cumulative prediction error $S_T=\sum_{t=1}^T \|\nabla f_t(x_t)-m_t\|^2.$ We first establish a negative result: under the single-point feedback protocol, an unavoidable $\Omega(\sqrt{T})$ regret lower bound persists even when $S_T=o(T)$, showing that the variance of gradient estimation fundamentally obscures the benefit of accurate predictions. To overcome this barrier, we propose \emph{Two-Point Variance-Reduced Optimistic Gradient Descent} (TP-VR-OPT) for the two-point feedback setting. The key idea is a novel variance-reduced gradient estimator whose variance scales with the prediction error rather than the gradient norm. This yields a regret bound of $O\big(\sqrt{d\,\mathbb{E}[S_T]}\big),$ where $d$ is the decision dimension. Complementing this result, we establish an information-theoretic lower bound that scales as $\Omega(\sqrt{\mathbb{E}[S_T]})$, providing a fundamental characterization of the best achievable prediction-adaptive regret and showing that TP-VR-OPT is optimal up to a factor of $\sqrt d$. We further develop adaptive variants that eliminate the need for prior knowledge of $\mathbb{E}[S_T]$ or the horizon $T$, and extend our framework to non-stationary environments, establishing dynamic regret guarantees that adapt simultaneously to the cumulative prediction error and the comparator path length.

---

📖 [Read original article](https://arxiv.org/abs/2605.22191)