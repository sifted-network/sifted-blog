---
title: "Prototype-Guided Classification Sub-Task Decoupling Framework: Enhancing Generalization and Interpretability for Multivariate Time Series"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22055"
author: "Xianhao Song, Yuang Zhang, Yuqi She, Liping Wang, Xuemin Lin"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22055v1 Announce Type: cross Abstract: Time Series Classification (TSC) is a long-standing research problem that has gained increasing attention in recent years with the rapid growth of large-scale temporal data. Despite substantial progress enabled by deep learning, designing TSC models that are both accurate and interpretable remains a challenging task. Many existing approaches adopt a direct feature-to-label classification paradigm, by collapsing high-dimensional temporal embeddings into class logits via a single linear projection (often after global pooling), the paradigm conflates feature extraction and decision logic into an inseparable mapping. To address these limitations, we propose PDFTime, a prototype-guided framework that reformulates time series classification as a multi-stage decision process. Instead of direct feature-to-label mapping, PDFTime leverages learned prototypes to approximate class-conditional feature distributions in the latent space, enabling progressive discrimination through classification sub-tasks of varying granularity. To our knowledge, PDFTime is the first framework to reformulate time series classification as a decoupled, multi-stage similarity-based reasoning process, breaking the long-standing paradigm of direct, black-box feature-to-label mapping. Extensive evaluations demonstrate that PDFTime achieves state-of-the-art (SOTA) performance across UEA and UCR benchmarks. Notably, it secures the top-$1$ accuracy on 80 out of 128 datasets in the UCR archive, significantly outperforming recent strong baselines in both consistency and generalization.

---

📖 [Read original article](https://arxiv.org/abs/2605.22055)