---
title: "Do Deep Ensembles Actually Capture Uncertainty in Graph Neural Networks?"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22593"
author: "Pedro C. Vieira, Pedro Ribeiro, Viacheslav Borovitskiy"
categories: ["cs.LG"]
---

arXiv:2605.22593v1 Announce Type: new Abstract: While deep ensembles are widely considered to be the default method for uncertainty quantification in deep learning, their effectiveness for graph-structured data is often simply assumed based on successes in domains like computer vision. We investigate standard deep ensembles specifically for message-passing graph neural networks. Benchmarking across seven datasets representing varied tasks and complexities, we reveal that ensembles provide surprisingly little improvement over a single model. Instead, the observed marginal gains stem primarily from stabilizing optimization noise in point predictions rather than yielding meaningfully better uncertainty estimates. Through an aleatoric-epistemic decomposition, we identify epistemic collapse: independently trained networks consistently converge to overly similar predictions. Because disagreement is the fundamental mechanism through which ensembles capture epistemic uncertainty, this lack of diversity neutralizes their key advantage. Analyzing this phenomenon further, we suggest this collapse is driven by functional rather than weight-space convexity, where distinct parameter solutions induce almost identical behavior. Our results suggest that deep ensemble success does not seamlessly transfer to graph machine learning.

---

📖 [Read original article](https://arxiv.org/abs/2605.22593)