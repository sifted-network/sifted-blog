---
title: "On the Cost and Benefit of Chain of Thought: A Learning-Theoretic Perspective"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21260"
author: "Yue Zhang, Zhiyi Dong, Tommaso Cesari, Yongyi Mao"
categories: ["cs.LG"]
---

arXiv:2605.21260v1 Announce Type: new Abstract: We develop a learning-theoretic framework for understanding Chain of Thought (CoT). We model CoT as the interaction between an answer map and a chain rule that generates intermediate questions autoregressively, and define the reasoning risk of a hypothesis under this interaction. Our first result is a tight canonical decomposition of this risk into two terms with opposing roles: an oracle-trajectory risk (OTR), which captures the benefit of CoT and reduces to a target-domain risk in a domain adaptation problem, and a trajectory-mismatch risk (TMR), which captures the cost of CoT through error accumulation along mismatched reasoning trajectories. We then show that this cost is unavoidable without structure: if any one of the loss, the hypothesis answer map, or the chain rule lacks stability, the TMR can be arbitrarily large even when the OTR is zero and the hypothesis is uniformly close to the ground truth. Conversely, under stability, we prove a tight upper bound on the TMR governed by an exact amplification factor that identifies bounded, linear, and exponential error-growth regimes. Together, these results give a precise theory of when CoT helps, when it hurts, and what controls the transition between the two.

---

📖 [Read original article](https://arxiv.org/abs/2605.21260)