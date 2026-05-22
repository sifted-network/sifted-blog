---
title: "Oracle Supervision Transfers for Hyperparameter Prediction in Model-Based Image Denoising"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20479"
author: "Jianmin Liao, Lixin Shen, Yuesheng Xu"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20479v1 Announce Type: cross Abstract: Hyperparameter prediction is a critical practical bottleneck for model-based image denoisers, ranging from classical TV/TGV variational solvers to modern diffusion-based models such as DiffPIR. While existing learned predictors can achieve near-oracle performance, this approach scales poorly: each new configuration conventionally requires its own oracle-labeled training set, and each label requires a hierarchical grid search evaluated against clean ground truth. We therefore ask whether oracle supervision collected on source configurations can transfer to target configurations with few or no target oracle labels. We propose HyperDn, a single configuration-conditioned predictor that pools oracle supervision across source configurations and predicts heterogeneous hyperparameters for new denoiser--noise configurations. In a cross-paradigm experiment, HyperDn transfers from relatively cheap TV/TGV variational sources to more expensive diffusion-based DiffPIR. With only $2$ target oracle labels, it reaches $30.23$\,dB, within $0.90$\,dB of the oracle, and outperforms the $64$-label per-configuration predictor trained from scratch, using $1/32$ as many target labels as that baseline point. Without any target oracle labels, HyperDn also reaches near-oracle PSNR on two unseen mixtures of seen noise types and on transfer from relatively cheap $96\times 96$ source images to $512\times 768$ targets. Together, these results show that expensive oracle supervision for hyperparameter prediction can be transferred from source to new target configurations, reducing the need to rebuild oracle labels for each new denoising configuration.

---

📖 [Read original article](https://arxiv.org/abs/2605.20479)