---
title: "Uncertainty-Aware Distribution-to-Distribution Flow Matching for Scientific Imaging"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.21717"
author: "Dongxia Wu, Yuhui Zhang, Serena Yeung-Levy, Emma Lundberg, Emily B. Fox"
categories: ["cs.LG"]
---

arXiv:2603.21717v4 Announce Type: replace Abstract: Distribution-to-distribution generative models support scientific imaging tasks ranging from modeling cellular perturbation responses to translating medical images across conditions. Trustworthy generation requires reliability, or generalization across labs, devices, and experimental conditions, and accountability, or detecting out-of-distribution cases where predictions may be unreliable. We leverage Stochastic Flow Matching (SFM), a marginal-preserving stochastic extension of flow matching for improved generalization under distribution shift. SFM augments deterministic flows with a diffusion term together with a learned score-based drift correction, retaining the learned transport marginals while modeling conditional variability. Building on this SFM framework, we introduce Bayesian Stochastic Flow Matching (BSFM) as a companion uncertainty quantification mechanism and develop AVUQ (Antithetic Variance-reduction Uncertainty Quantification) to approximately estimate epistemic and aleatoric uncertainty via sample-efficient antithetic sampling with approximate posterior inference. We further use AVUQ to yield anomaly scores for unreliable generation detection. Experiments on cellular imaging (BBBC021, JUMP) and brain fMRI (Theory of Mind) across diverse unseen scenarios show that SFM improves generalization while AVUQ provides effective uncertainty-based anomaly scores under practical sampling budgets.

---

📖 [Read original article](https://arxiv.org/abs/2603.21717)