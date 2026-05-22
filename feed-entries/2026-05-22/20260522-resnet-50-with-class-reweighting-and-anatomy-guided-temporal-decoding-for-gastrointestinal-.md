---
title: "ResNet-50 with Class Reweighting and Anatomy-Guided Temporal Decoding for Gastrointestinal Video Analysis"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.17784"
author: "Romil Imtiaz, Dimitris K. Iakovidis"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2603.17784v2 Announce Type: replace-cross Abstract: We developed a multi-label gastrointestinal video analysis pipeline based on a ResNet-50 frame classifier followed by anatomy-guided temporal event decoding. The system predicts 17 labels, including 5 anatomy classes and 12 pathology classes, from frames resized to 336x336. A major challenge was severe class imbalance, particularly for rare pathology labels. To address this, we used clipped class-wise positive weighting in the training loss, which improved rare-class learning while maintaining stable optimization. At the temporal stage, we found that direct frame-to-event conversion produced fragmented mismatches with the official ground truth. The final submission therefore combined GT-style framewise event composition, anatomy vote smoothing, and anatomy-based pathology gating with a conservative hysteresis decoder. This design improved the final temporal mAP from 0.3801 to 0.4303 on the challenge test set.

---

📖 [Read original article](https://arxiv.org/abs/2603.17784)