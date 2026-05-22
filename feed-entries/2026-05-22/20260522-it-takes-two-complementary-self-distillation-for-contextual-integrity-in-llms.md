---
title: "It Takes Two: Complementary Self-Distillation for Contextual Integrity in LLMs"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20258"
author: "Sangwoo Park, Woongyeong Yeo, Seanie Lee, Yumin Choi, Hyomin Lee, Kangsan Kim, Jinheon Baek, Seong Joon Oh, Sung Ju Hwang"
categories: ["cs.LG", "cs.AI", "cs.CR"]
---

arXiv:2605.20258v1 Announce Type: cross Abstract: Contextual Integrity (CI) defines privacy not merely as keeping information hidden, but as governing information flows according to the norms of a given context. As large language models are increasingly deployed as personal agents handling sensitive workflows, adhering to CI becomes critical. However, even frontier models remain unreliable in making disclosure decisions, and existing mitigation strategies often degrade underlying task performance. To overcome this privacy-utility trade-off, we propose SELFCI, a complementary self-distillation framework that decouples information suppression from task resolution. SELFCI jointly optimizes two independent reverse KL divergences over distinct teacher distributions derived from feedback: one encourages preserving task-relevant information for utility, while the other enforces minimal and appropriate disclosure. This complementary formulation induces a Product-of-Experts (PoE) target, aligning the policy with the intersection of capability and privacy requirements. Empirical evaluations demonstrate that SELFCI, without relying on costly external supervision, consistently outperforms competitive baselines such as online reinforcement learning algorithms (e.g., GRPO). These trends further extend to out-of-domain settings involving agentic workflows and accumulated private context, suggesting that SELFCI provides a practical path toward CI alignment.

---

📖 [Read original article](https://arxiv.org/abs/2605.20258)