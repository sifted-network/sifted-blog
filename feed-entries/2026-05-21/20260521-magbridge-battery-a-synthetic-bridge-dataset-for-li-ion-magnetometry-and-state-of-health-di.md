---
title: "MagBridge-Battery: A Synthetic Bridge Dataset for Li-ion Magnetometry and State-of-Health Diagnostics"
date: "2026-05-21"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20240"
author: "Sakthi Prabhu Gunasekar, Prasanna Kumar Rangarajan"
categories: ["cs.LG"]
---

arXiv:2605.20240v1 Announce Type: new Abstract: Battery health diagnostics today rely overwhelmingly on electrochemical signals measured at the cell terminals. A parallel literature has shown that magnetic sensing can resolve information that terminal-only measurements miss, but method development is limited by the absence, to the best of our knowledge, of public battery magnetic-measurement datasets paired with degradation labels. We release MagBridge-Battery v1.0, a synthetic dataset of 6,760 magnetic-field signatures that bridges real magnetic morphology from the Mohammadi-Jerschow Open Science Framework (OSF) archive with state-of-health (SOH) labels from the PulseBat dataset. The release contains 5,600 PulseBat-conditioned grounded samples, 600 synthetic sensor-anomaly samples derived from clean parents, and 560 low-voltage Regime-B extrapolation samples. A cell-disjoint, parent-child-leakage-free primary benchmark split is verified to contain zero overlapping cells, zero cross-split parent-child pairs, and zero sample-ID overlap. We define three primary benchmark tasks: SOH regression, second-life classification, and anomaly detection, plus an auxiliary anomaly-subtype classification task. A controlled label-shuffle ablation collapses SOH regression from R^2 approximately 0.77 to approximately 0, confirming that the bridge encodes input SOH non-trivially rather than producing label-aligned artifacts. The dataset is released on Zenodo under CC-BY-4.0, and the bridge code and benchmark suite are released under Apache-2.0. This work provides a public benchmark for magnetic-sensing battery diagnostics while paired magnetic-electrochemical measurements remain scarce.

---

📖 [Read original article](https://arxiv.org/abs/2605.20240)