---
title: "Partial Fusion of Neural Networks: Efficient Tradeoffs Between Ensembles and Weight Aggregation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22350"
author: "Fabian Morelli, Stephan Eckstein"
categories: ["cs.LG"]
---

arXiv:2605.22350v1 Announce Type: new Abstract: Ensembles of neural networks typically outperform individual networks but incur large computational costs, whereas weight aggregation produces less costly, yet also less accurate, aggregate models. We introduce partial fusion of networks, which interpolates between ensembles and weight aggregation and thus allows for a flexible tradeoff between computational cost and performance. A direct way to achieve this is to extend existing weight aggregation methods based on neuron-level similarity between different networks, where partial fusion then only aggregates weights of neurons which are most similar. We showcase one particular method to jointly identify which neurons are most similar and match them via partial optimal transport. Further, we consider the more general perspective of weight aggregation and partial fusion as generalized pruning of ensemble models, where neurons cannot just be deleted, but also linearly combined. Finally, we show that generalized pruning applied to a single network yields similar benefits as partial fusion by allowing for a tradeoff between isolating, deleting, and linearly combining neurons based on similarity. Our code is available at https://github.com/Fabian-Mor/partial_fusion_nn.

---

📖 [Read original article](https://arxiv.org/abs/2605.22350)