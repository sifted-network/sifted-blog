---
title: "Closed-form predictive coding via hierarchical Gaussian filters"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20293"
author: "Aleksandrs Baskakovs, Sylvain Estebe, Kenneth Enevoldsen, Kristoffer Nielbo, Chris Mathys, Nicolas Legrand"
categories: ["cs.LG", "cs.AI", "cs.NE"]
---

arXiv:2605.20293v1 Announce Type: cross Abstract: Predictive coding (PC) offers a local and biologically grounded alternative to backpropagation in the training of artificial neural networks, yet to date, it remains slower, and performance degrades sharply as network depth increases. We trace both problems to a single simplification: current PC networks fix the precision matrix to the identity, discarding precision-weighted prediction errors that the variational derivation requires to be fast, local, and Bayesian. We close this gap by expressing predictive coding networks as deep hierarchical Gaussian filters (HGFs) and restore precision-weighted message passing, yielding dynamic uncertainty estimates and Hebbian-compatible update rules at every layer. The resulting networks can simultaneously learn activations, weights, and precisions under a single free-energy objective, with no global error signal, and resolve inference without requiring iterations or automatic differentiation. On FashionMNIST, our solution approaches backpropagation in epoch-level wall-clock cost while converging in fewer epochs, and outperforms it on online, data efficiency, and concept-drift tasks. We thus establish that closed-form variational inference with online precision learning provides a tractable foundation for deep predictive coding networks, retaining biological and interpretative advantages, without requiring iterative relaxation or global error signals.

---

📖 [Read original article](https://arxiv.org/abs/2605.20293)