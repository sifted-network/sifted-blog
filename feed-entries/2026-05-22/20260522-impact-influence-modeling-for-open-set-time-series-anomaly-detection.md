---
title: "IMPACT: Influence Modeling for Open-Set Time Series Anomaly Detection"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.29183"
author: "Xiaohui Zhou, Yijie Wang, Hongzuo Xu, Weixuan Liang, Xiaoli Li, Guansong Pang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2603.29183v3 Announce Type: replace-cross Abstract: Open-set anomaly detection (OSAD) is an emerging paradigm designed to utilize limited labeled data from anomaly classes seen in training to identify both seen and unseen anomalies during testing. Current approaches rely on simple augmentation methods to generate pseudo anomalies that replicate unseen anomalies. Despite being promising in image data, these methods are found to be ineffective in time series data due to the failure to preserve its sequential nature, resulting in trivial or unrealistic anomaly patterns. They are further plagued when the training data is contaminated with unlabeled anomalies. This work introduces $\textbf{IMPACT}$, a novel framework that leverages $\underline{\textbf{i}}$nfluence $\underline{\textbf{m}}$odeling for o$\underline{\textbf{p}}$en-set time series $\underline{\textbf{a}}$nomaly dete$\underline{\textbf{ct}}$ion, to tackle these challenges. The key insight is to $\textbf{i)}$ learn an influence function that can accurately estimate the impact of individual training samples on the modeling, and then $\textbf{ii)}$ leverage these influence scores to generate semantically divergent yet realistic unseen anomalies for time series while repurposing high-influential samples as supervised anomalies for anomaly decontamination. Extensive experiments show that IMPACT significantly outperforms existing state-of-the-art methods, showing superior accuracy under varying OSAD settings and contamination rates. Code is available at https://github.com/mala-lab/IMPACT.

---

📖 [Read original article](https://arxiv.org/abs/2603.29183)