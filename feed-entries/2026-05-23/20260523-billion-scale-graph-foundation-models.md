---
title: "Billion-Scale Graph Foundation Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.04768"
author: "Maya Bechler-Speicher, Yoel Gottlieb, Andrey Isakov, David Abensur, Ami Tavory, Daniel Haimovich, Ido Guy, Udi Weinsberg"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2602.04768v2 Announce Type: replace-cross Abstract: Graph-structured data underpins many critical applications. While foundation models have transformed language and vision via large-scale pretraining and lightweight adaptation, extending this paradigm to general, real-world graphs is challenging. In this work, we present Graph Billion-Foundation-Fusion (GraphBFF): an end-to-end recipe for building billion-parameter Graph Foundation Models (GFMs) for large-scale heterogeneous graphs. Central to the recipe is the GraphBFF Transformer, a flexible and scalable architecture designed for practical billion-scale GFMs. Using the GraphBFF, we present neural scaling laws for heterogeneous graphs and show that loss decreases predictably as either model capacity or training data scales, depending on which factor is the bottleneck. The GraphBFF framework provides concrete methodologies for data batching, pretraining, and fine-tuning for building GFMs at scale. We demonstrate the effectiveness of the framework over a real-world billion-scale graph, with an evaluation of a billion-parameter GraphBFF Transformer following the proposed recipe. Across ten diverse, real-world downstream tasks on graphs unseen during training, spanning node- and link-level classification and regression, GraphBFF consistently outperforms baselines, with large margins of up to 31 PRAUC points, including in few-shot settings. Finally, we discuss key challenges and open opportunities for making GFMs a practical and principled foundation for graph learning at industrial scale.

---

📖 [Read original article](https://arxiv.org/abs/2602.04768)