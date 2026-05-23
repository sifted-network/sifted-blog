---
title: "GeoPAS: Geometric Probing for Algorithm Selection in Continuous Black-Box Optimization"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.09095"
author: "Jiabao Brad Wang, Xiang Shi, Yiliang Yuan, Mustafa Misir"
categories: ["cs.LG", "math.OC"]
---

arXiv:2604.09095v3 Announce Type: replace Abstract: Automated algorithm selection for continuous black-box optimization depends on representing problem information under limited probing and selecting solvers under heavy-tailed performance distributions. This paper proposes a geometric probing framework that represents each problem instance by randomly sampled multi-scale two-dimensional slices of the objective landscape. The slices are encoded with validity-mask-aware visual pooling and aggregated into an instance representation. Solver selection is then performed by a logarithmic composite score combining a learned instance-conditioned estimate with an algorithm-side empirical prior. The framework is evaluated on a standard single-objective black-box optimization benchmark suite with a portfolio of twelve solvers under instance-level, grouped random, and problem-level transfer protocols. Under the two within-suite protocols, it reduces aggregate mean relative expected running time from 30.37 for the single best solver to 3.14 and 3.61, while also improving median and upper-tail performance. Under problem-level transfer, the canonical adaptive setting improves typical and moderate-tail performance but leaves the mean dominated by rare extreme failures; a prior-heavy scoring variant mitigates this failure mode, although its robustness may be benchmark-dependent. The results suggest that coarse geometric probes provide useful solver-relevant information, while robust cross-problem selection also depends on metric-aligned decision scoring.

---

📖 [Read original article](https://arxiv.org/abs/2604.09095)