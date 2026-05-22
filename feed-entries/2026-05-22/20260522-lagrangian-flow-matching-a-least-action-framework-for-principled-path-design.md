---
title: "Lagrangian Flow Matching: A Least-Action Framework for Principled Path Design"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.15419"
author: "Shukai Du, Junzhe Zhang, Yiming Li"
categories: ["cs.LG"]
---

arXiv:2605.15419v2 Announce Type: replace Abstract: Flow matching trains a neural velocity field by regression against a target velocity associated with a prescribed probability path connecting a simple initial distribution to the data distribution. A central design choice is the path itself. Existing constructions, including rectified and optimal-transport-based paths, transport samples along straight lines between coupled endpoints and thus cover only a narrow class of dynamics. We observe that this corresponds to the simplest case of the least-action principle in classical mechanics, in which the kinetic Lagrangian yields free-particle straight-line trajectories. Building on this observation, we propose Lagrangian flow matching, a physics-based framework in which the probability path and velocity field are determined by minimizing the action of a general Lagrangian subject to the continuity equation and the prescribed endpoints. We show that this dynamic problem admits an equivalent static optimal transport (OT) formulation, yielding a family of simulation-free training objectives that recover OT-based flow matching as the kinetic special case and the trigonometric variance-preserving diffusion path as the harmonic-oscillator case. More general Lagrangians give rise to new probability paths and velocity fields, and numerical experiments show that they induce meaningful changes in the learned dynamics while remaining competitive with existing conditional flow matching models.

---

📖 [Read original article](https://arxiv.org/abs/2605.15419)