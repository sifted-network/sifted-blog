---
title: "Matryoshka Concept Bottleneck Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20612"
author: "Ziye Chen, Hongbin Lin, Xinyue Xu, Jie Li, Lijie Hu"
categories: ["cs.LG"]
---

arXiv:2605.20612v1 Announce Type: new Abstract: Concept Bottleneck Models (CBMs) have emerged as a prominent paradigm for interpretable deep learning, learning by grounding predictions in human-understandable concepts. However, their practical deployment is hindered by the high cost of test-time intervention, as correcting model errors typically requires human experts to manually inspect and verify a large set of predicted concepts. Existing approaches suffer from a fundamental structural limitation: they either adopt a single static concept set, forcing experts to exhaustively annotate concepts and incurring prohibitive intervention costs, or train multiple models tailored to different concept budgets, resulting in substantial computational and maintenance overhead. To address this challenge, we propose the Matryoshka Concept Bottleneck Model (MCBM), a unified architecture that enables adaptive concept utilization within a single model. Inspired by Matryoshka Representation Learning, MCBM organizes concepts into a nested hierarchy based on maximum relevance and minimum redundancy, allowing inference at multiple levels of conceptual granularity without retraining. Theoretically, we show that MCBM reduces the expected intervention costs from linear to logarithmic order, $O(\log K)$, while guaranteeing monotonic performance improvement. Empirically, extensive experiments demonstrate that MCBM matches the performance of independently trained models while enabling dynamic and efficient expert interaction.

---

📖 [Read original article](https://arxiv.org/abs/2605.20612)