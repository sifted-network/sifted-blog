---
title: "Does Slightly Mean Somewhat? Measuring Vague Intensity Words in LLM Numeric Actions"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21827"
author: "Daniel Tabach (Georgia Institute of Technology)"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.21827v1 Announce Type: cross Abstract: Do language models preserve the ordinal meaning of intensity words when those words must produce numeric actions? I study a researcher-constructed scale of 10 English degree modifiers, from slightly to drastically, informed by the Quirk et al. degree-modifier taxonomy, in a controlled resource-allocation environment where Claude Haiku receives a natural-language instruction, produces a numeric allocation, and a deterministic backend converts that allocation into a measurable outcome. The only variable that changes between runs is the intensity word or the starting system state, isolating their effects on the model's numeric output. Across 6,620 runs at T=0.0 and T=0.7, three patterns emerge. First, the model compresses 10 intensity words into 5 distinct median outputs: four lower-tier words all map to the same value, while stronger words break into higher regimes (Spearman rho = 0.845, p < 0.001). Second, when the current system state is supplied as context, separate Kruskal-Wallis tests show that grouping by starting allocation captures far more rank-based variance than grouping by word (epsilon-squared baseline = 0.782 vs. epsilon-squared word = 0.079), and lexical differentiation collapses to zero as the system approaches capacity. Third, near feasibility limits the model exhibits three behavioral modes: weak words hedge with small adjustments, strong words abstain entirely, and the word drastically pushes to the local ceiling. These patterns persist across temperature, with stochastic sampling broadening distributions but not restoring ordinal distinctions between words. In this model and domain, the model's numeric interpretation of vague intensity words is compressed, state-dependent, and discontinuous near operational boundaries.

---

📖 [Read original article](https://arxiv.org/abs/2605.21827)