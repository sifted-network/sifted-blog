---
title: "EnCAgg: Enhanced Clustering Aggregation for Robust Federated Learning against Dynamic Model Poisoning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22506"
author: "Tianyun Zhang, Zhen Yang, Haozhao Wang, Ru Zhang, Yongfeng Huang"
categories: ["cs.CR", "cs.LG"]
---

arXiv:2605.22506v1 Announce Type: cross Abstract: Federated learning faces increasing threats from model poisoning attacks, which harms its application to improve privacy. Existing defense methods typically rely on fixed thresholds or perform clustering with a fixed number of clusters to distinguish malicious gradients from benign ones. However, these methods are difficult to adapt to dynamic poisoning strategies of malicious clients, and often result in the loss of benign gradients due to the heterogeneity of clients' local datasets. To address these problems, we propose a novel robust aggregation method that leverages a small number of known benign clients as references, enabling accurate identification and filtering of malicious gradients while retaining as many benign gradients as possible, even when the number of malicious clients is unknown and variable. First, we introduce a density-based low-dimensional gradient clustering method, which projects gradients onto the two most divergent dimensions and applies density-based clustering to identify malicious gradients while retaining clustered benign gradients and potentially benign outliers. Second, we design an enhancing clustering low-dimensional gradient generator model, which learns to generate pseudo-gradients aligned with the boundary of the benign cluster. These pseudo-gradients act as bridges to connect sparse benign gradient outliers. Third, we introduce low-dimensional gradient re-clustering that clusters the generated pseudo-gradients together with real gradients to recover benign gradients misclassified as noise points, enabling more benign gradients to participate in aggregation. Extensive experiments on the MNIST, CIFAR-10, and MIND datasets demonstrate that our method exhibits superior fidelity and robustness under dynamic poisoning scenarios.

---

📖 [Read original article](https://arxiv.org/abs/2605.22506)