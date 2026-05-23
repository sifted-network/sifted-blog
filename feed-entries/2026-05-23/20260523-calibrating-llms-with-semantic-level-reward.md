---
title: "Calibrating LLMs with Semantic-level Reward"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.15588"
author: "Fengfei Yu, Ruijia Niu, Dongxia Wu, Yian Ma, Rose Yu"
categories: ["cs.CL", "cs.LG"]
---

arXiv:2605.15588v2 Announce Type: replace-cross Abstract: As large language models (LLMs) are deployed in consequential settings such as medical question answering and legal reasoning, the ability to estimate when their outputs are likely to be correct is essential for safe and reliable use, requiring well-calibrated uncertainty. Standard reinforcement learning with verifiable rewards (RLVR) trains models with a binary correctness reward that is indifferent to confidence, providing no penalty for confident but wrong predictions and thereby degrading calibration. Recent work addresses this by training models to produce verbalized confidence scores alongside answers and rewarding agreement with correctness. However, verbalized confidence is calibrated at the token level and thus exhibits inconsistency across textual variations with same semantic meaning. We propose \textbf{Calibration with Semantic Reward (CSR)}, a framework that calibrates language models directly in semantic space without a verbalized confidence interface. CSR combines the correctness reward with a novel semantic calibration reward that encourages exploitation among correct rollouts by promoting semantic agreement, and exploration among incorrect ones by discouraging spurious consistency. Experiments across three model families on HotpotQA (in-distribution) and TriviaQA, MSMARCO, and NQ-Open (out-of-distribution) show that CSR consistently achieves lower ECE and higher AUROC than verbalized-confidence baselines across nearly all settings, reducing ECE by up to $40\%$ and improving AUROC by up to $31\%$ over verbalized-confidence baselines, with calibration behavior generalizing robustly across all four evaluation settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.15588)