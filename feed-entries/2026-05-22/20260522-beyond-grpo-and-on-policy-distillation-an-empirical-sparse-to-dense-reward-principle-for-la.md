---
title: "Beyond GRPO and On-Policy Distillation: An Empirical Sparse-to-Dense Reward Principle for Language-Model Post-Training"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12483"
author: "Yuanda Xu, Hejian Sang, Zhengze Zhou, Ran He, Zhipeng Wang, Alborz Geramifard"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.12483v4 Announce Type: replace-cross Abstract: In settings where labeled verifiable training data is the binding constraint, each checked example should be allocated to the model and reward density where it is most informative. We identify a reward-density principle that governs this allocation: sparse sequence-level reward is most useful on models that can explore and discover better behavior, while dense token-level teacher supervision is better suited for compressing that behavior into a smaller deployment model. The principle yields a simple allocation rule: use scarce labeled data upstream on the strongest available teacher, then transfer the reward-shaped behavior downstream as dense supervision. We evaluate this rule through a four-stage workflow -- teacher RL, forward-KL warmup, on-policy distillation, optional post-bridge student RL -- on verifiable math with Qwen3 and Llama models. At fixed Qwen3-1.7B deployment-student size, an RL-improved 8B teacher distilled through the dense bridge outperforms direct GRPO on the same student ($79.3\%$ vs.\ $75.9\%$ on MATH; $25.2\%$ vs.\ $19.8\%$ on AIME~2024, avg@16), while transfer from the same teacher \emph{before} RL underperforms. A component ablation confirms that each stage is load-bearing: replacing the RL-improved teacher with a raw teacher costs $7.8$ MATH points, removing the forward-KL warmup costs $1.7$, and removing on-policy distillation costs $3.3$. The teacher-quality ordering -- raw-teacher transfer $<$ direct GRPO $<$ RL-teacher transfer -- replicates on Llama-3.1-8B-Instruct with a Llama-3.3-70B-Instruct teacher. The operational lesson is to avoid spending scarce labeled data on the least prepared policy: use sparse reward for teacher-side discovery, dense transfer for student compression, and student-side sparse reward only after the bridge.

---

📖 [Read original article](https://arxiv.org/abs/2605.12483)