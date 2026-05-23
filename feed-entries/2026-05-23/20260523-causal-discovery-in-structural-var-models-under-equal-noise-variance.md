---
title: "Causal Discovery in Structural VAR Models Under Equal Noise Variance"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21846"
author: "SeyedSina Seyedi HasanAbadi, Fahimeh Arab, Erfan Nozari, AmirEmad Ghassami"
categories: ["stat.ME", "cs.LG", "stat.ML"]
---

arXiv:2605.21846v1 Announce Type: cross Abstract: Causal discovery from multivariate time series is challenging when causal effects may occur both across time and within the same sampling interval. This issue is especially important in applications such as neuroscience, where the sampling rate may be coarse relative to the underlying dynamics and contemporaneous effects need not form an acyclic graph. We study causal discovery in linear Gaussian structural VAR models under an equal noise variance assumption, meaning that the structural noise terms have a common variance. Unlike the DAG-based cross-sectional equal noise variance setting, the time-series setting considered here does not generally yield point identification of a unique causal graph. Instead, multiple structural VAR parameterizations can induce the same stationary observed process law. We introduce a notion of observational equivalence tailored to this setting and show that the corresponding equivalence class is characterized by orthogonal transformations of the structural equations together with a global positive scale. This characterization leads to an equivalence-aware model discrepancy, the observational alignment discrepancy, which compares structural models modulo transformations that preserve the observed law. Building on this theory, we propose ENVAR, a sparsity-based procedure that searches over the induced observational equivalence class for a sparse normalized structural representative. We evaluate the proposed methodology on synthetic structural VAR data and on an fMRI dataset.

---

📖 [Read original article](https://arxiv.org/abs/2605.21846)