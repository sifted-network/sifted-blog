---
title: "Diagnosing Overhead in Dispatch Operations: Cross-architecture Observatory"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20982"
author: "Bole Ma, Jan Eitzinger, Harald Koestler, Gerhard Wellein"
categories: ["cs.DC", "cs.AI", "cs.LG"]
---

arXiv:2605.20982v1 Announce Type: cross Abstract: AlltoAll dispatch is the dominant bottleneck of MoE expert parallelism, and the interconnect community has responded with four families of mitigations: predictive sample placement, adaptive expert relayout, hierarchical collectives, and EP-aware topology. All four rest on two assumptions about the workload. The first is that routing imbalance is correctable by the system layer. The second is that the mock-token benchmarks evaluating them faithfully represent production routing. We introduce DODOCO to test both assumptions. We instrument five MoE checkpoints spanning five sequence-mixer designs (DeepSeek-V2-Lite MLA, DeepSeek-MoE-16B MHA, Qwen3-30B GQA, Nemotron-30B Mamba-2, Qwen3.5-35B GDN) under a 5 by 6 grid of data conditions plus a matched EP scan from 4 to 32 ranks on H100s; both assumptions fail. Scaling EP changes the per-expert max/mean token ratio by at most 5% within every architecture's measurable range: the straggler is intrinsic to the routing decision the model makes, not to how its experts land on ranks. Mock tokens overestimate routing Gini by up to a factor of 2.35 and fabricate a batch-size scaling trend that vanishes the moment real text replaces random IDs. A third pattern, unexpected, emerges from the same matrix: the five architectures cleave into two stable bands. MHA and Mamba-2 (data-resilient) drop to Gini 0.105 and 0.150 on wikitext. MLA and GDN (persistently concentrated) stay above 0.24 on every real-text condition and reach 0.29 to 0.38 on mock. GQA is the intermediate case. These bands, not the EP degree or the mock-data profile, are the right workload input to AlltoAll-aware interconnect and dispatch design.

---

📖 [Read original article](https://arxiv.org/abs/2605.20982)