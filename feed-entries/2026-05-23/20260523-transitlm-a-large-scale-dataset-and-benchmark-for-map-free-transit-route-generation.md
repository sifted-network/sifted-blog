---
title: "TransitLM: A Large-Scale Dataset and Benchmark for Map-Free Transit Route Generation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22355"
author: "Hanyu Guo, Jiedong Yang, Chao Chen, Longfei Xu, Kaikui Liu, Xiangxiang Chu"
categories: ["cs.CL", "cs.AI", "cs.LG"]
---

arXiv:2605.22355v1 Announce Type: cross Abstract: Public transit route planning traditionally depends on structured map infrastructure and complex routing engines, and no existing dataset supports training models to bypass this dependency. We present TransitLM, a large-scale dataset of over 13 million transit route planning records from four Chinese cities covering 120,845 stations and 13,666 lines, released as a continual pre-training corpus and benchmark data for three evaluation tasks with complementary metrics. Experiments show that an LLM trained on TransitLM produces structurally valid routes at high accuracy and implicitly grounds arbitrary GPS coordinates to appropriate stations without any explicit mapping. These results demonstrate that transit route planning can be learned entirely from data, enabling end-to-end, map-free route generation directly from origin-destination information. The dataset and benchmark are available at https://huggingface.co/datasets/GD-ML/TransitLM, with evaluation code at https://github.com/HotTricker/TransitLM.

---

📖 [Read original article](https://arxiv.org/abs/2605.22355)