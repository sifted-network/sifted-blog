---
title: "DySink: Dynamic Frame Sinks for Autoregressive Long Video Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21028"
author: "Bo Ye, Xinyu Cui, Jian Zhao, Tong Wei, Min-Ling Zhang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21028v1 Announce Type: cross Abstract: Autoregressive long video generation often adopts bounded-memory streaming for efficiency, typically combining local windows for short-term continuity with static early-frame sinks as long-range anchors. However, this fixed allocation keeps early frames cached even when the current visual state has substantially diverged from them, while discarding potentially more relevant intermediate history. As a result, the retained long-range context may become less adaptive and bias generation toward outdated cues; in severe cases, RoPE-induced phase re-alignment can homogenize inter-head attention and cause sink collapse, where content regresses toward sink frames. We propose DySink, a retrieval-based framework that maintains a compact memory bank and selects visually relevant historical frames as dynamic frame sinks. DySink couples adaptive retrieval with a sink anomaly gate, which detects excessive inter-head consensus over retrieved context and suppresses collapse-prone context. Experiments on minute-long videos show that DySink consistently improves dynamic degree over strong baselines while also achieving higher temporal quality. The code and model weights will be released at https://github.com/yebo0216best/DySink.

---

📖 [Read original article](https://arxiv.org/abs/2605.21028)