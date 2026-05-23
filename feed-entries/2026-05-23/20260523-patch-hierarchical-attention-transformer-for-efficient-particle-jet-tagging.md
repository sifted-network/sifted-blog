---
title: "Patch Hierarchical Attention Transformer for Efficient Particle Jet Tagging"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21789"
author: "Aaron Wang, Zihan Zhao, Alan Xia, Chang Sun, Abhijith Gandrakota, Jennifer Ngadiuba, Richard Cavanaugh, Javier Duarte"
categories: ["hep-ex", "cs.AI"]
---

arXiv:2605.21789v1 Announce Type: cross Abstract: Real-time jet tagging is critical for identifying short-lived particle decays in the high-throughput detectors of the Large Hadron Collider, where real-time trigger systems responsible for deciding which collision events to store impose strict latency and accuracy constraints. While transformer architectures achieve the highest jet tagging accuracy when compute is unconstrained, their quadratic self-attention cost makes inference restrictive on trigger budget. Existing efficient variants reduce the computational cost, but hinder the classification performance. To address this limitation, we introduce the Patch Hierarchical Attention Transformer (PHAT-JeT), which combines two mechanisms: a physics-inspired geometric message-passing module that encodes local detector-plane structure, and a hierarchical patch-based attention scheme that computes exact attention within small particle groups while preserving global context through lightweight patch-token communication. Within a restricted budget, PHAT-JeT achieves state-of-the-art accuracy and background rejection among all resource-constrained jet tagging models on four benchmarks (\textsc{hls4ml}, JetClass, Top Tagging, and Quark--Gluon). Our code is available at https://github.com/aaronw5/PHAT-JeT.

---

📖 [Read original article](https://arxiv.org/abs/2605.21789)