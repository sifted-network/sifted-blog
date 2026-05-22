---
title: "Maxitive Donsker-Varadhan Formulation for Possibilistic Variational Inference"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2511.21223"
author: "Jasraj Singh, Shelvia Wongso, Jeremie Houssineau, Badr-Eddine Ch\\'erief-Abdellatif"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2511.21223v2 Announce Type: replace-cross Abstract: Variational inference (VI) is a cornerstone of modern Bayesian learning, enabling approximate inference in complex models. However, its formulation depends on expectations and divergences defined through high-dimensional integrals, often rendering analytical treatment impossible and necessitating heavy reliance on approximations. Possibility theory, an imprecise probability framework, allows us to directly model epistemic uncertainty instead of relying on a subjective interpretation of probabilities. While this framework provides robustness and interpretability under sparse or imprecise information, adapting VI to the possibilistic setting requires rethinking core concepts such as divergences, which presuppose additivity. In this work, we develop a principled formulation for performing possibilistic VI by establishing a maxitive analogue of the classical Donsker-Varadhan formulation. The resulting framework enables us to derive a learning rule for possibilistic VI with exponential-family candidates and practical update rules for neural-network training, giving rise to a family of optimizers termed CBOpt. Finally, we demonstrate that CBOpt achieves competitive performance on both in-domain and out-of-domain image classification tasks.

---

📖 [Read original article](https://arxiv.org/abs/2511.21223)