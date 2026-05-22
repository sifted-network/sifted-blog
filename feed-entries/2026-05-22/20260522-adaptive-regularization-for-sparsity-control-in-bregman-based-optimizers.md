---
title: "Adaptive Regularization for Sparsity Control in Bregman-Based Optimizers"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.07892"
author: "Ahmad Aloradi, Tim Roith, Emanu\\\"el A. P. Habets, Daniel Tenbrinck"
categories: ["cs.LG"]
---

arXiv:2605.07892v3 Announce Type: replace Abstract: Sparse training reduces the memory and computational costs of deep neural networks. However, sparse optimization methods, e.g., those adding an $\ell_1$ penalty, often control sparsity only indirectly through a regularization parameter $\lambda$, whose mapping to the final sparsity rate is non-trivial. In our experiments, we found this parameter sensitivity to be particularly pronounced for Bregman-based optimizers. Specifically, the two variants LinBreg and AdaBreg reach the same sparsity at $\lambda$ values that differ by up to two orders of magnitude, requiring expensive trial-and-error sweeps to achieve a user-specified sparsity. To address this, we propose an adaptive regularization scheme that updates $\lambda$ based on the difference between the model's current sparsity and the target sparsity. We analyze the resulting algorithm and evaluate it on automatic speaker verification with ECAPA-TDNN and ResNet34 on VoxCeleb and CNCeleb. The proposed method reliably achieves sparsity targets ranging between 75% and 99%. It also converges faster than the oracle-tuned non-adaptive baseline during early training and matches or surpasses its final performance in equal error rate. We further show that the adaptive scheme inherits key properties from its non-adaptive counterpart, including improved out-of-distribution robustness over the dense baselines.

---

📖 [Read original article](https://arxiv.org/abs/2605.07892)