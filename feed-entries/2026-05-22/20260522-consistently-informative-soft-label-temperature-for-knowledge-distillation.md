---
title: "Consistently Informative Soft-Label Temperature for Knowledge Distillation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20357"
author: "Hoang-Chau Luong, Nghia Van Vo, Kaiqi Zhao, Lingwei Chen"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20357v1 Announce Type: cross Abstract: Knowledge distillation (KD) transfers knowledge from a high-capacity teacher to a compact student by matching their predictive distributions, with temperature scaling serving as a central mechanism for smoothing teacher predictions and exposing informative "dark knowledge" beyond the hard label. However, the standard fixed-temperature design is inherently sample-agnostic. Since samples differ in logit scale and learning difficulty, a single global temperature produces teacher soft labels with highly inconsistent entropy: some predictions remain overly sharp and provide limited inter-class information, whereas others become over-smoothed and lose class-discriminative information. Moreover, sharing the same temperature between teacher and student further imposes rigid logit-scale alignment despite their capacity mismatch. To address these limitations, we propose CIST (Consistently Informative Soft-label Temperature), which assigns separate sample-wise adaptive temperatures to the teacher and student. This design produces consistently informative teacher soft labels while relaxing rigid teacher--student logit-scale matching. It also reweights the distillation objective according to teacher confidence and student learning difficulty. Theoretically, we show that teacher-label entropy is largely governed by the ratio between the maximum teacher logit and the temperature, providing a principled basis for adaptive smoothing. Empirically, CIST mitigates the inconsistency induced by fixed temperature, and experiments on both vision and language distillation tasks show consistent improvements over standard KD and strong baselines with negligible computational overhead.

---

📖 [Read original article](https://arxiv.org/abs/2605.20357)