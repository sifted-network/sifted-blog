---
title: "Minimum Description Length based Granular-Ball Tree Regularization for Spectral Clustering"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22410"
author: "Zeqiang Xian, Caihui Liu, Yong Zhang, Wenjing Qiu"
categories: ["cs.LG"]
---

arXiv:2605.22410v1 Announce Type: new Abstract: Spectral clustering largely depends on the affinity graph, yet constructing a graph that preserves reliable local connectivity while adapting to heterogeneous data structures remains challenging. Existing granular-ball-based spectral clustering methods usually reduce graph complexity by using coarse-grained representatives. However, the learned local regions are often treated as graph nodes or anchors, and their structural information is not sufficiently used to regularize the original sample-level graph. To address this issue, this paper proposes a Minimum Description Length based Granular-Ball Tree-Regularized Spectral Clustering method, termed MDL-GBTRSC. The proposed method constructs a granular-ball tree through local MDL model selection, with reciprocal neighborhood continuity used to discourage splits that break reliable local connections. The stable leaf balls obtained from the tree provide coding-scale information for regularizing the sample-level affinity graph. In addition, a shared-neighbor bridge code is introduced to adjust weak local bridge relations without requiring an additional user-specified threshold. In this way, MDL-GBTRSC connects interpretable local representation learning with affinity graph construction in a unified spectral clustering framework. Experiments on real and synthetic datasets show that MDL-GBTRSC achieves the best average ARI and NMI under the adopted fixed-configuration protocol compared with classical spectral clustering baselines and representative granular-ball, micro-cluster, and anchor-based methods.

---

📖 [Read original article](https://arxiv.org/abs/2605.22410)