---
title: "From Correlation to Cause: A Five-Stage Methodology for Feature Analysis in Transformer Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22462"
author: "Caleb Munigety"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.22462v1 Announce Type: cross Abstract: We propose a five-stage methodology for causal feature analysis in transformer language models (probe design, feature extraction, causal validation, robustness testing, and deployment integration) and demonstrate it end-to-end on GPT-2 small performing the Indirect Object Identification (IOI) task. Activation patching recovers the canonical IOI circuit (layer-9 head 9 alone gives recovery +1.02). A sparse autoencoder recovers per-name selective features with effect sizes of 30 to 50 activation units. Causal validation finds these features specifically but only partially causal: ablating fifteen of them leaves the model accurate on 98% of prompts. Two NLA-inspired evaluations strengthen this picture: the fifteen selective features explain only 31% of activation variance versus the SAE's 99.7%, and selectivity ratio anticorrelates with causal force (r = -0.56). Robustness testing under three distribution shifts finds that the circuit transfers cleanly but feature ablation effects degrade substantially, exposing a gap between detection robustness and causal robustness. A cost-based deployment evaluation (assumed $50/FN, $0.42/FP, 2% error rate) finds an optimal monitor configuration yielding $8.96 per 1000 queries against a $1000 baseline, a 99.1% saving. Optimal composition strategy varies with cost ratio and base rate. The conjunction of stages produces findings no single stage would.

---

📖 [Read original article](https://arxiv.org/abs/2605.22462)