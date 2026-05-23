---
title: "Can Transformers Learn to Verify During Backtracking Search?"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22221"
author: "Yin Jun Phua, Tony Ribeiro, Tuan Nguyen, Katsumi Inoue"
categories: ["cs.LG", "cs.AI", "cs.LO"]
---

arXiv:2605.22221v1 Announce Type: cross Abstract: Backtracking search underlies classical constraint solvers, planners, and theorem provers. Recent transformer-based reasoning systems explore search trees over their own intermediate steps. A common training recipe fits an autoregressive next-token loss on offline solver traces. The model's input at each step is a cumulative trace of all prior decisions. The optimal continue-or-backtrack predictor depends only on the current search state, since two trajectories reaching the same state admit the same viable continuations. We show that decoder-only transformers trained on cumulative traces fail this requirement in two ways: the trace can scatter state features across many positions (scattered retrieval), and the predictor can condition on the trajectory rather than the state (history entanglement). We address scattered retrieval with localization, a trace-level fix that rewrites each decision block to expose state features locally. We address history entanglement with Selective State Attention (SSA), a fixed attention mask that enforces state-based decisions structurally without modifying training data, objective, or parameters. We focus on reactive verification, after propagation has exposed a contradiction. We test SSA on 3-SAT, graph coloring, Blocks World, and backtracking parsing. On same-state pairs that differ only in prior history, SSA emits identical decisions while a cumulative-trained causal baseline does not. Our contribution is a diagnostic of transformer behavior on serialized trajectory data, paired with a structural fix. Pretrained language models that search over their own reasoning steps may face the same failure. Our analysis opens up inference-time context clearing as a candidate way to apply the same isolation without retraining.

---

📖 [Read original article](https://arxiv.org/abs/2605.22221)