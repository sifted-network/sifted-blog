---
title: "Data Scaling as Progressive Coverage of a Predictive Contribution Spectrum"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20196"
author: "Zihui Song, Shihao Ji, Hongxi Li, Shuaizhi Cheng, Chunlin Huang"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.20196v1 Announce Type: cross Abstract: We investigate the hypothesis that real-data scaling laws are governed by progressive coverage of a latent predictive contribution spectrum rather than by token-frequency tails alone. We work with a suffix-automaton representation of text corpora and define a data-intrinsic global-KL predictive contribution spectrum, in which each state contributes according to its empirical mass times its KL deviation from a global next-token baseline. Across 12 real corpora, the tail slope of this spectrum is already strongly correlated with the empirical data-scaling exponent of a fixed small GPT learner. We then go beyond slope correlation and define, for each training size N, an effective truncation rank K(N) by matching the observed excess loss to the residual tail mass of the prepared 1000k global-KL spectrum. Empirically, log K is close to linear in log N, with pooled R^2 about 0.96 for the raw spectrum and R^2 about 0.90 for the smoothed spectrum. These findings provide strong empirical support for a simple mechanism picture: training scale advances an effective frontier through a predictive state spectrum, and the residual tail mass of that spectrum tracks the remaining excess loss.

---

📖 [Read original article](https://arxiv.org/abs/2605.20196)