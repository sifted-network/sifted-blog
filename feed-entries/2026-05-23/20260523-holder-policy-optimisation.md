---
title: "Holder Policy Optimisation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.12058"
author: "Yuxiang Chen, Dingli Liang, Yihang Chen, Ziqin Gong, Chenyang Le, Zhaokai Wang, Jiachen Zhu, Lingyu Yang, Jianghao Lin, Weinan Zhang, Jun Wang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.12058v2 Announce Type: replace-cross Abstract: Group Relative Policy Optimisation (GRPO) enhances large language models by estimating advantages across a group of sampled trajectories. However, mapping these trajectory-level advantages to policy updates requires aggregating token-level probabilities within each sequence. Relying on a fixed aggregation mechanism for this step fundamentally limits the algorithm's adaptability. Empirically, we observe a critical trade-off: certain fixed aggregations frequently suffer from training collapse, while others fail to yield satisfactory performance. To resolve this, we propose \textbf{H\"{o}lderPO}, a generalised policy optimisation framework unifying token-level probability aggregation via the H\"{o}lder mean. By explicitly modulating the parameter $p$, our framework provides continuous control over the trade-off between gradient concentration and variance bounds. Theoretically, we prove that a larger $p$ concentrates the gradient to amplify sparse learning signals, whereas a smaller $p$ strictly bounds gradient variance. Because no static configuration can universally resolve this concentration-stability trade-off, we instantiate the framework with a dynamic annealing algorithm that progressively schedules $p$ across the training lifecycle. Extensive evaluations demonstrate superior stability and convergence over existing baselines. Specifically, our approach achieves a state-of-the-art average accuracy of $54.9\%$ across multiple mathematical benchmarks, yielding a substantial $7.2\%$ relative gain over standard GRPO and secures an exceptional $93.8\%$ success rate on ALFWorld.

---

📖 [Read original article](https://arxiv.org/abs/2605.12058)