---
title: "DASH: Fast Differentiable Architecture Search for Hybrid Attention in Minutes on a Single GPU"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20936"
author: "Weizhe Chen, Miao Zhang, Junpeng Jiang, Yaping Li, Weili Guan, Liqiang Nie"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.20936v1 Announce Type: cross Abstract: Hybrid attention architectures are becoming an increasingly important paradigm for improving LLM inference efficiency while preserving model quality, making hybrid architecture design a central problem. Existing designs often rely on manual empirical rules or proxy-based selector signals for layer-wise operator allocation. Recent NAS-style systems such as Jet-Nemotron demonstrate the promise of automated hybrid architecture search. However, Jet-Nemotron's PostNAS search stages alone use 200B tokens, making such search pipelines difficult to use as routine methods for hybrid architecture design. We introduce DASH, a fast differentiable search framework for hybrid attention architecture design, which relaxes discrete layer-wise attention operator placement into continuous architecture logits, prepares reusable teacher-aligned linear candidates, and performs architecture-only search with model and operator weights frozen to significantly enhance search efficiency. On Qwen2.5-3B-Instruct, DASH consistently outperforms a comprehensive suite of existing selector-style hybrid attention design baselines, showing that direct differentiable search can discover stronger hybrid architectures. Moreover, DASH achieves stronger RULER performance than released Jet-Nemotron models while remaining competitive on overlapping short-context and general benchmarks. Notably, each DASH search run uses only 12.3M tokens and takes about 20 minutes on a single RTX Pro 6000 GPU, corresponding to merely 0.006% of the PostNAS search tokens reported by Jet-Nemotron. These results suggest that high-quality hybrid attention architectures can be obtained through minutes-level differentiable search, providing a promising direction for hybrid architecture design.

---

📖 [Read original article](https://arxiv.org/abs/2605.20936)