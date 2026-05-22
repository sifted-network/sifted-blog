---
title: "Less Data, Faster Training: repeating smaller datasets speeds up learning via sampling biases"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20314"
author: "Jingwen Liu, Ezra Edelman, Surbhi Goel, Bingbin Liu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20314v1 Announce Type: cross Abstract: This work investigates the ``small-vs-large gap'', where repeating on fewer samples can lead to compute saving during training compared to using a larger dataset. This is observed across algorithmic tasks, architectures and optimizers and cannot be explained using prior theory. We argue that the speedup comes from appropriate layer-wise growth enabled by sampling biases, which is more pronounced when the dataset size is smaller. We provide both theoretical analysis and empirical evidence from various interventions. Our results suggest that using a smaller dataset with more repetitions is not just a fallback strategy under data scarcity, but can be proactively leveraged as a favorable inductive biases for optimization, particularly in reasoning tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.20314)