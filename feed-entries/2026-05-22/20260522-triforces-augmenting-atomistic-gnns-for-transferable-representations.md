---
title: "TriForces: Augmenting Atomistic GNNs for Transferable Representations"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20581"
author: "Ali Ramlaoui, Alexandre Duval, Hannah Bull, Victor Schmidt, Hugues Talbot, Fragkiskos D. Malliaros, Joseph Musielewicz"
categories: ["cs.LG", "cond-mat.mtrl-sci"]
---

arXiv:2605.20581v1 Announce Type: new Abstract: Machine learning interatomic potentials (MLIPs) achieve excellent accuracy when trained on large Density Functional Theory (DFT) data. To be useful in practice, they must often be adapted to target chemistries using small and expensive task-specific datasets. However, MLIPs transfer inconsistently across domains, with representations that often loose accessible composition and structure information. To address this, we present TriForces, a model-agnostic three-stream framework that separates composition and structure information, combined with self-supervised learning to preserve transferable representations. TriForces improves performance on MatBench and QM9 over baselines without needing DFT labels and enables efficient similar structure retrieval through its learned latent space. On OMat24, in limited-data training regime, TriForces reduces energy MAE by 57% at 20K samples only and improves force MAE across sample sizes. We release pretrained TriForces variants across multiple MLIP architectures with code at https://github.com/Ramlaoui/triforces.

---

📖 [Read original article](https://arxiv.org/abs/2605.20581)