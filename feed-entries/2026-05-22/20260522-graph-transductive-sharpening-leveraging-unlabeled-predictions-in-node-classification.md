---
title: "Graph Transductive Sharpening: Leveraging Unlabeled Predictions in Node Classification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20248"
author: "Brown Zaz, Mar Gonz\\`alez I Catal\\`a, Ferran Hernandez Caralt, Moshe Eliasof, Pietro Li\\`o"
categories: ["cs.LG"]
---

arXiv:2605.20248v1 Announce Type: new Abstract: In the transductive setting, where the full graph is observed but node labels are only partially available, progress in semi-supervised node classification has largely focused on architectural innovation. In this paper, we revisit an orthogonal axis: the training objective. We start from a simple observation: transductive models produce predictions for every node during training, including nodes without labels. These unlabeled-node predictions may contain useful training signal, but standard supervised objectives discard them because no ground-truth labels are available. Inspired by the decomposition of cross-entropy into a label-dependent alignment term and a label-independent entropy term, we propose prediction confidence as a natural way to extract this signal in the absence of labels. This motivates Transductive Sharpening (TS): a loss-level modification that minimizes prediction entropy on unlabeled nodes while counterbalancing this effect on labeled nodes. We evaluate Transductive Sharpening across a wide range of node-classification benchmarks and observe consistent performance improvements without requiring any changes to the backbone architecture. Code is available at https://github.com/transductive-sharpening/tunedGNN.

---

📖 [Read original article](https://arxiv.org/abs/2605.20248)