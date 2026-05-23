---
title: "AutoRubric-T2I: Robust Rule-Based Reward Model for Text-to-Image Alignment"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.17602"
author: "Kuei-Chun Kao, Daixuan Huo, Yuanhao Ban, Cho-Jui Hsieh"
categories: ["cs.AI", "cs.CV", "cs.LG"]
---

arXiv:2605.17602v2 Announce Type: replace Abstract: Aligning Text-to-Image (T2I) generation models with human preferences increasingly relies on image reward models that score or rank generated images according to prompt alignment and perceptual quality. Existing reward models are commonly trained as Bradley-Terry (BT) preference models on large-scale human preference corpora, making them costly to train, difficult to adapt, and opaque in their evaluation criteria. Meanwhile, Vision-Language Model (VLM) judges can provide more fine-grained assessments through textual rubrics, but their manually designed or heuristically generated scoring rules may fail to reliably reflect human preferences. In this paper, we propose AutoRubric-T2I, the first rubric learning framework in T2I that automatically synthesizes and selects explicit rubrics for guiding VLM judges. AutoRubric-T2I first synthesizes reasoning traces from preference pairs into candidate rubrics, then uses a VLM judge to score paired images under each rubric, producing pairwise rubric-score differences for preference learning. To remove noisy and redundant rules, we further employ a $\ell_1$-Regularized Logistic Regression Refiner, which selects the Top-$N$ most discriminative rubrics. Extensive evaluations show that AutoRubric-T2I produces high-quality, interpretable reward signals using less than 0.01% of the annotated preference data, substantially reducing the need for large-scale reward-model training. On image reward benchmarks such as MMRB2, AutoRubric-T2I outperforms strong reward model baselines. We further validate AutoRubric-T2I as an RL reward on downstream T2I tasks, including TIIF and UniGenBench++, where it improves generation quality over scalar reward models using the Flow-GRPO pipeline on diffusion models.

---

📖 [Read original article](https://arxiv.org/abs/2605.17602)