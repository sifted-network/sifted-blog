---
title: "SiameseNorm: Breaking the Barrier to Reconciling Pre/Post-Norm"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.08064"
author: "Tianyu Li, Dongchen Han, Zixuan Cao, Haofeng Huang, Mengyu Zhou, Ming Chen, Erchao Zhao, Xiaoxi Jiang, Guanjun Jiang, Gao Huang"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2602.08064v2 Announce Type: replace-cross Abstract: The long-standing tension between Pre- and Post-Norm remains an open problem in Transformer architecture, reflecting a fundamental trade-off between training stability and representational capacity. Prior attempts to combine their strengths have made progress, but often show limited robustness across training settings, restricting their broader applicability. We revisit this dilemma, showing that single-stream architectures struggle to reconcile Pre-Norm's stable identity-gradient propagation with Post-Norm's normalization of the main residual path. To address this structural tension, we propose SiameseNorm, a simple yet effective two-stream architecture that remains compatible with Pre-Norm training recipes. SiameseNorm couples Pre-Norm-like and Post-Norm-like streams through shared residual blocks, allowing each residual block to receive optimization signals from both pathways with negligible overhead. Extensive experiments on 400M and 1.3B dense language models, 15B MoE models, Vision Transformers, and Diffusion Transformers show that SiameseNorm consistently improves performance while maintaining strong training stability across architectures and modalities. Code is available at https://github.com/Qwen-Applications/SiameseNorm.

---

📖 [Read original article](https://arxiv.org/abs/2602.08064)