---
title: "When to Re-Commit: Temporal Abstraction Discovery for Long-Horizon Vision-Language Reasoning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.09860"
author: "Chen Li, Zhantao Yang, Fangyi Chen, Han Zhang, Anudeepsekhar Bolimera, Marios Savvides"
categories: ["cs.AI"]
---

arXiv:2605.09860v3 Announce Type: replace Abstract: Long-horizon reasoning requires deciding not only what actions to take, but how deeply to commit before the next observation. We formalize this as \emph{commitment depth}: the number of primitive actions executed open-loop between replans. Commitment depth induces a trade-off between replanning cost and compounding execution error, yet most existing long-horizon systems fix it as a hand-designed scalar. In this work, we instead treat commitment depth as a learnable, state-conditioned variable of the policy itself. We instantiate this within a model-native vision--language policy that jointly predicts both what to execute and for how long. Across Sliding Puzzle and Sokoban, the resulting adaptive policy Pareto-dominates every non-degenerate fixed-depth baseline, achieving up to 12.5 percentage points higher solve rate while using approximately 25\% fewer primitive actions per episode. Despite using a 7B backbone, our method outperforms GPT-5.5 and Claude Sonnet on both tasks, while every tested open-weight vision--language model achieves 0\% zero-shot success. We further present a theoretical analysis showing that, under the standard commitment-depth surrogate, state-conditioned commitment strictly dominates any fixed depth whenever the locally optimal depth varies across states.

---

📖 [Read original article](https://arxiv.org/abs/2605.09860)