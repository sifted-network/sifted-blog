---
title: "Relational Linear Properties in Language Models: An Empirical Investigation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22532"
author: "Giovanni Valer, Luigi Gresele, Marco Bronzini, Emanuele Marconato"
categories: ["cs.LG"]
---

arXiv:2605.22532v1 Announce Type: new Abstract: Linear properties are ubiquitous in the representations of language models; however, testing them experimentally remains a challenging task. This work focuses on relational linearity: the hypothesis that, for a fixed relation (e.g., "plays"), the unembedding of an object (e.g., "trumpet") can be predicted from the embedding of its subject (e.g.,"Miles Davis") by a linear map. We present an experimental method to test the formulation of relational linearity by Marconato et al. (2025). Specifically, we introduce a probing method, based on Kullback-Leibler divergence, to evaluate this property and examine its variation across layers and paraphrased relational queries. It is also more efficient than previous work; for example, it avoids the crude Jacobian approximations used in Linear Relational Embeddings by Hernandez et al. (2024). Our findings across four datasets show that relational linearity varies across models, exhibits layer-wise patterns consistent with prior observations about linguistic information in model representations, and is differently affected by changes in how the relation is phrased.

---

📖 [Read original article](https://arxiv.org/abs/2605.22532)