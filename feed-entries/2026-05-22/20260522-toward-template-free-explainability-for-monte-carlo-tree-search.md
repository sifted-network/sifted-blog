---
title: "Toward Template-Free Explainability for Monte Carlo Tree Search"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16524"
author: "Siqi Lu, Mirsaleh Bahavarnia, Hiba Baroud, Yixuan Zhang, Hemant Purohit, Ayan Mukhopadhyay"
categories: ["cs.HC", "cs.AI"]
---

arXiv:2605.16524v2 Announce Type: replace-cross Abstract: Probabilistic search algorithms, such as Monte Carlo Tree Search (MCTS), have proven very effective in solving sequential decision-making tasks under uncertainty. However, interpreting asymmetric search trees that incorporate bandit-based tree traversal and simulation-based value estimation is difficult for end users based solely on raw tree statistics. While prior work requires hand-crafted formal logic constraints that must be updated when the problem changes, we present a framework that enables large language models (LLMs) to generate evidence-grounded explanations of MCTS decisions from recorded search traces in an end-to-end manner. Our framework maps natural-language questions to a structured set of intent categories, determines whether the existing tree contains sufficient evidence, triggers targeted expansion when needed, and generates explanations using tree statistics such as visit counts, value estimates, and risk information. Experimental results provide the first evidence that LLMs can serve as end-to-end explainers for probabilistic search, without requiring intermediate formal representations.

---

📖 [Read original article](https://arxiv.org/abs/2605.16524)