---
title: "Beyond the Bellman Recursion: A Pontryagin-Guided Framework for Non-Exponential Discounting"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20996"
author: "Hojin Ko, Jeonggyu Huh"
categories: ["cs.LG", "math.OC"]
---

arXiv:2605.20996v1 Announce Type: new Abstract: Most value-based and actor--critic reinforcement learning methods rely on Bellman-style recursions, yet these recursions collapse under non-exponential discounting common in human preferences and survival processes. We show the breakdown is structural: exponential discounting sits at a fragile intersection of multiplicativity and time homogeneity, and violating either property breaks standard dynamic programming. To overcome this, we propose Pontryagin-Guided Direct Policy Optimization (PG-DPO), a variational framework that abandons recursion and couples the Pontryagin Maximum Principle with Monte Carlo rollouts via an Adjoint-MC projection enforcing pointwise Hamiltonian maximization. Across multi-dimensional hyperbolic and survival-discount benchmarks, PG-DPO improves accuracy and stability where equation-driven solvers and critic-based baselines diverge.

---

📖 [Read original article](https://arxiv.org/abs/2605.20996)