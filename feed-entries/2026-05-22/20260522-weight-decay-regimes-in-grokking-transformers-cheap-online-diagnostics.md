---
title: "Weight Decay Regimes in Grokking Transformers: Cheap Online Diagnostics"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20441"
author: "Lucky Verma"
categories: ["cs.LG", "cs.AI", "cs.NE"]
---

arXiv:2605.20441v1 Announce Type: cross Abstract: Transformers trained on modular arithmetic exhibit sharp transitions between memorization, generalization, and collapse. We show that weight decay acts as a scalar empirical control parameter for these regimes, and introduce two cheap online diagnostics, mean pairwise attention-head cosine similarity and entropy standard deviation, that track training dynamics from attention activations alone and complement loss-landscape diagnostics at lower compute cost. Across eleven experimental conditions and three model scales (0.82M to 85M parameters), the weight-decay axis separates memorization, developmental grokking, and collapse. A near-transition logistic fit localizes the memorization-to-developmental boundary at $\lambda_c=0.0158$ (95% CI [0.0109, 0.0200], N=210); a power-law fit gives an empirical exponent $\nu=0.757$ (CI [0.725, 0.799]). Reference exponents $\nu=1/2$ and 3D Ising $\nu \approx 0.63$ lie outside this empirical CI under our four-bin grid, so we report $\nu$ as empirical and defer universality-class identification to denser finite-size-scaling work. A horizon-matched multi-task replication (n=280, four modular operations) preserves the weight-decay control pattern; a paired attention-head re-initialization experiment at $\lambda=0.05$ changes Phase-2 amplitude (Cohen's $d=-1.190$, n=10, $p_t=4.5 \times 10^{-3}$), while matched weight-norm clipping does not. Three cross-architecture probes (4L MLP, 4L LSTM, and 4L Mamba; each n=70) replicate the weight-decay-controlled transition with architecture-specific $\lambda_c$ values. Main diagnostic claims are scoped to modular arithmetic in small transformer attention models; the non-attention experiments are scope probes, and architecture-wide, language-model, and universality-class claims are out of scope.

---

📖 [Read original article](https://arxiv.org/abs/2605.20441)