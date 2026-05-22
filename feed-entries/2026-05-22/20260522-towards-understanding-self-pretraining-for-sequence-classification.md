---
title: "Towards Understanding Self-Pretraining for Sequence Classification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21070"
author: "Omar Coser, Loredana Zollo, Paolo Soda, Antonio Orvieto"
categories: ["cs.LG"]
---

arXiv:2605.21070v1 Announce Type: new Abstract: Amos et al. (2024) showed that the accuracy of Transformer models in sequence classification can be significantly improved by first pretraining with a masked token prediction objective without external data or augmentation, a procedure referred to as self-pretraining (SPT). While the primary objective of Amos et al. (2024) was to showcase that Transformers can achieve strong performance on the Long-Range Arena (LRA), their pipeline raises more fundamental questions: How does SPT drive optimization to better solutions? Why can standard supervised training fail in Transformers? To better understand this, we replicate and systematically ablate the findings of Amos et al. (2024). Our ablations suggest that a central bottleneck in the studied settings is not depth or generalization alone, but the ability of label supervision to learn useful query-key Attention patterns from random initialization. With a minimal setup, we identify learning proximity interactions - turning absolute positional encodings into proximity-biased Attention scores - as a key source of the improvements brought by SPT. Finally, in a simplified theoretical setup, we show that label supervision can be locally blind to certain Attention-score directions that are instead detectable through masked reconstruction.

---

📖 [Read original article](https://arxiv.org/abs/2605.21070)