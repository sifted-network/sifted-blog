---
title: "Large-scale Score-based Variational Posterior Inference for Bayesian Deep Neural Networks"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.05873"
author: "Minyoung Kim"
categories: ["cs.LG"]
---

arXiv:2602.05873v2 Announce Type: replace Abstract: Bayesian (deep) neural networks (BNN) are often more attractive than the vanilla point-estimate deep learning in various aspects including uncertainty quantification, robustness to noise, resistance to overfitting, and more. The variational inference (VI) is one of the most widely adopted approximate inference methods. Whereas the ELBO-based variational free energy method is a dominant choice in the literature, in this paper we introduce a score-based alternative for BNN variational inference. Score-based VI can address the known issue of mode collapsing in ELBO-based VI. Although several score-based VI methods have been proposed in the community, most are not adequate for large-scale BNNs for various computational and technical reasons. We propose a novel scalable VI method where the learning objective combines the score matching loss and the proximal penalty term in iterations, which helps our method avoid the reparametrized sampling, and allows for noisy unbiased mini-batch scores through stochastic gradients. This in turn makes our method scalable to large-scale neural networks including Vision Transformers. On several benchmarks including visual recognition and time-series forecasting with large-scale deep networks, we empirically show the effectiveness of our approach.

---

📖 [Read original article](https://arxiv.org/abs/2602.05873)