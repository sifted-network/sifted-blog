---
title: "Discovering Entity-Conditioned Lag Heterogeneity: A Lag-Gated Neural Audit Framework for Panel Time Series"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21542"
author: "Andi Xu"
categories: ["cs.LG"]
---

arXiv:2605.21542v1 Announce Type: new Abstract: Country-level temporal panels are widely used in empirical analysis. Researchers often need to audit how different entities respond to historical signals over different time horizons. Current approaches typically do not provide directly auditable entity-specific lag summaries. We formulate entity-conditioned heterogeneous lag discovery as a temporal panel mining task and propose AC-GATE, an Adaptive-Conditioning Encoder with a Scale-Invariant Lag Gate. It instantiates conditional Moderated Distributed Lag by using observable entity-level proxies to condition lag-weight distributions over historical observations, thereby making effective lags structural outputs of the model rather than post-hoc explanations. The evaluation is based on a layered audit protocol that separates predictive calibration from lag discovery. A synthetic panel with known ground-truth lags is used for mechanism recovery testing, and two real-world country-level panels are used for external audit and stress testing. The results show that AC-GATE can recover heterogeneous lag structure in synthetic data, and generates non-degenerate, externally structured effective lags in real data.

---

📖 [Read original article](https://arxiv.org/abs/2605.21542)