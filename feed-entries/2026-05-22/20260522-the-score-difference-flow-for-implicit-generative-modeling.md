---
title: "The Score-Difference Flow for Implicit Generative Modeling"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2304.12906"
author: "Romann M. Weber"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2304.12906v5 Announce Type: replace Abstract: Implicit generative modeling (IGM) aims to produce samples of synthetic data matching the characteristics of a target data distribution. Recent work (e.g. score-matching networks, diffusion models) has approached the IGM problem from the perspective of pushing synthetic source data toward the target distribution via dynamical perturbations or flows in the ambient space. In this direction, we present the score difference (SD) between arbitrary target and source distributions as a flow that optimally reduces the Kullback-Leibler divergence between them. We apply the SD flow to convenient proxy distributions, which are aligned if and only if the original distributions are aligned. We demonstrate the formal equivalence of this formulation to denoising diffusion models under certain conditions. We also show that the training of generative adversarial networks includes a hidden data-optimization sub-problem, which induces the SD flow under certain choices of loss function when the discriminator is optimal. As a result, the SD flow provides a theoretical link between model classes that individually address the three challenges of the "generative modeling trilemma" -- high sample quality, mode coverage, and fast sampling -- thereby setting the stage for a unified approach.

---

📖 [Read original article](https://arxiv.org/abs/2304.12906)