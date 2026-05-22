---
title: "Sutra: Tensor-Op RNNs as a Compilation Target for Vector Symbolic Architectures"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20919"
author: "Emma Leonhart"
categories: ["cs.LG", "cs.AI", "cs.PL"]
---

arXiv:2605.20919v1 Announce Type: cross Abstract: Sutra is a typed, purely functional programming language whose compiled forward pass is a PyTorch neural network. The compiler beta-reduces the whole program -- primitives, control flow, string I/O -- to one fused tensor-op graph over a frozen embedding substrate. Rotation binding, unbind, bundle, polynomial Kleene three-valued logic, and tail-recursive loops all lower to tensor operations; the Kleene connectives are Lagrange-interpolated polynomials exact on the {-1, 0, +1} truth grid. Validation is one fact tested two ways. (1) The same program runs on four frozen embeddings spanning two modalities -- three text encoders (nomic-embed-text, all-minilm, mxbai-embed-large) and one protein language model (ESM-2) -- and decodes bundles at 100% accuracy through width k=8 on every substrate, where the textbook Hadamard product has already collapsed (2.5% on mxbai-embed-large, 7.5% on all-minilm). (2) PyTorch autograd flows through the actually compiled graph: a fuzzy-rule classifier written in .su trains from random init (18.7 +/- 9.5%; chance = 20%, five classes) to 100.0 +/- 0.0% (three seeds) by backpropagating through the emitted graph, the symbolic source unmodified. A weighted variant additionally trains a scalar cosine gain and writes it back into the .su source as a numeric literal; recompiling reproduces the trained behaviour to ~2e-7 per logit, so the trained model is itself legible, recompilable code. The same artifact is therefore both a logic program and a trainable neural network.

---

📖 [Read original article](https://arxiv.org/abs/2605.20919)