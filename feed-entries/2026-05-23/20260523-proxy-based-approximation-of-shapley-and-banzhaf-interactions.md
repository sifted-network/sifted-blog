---
title: "Proxy-Based Approximation of Shapley and Banzhaf Interactions"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22738"
author: "Santo M. A. R. Thies, Hubert Baniecki, R. Teal Witter, Eyke H\\\"ullermeier, Maximilian Muschalik, Fabian Fumagalli"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2605.22738v1 Announce Type: cross Abstract: Shapley and Banzhaf interactions capture the complex dynamics inherent in modern machine learning applications. However, current estimators for these higher-order interactions trade off between speed and accuracy. To overcome this limitation, we introduce ProxySHAP. ProxySHAP reconciles the high sample efficiency of tree-based proxy models with a principled path to consistency via residual correction. On a theoretical level, we derive a polynomial-time generalization of interventional TreeSHAP to compute exact interaction indices for tree ensembles, successfully bypassing exponential tree-depth dependencies in prior methods. Furthermore, we formally analyze the residual adjustment strategy, characterizing the specific conditions under which Maximum Sample Reuse (MSR) corrects proxy bias without its variance scaling exponentially with interaction size. Extensive benchmarking demonstrates that ProxySHAP sets a new state-of-the-art standard for approximation quality, including in large-scale applications with thousands of features. By achieving the lowest error in both small- and large-budget regimes, ProxySHAP significantly outperforms the prior best estimators ProxySPEX and KernelSHAP-IQ, while also delivering superior performance on downstream explainability tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.22738)