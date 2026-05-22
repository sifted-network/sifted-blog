---
title: "Learning fMRI activations dictionaries across individual geometries via optimal transport"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20883"
author: "Sonia Mazelet, R\\'emi Flamary, Bertrand Thirion"
categories: ["cs.LG"]
---

arXiv:2605.20883v1 Announce Type: new Abstract: Dictionary learning is a powerful tool for creating interpretable representations. When applied to functional magnetic resonance imaging (fMRI) data, the resulting patterns of brain activity can be used for various downstream tasks, such as brain state classification or population-level analysis. However, a major challenge is the variability in brain geometry across individuals. This is usually addressed by projecting each individual brain geometry onto a common template, which removes subject-specific information. In this work, we introduce a novel approach to dictionary learning on fMRI data that explicitly accounts for this variability. We use the optimal transport-based Fused Gromov-Wasserstein (FGW) distance to compare graphs with different geometries and features. To address the challenge of computing multiple FGW distances for large graphs such as those arising from fMRI data, we rely on amortized optimization to learn a neural network that predicts an approximation of the optimal transport plans, which substantially reduces the computational cost. Additionally, we learn dictionary atoms that depend on the FGW trade-off parameter, which controls the balance between feature alignment and structural consistency. Numerical experiments on the HCP dataset demonstrate that the proposed approach captures different levels of geometric variability in the data and provides representations that preserve essential information.

---

📖 [Read original article](https://arxiv.org/abs/2605.20883)