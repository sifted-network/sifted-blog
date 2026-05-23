---
title: "Unveiling the Reasoning Process of Large Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.29735"
author: "Junjie Zhang, Zhen Shen, Xisong Dong, Gang Xiong"
categories: ["cs.AI"]
---

arXiv:2603.29735v2 Announce Type: replace Abstract: Large language models often reason beyond surface tokens, but the internal stage at which token-level information becomes abstract relational structure remains unclear. We investigate this question by analyzing how attention heads and layers transform information during autoregressive reasoning. Across mathematical and symbolic reasoning tasks, we observe a consistent layer-wise division of labor: outer layers mainly preserve and route input-related features, whereas middle layers reorganize them into more transferable rule-level representations. This interpretation is supported by representation geometry: middle-layer states occupy lower-dimensional manifolds and show stronger alignment across disjoint vocabularies that instantiate the same symbolic rules. It is further supported by causal interventions: removing middle-layer components identified by our interaction-based criterion produces substantially larger downstream changes and accuracy drops than removing components from other regions or at random. Together, these results suggest that abstract reasoning is not uniformly distributed across transformer layers, but is preferentially formed in a middle-layer computation stage that converts token-level information into reusable relational structure.

---

📖 [Read original article](https://arxiv.org/abs/2603.29735)