---
title: "The Attribution Impossibility: No Feature Ranking Is Faithful, Stable, and Complete Under Collinearity"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21492"
author: "Drake Caraker, Bryan Arnold, David Rhoads"
categories: ["cs.LG", "cs.AI", "cs.LO", "stat.ML"]
---

arXiv:2605.21492v1 Announce Type: cross Abstract: No feature ranking can be simultaneously faithful, stable, and complete when features are collinear. For collinear pairs, ranking reduces to a coin flip. We prove this impossibility, quantify it for four model classes, resolve it via ensemble averaging (DASH), and machine-verify it with 305 Lean 4 theorems. We characterize the complete attribution design space: exactly two families of methods exist -- faithful-complete methods (unstable, with rankings that flip up to 50% of the time) and ensemble methods like DASH (stable, reporting ties for symmetric features) -- and no method lies outside this dichotomy. The impossibility is quantitative: the attribution ratio diverges as 1/(1-rho^2) for gradient boosting, is infinite for Lasso, and converges for random forests. DASH (Diversified Aggregation of SHAP) is provably Pareto-optimal among unbiased aggregations, achieving the Cramer-Rao variance bound with a tight ensemble size formula. In a survey of 77 public datasets, 68% exhibit attribution instability. Switching to conditional SHAP does not escape the impossibility when features have equal causal effects. The framework includes practical diagnostics -- a Z-test workflow and single-model screening tool -- and has direct consequences for fairness auditing: SHAP-based proxy discrimination audits are provably unreliable under collinearity. The design space theorem, diagnostics, and impossibility are mechanically verified in Lean 4 (305 theorems from 16 axioms, 0 sorry) -- to our knowledge, the first formally verified impossibility in explainable AI.

---

📖 [Read original article](https://arxiv.org/abs/2605.21492)