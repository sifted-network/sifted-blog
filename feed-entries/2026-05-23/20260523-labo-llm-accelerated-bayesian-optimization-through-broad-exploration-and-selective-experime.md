---
title: "LABO: LLM-Accelerated Bayesian Optimization through Broad Exploration and Selective Experimentation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22054"
author: "Zhuo Chen (equal contribution), Xinzhe Yuan (equal contribution), Jianshu Zhang (Shanghai Artificial Intelligence Laboratory, Shanghai, China, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China), Jinzong Dong (Shanghai Artificial Intelligence Laboratory, Shanghai, China, School of Automation, Central South University, Changsha, China), Ruichen Zhou (College of New Energy and Materials, China University of Petroleum, Beijing, China), Yingchun Niu (College of New Energy and Materials, China University of Petroleum, Beijing, China), Tianhang Zhou (College of Carbon Neutrality Future Technology, China University of Petroleum, Beijing, China), Yu Yang Fredrik Liu (DeepVerse PTE. LTD., Singapore), Yuqiang Li (Shanghai Artificial Intelligence Laboratory, Shanghai, China), Nanyang Ye (Shanghai Artificial Intelligence Laboratory, Shanghai, China, School of Computer Science, Shanghai Jiao Tong University, Shanghai, China), Qinying Gu (Shanghai Artificial Intelligence Laboratory, Shanghai, China)"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22054v1 Announce Type: cross Abstract: The high cost and data scarcity in scientific exploration have motivated the use of large language models (LLMs) as knowledge-driven components in Bayesian optimization (BO). However, existing approaches typically embed LLMs directly into the sampling or surrogate modeling pipeline, without fully leveraging their significantly lower evaluation cost compared to real-world experiments. To address this limitation, we propose LLM-Accelerated Bayesian Optimization (LABO), a framework that combines LLM predictions with experimental observations within a single BO loop. LABO employs a gating criterion to dynamically balance the reliance on LLM predictions versus actual experiments. By leveraging inexpensive LLM evaluations to broadly explore the search space and reserving costly real experiments only for regions with high uncertainty, LABO achieves more sample-efficient optimization. We provide a theoretical analysis with a cumulative regret bound that formalizes this efficiency gain. Empirical results across diverse scientific tasks demonstrate that LABO consistently outperforms existing methods under identical experimental budgets. Our results suggest that LABO offers a practical and theoretically grounded approach for integrating LLMs into scientific discovery workflows.

---

📖 [Read original article](https://arxiv.org/abs/2605.22054)