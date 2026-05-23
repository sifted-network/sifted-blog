---
title: "TimeGuard: Channel-wise Pool Training for Backdoor Defense in Time Series Forecasting"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22365"
author: "Quang Duc Nguyen, Siyuan Liang, Yiming Li, Fushuo Huo, Dacheng Tao"
categories: ["cs.CR", "cs.AI", "cs.LG"]
---

arXiv:2605.22365v1 Announce Type: cross Abstract: Time Series Forecasting (TSF) plays a critical role across many domains, yet it is vulnerable to backdoor attacks. However, backdoor defenses tailored to TSF remain underexplored, due to data entanglement and task-formulation shift challenges. To fill this gap, we conduct a systematic evaluation of thirteen representative backdoor defenses across the TSF life cycle and analyze their failure modes. Our results reveal two fundamental issues: (1) data entanglement induces channel-level signal dilution, rendering sample-filtering and trigger-synthesis defenses ineffective at localizing backdoors; and (2) task-formulation shift leads to training-loss degeneration, causing poisoned and clean windows to become indistinguishable at training stages. Based on these findings, we propose a training-time backdoor defense for TSF, termed TimeGuard. Our method adopts channel-wise pool training as the core paradigm and initializes a high-confidence pool using time-aware criteria to mitigate signal dilution. Moreover, we introduce distance-regularized loss selection to progressively expand the reliable pool during training and ease loss degeneration. Extensive experiments across multiple datasets, forecasting architectures, and TSF backdoor attacks demonstrate that TimeGuard substantially improves robustness, boosting $\mathrm{MAE}_\mathrm{P}$ by $1.96\times$ over the leading baseline, while preserving clean performance within 5% $\mathrm{MAE}_\mathrm{C}$.

---

📖 [Read original article](https://arxiv.org/abs/2605.22365)