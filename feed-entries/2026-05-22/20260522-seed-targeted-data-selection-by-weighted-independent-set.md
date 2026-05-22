---
title: "SEED: Targeted Data Selection by Weighted Independent Set"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.15691"
author: "Yuan Zhang, Lifeng Guo, Junwen Pan, Wenzhao Zheng, Wen Zhou, Kuan Cheng, Kurt Keutzer, Shanghang Zhang"
categories: ["cs.LG"]
---

arXiv:2605.15691v2 Announce Type: replace Abstract: Data selection seeks to identify a compact yet informative subset from large-scale training corpora, balancing sample quality against collection diversity. We formulate this problem as a Weighted Independent Set (WIS) on a similarity graph, where nodes represent data samples weighted by influence, and edges connect semantically redundant pairs. This formulation naturally yields subsets that are simultaneously high-quality and diverse. However, two challenges arise in practice: naive node weights fail to distinguish informative signals from gradient noise, and edge construction under heterogeneous domain distributions produces structurally imbalanced graphs that bias selection toward sparse regions. To address these issues, we introduce two principled refinements from a unified graph perspective: (1) \textit{node value calibration} that restricts influence estimation to the bilateral salient subspace to ground node importance in task-relevant signals rather than surface-level statistics; (2) \textit{local scale normalization} that adapts edge thresholds to local neighborhood density, mitigating graph imbalance induced by cross-domain distribution shifts. Together, these components yield a robust and scalable data selection pipeline dubbed SEED. We further construct \texttt{Honeybee-Remake-SEED-200K}, a compact multimodal dataset curated by SEED. Extensive experiments show that SEED consistently outperforms state-of-the-art methods on instruction tuning, visual instruction tuning, and semantic segmentation across diverse model families.

---

📖 [Read original article](https://arxiv.org/abs/2605.15691)