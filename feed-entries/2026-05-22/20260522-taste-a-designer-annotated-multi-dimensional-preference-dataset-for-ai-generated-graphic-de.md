---
title: "TASTE: A Designer-Annotated Multi-Dimensional Preference Dataset for AI-Generated Graphic Design"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20731"
author: "Haonan Zhu, Elad Hirsch, Alexandria Minetti, Allison Nulty, Purvanshi Mehta"
categories: ["cs.CV", "cs.AI", "stat.AP"]
---

arXiv:2605.20731v1 Announce Type: cross Abstract: Text-to-image models produce graphic design at production scale, but their supervision comes from photo-style preference data with a single overall verdict per comparison. Designers evaluate along several distinct axes, including typography, visual hierarchy, color harmony, layout, and brief fidelity, and a single label collapses them. We release TASTE (Typography, Aesthetics, Spatial, Tone, Etc.): ten professional designers ranked outputs from four current text-to-image models on nine criteria across two disjoint cohorts, yielding 1,600 ratings per criterion plus per-image hallucination flags on the holistic-preference cohorts. We pair the dataset with three contributions. First, a criterion-agnostic signal test framework, using Kendall's tau, majority probability, and Condorcet cycles against exact iid-uniform nulls at p = 4 and R = 5, places designer agreement on graphic design between food and movie preferences and photo-style image quality, with every TASTE criterion rejecting the random-rater null. Second, no pre-trained system in our benchmark, including six open-weight VLM judges from 3B to 33B parameters and three dedicated T2I scorers, HPSv2.1, PickScore-v1, and LAION-Aesthetic-V2, exceeds 0.55 macro agreement with the 5-designer majority; VLM judges trade off position bias against content sensitivity, so scaling moves along this frontier without improving accuracy. Third, a small pairwise-difference head trained on TASTE reaches 0.611, closing roughly half the gap to the 0.741 single-rater ceiling.

---

📖 [Read original article](https://arxiv.org/abs/2605.20731)