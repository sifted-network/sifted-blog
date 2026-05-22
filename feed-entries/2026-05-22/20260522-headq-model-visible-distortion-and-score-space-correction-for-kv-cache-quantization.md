---
title: "HeadQ: Model-Visible Distortion and Score-Space Correction for KV-Cache Quantization"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.03562"
author: "Jorge L. Ruiz Williams"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.03562v3 Announce Type: replace-cross Abstract: KV-cache quantizers usually optimize storage-space reconstruction, even though attention reads keys through logits and values through attention-weighted readout. We argue that persistent cache error should be measured in model-visible coordinates. For keys, the visible object is score error modulo constant shifts; this yields HeadQ, a key-side method that stores a low-rank residual side code in a calibration-learned query basis and applies it as an additive logit correction. For values, fixed-attention readout gives an $A^2$-weighted token-distortion surrogate. Across six models, Fisher/score-space error predicts attention KL far better than raw key MSE; same-budget counterexamples, null-space interventions, query-PCA controls, and wrong-sign HeadQ falsify storage-MSE alternatives. Matched Pythia checkpoints localize the main anomaly to a small-model low-entropy route-flip boundary. In K-only WikiText-103 decode experiments with dense values, HeadQ removes roughly $84$--$94\%$ of the excess perplexity on the strongest 2-bit rows; in an auxiliary full-KV 2-bit composition, HeadQ plus an $A^2$ value policy improves all six models.

---

📖 [Read original article](https://arxiv.org/abs/2605.03562)