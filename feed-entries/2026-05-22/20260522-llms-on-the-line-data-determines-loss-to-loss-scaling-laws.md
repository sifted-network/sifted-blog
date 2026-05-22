---
title: "LLMs on the Line: Data Determines Loss-to-Loss Scaling Laws"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2502.12120"
author: "Prasanna Mayilvahanan, Thadd\\\"aus Wiedemer, Sayak Mallick, Matthias Bethge, Wieland Brendel"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2502.12120v3 Announce Type: replace-cross Abstract: Scaling laws guide the development of large language models (LLMs) by offering estimates for the optimal balance of model size, tokens, and compute. More recently, loss-to-loss scaling laws that relate losses across pretraining datasets and downstream tasks have emerged as a powerful tool for understanding and improving LLM performance and generalization. In this work, we investigate which factors most strongly influence loss-to-loss scaling. Our experiments reveal that the pretraining data determines the scaling trend. In contrast, model size, optimization hyperparameters, tokenizer and even significant architectural differences, such as between transformer-based models like Llama and state-space models like Mamba, generally have limited impact. Consequently, practitioners should carefully curate suitable pretraining datasets for optimal downstream performance, while architectures and other settings can be freely optimized for training efficiency.

---

📖 [Read original article](https://arxiv.org/abs/2502.12120)