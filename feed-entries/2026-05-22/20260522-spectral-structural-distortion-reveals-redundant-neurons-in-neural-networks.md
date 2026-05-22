---
title: "Spectral structural distortion reveals redundant neurons in neural networks"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.18860"
author: "Yongyu Wang"
categories: ["cs.LG", "cs.CV"]
---

arXiv:2605.18860v2 Announce Type: replace Abstract: Overparameterized neural networks often contain many removable neurons, yet what makes a neuron redundant remains poorly understood. Existing pruning criteria commonly rely on local quantities such as weight magnitude, activation strength, or gradient sensitivity, but these measures provide limited insight into the structural role of a neuron in the transformation performed by a layer. Here we show that neuronal redundancy can be characterized by weak participation in the spectral structural distortion induced by layer-wise representation transformations. For each hidden layer of a trained network, we record pre-activation and post-activation hidden states, model neurons as graph nodes, and construct input-side and output-side graphs that describe neuron-level relational structure before and after the layer transformation. We then define a spectral structural importance score that measures the contribution of each neuron to the dominant graph-spectral distortion between these two relational structures. Low-participation neurons are treated as structurally redundant and removed through an iterative pruning process in which scores are recomputed after each structural change. No parameter updates are performed during intermediate pruning rounds; after the target parameter reduction is reached, a single recovery fine-tuning stage is applied to the compact model. Direct ablation analysis and experiments across conventional neural networks, encoder-only Transformers, and decoder-only language models show that this graph-spectral criterion identifies removable neurons and Transformer units while preserving task performance after compression. These results suggest that neural redundancy is not merely a consequence of small weights or weak activations, but can be understood through weak participation in the spectral distortion of layer-wise relational structure.

---

📖 [Read original article](https://arxiv.org/abs/2605.18860)