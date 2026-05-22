---
title: "ECTO: Exogenous-Conditioned Temporal Operator for Ultra-Short-Term Wind Power Forecasting"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.12196"
author: "Cao Yuan, Junjun Wang"
categories: ["cs.LG"]
---

arXiv:2605.12196v2 Announce Type: replace Abstract: Accurate ultra-short-term wind power forecasting is critical for grid dispatch and reserve management, yet remains challenging due to the non-stationary, condition-dependent nature of wind generation. Meteorological exogenous variables carry substantial predictive information, but the most informative variable combination varies across sites, operating conditions, and prediction horizons. Existing deep learning approaches either treat exogenous inputs as generic auxiliary channels through uniform mixing or soft gating, or rely on fixed preprocessing steps such as PCA, without exploiting the physical structure of meteorological variables. We propose ECTO (Exogenous-Conditioned Temporal Operator), a unified framework that decomposes exogenous variable modeling into two complementary modules. Physically-Grounded Variable Selection (PGVS) performs hierarchical, group-aware sparse selection over exogenous variables using a domain-informed physical prior and sparsemax activations, producing a compact, condition-adaptive exogenous context. Exogenous-Conditioned Regime Refinement (ECRR) routes the forecast through learned regime experts that apply gain--bias calibration and horizon-specific corrections via a mixture-of-experts paradigm. Experiments on three wind farms spanning different climates, capacities (66--200 MW), and exogenous dimensions (11--13 variables) demonstrate that ECTO achieves the lowest MSE across all sites, with relative improvements over the strongest baseline ranging from 2.2% to 5.2%, widening to 8.6% at the longer prediction horizon ($H=32$). Ablation analysis confirms that each exogenous-related component contributes positively (PGVS +1.84%, ECRR +2.86%), and interpretability analysis reveals that PGVS learns physically meaningful, site-specific variable selection patterns, while ECRR converges to well-separated calibration strategies consistent across sites.

---

📖 [Read original article](https://arxiv.org/abs/2605.12196)