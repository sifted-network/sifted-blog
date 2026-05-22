---
title: "RePCM: Region-Specific and Phenotype-Adaptive Bi-Ventricular Cardiac Motion Synthesis"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21237"
author: "Xuan Yang, Xiaohan Yuan, Hao Li, Lingyu Chen, Yanan Liu, Lei Li"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21237v1 Announce Type: cross Abstract: Cardiac motion over a cardiac cycle is crucial for quantifying regional function and is strongly affected by cardiovascular diseases. Since temporally dense mesh sequences are difficult to obtain in practice, we focus on leveraging the more accessible end-diastolic frame to infer a full-cycle sequence. Due to strong regional and disease-specific differences, traditional methods often oversmooth the data by relying on generative models that are optimized for global patterns. To address this problem, we propose Region-Aware and Phenotype-Adaptive Bi-Ventricular Cardiac Motion Synthesis (RePCM) for single frame Bi-ventricular mesh motion completion. In Stage I, a reconstruction network learns vertex wise motion descriptors and clustering yields a data driven functional partition, providing an explicit motion derived region structure. In Stage II, a Region-Specific Injection Module enforces masked, synchronized region exchange within a conditional VAE, preserving localized specific dynamics and restricting cross-region mixing. A Phenotype-Adaptive Mixture-of-Experts prior conditioned on ED shape uses anatomy-guided cues to model latent motion trends and capture inter-disease variability. Experiments on three datasets covering different cardiovascular diseases show consistent gains in geometric and functional metrics and improved preservation of region specific dynamics.

---

📖 [Read original article](https://arxiv.org/abs/2605.21237)