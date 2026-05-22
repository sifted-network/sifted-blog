---
title: "SDM: A Powerful Tool for Evaluating Model Robustness"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20308"
author: "Xinlei Liu, Tao Hu, Jichao Xie, Peng Yi, Hailong Ma, Baolin Li"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2605.20308v1 Announce Type: cross Abstract: Gradient-based attacks are important methods for evaluating model robustness. However, since the proposal of APGD, it has been difficult for such methods to achieve significant breakthroughs. To achieve such an effect, we first analyze the issue of "high-loss non-adversarial examples" that degrades attack performance in previous methods, and prove that this issue arises from inappropriate objectives for adversarial example generation. Subsequently, we reconstruct the objective as "maximizing the difference between the non-ground-truth label probability upper bound and the ground-truth label probability", and proposes a novel and powerful gradient-based attack method named Sequential Difference Maximization (SDM). SDM establishes a three-layer optimization framework of "cycle-stage-step". It adopts the negative probability loss function and the Directional Probability Difference Ratio (DPDR) loss function in the initial and subsequent optimization stages, respectively, and approaches the ideal objective of adversarial example generation via stage-wise sequential optimization. Experiments demonstrate that compared with previous state-of-the-art methods, SDM not only achieves stronger attack performance but also exhibits superior cost-effectiveness. The code is available at https://github.com/X-L-Liu/ICML-SDM.

---

📖 [Read original article](https://arxiv.org/abs/2605.20308)