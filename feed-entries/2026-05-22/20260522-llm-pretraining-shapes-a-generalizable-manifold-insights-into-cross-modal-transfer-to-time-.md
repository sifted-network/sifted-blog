---
title: "LLM Pretraining Shapes a Generalizable Manifold: Insights into Cross-Modal Transfer to Time Series"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20449"
author: "Alexis Roger, Prateek Humane, Zhenghan Tai, Gwen Legate, Andrei Mircea, Vasilii Feofanov, Irina Rish"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20449v1 Announce Type: cross Abstract: Can language-pretrained transformers become effective time-series forecasters, and why? In this paper, we show that cross-modal transfer arises because language pretraining preconditions time series training with a reusable manifold. A linear probe on frozen LLM states decodes realistic time-series trajectories without paired supervision, and retrieval in this projected space yields competitive forecasts, showing that structure and dynamics exist before finetuning. Pretrained initialization also improves optimization, producing coherent gradients and a highly anisotropic loss landscape unlike random initialization. Finetuning then acts as low-dimensional alignment, reusing existing directions rather than learning temporal primitives from scratch, as evidenced by low-rank updates, subspace alignment, and shared features for periodicity, trend, and repetition. Together, these results support a geometric account of LLM-to-time-series transfer: language pretraining builds the manifold, and finetuning projects numerical dynamics onto task-relevant directions.

---

📖 [Read original article](https://arxiv.org/abs/2605.20449)