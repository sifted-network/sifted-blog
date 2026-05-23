---
title: "EmoTrack: Robust Depression Tracking from Counseling Transcripts across Session Regimes"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22286"
author: "Zhaomin Wu, Jiayi Li, Bingsheng He"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22286v1 Announce Type: cross Abstract: Text-based counseling is an important interface for AI mental-health support, where transcripts may be used to monitor depression severity and flag sessions requiring timely human review. However, robust PHQ-8 prediction across session regimes remains challenging: fine-tuning-based methods can exploit richer supervision but may generalize poorly under data scarcity, while prompt-based LLM methods are data-efficient but usually treat each transcript holistically and provide limited support for longitudinal context. We study robust depression tracking from counseling transcripts across single-session and multi-session regimes. We introduce LongCounsel, a multi-session counseling dataset with session-level PHQ-8 supervision for evaluating repeated-session tracking under partial symptom disclosure and cross-session continuity. We further propose EmoTrack, a PHQ-8 prediction framework that combines LLM-extracted clinical signals with frozen turn-level semantic embeddings and trains symptom-specific predictors over the resulting transcript representation. When prior sessions are available, EmoTrack can further incorporate them through compact cross-session memory. Experiments on LongCounsel and DAIC-WOZ show that EmoTrack achieves a clear gain on the real single-session benchmark, including a 13.5% relative MAE reduction over the strongest DAIC-WOZ baseline, and remains competitive with the strongest longitudinal baseline on LongCounsel.

---

📖 [Read original article](https://arxiv.org/abs/2605.22286)