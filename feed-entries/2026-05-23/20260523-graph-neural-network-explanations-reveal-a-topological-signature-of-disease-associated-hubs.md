---
title: "Graph neural network explanations reveal a topological signature of disease-associated hubs in biological networks"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21502"
author: "Kyle Higgins, Ivan Laponogov, Dennis Veselkov, Kirill Veselkov"
categories: ["q-bio.MN", "cs.AI", "cs.LG"]
---

arXiv:2605.21502v1 Announce Type: cross Abstract: Graph neural networks (GNNs) are increasingly used to model biological systems, yet the reliability of post-hoc explanation methods for recovering meaningful molecular mechanisms remains unclear. Here, we systematically evaluate four widely used approaches: Saliency Attribution (SA), Integrated Gradients (IG), GNNExplainer, and Layer-wise Relevance Propagation (LRP) for identifying disease-relevant structure in breast cancer RNA-seq data projected onto a protein-protein interaction network. Using synthetic benchmarks with known ground-truth motifs, we show that explanation methods recover distinct signal organizations: SA performs best for sparse single-node drivers, whereas IG and LRP preferentially recover distributed pathway-like and cascade-like signals. In TCGA BRCA data, we identify a consistent topological signature of disease-associated hubs in which attribution peaks in the immediate 1-hop neighborhood and decays across successive network shells, a pattern most pronounced for IG and LRP and associated with strong enrichment of known cancer hubs. We further observe a trade-off between local hub enrichment and global gene ranking performance, with IG optimizing local enrichment and SA achieving superior global discrimination. Motivated by these complementary behaviors, we introduce a framework combining a shell-based hub score with consensus ranking across explainers. Consensus scores improve prioritization of canonical cancer genes (TP53, BRCA1, ESR1, MYC), reduce dependence on node degree, and, especially when tuned, outperform individual methods. Pathway enrichment further reveals improved recovery of biologically coherent cancer programs, including ERBB2, RTK, MAPK, immune, and cytokine signaling. Together, these results demonstrate that topology-aware integration of graph explanations can improve biological interpretability and biologically relevant molecular recovery.

---

📖 [Read original article](https://arxiv.org/abs/2605.21502)