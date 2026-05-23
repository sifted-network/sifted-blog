---
title: "Swift Sampling: Selecting Temporal Surprises via Taylor Series"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22678"
author: "Dahye Kim, Bhuvan Sachdeva, Karan Uppal, Naman Gupta, Vineeth N. Balasubramanian, Deepti Ghadiyaram"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22678v1 Announce Type: cross Abstract: While most frames in long-form video are redundant, the critical information resides in temporal surprises: moments where the actual visual features deviate from their predicted evolution. Inspired by the human brain's predictive coding, we introduce Swift Sampling, an elegant, training-free frame selection algorithm that automatically identifies high-information moments in a video. Specifically, we model a video as a differentiable trajectory in the visual latent space and compute the velocity and acceleration of its features. Then, we apply Taylor expansion to project the expected path of subsequent frames. Frames that diverge sharply from this predicted manifold are identified as temporally surprising frames and selected for sampling. Unlike prior training-free methods that rely on auxiliary networks or video-specific hyperparameter tuning, Swift Sampling is incredibly lightweight, adding only 0.02x additional computational cost over baseline making it 30x cheaper overhead than leading baselines. Across three long-video question answering benchmarks and 10 different downstream tasks, Swift Sampling outperforms uniform sampling and prior query-agnostic baselines. It is especially powerful for long videos with limited frame budgets improving accuracy by up to +12.5 points.

---

📖 [Read original article](https://arxiv.org/abs/2605.22678)