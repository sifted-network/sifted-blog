---
title: "Benchmarking and Improving Monitors for Out-Of-Distribution Alignment Failure in LLMs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21602"
author: "Dylan Feng, Pragya Srivastava, Cassidy Laidlaw"
categories: ["cs.AI", "cs.SE"]
---

arXiv:2605.21602v1 Announce Type: new Abstract: Many safety and alignment failures of large language models (LLMs) occur due to out-of-distribution (OOD) situations: unusual prompt or response patterns that are unforeseen by model developers. We systematically study whether LLM monitoring pipelines can detect these OOD alignment failures by introducing a benchmark called Misalignment Out Of Distribution (MOOD). It is difficult to find failures that are truly OOD for off-the-shelf models trained on vast safety datasets. We sidestep this by including a restricted training set in MOOD that we use to train our own monitors, as well as seven test sets with diverse alignment failures that are outside the training distribution. Using MOOD, we find that guard models (safety classifiers) often fail to generalize OOD. To fix this, we propose combining guard models with OOD detectors. We test four types of OOD detectors and find that a combination of a guard model with Mahalanobis distance and perplexity-based OOD detectors can improve recall from 39% to 45%. We also establish positive scaling trends across model scales for monitors that combine a guard model and OOD detector; we find that incorporating OOD detection into monitoring achieves a higher recall gain than using a guard model with 20 times more parameters. Our work suggests that OOD detection should be a crucial component of LLM monitoring and provides a foundation for further work on this important problem.

---

📖 [Read original article](https://arxiv.org/abs/2605.21602)