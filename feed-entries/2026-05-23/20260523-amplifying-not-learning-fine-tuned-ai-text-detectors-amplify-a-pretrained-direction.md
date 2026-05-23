---
title: "Amplifying, Not Learning: Fine-Tuned AI Text Detectors Amplify a Pretrained Direction"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21653"
author: "Alexander Smirnov"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.21653v1 Announce Type: cross Abstract: AI text detectors amplify a pretrained typicality axis; they do not construct an AI-vs-human boundary. On raw encoders before any task supervision, projecting onto centroid(AI)-centroid(HC3) achieves NYT-vs-HC3 AUROC 0.806/0.944/0.834 across three architectures (86-106% of the fine-tuned discrimination ceiling: on RoBERTa-base, raw projection exceeds fine-tuning); on RoBERTa-base, full fine-tuning reduces discrimination below raw on both fluent-formal populations tested. The same axis inverts on non-native ESL writing (AUROC 0.06-0.20) -- a falsifiable prediction unique to the typicality reading. A 24-example frozen probe matches full fine-tuning (0.900 vs 0.895). A closed-form Jacobian predictor parameterises axis-manipulating interventions with R^2 = 1.000 universal, lifts ELECTRA-CE deployment TPR from 0.000 to 0.904 at FPR = 1%, and transfers to three independently-trained third-party RoBERTa detectors at 16/16 oracle-equivalence (57% NYT-FPR reduction on the OpenAI detector). Scope: encoder family; mechanism magnitude HC3-anchored; population-level shared axis with per-text mechanisms varying across architectures. Three operationally distinct probes -- text-surface caps_rate residualisation, geometric signed-epsilon ablation, closed-form text-pair predictor -- agree at cos 0.74/0.81/1.00 across three architectures, confirming observer-invariance. Under matched-TPR-0.90 evaluation, the published intervention zoo (CC, dealign-f2c) is calibration-equivalent across 27 cells (|Delta AUROC| = 97% of the LoRA->full-FT bias gap on ELECTRA is calibration shift, not learned representation -- the central claim's prediction confirmed.

---

📖 [Read original article](https://arxiv.org/abs/2605.21653)