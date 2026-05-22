---
title: "Q-SYNTH: Hybrid Quantum-Classical Adversarial Augmentation for Imbalanced Fraud Detection"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21164"
author: "Adam Innan, Mansour El Alami, Nouhaila Innan, Muhammad Shafique, Mohamed Bennai"
categories: ["cs.LG", "quant-ph"]
---

arXiv:2605.21164v1 Announce Type: new Abstract: Credit card fraud detection is fundamentally challenged by extreme class imbalance, where fraudulent transactions are rare yet operationally critical. This imbalance often biases supervised learners toward the legitimate class, leading to high overall accuracy but weaker fraud-class recall and F1-score. This paper introduces Q-SYNTH, a hybrid classical--quantum generative adversarial framework in which a parameterized quantum circuit serves as the generator and a classical neural network serves as the discriminator. Q-SYNTH is designed for minority-class fraud synthesis in tabular data and is evaluated along two dimensions: statistical fidelity to real fraud samples and downstream performance for fraud detection. To this end, generated samples are assessed using distributional similarity measures based on Kolmogorov-Smirnov statistics and Wasserstein distances, real-vs-synthetic detectability measured by AUC-ROC, and downstream classification performance across both quantum and classical classifiers. Under the reported protocol, Q-SYNTH reduces marginal distribution mismatch relative to a classical GAN baseline while maintaining competitive downstream fraud-detection performance. Although SMOTE achieves the strongest feature-wise similarity and the classical GAN attains the highest downstream performance in several settings, Q-SYNTH offers a favorable compromise between distributional fidelity and downstream performance, supporting the feasibility of hybrid quantum augmentation for imbalanced fraud detection.

---

📖 [Read original article](https://arxiv.org/abs/2605.21164)