---
title: "Ada2MS: A Hybrid Optimization Algorithm Based on Exponential Mixing of Elementwise and Global Second-Moment Estimates"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20533"
author: "Meng Zhu, Quan Xiao, Weidong Min"
categories: ["cs.LG"]
---

arXiv:2605.20533v1 Announce Type: new Abstract: Optimization algorithms are core methods by which machine learning models iteratively minimize loss functions, update parameters, learn from data, and improve performance. Momentum SGD and AdamW represent two important optimization paradigms. AdamW produces stable updates and usually has strong robustness across training scenarios, but its generalization performance is sometimes weaker than that of momentum methods. Momentum SGD can often obtain better generalization after careful tuning, but it is more sensitive to gradient-scale variation and hyperparameter settings. To balance the strengths and weaknesses of the two paradigms, this paper proposes Ada2MS, an optimization algorithm that achieves a smooth transition between AdamW-like behavior and momentum-SGD-like behavior through continuous exponential interpolation between elementwise second-moment estimates and global second-moment estimates. On the visual tasks evaluated in this study, Ada2MS obtains competitive results under a unified optimizer-comparison protocol. The code will be released at https://github.com/mengzhu0308/Ada2MS

---

📖 [Read original article](https://arxiv.org/abs/2605.20533)