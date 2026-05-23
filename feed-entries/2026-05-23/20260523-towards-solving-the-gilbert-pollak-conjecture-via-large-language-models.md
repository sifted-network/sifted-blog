---
title: "Towards Solving the Gilbert-Pollak Conjecture via Large Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.22365"
author: "Yisi Ke, Tianyu Huang, Yankai Shu, Di He, Jingchu Gai, Liwei Wang"
categories: ["cs.DM", "cs.LG"]
---

arXiv:2601.22365v2 Announce Type: replace-cross Abstract: The Gilbert-Pollak Conjecture \citep{gilbert1968steiner}, also known as the Steiner Ratio Conjecture, states that for any finite point set in the Euclidean plane, the Steiner minimum tree has length at least $\sqrt{3}/2 \approx 0.866$ times that of the Euclidean minimum spanning tree (the Steiner ratio). A sequence of improvements through the 1980s culminated in a lower bound of $0.824$, with no substantial progress reported over the past three decades. Recent advances in LLMs have demonstrated strong performance on contest-level mathematical problems, yet their potential for addressing open, research-level questions remains largely unexplored. In this work, we present a novel AI system for obtaining tighter lower bounds on the Steiner ratio. Rather than directly prompting LLMs to solve the conjecture, we task them with generating rule-constrained geometric lemmas implemented as executable code. These lemmas are then used to construct a collection of specialized functions, which we call verification functions, that yield theoretically certified lower bounds of the Steiner ratio. Through progressive lemma refinement driven by reflection, the system establishes a new certified lower bound of 0.8559 for the Steiner ratio. The entire research effort involves only thousands of LLM calls, demonstrating the strong potential of LLM-based systems for advanced mathematical research.

---

📖 [Read original article](https://arxiv.org/abs/2601.22365)