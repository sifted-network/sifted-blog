---
title: "FLUID: From Ephemeral IDs to Multimodal Semantic Codes for Industrial-Scale Livestreaming Recommendation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21832"
author: "Xinhang Yuan, Zexi Huang, Anjia Cao, Xudong Lu, Zikai Wang, Penghao Zhou, Chang Liu, Wentao Guo, Qinglei Wang"
categories: ["cs.AI"]
---

arXiv:2605.21832v1 Announce Type: new Abstract: Modern recommender systems rely heavily on ID-based collaborative filtering: each item is represented by a unique ID embedding that accumulates collaborative signals from user interactions. Livestreaming recommendation, however, faces a unique challenge in this paradigm: a live room typically broadcasts for only tens of minutes, so its item ID remains poorly learned in a persistent cold-start state and ID-centric ranking models fail to generalize. We present FLUID, the first framework to fully retire the candidate-side item ID from a production-scale livestreaming ranker. FLUID couples a cross-domain multimodal encoder, jointly trained on short videos and livestreams to produce discrete hierarchical codes (LUCID), with a late-fusion, ID-free design that injects slice-level and room-level LUCID as independent tokens, stabilized by a staged warmup under online incremental training. Deployed on our industrial livestreaming recommenders with a cross-platform combined user base of over one billion globally, FLUID delivers significant online gains of +0.55% Quality Watch Duration, +2.05% Cold-Start Room Views, and +0.05% Active Hours.

---

📖 [Read original article](https://arxiv.org/abs/2605.21832)