---
title: "Most Transformer Modifications Still Do Not Transfer at 1-3B: A 2020-2026 Update to Narang et al. (2021) with Downstream Evaluation and a Noise Floor"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20798"
author: "Yang Zhao, Jiahao Lu, Bin Huang, Guhua Zhang, Jie Zhou"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.20798v1 Announce Type: new Abstract: Narang et al. (2021) evaluated 40+ Transformer modifications at T5-base scale and concluded that most did not transfer. Five years later, the typical working regime has moved to 1-3B parameters, downstream evaluation has replaced pretraining perplexity, and a substantially different catalogue of modifications has emerged. We revisit their question by testing 20 post-2021 Transformer modifications at 1.2B and 3B under strict iso-data, iso-compute, iso-recipe control, with a multi-seed baseline noise floor and CLIMB-12 downstream evaluation as the primary metric. The central finding reproduces theirs at this curated set: most modifications do not transfer. Of the 20 modifications, only two clear Bonferroni correction at 1.2B; one of those two further fails to train stably at 3B under the shared recipe. We also find that the loss-downstream gap reported by Tay et al. (2023) enlarges several-fold for attention-output modifications: two significant failures converge to within 2-3% of baseline validation loss yet drop 6-16 CLIMB-points. We conclude that noise-floor reporting, downstream evaluation, and cross-scale stability testing are now prerequisites for architecture comparisons at 1-3B.

---

📖 [Read original article](https://arxiv.org/abs/2605.20798)