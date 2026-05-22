---
title: "Access Paths for Efficient Ordering with Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2509.00303"
author: "Fuheng Zhao, Jiayue Chen, Yiming Pan, Tahseen Rabbani, Sohaib, Divyakant Agrawal, Amr El Abbadi, Paritosh Aggarwal, Anupam Datta, Dimitris Tsirogiannis"
categories: ["cs.DB", "cs.AI", "cs.IR"]
---

arXiv:2509.00303v3 Announce Type: replace-cross Abstract: In this work, we present the \texttt{LLM ORDER BY} semantic operator as a logical abstraction and conduct a systematic study of its physical implementations. First, we propose several improvements to existing semantic sorting algorithms and introduce a semantic-aware external merge sort algorithm. Our extensive evaluation reveals that no single implementation offers universal optimality on all datasets. From our evaluations, we observe a general test-time scaling relationship between sorting cost and the ordering quality for comparison-based algorithms. Building on these insights, we design a budget-aware optimizer that utilizes heuristic rules, LLM-as-Judge evaluation, and consensus aggregation to dynamically select the near-optimal access path for LLM ORDER BY. In our extensive evaluations, our optimizer consistently achieves ranking accuracy on par with or superior to the best static methods across all benchmarks. We believe that this work provides foundational insights into the principled optimization of semantic operators essential for building robust, large-scale LLM-powered analytic systems.

---

📖 [Read original article](https://arxiv.org/abs/2509.00303)