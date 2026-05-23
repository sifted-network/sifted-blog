---
title: "Understanding Multimodal Failure in Action-Chunking Behavioral Cloning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22493"
author: "Lorenzo Mazza, Massimiliano Datres, Ariel Rodriguez, Sebastian Bodenstedt, Gitta Kutyniok, Stefanie Speidel"
categories: ["cs.LG", "cs.AI", "cs.RO"]
---

arXiv:2605.22493v1 Announce Type: cross Abstract: Behavioral cloning becomes difficult when the same observation admits several valid actions. We study this problem for action-chunking policies and show that different multimodal parameterizations fail in different ways. For latent-variable policies, posterior-prior regularization makes deployment-time sampling more reliable, but excessive regularization removes the action-conditioned information needed to distinguish demonstrated modes. Reducing this regularization can preserve mode information, but then success depends on whether the prior covers the relevant latent regions. For action-space generative policies, multimodality is constrained by the smoothness of the base-to-action transport: a map with small Lipschitz constant cannot assign substantial probability to many well-separated modes. Covering many modes therefore requires either sharp transitions in base space or off-support bridge regions in action space. Experiments on synthetic multimodal tasks and robotic simulation benchmarks support these mechanisms.

---

📖 [Read original article](https://arxiv.org/abs/2605.22493)