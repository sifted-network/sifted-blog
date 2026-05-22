---
title: "Introspective X Training: Feedback Conditioning Improves Scaling Across all LLM Training Stages"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20285"
author: "Brandon Cui, Ximing Lu, Jaehun Jung, Syeda Nahida Akter, Hyunwoo Kim, Yuxiao Qu, David Acuna, Shrimai Prabhumoye, Yejin Choi, Prithviraj Ammanabrolu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20285v1 Announce Type: cross Abstract: We tackle the question of how to scale more efficiently across the many, ever-growing stages of current LLM training pipelines. Our guiding intuition stems from the fact that the dynamics of later stages of the pipeline, e.g. post-training, can be used to inform earlier stages such as pre-training. To this end, we propose Introspective Training (or IXT), inspired by offline reward-conditioned reinforcement learning and applicable to any stage of training. IXT uses a thinking reward model to annotate data with natural language critique based feedback, enabling quality aware training from the earliest stages of the pipeline. Models are then trained by prefix-conditioning the data with the generated feedback -- ensuring that not all tokens are treated equally starting much earlier in training than usual. Comprehensive experiments on 7.5-12B transformer-based dense LLMs trained from scratch all the way up to 18 Trillion tokens seen show that our method: bends scaling curves resulting in up to 2.8x more compute efficiency generally; and reaches performance levels unachievable for models trained otherwise in domains such as math and code.

---

📖 [Read original article](https://arxiv.org/abs/2605.20285)