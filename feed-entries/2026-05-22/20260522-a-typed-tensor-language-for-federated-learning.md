---
title: "A Typed Tensor Language for Federated Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21103"
author: "Theofilos Mailis, Kalliopi-Christina Despotidou, Konstantinos Filippopolitis, Yannis Foufoulas, Thanasis-Michail Karampatsis, Andreas Ktenidis, Evdokia Mailli, Theodore Papamarkou, Yannis Ioannidis"
categories: ["cs.LG"]
---

arXiv:2605.21103v1 Announce Type: new Abstract: Federated learning and analytics are often described as collections of separate protocols, even when they share the same mathematical form: client-local tensor computation, mergeable aggregation into shared state, and shared-only post-processing. We introduce a typed tensor language that formalizes this structure. The language distinguishes federated tensors, whose records are partitioned across clients along a tracked record axis, from shared tensors, which are available globally. Its semantics are defined by comparison with a virtual global tensor, used only as a reference object. The main result is a shared-state factorization theory. We show that typed one-round programs factor through fixed-dimensional shared state whose size is independent of the number of clients and records, computed from client-local tensor expressions and merged across clients. We also prove a converse representability result; factorizations whose encoders and decoders are expressible in the language are realized by typed one-round programs, and the correspondence extends to iterative programs whose cross-round state is shared. This gives a formal account of the computations in the language that can be expressed as encode, merge, and decode procedures. We then develop a differentiable fragment for learning. If a per-record loss and its per-record gradient are represented by client-local tensor expressions, the global gradient is represented by record-axis summation of the federated gradient tensor. This yields typed iterative programs for server-side gradient descent and shared-linear-algebra second-order updates. The framework characterizes a broad class of federated learning computations whose communication passes through fixed-dimensional shared state.

---

📖 [Read original article](https://arxiv.org/abs/2605.21103)