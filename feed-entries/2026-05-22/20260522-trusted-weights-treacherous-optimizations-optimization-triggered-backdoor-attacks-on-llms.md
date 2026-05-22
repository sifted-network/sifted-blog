---
title: "Trusted Weights, Treacherous Optimizations? Optimization-Triggered Backdoor Attacks on LLMs"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20641"
author: "Yifei Wang, Tianlin Li, Xiaohan Zhang, Yida Yang, Xiaoyu Zhang, Li Pan"
categories: ["cs.CR", "cs.AI", "cs.LG"]
---

arXiv:2605.20641v1 Announce Type: cross Abstract: Inference optimization is a vital technique for deploying LLMs at scale. Compilation is the most widely adopted optimization technique for LLMs. While it assumes semantic equivalence between the original and compiled graphs, we first uncover its numerical side effects can be maliciously exploited to implant stealthy backdoors in LLMs. We propose a unified optimization-triggered attack framework comprising two complementary strategies. Without any modification to the compiler or hardware, one strategy flips predictions for specific inputs only when the model is compiled, while the other uses a universal trigger that remains dormant under uncompiled execution but hijacks arbitrary inputs once compilation optimization is applied. Both attacks bypass standard safety evaluations run without compilation. We empirically demonstrate that these optimization-triggered backdoors achieve attack success rates averaging 90% across four mainstream open-source LLMs and four tasks, while clean accuracy is preserved at nearly 100% under all settings. Our findings reveal a novel attack surface at the intersection of optimization and security in the LLM deployment pipeline, and we investigate practical defenses to mitigate this threat.

---

📖 [Read original article](https://arxiv.org/abs/2605.20641)