---
title: "DualOptim+: Bridging Shared and Decoupled Optimizer States for Better Machine Unlearning in Large Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21539"
author: "Xuyang Zhong, Qizhang Li, Yiwen Guo, Chen Liu"
categories: ["cs.LG"]
---

arXiv:2605.21539v1 Announce Type: new Abstract: We propose DualOptim+, a novel optimization framework for improving machine unlearning in large language models. It introduces a base state to capture common representations shared by forgetting and retaining objectives and delta states to preserve objective-specific residuals. This architecture allows the optimizer to adaptively bridge shared and decoupled states based on the directional conflict between forgetting and retaining gradients. We further introduce DualOptim+ 8bit, a quantized variant that reduces memory overhead without compromising performance. Extensive experiments across fictitious and real-world unlearning, safety alignment, and multi-task learning tasks demonstrate that DualOptim+ consistently achieves a superior trade-off between different objectives. Codes are available at https://github.com/CityU-MLO/DualOptimPlus.

---

📖 [Read original article](https://arxiv.org/abs/2605.21539)