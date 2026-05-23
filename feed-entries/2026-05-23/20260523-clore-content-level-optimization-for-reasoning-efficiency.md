---
title: "CLORE: Content-Level Optimization for Reasoning Efficiency"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22211"
author: "Yuyang Wu, Qiyao Xue, Guanxing Lu, Weichen Liu, Zihan Wang, Manling Li, Olexandr Isayev"
categories: ["cs.AI"]
---

arXiv:2605.22211v1 Announce Type: new Abstract: Reinforcement learning post-training has improved the reasoning ability of large language models, but often produces unnecessarily long, repetitive, or semantically opaque reasoning traces. Existing efficient reasoning methods mainly regulate response length through explicit budgets or length-aware rewards, leaving intermediate reasoning content weakly supervised. We propose CLORE, a content-level optimization framework that improves reasoning efficiency by editing correct on-policy rollouts. CLORE uses an external augmentation model to delete repetitive segments, illegible or task-irrelevant content, and superfluous reasoning after the solution is established, while preserving the final answer. The resulting augmented--original pairs are optimized with an auxiliary reference-free DPO objective alongside standard policy-gradient training. By restricting augmentation to correct trajectories and performing local deletion, CLORE keeps edited rollouts close to the policy distribution and mitigates off-policy mismatch. Experiments on DeepSeek-R1-Distill-Qwen-7B and Qwen2.5-Math-7B across five mathematical reasoning benchmarks show that CLORE improves the accuracy--efficiency trade-off and remains compatible with GRPO, DAPO, Training Efficient, and ThinkPrune. Content-level analyses further show that CLORE reduces repetitive reasoning, illegible content, and post-answer exploration, supporting content-level supervision as a complementary direction to length-level control.

---

📖 [Read original article](https://arxiv.org/abs/2605.22211)