---
title: "The Economics of Model Collapse: Equilibrium, Welfare, and Optimal Provenance Subsidies in Synthetic Data Markets"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20279"
author: "Gustav Olaf Yunus Laitinen-Fredriksson Lundstr\\\"om-Imanov"
categories: ["econ.GN", "cs.CY", "cs.LG", "q-fin.EC"]
---

arXiv:2605.20279v1 Announce Type: cross Abstract: Generative artificial intelligence is rapidly transforming the supply side of training data: an increasing share of new tokens, images, and structured records is produced by previous-generation models rather than by human originators. Recursive training on such synthetic content induces a measurable and often irreversible loss of distributional fidelity, a phenomenon known as model collapse. We develop the first unified microeconomic theory of synthetic data markets under model collapse. We introduce the Synthetic Data Contamination Equilibrium (SDCE), prove existence and generic uniqueness, derive a welfare decomposition W = W_prod + W_cons - L_coll - L_info, establish a Wasserstein-gradient-flow mean-field collapse limit, prove an impossibility of information-constrained implementation, and obtain closed-form expressions for the welfare-maximizing provenance subsidy s* = KL(q||p)/(2 kappa) and the welfare-maximizing watermark strength w* = (1 - psi) KL(q||p)/(2 kappa psi). We prove an information-theoretic Cramer-Rao lower bound on any provenance estimator using only producer-side observations and show that the Provenance-Market Iterative Retraining (PMIR) algorithm attains this bound up to constants while converging to an epsilon-SDCE in O(epsilon^-2 log T) iterations. A reduced-form OLS estimation on a C4-synthetic benchmark over ten retraining generations yields a collapse-rate coefficient b-hat = 0.181 (HAC s.e. 0.024), within one standard error of the structural prediction 0.183. Calibrated experiments raise generation-ten model quality by 23.1 percent over the unregulated benchmark while lowering the 2-Wasserstein drift on a held-out diversity probe from 0.318 to 0.142. Scaling experiments over generations t in {1,...,10} recover a logarithmic-in-t collapse law log Q_t = log Q_0 - 0.183 t rho^2 with R^2 = 0.962.

---

📖 [Read original article](https://arxiv.org/abs/2605.20279)