---
title: "Pre-VLA: Preemptive Runtime Verification for Reliable Vision-Language-Action and World-Model Rollouts"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22446"
author: "Zhen Sun, Yongjian Guo, Haoran Sun, Luqiao Wang, Wei Lu, Jiachi Ji, Shengzhe Ji, Junwu Xiong, Zhijun Meng"
categories: ["cs.CV", "cs.AI", "cs.RO"]
---

arXiv:2605.22446v1 Announce Type: cross Abstract: While large vision-language-action (VLA) models and generative world models (WM) have advanced long-horizon embodied intelligence, their practical deployment remains challenged by uncertainty in learning-based action generation. Low-quality actions may cause physical failures during execution or lead to misleading world-model rollouts with redundant rendering costs. To address this issue, we propose Pre-VLA, a unified runtime verification architecture that performs preemptive action validity assessment before physical execution or world-model imagination. Pre-VLA leverages an efficient multimodal backbone with modality-aware pooling and a lightweight dual-branch head to predict both safety confidence and critic-derived advantage scores for candidate action chunks. To handle severe class imbalance and unstable boundary decisions, we train Pre-VLA with a multi-task objective combining Focal classification, advantage regression, and soft-threshold calibration. During deployment, a dual-mode preemptive resampling scheduler filters low-quality actions and triggers adaptive resampling under a limited computation budget. Experiments on the LIBERO benchmark show that Pre-VLA improves the average closed-loop success rate across four suites from 30.79\% to 37.62\% over RynnVLA-002, reduces task execution steps, achieves 183.9 ms average forward verification time per action chunk, and mitigates error accumulation in world-model rollouts.

---

📖 [Read original article](https://arxiv.org/abs/2605.22446)