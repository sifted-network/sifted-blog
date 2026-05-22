---
title: "DeFacto: Counterfactual Thinking with Images for Enforcing Evidence-Grounded and Faithful Reasoning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2509.20912"
author: "Tianrun Xu, Haoda Jing, Ye Li, Yuquan Wei, Jun Feng, Guanyu Chen, Haichuan Gao, Tianren Zhang, Feng Chen"
categories: ["cs.AI"]
---

arXiv:2509.20912v4 Announce Type: replace Abstract: Recent advances in multimodal language models (MLLMs) have made thinking with images a dominant paradigm for multimodal reasoning. However, existing methods still fail to ensure evidence-answer consistency, where correct answers must be supported by correct visual evidence. To address this issue, we propose DeFacto, a counterfactual reasoning framework that explicitly aligns visual evidence with final answers. Our approach integrates three complementary training paradigms: positive, counterfactual, and random-masking. We further develop a language-guided evidence construction pipeline that automatically localizes question-relevant regions and generates counterfactual variants, resulting in DeFacto-100K. Building on this dataset, we train MLLMs with GRPO-based reinforcement learning and design three complementary rewards to promote correct answering, structured reasoning, and consistent evidence selection. Moreover, we introduce DeFacto-1.5K, a human-annotated benchmark for systematically evaluating evidence-grounded consistency beyond answer accuracy. Experiments on diverse benchmarks demonstrate that DeFacto substantially improves both answer accuracy and evidence-answer consistency over strong baselines.

---

📖 [Read original article](https://arxiv.org/abs/2509.20912)