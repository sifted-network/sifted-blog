---
title: "Riemannian geometry meets fMRI: the advantages of modeling correlation manifolds and eigenvector subspaces"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22334"
author: "Mario Severino, Manuela Moretto, Robert A. McCutcheon, Mattia Veronese"
categories: ["cs.LG"]
---

arXiv:2605.22334v1 Announce Type: new Abstract: Correlation matrices are fundamental summaries of functional brain networks, yet standard analyses often treat entries independently, ignoring the curved geometry of correlation space. Existing geometric methods frequently lack closed-form operations or depend on arbitrary region ordering, limiting scalability. We introduce a scalable geometric framework with two components: (i) the Off-log metric, a smooth transformation mapping correlation matrices to symmetric zero-diagonal matrices. This enables closed-form expressions for distances, Frechet means, and linear models, allowing standard statistical modeling without complex manifold optimization. (ii) Grassmannian subspace discrimination, which compares subjects via principal-angle distances between eigenvector subspaces, resolving inherent sign and basis ambiguities. Both components integrate into standard machine-learning workflows for inference, regression, and classification. Validated across two clinical cohorts (Parkinson's and psychosis) and three ageing fMRI datasets, the Off-log metric increased sensitivity in permutation tests and matched or exceeded Riemannian and Euclidean baselines in classification. Brain-age prediction performance was comparable, with Riemannian metrics excelling in two of three cohorts. The Grassmannian method consistently outperformed Euclidean baselines, highlighting disease-relevant networks. Overall, geometry-aware representations improve sensitivity and predictive performance while remaining straightforward to deploy at scale.

---

📖 [Read original article](https://arxiv.org/abs/2605.22334)