---
title: "CausalGuard: Conformal Inference under Graph Uncertainty"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21928"
author: "Vikash Singh, Weicong Chen, Debargha Ganguly, Yanyan Zhang, Nengbo Wang, Sreehari Sankar, Mohsen Hariri, Alexander Nemecek, Chaoda Song, Shouren Wang, Biyao Zhang, Van Yang, Erman Ayday, Jing Ma, Vipin Chaudhary"
categories: ["cs.LG", "cs.AI", "stat.ME"]
---

arXiv:2605.21928v1 Announce Type: cross Abstract: Estimating treatment effects from observational data requires choosing an adjustment set, but valid adjustment depends on an unknown causal graph. Graph misspecification can cause under-coverage, while graph-agnostic conformal wrappers may regain nominal coverage only through large padding. We introduce CausalGuard, a structure-weighted conformal framework that calibrates after aggregating graph-conditional doubly robust pseudo-outcomes. Candidate DAGs are proposed from an LLM-derived edge prior, pruned by conditional-independence tests, and reweighted by Bayesian Information Criterion. A composite nonconformity score then calibrates the posterior-weighted pseudo-outcome. CausalGuard provides distribution-free finite-sample marginal coverage for this aggregated pseudo-outcome; under causal identification, overlap, conditional-mean nuisance stability, and concentration on target-aligned valid adjustment strategies, its conditional mean converges to the true Conditional Average Treatment Effect. Across five benchmarks, CausalGuard attains mean coverage above the nominal 90% level for the directly evaluable target and reduces width when graph-agnostic conformal baselines require large padding. Stress tests show that CausalGuard suppresses invalid collider adjustment and remains stable under misspecified priors when the retained candidate set is data-supported.

---

📖 [Read original article](https://arxiv.org/abs/2605.21928)