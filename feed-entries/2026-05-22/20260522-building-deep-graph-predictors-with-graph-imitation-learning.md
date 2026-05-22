---
title: "Building Deep Graph Predictors with Graph Imitation Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.15133"
author: "Andr\\'e Eberhard, Gerhard Neumann, Pascal Friederich"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2601.15133v3 Announce Type: replace-cross Abstract: Recent years have seen substantial progress in neural generation of text, images, and audio, supported by mature training pipelines and large-scale optimization. For graphs, however, comparable progress has been more limited. We attribute this gap to graph-specific optimization and representation challenges that undermine the effectiveness of training neural networks with backpropagation and gradient descent. We argue that representing graphs on a fixed-size Euclidean grid, as is common in recently proposed models for supervised graph prediction, may not be the optimal choice in these settings. To support our view, we provide an analysis of neural graph generation methods and identify theoretical challenges that lead to pitfalls when training neural networks to produce graphs as their output. Motivated by this analysis, we introduce \textbf{GRA}ph~\textbf{I}mitation~\textbf{L}earning~(GRAIL), a framework for training neural networks in supervised settings in which the supervision signal is a graph. GRAIL generates graphs sequentially through a Markov decision process over embeddings of partial graphs, thereby avoiding the representation issues associated with fixed-size grid graph representations. We empirically show that GRAIL achieves competitive results on supervised graph prediction across a comprehensive suite of 18 benchmarks, matching or surpassing state-of-the-art methods in several settings.

---

📖 [Read original article](https://arxiv.org/abs/2601.15133)