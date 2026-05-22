---
title: "Automated Kernel Discovery Towards Understanding High-dimensional Bayesian Optimization"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20249"
author: "Taeyoung Yun, Woocheol Shin, Inhyuck Song, Jaewoo Lee, Jinkyoo Park"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20249v1 Announce Type: cross Abstract: Gaussian Process (GP) kernels are central to Bayesian optimization (BO), yet designing effective kernels for high-dimensional problems still relies on extensive manual engineering. Existing automated approaches struggle in high dimensions for two bottlenecks: their kernel search space is limited to additions and multiplications of base kernels, and LLM-based approaches require conditioning on raw observations, which becomes infeasible due to context-length limits and the difficulty of extracting meaningful patterns. We introduce \textbf{Kernel Discovery}, a LLM-driven evolutionary framework for high-dimensional BO that searches a broader kernel space beyond predefined composition rules and does not require conditioning on observations. Motivated by the observation that directly prompting an LLM to generate kernel code yields syntactically varied but functionally identical kernels, we adopt a two-stage approach: an LLM first proposes novel mathematical forms, then a second LLM call converts each form into validated, executable code. We also propose a leave-one-out continuous ranked probability score (LOO-CRPS) as a selection criterion that penalizes overfitted kernels. On five high-dimensional BO benchmarks, our method achieves an average rank of \textbf{1.2 out of 17}, outperforming competitive baselines. We further analyze the discovered kernels to identify which kernels lead to improvements in high-dimensional BO.

---

📖 [Read original article](https://arxiv.org/abs/2605.20249)