---
title: "The Hidden Signal of Verifier Strictness: Controlling and Improving Step-Wise Verification via Selective Latent Steering"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20745"
author: "Yefan Zhou, Yilun Zhou, Austin Xu, Soroush Vosoughi, Shafiq Joty, Jiang Gui"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.20745v1 Announce Type: cross Abstract: Generative verifiers have emerged as a promising paradigm for step-wise verification, but their verification behavior is often poorly calibrated: they may be under-critical and miss erroneous steps, or over-critical and reject correct reasoning. We refer to this tendency to be overly lenient or overly critical as verifier strictness. In this work, we study whether verifier strictness can be controlled through hidden-state intervention. We uncover a verification-specific hidden-state signal: in step-wise verification, a verifier's tendency to accept or reject a solution step is encoded near the boundary of the corresponding verification paragraph. Exploiting this signal, we show that hidden-state steering can directly modulate verifier strictness without fine-tuning. However, uniform steering induces a trade-off between error detection and correctness certification. To address this, we propose VerifySteer, which exploits latent correctness signals for sample-level routing and selectively intervenes on paragraph boundaries. Experiments on ProcessBench and Hard2Verify show that VerifySteer outperforms prompt optimization and activation steering baselines, and is competitive with self-consistency while requiring 4-7x less inference compute. VerifySteer is also complementary to verification fine-tuning, providing further gains on top of fine-tuned verifiers. The code is available at https://github.com/YefanZhou/VerifySteer.

---

📖 [Read original article](https://arxiv.org/abs/2605.20745)