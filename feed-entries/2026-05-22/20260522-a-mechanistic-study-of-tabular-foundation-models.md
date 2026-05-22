---
title: "A Mechanistic Study of Tabular Foundation Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21288"
author: "Marin Bilo\\v{s}, James T. Wilson, Anderson Schneider, Yuriy Nevmyvaka"
categories: ["cs.LG"]
---

arXiv:2605.21288v1 Announce Type: new Abstract: Tabular foundation models with different architectures converge in accuracy across a range of classification and regression tasks. This raises questions a leaderboard cannot answer: (i) whether the models execute the same in-context algorithm, (ii) where row, column, and class-permutation invariances originate, and (iii) how robust they are under perturbations engineered against the inferred mechanism. We characterize all three. The model families realize qualitatively distinct similarity-based readouts: from an attention-weighted vote over context labels to a class-conditional mean readout, each confirmed by causal intervention. We find that the representation collapse highlighted in prior work is not a practical concern for them. Each model's permutation invariances trace to specific positional parameters whose removal preserves accuracy and makes approximate invariance exact. Perturbations engineered against each readout reproduce predicted failure modes; hub and rank attacks isolate them from refit baselines. Together these results give a mechanistic account of contemporary tabular foundation models and identify which inductive biases govern both their accuracy and characteristic failures.

---

📖 [Read original article](https://arxiv.org/abs/2605.21288)