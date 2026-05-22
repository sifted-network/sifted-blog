---
title: "Distribution-Aware Reward: Reinforcement Learning over Predictive Distributions for LLM Regression"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20740"
author: "Jungsoo Park, Hyungjoo Chae, Ethan Mendes, Jay DeYoung, Varsha Kishore, Wei Xu, Alan Ritter"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.20740v1 Announce Type: cross Abstract: Large language models can predict real-valued quantities from heterogeneous inputs such as text, code, and molecular strings, but most training objectives score each decoded floating-point number independently, improving point estimates without ensuring calibrated predictive distributions. This limits applications requiring candidate ranking or uncertainty estimation. We introduce Distribution-Aware Reward, an on-policy reinforcement learning objective whose main contribution is to train language models to produce better predictive distributions for regression tasks, rather than only optimizing individual decoded outputs against scalar targets. Our method treats multiple decoded samples as an empirical predictive distribution, evaluates it with the Continuous Ranked Probability Score, and assigns leave-one-out credit based on each rollout's marginal contribution to distribution quality, rewarding predictions that are both accurate and appropriately dispersed. We evaluate our method on a controlled Gaussian-mixture task, code performance prediction, and molecular property prediction from SMILES strings. Across tasks, our method improves over supervised fine-tuning and pointwise reinforcement learning baselines, with strong rank-correlation gains, including a 6-point Spearman improvement on KBSS. On MoleculeNet, it uses only SMILES strings yet remains competitive with strong graph-based and 3D molecular models. Further analyses show that our method mitigates rollout diversity collapse and improves uncertainty diagnostics, suggesting that directly optimizing predictive distributions makes language model regression more robust and better calibrated.

---

📖 [Read original article](https://arxiv.org/abs/2605.20740)