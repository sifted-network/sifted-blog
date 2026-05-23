---
title: "Rule-State Inference (RSI): A Bayesian Framework for Compliance Monitoring in Rule-Governed Domains"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.21610"
author: "Abdou-Raouf Atarmla"
categories: ["cs.LG", "cs.AI", "stat.ML"]
---

arXiv:2603.21610v2 Announce Type: replace-cross Abstract: Compliance monitoring in rule-governed domains (tax administration, clinical protocol adherence, environmental regulation) faces three structural obstacles that standard machine learning does not simultaneously address: the absence of labeled outcomes at deployment, strategically missing observations where non-compliant entities selectively withhold evidence, and a regulatory environment that changes faster than any supervised model can be retrained. We introduce Rule-State Inference (RSI), a Bayesian framework that reverses the usual paradigm. Rather than learning rules from data, RSI treats an authoritative, formalized rule set as structured Bayesian priors and infers the latent compliance state of a population through mean-field variational inference with exact coordinate-ascent updates. The central modeling object is a joint latent state per regulatory period: a global compliance-culture factor eta and per-rule components for activation, population compliance level, and parametric drift. RSI delivers three formal guarantees: O(n_k + K) regulatory adaptability per rule update; Bernstein-von Mises consistency for the identifiable continuous components; and monotone ELBO convergence at every iteration. We instantiate RSI on the Togolese fiscal system on a benchmark of 2,000 synthetic enterprises grounded in official regulatory law; full numerical validation is forthcoming. The framework is designed for direct extension to Sequential RSI, a state-space formulation where the posterior from one regulatory period becomes the prior for the next, yielding an exact Kalman filter for compliance-trajectory tracking and entity-level Bayesian scoring.

---

📖 [Read original article](https://arxiv.org/abs/2603.21610)