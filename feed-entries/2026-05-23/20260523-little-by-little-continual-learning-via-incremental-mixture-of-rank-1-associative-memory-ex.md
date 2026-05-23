---
title: "Little by Little: Continual Learning via Incremental Mixture of Rank-1 Associative Memory Experts"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2506.21035"
author: "Haodong Lu, Chongyang Zhao, Minhui Xue, Lina Yao, Kristen Moore, Dong Gong"
categories: ["cs.LG"]
---

arXiv:2506.21035v5 Announce Type: replace Abstract: Continual learning (CL) with large pre-trained models aims to incrementally acquire knowledge without catastrophic forgetting. Existing LoRA-based Mixture-of-Experts (MoE) methods expand capacity by adding isolated new experts while freezing old ones, but still suffer from redundancy, interference, routing ambiguity, and consequent forgetting. We investigate the issues stemming from coarse-grained expert granularity. Coarse-grained experts (e.g., high-rank LoRA) encode low-specialty information, leading to expert duplication/interference and routing degradation/confusion as experts accumulate. In this work, we propose MoRAM (Mixture of Rank-1 Associative Memory). Grounded in the view that weight matrices act as linear associative memories, MoRAM achieves CL as gradual incrementing of reusable atomic rank-1 experts as memory. Each rank-1 adapter acts as a fine-grained MoE expert or an associative memory unit. By viewing rank-1 adapters as key-value memory pairs, we eliminate explicit MoE-LoRA routers with self-activation, where each memory atom evaluates its relevance via its intrinsic key. The inference process thus becomes a robust, content-addressable retrieval over the incrementally accumulated memory. Extensive experiments on CLIP and LLMs show that MoRAM significantly outperforms state-of-the-art methods, achieving a better plasticity-stability trade-off, stronger generalization, and reduced forgetting. Project Page: https://artificer-ai-lab.github.io/MoRAM/.

---

📖 [Read original article](https://arxiv.org/abs/2506.21035)