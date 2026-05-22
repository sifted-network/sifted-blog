---
title: "Federated LoRA Fine-Tuning for LLMs via Collaborative Alignment"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21217"
author: "Shuaida He, Liwen Chen, Long Feng"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.21217v1 Announce Type: cross Abstract: Low-rank adaptation (LoRA) has emerged as a powerful tool for parameter-efficient fine-tuning of large language models (LLMs). This paper studies LoRA under a federated learning setting, enabling collaborative fine-tuning across clients while preserving parameter efficiency. We focus on a highly heterogeneous regime in which clients share only partial structure and a substantial subset may be contaminated. We propose Collaborative Low-rank Alignment and Identifiable Recovery (CLAIR), a contamination-aware framework that relies only on preliminary local estimators. Its formulation applies broadly, from linear regression to neural network and LLM modules, whenever local adaptation can be represented by matrix-valued updates. CLAIR recovers the shared LoRA subspace and detects contaminated clients via a structured low-rank plus block-sparse decomposition. We prove exact recovery of the shared LoRA subspace in the noiseless case, stable recovery under preliminary estimation error, and consistent collaborative-set recovery under mild separation conditions. We further quantify the gain from CLAIR refinement: it reduces off-subspace estimation error through cross-client averaging while preserving client-specific variation within the shared LoRA subspace, thus improves over local fine-tuning whenever this oracle gain outweighs the costs of subspace estimation and benign-client heterogeneity. Empirically, we demonstrate the benefits of CLAIR by fine-tuning a Transformer architecture on a text-copying task. The results show accurate contamination detection and improved benign-client performance compared with local fine-tuning and non-robust federated averaging.

---

📖 [Read original article](https://arxiv.org/abs/2605.21217)