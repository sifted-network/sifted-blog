---
title: "ZeroUnlearn: Few-Shot Knowledge Unlearning in Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.18879"
author: "Yujie Lin, Chengyi Yang, Zhishang Xiang, Yiping Song, Jinsong Su"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.18879v2 Announce Type: replace-cross Abstract: Large language models inevitably retain sensitive information, defined as inputs that may induce harmful generations, due to training on massive web corpora, raising concerns for privacy and safety. Existing machine unlearning methods primarily rely on retraining or aggressive fine-tuning, which are either computationally expensive or prone to degrading related knowledge and overall model utility. In this work, we reformulate machine unlearning as a precise knowledge re-mapping problem via model editing. We propose ZeroUnlearn, a few-shot unlearning framework. It overwrites sensitive inputs by mapping them to a neutral target state and removing their original representations. ZeroUnlearn enforces representational orthogonality through a multiplicative parameter update with a closed-form solution, enabling efficient and targeted unlearning. We further extend ZeroUnlearn to a gradient-based variant for multi-sample unlearning. Experiments demonstrate that our approach outperforms existing baselines while preserving general model utility. Our code is available at the github: https://github.com/XMUDeepLIT/ZeroUnlearn.

---

📖 [Read original article](https://arxiv.org/abs/2605.18879)