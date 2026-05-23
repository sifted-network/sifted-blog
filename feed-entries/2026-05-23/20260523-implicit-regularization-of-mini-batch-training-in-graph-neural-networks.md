---
title: "Implicit Regularization of Mini-Batch Training in Graph Neural Networks"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22480"
author: "Clement Wang, Antoine Vialle, Robin Vaysse, Thomas Bonald"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22480v1 Announce Type: cross Abstract: Mini-batch training of Graph Neural Networks (GNNs) is fundamentally different from training on i.i.d. data: sampling a subgraph alters the topology and introduces boundary effects, leading prior work to develop structure-aware samplers that preserve local connectivity and reduce embedding variance. Surprisingly, we demonstrate that the simplest possible scheme, Random Node Sampling (RNS), training on the induced subgraph of uniformly sampled nodes, matches or outperforms full-graph training on 8 of 10 datasets at a fraction of the wall-clock time and memory. To explain this, we apply backward error analysis to graph mini-batch Stochastic Gradient Descent (SGD) and show that it implicitly minimizes the sampled loss plus a regularizer proportional to the mini-batch gradient variance, a quantity directly shaped by the sampler. Although RNS discards local structure, it produces mini-batches whose expected loss is closer to the full-graph loss, and whose per-batch gradients have lower variance, yielding a better implicit objective. Our analysis reframes the choice of graph sampler as a form of implicit regularization, and identifies RNS as a strong, theoretically grounded method for scalable GNN training.

---

📖 [Read original article](https://arxiv.org/abs/2605.22480)