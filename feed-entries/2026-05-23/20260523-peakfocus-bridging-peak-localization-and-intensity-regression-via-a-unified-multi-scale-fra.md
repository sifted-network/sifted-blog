---
title: "PeakFocus: Bridging Peak Localization and Intensity Regression via a Unified Multi-Scale Framework for Electricity Load Forecasting"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21550"
author: "Wangzhi Yu, Peng Zhu, Qing Zhao, Yiwen Jiang, Dawei Cheng"
categories: ["cs.LG"]
---

arXiv:2605.21550v1 Announce Type: new Abstract: Electricity load peak forecasting (ELPF), simultaneously predicting peak timing and intensity, is a prerequisite for effective grid scheduling and risk management. However, existing methods face three limitations. First, they adopt a two-stage predict-then-locate paradigm, which severs the link between temporal localization and intensity regression. Second, they still struggle with the multi-scale representation conflict, leading to peak misjudgment and timing misalignment. Third, the lack of explicit peak timing context during intensity regression causes intensity smoothing because predictions are dominated by global smoothing trends. To address these limitations, we propose PeakFocus, a unified framework for ELPF. (i) A Unified Peak-Aware Pipeline (UPAP) utilizes a triple hybrid loss to jointly supervise temporal localization and intensity regression, alongside a tolerance-based evaluation protocol. (ii) A Multi-Scale Mixing Peak Locator (MSM-PL) exploits coarse-grained features to mitigate peak misjudgment caused by local fluctuations, and injects them into fine-grained features via a cascade mechanism to resolve timing misalignment. (iii) A Location-Aware Decoder (LAD) injects peak timing context into the intensity regression process, providing explicit guidance to counteract intensity smoothing and improve peak intensity estimation. Extensive experiments on the public Electricity (ELC) dataset and our industrial-scale World Large-scale Electricity Load (WLEL) dataset show that PeakFocus outperforms baselines in both timing precision and intensity estimation.

---

📖 [Read original article](https://arxiv.org/abs/2605.21550)