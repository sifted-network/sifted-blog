---
title: "Divide and Contrast: Learning Robust Temporal Features without Augmentation"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21241"
author: "Abdul-Kazeem Shamba, Kerstin Bach, Gavin Taylor"
categories: ["cs.LG"]
---

arXiv:2605.21241v1 Announce Type: new Abstract: Self-supervised learning for time-series representation aims to reduce reliance on labeled data while maintaining strong downstream performance, yet many existing approaches incur high computational costs or rely on assumptions that do not hold across diverse temporal dynamics. In this work, we introduce Divide and Contrast (Di-COT), an unsupervised framework that avoids data augmentation and multiple encoder passes by contrasting informative substructures within a window rather than individual timesteps. Di-COT stochastically partitions each window into a small number of overlapping sub-blocks per iteration, enabling efficient and meaningful contrast while mitigating false positives during temporal transitions. To further improve scalability, we adopt a contrastive objective whose computation depends on the batch size and the number of sub-blocks, making loss computation independent of sequence length. Extensive experiments on six large-scale real-world datasets, as well as the UCR and UEA benchmarks, demonstrate that Di-COT learns semantically structured and transferable representations, achieving state-of-the-art performance on classification, clustering, $k$NN, and cross-dataset transfer, while substantially reducing training time. The source code is publicly available at https://github.com/sfi-norwai/Di-COT.

---

📖 [Read original article](https://arxiv.org/abs/2605.21241)