---
title: "Geometry-Induced Diffusion on Graphs: A Learnable Weighted Laplacian for Spectral GNNs"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.18141"
author: "Mia Zosso, Ali Hariri, Victor Kawasaki-Borruat, Pierre-Gabriel Berlureau, Pierre Vandergheynst"
categories: ["cs.LG"]
---

arXiv:2602.18141v2 Announce Type: replace Abstract: Long-range graph tasks are challenging for Graph Neural Networks (GNNs): global mechanisms such as attention or rewiring schemes can be computationally expensive, while deep local propagation is prone to vanishing gradients, oversmoothing, and oversquashing. The introduced mu-ChebNet architecture is a simple spectral GNN that learns a node-wise weight function mu before applying ChebNet-style filters. The learned weighting mu induces a modified graph Laplacian which effectively changes the propagation geometry without altering the graph topology. This task-dependent geometry promotes preferred routes for information propagation, thereby helping long-range signals avoid highly contractive bottlenecks, and obviating the need for repeated layer stacking. In practice, we replace the fixed graph Laplacian L by a learned operator L_mu, keeping the proposed mu-ChebNet architecture lightweight while making propagation task-adaptive. Furthermore, we provide a spectral analysis demonstrating how mu modulates propagation dynamics, and empirically observe improved performance on both synthetic long-range reasoning tasks and real-world graph benchmarks. The learned weight function is not only interpretable, but also offers a lightweight alternative to attention and rewiring for adaptive graph propagation.

---

📖 [Read original article](https://arxiv.org/abs/2602.18141)