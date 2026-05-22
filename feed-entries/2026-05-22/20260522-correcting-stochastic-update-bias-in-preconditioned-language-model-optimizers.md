---
title: "Correcting Stochastic Update Bias in Preconditioned Language Model Optimizers"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20756"
author: "Nikhil Nayak, Julia White, Urchade Zaratiana, Kelton Zhang, Henrijs Princis, Dhruv Atreja, Henry Fawcett, Matthew Thomas, George Hurn-Maloney, Ash Lewis"
categories: ["cs.LG", "cs.AI", "math.OC", "stat.ML"]
---

arXiv:2605.20756v1 Announce Type: cross Abstract: Preconditioned optimizers are central to language model training, but their stochastic update rules are usually treated as direct approximations to population preconditioned descent. We show that this view misses two finite-sample biases. First, the gradient and preconditioner are typically estimated from the same minibatch, introducing gradient--preconditioner coupling bias. Second, even when the preconditioner estimate is unbiased, its inverse or inverse-root is generally biased because inversion is nonlinear. We propose a single-batch bias-correction framework that addresses both effects: cross-fitted preconditioning estimates the numerator and preconditioner from independent microbatch groups, while variance-corrected inversion uses microbatch variability to subtract the leading delta-method bias term. The framework applies to diagonal moment, diagonal curvature, and matrix preconditioning methods, instantiated in AdamW, Sophia, and Shampoo. Bias correction reduces held-out pretraining loss on Qwen2.5-0.5B by $0.15$, $0.07$, and $0.11$ nats, respectively; the effects on mixed-quality pretraining and downstream instruction tuning are consistently neutral-to-positive. Together, these results establish bias correction as a practical mechanism for reducing finite-sample update bias and improving the performance of preconditioned optimizers.

---

📖 [Read original article](https://arxiv.org/abs/2605.20756)