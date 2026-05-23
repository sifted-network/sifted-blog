---
title: "Lumberjack: Better Differentially Private Random Forests through Heavy Hitter Detection in Trees"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22756"
author: "Christian Janos Lebeda, David Erb, Tudor Cebere, Aur\\'elien Bellet"
categories: ["cs.LG", "cs.DS"]
---

arXiv:2605.22756v1 Announce Type: new Abstract: Random forests are widely used in fields involving sensitive tabular data, but existing approaches to enforcing differential privacy (DP) typically degrade performance to the point of impracticality. In this paper, we introduce Lumberjack, a differentially private random forest algorithm that achieves substantially higher utility by constructing large random decision trees and then applying aggressive, privacy-preserving pruning to retain only sufficiently populated nodes. A key component of our approach is a novel $(\varepsilon,\delta)$-DP heavy hitter detection algorithm for hierarchical data, whose error is $O_{\varepsilon,\delta}(\sqrt{\log h})$ for trees of height $h$ and may be of independent interest. This favorable scaling enables the use of significantly deeper trees than in prior work, leading to improved expressiveness under privacy constraints. Our empirical evaluation on benchmark datasets shows that Lumberjack consistently outperforms prior DP random forest methods, establishing a new state of the art. In particular, our approach yields substantial improvements in the privacy-utility trade-off for practical privacy budgets. Our findings suggest that carefully designed DP random forests can close much of the utility gap, highlighting a promising and underexplored direction for future research.

---

📖 [Read original article](https://arxiv.org/abs/2605.22756)