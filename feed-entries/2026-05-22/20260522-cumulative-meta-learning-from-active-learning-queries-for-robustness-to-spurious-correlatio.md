---
title: "Cumulative Meta-Learning from Active Learning Queries for Robustness to Spurious Correlations"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20771"
author: "Kin Whye Chew, Jingxian Wang"
categories: ["cs.LG"]
---

arXiv:2605.20771v1 Announce Type: new Abstract: Spurious correlations in real-world datasets cause machine learning models to rely on irrelevant patterns, undermining reliability, generalization, and fairness. Active learning offers a promising way to address this failure mode by querying informative samples that distinguish core features from spurious ones. However, standard active-learning methods simply append queried examples to the labeled set, effectively updating only the likelihood term. In deep learning regimes, the influence of these informative samples can be diluted by the larger labeled set and memorized by overparameterized models. We propose Cumulative Active Meta-Learning (CAML), an active-learning framework that uses queried examples to meta-learn the prior, or inductive bias, governing how the model adapts. CAML casts each active-learning round as a meta-learning task: the current labeled set serves as meta-train data for adaptation, while the newly queried batch serves as meta-test data for evaluating generalization. Unlike conventional meta-learning, which treats tasks as independent and identically distributed, CAML exploits the sequential dependence between active-learning rounds by maintaining a cumulative inductive bias that is progressively refined. Theoretically, we show that this cumulative formulation introduces interaction terms that couple earlier meta-learned inductive biases with later query-induced objectives, capturing dependencies absent from standard meta-learning. Empirically, CAML improves minority-group accuracy across spurious-correlation benchmarks and acquisition strategies, with gains of up to 27.8% on Dominoes, 29.9% on Waterbirds, 14.3% on SpuCo, and 24.0% on CivilComments.

---

📖 [Read original article](https://arxiv.org/abs/2605.20771)