---
title: "Decoupling Endpoint and Semantic Transition Learning for Zero-Shot Composed Image Retrieval"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.08389"
author: "Mingyu Liu, Sihan Huang, Yijia Fan, Yinlin Yan, Quan Zhang, Jian-Fang Hu, Jianhuang Lai"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.08389v2 Announce Type: replace-cross Abstract: Zero-shot composed image retrieval (ZS-CIR) retrieves a target image from a reference image and a text modification without human-annotated CIR triplets. Projection-based ZS-CIR methods are attractive because they do not rely on LLMs at inference and remain lightweight, but they often underperform LLM-based approaches on complex semantic modifications. This gap reflects a semantic transition bottleneck in projection-based ZS-CIR: endpoint-level matching can let the edit text act as a target-side attribute cue rather than grounding it as a source-conditioned semantic transition. We further show that adding semantic transition supervision to the same text adapter creates an endpoint--transition conflict between endpoint alignment and semantic transition alignment. To address this conflict, DeCIR decouples endpoint and transition learning. It constructs paired forward/reverse edit tuples from image-caption pairs, trains separate low-rank text adapter branches for endpoint alignment and semantic transition alignment, and merges them with Low-Rank Directional Merge (LRDM) into one deployable adapter. Extensive experiments on CIRR, CIRCO, FashionIQ, and GeneCIS demonstrate that DeCIR consistently improves projection-based ZS-CIR without increasing inference complexity.

---

📖 [Read original article](https://arxiv.org/abs/2605.08389)