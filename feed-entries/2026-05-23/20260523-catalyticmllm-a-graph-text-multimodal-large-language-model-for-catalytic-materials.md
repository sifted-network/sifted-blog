---
title: "CatalyticMLLM: A Graph-Text Multimodal Large Language Model for Catalytic Materials"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.17254"
author: "Yanjie Li, Jian Xu, Xu-Yao Zhang, Shiming Xiang, Nian Ran, Weijun Li, Cheng-Lin Liu"
categories: ["cs.AI"]
---

arXiv:2605.17254v2 Announce Type: replace Abstract: Property prediction and inverse structural design of catalytic materials are typically modeled as two independent tasks: the former predicts target properties from given structures, whereas the latter generates candidate structures according to desired properties. Although the decoupled paradigm facilitates the implementation of a ``generation--evaluation--screening'' workflow, the inconsistency between the generative model and the property prediction model in terms of representation spaces and training objectives can readily introduce data distribution shifts and evaluator bias, thereby limiting the stability of closed-loop optimization. In this work, we propose QE-Catalytic-V2, a unified graph--text multimodal large language model for catalytic materials, which integrates property prediction and inverse design within the same model and shared representation space. Under this unified framework, QE-Catalytic-V2 can not only perform reliable property prediction by leveraging three-dimensional structures and textual information, but also generate and screen physically feasible CIF candidates conditioned on target properties, thereby forming a closed-loop optimization workflow of ``inverse design--prediction--screening--redesign.'' Experimental results demonstrate that this unified paradigm outperforms decoupled baselines on both catalytic relaxed-energy prediction and inverse design tasks, validating the effectiveness of jointly modeling property prediction and structure generation within a single multimodal model.

---

📖 [Read original article](https://arxiv.org/abs/2605.17254)