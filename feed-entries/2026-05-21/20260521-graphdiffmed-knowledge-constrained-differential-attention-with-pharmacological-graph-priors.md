---
title: "GraphDiffMed: Knowledge-Constrained Differential Attention with Pharmacological Graph Priors for Medication Recommendation"
date: "2026-05-21"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20188"
author: "Krati Saxena, Tomohiro Shibata"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20188v1 Announce Type: new Abstract: Recommending safe and effective medication combinations from electronic health records (EHRs) is a core clinical AI problem, yet it remains difficult because patient trajectories are long, noisy, and clinically heterogeneous. Existing methods typically excel at either temporal modeling across visits or pharmacological knowledge integration (e.g., drug-drug interactions, DDIs), but rarely achieve both while robustly suppressing noise. We present GraphDiffMed, a knowledge-constrained medication recommendation framework built on dual-scale Differential Attention v2. Differential attention is applied at both intra-visit and inter-visit levels to filter spurious signals within encounters and across longitudinal history, while pharmacological constraints are incorporated during learning. Experiments on MIMIC-III and ablation studies show that this design consistently improves recommendation quality and ranking over strong baselines while achieving a more favorable safety performance balance. We further find that the strongest-performing configuration uses only demographic auxiliary features under our experimental setting. Overall, GraphDiffMed demonstrates that combining noise-aware attention with pharmacological constraints yields more reliable and clinically meaningful medication recommendation. We open-source our code at https://github.com/saxenakrati09/GraphDiffMed.

---

📖 [Read original article](https://arxiv.org/abs/2605.20188)