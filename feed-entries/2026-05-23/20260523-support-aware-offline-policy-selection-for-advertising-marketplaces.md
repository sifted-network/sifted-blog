---
title: "Support-aware offline policy selection for advertising marketplaces"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21736"
author: "Prashant Shekhar, Caroline Howard"
categories: ["stat.ML", "cs.AI", "cs.LG"]
---

arXiv:2605.21736v1 Announce Type: cross Abstract: Logged advertising auctions make offline reserve-price evaluation attractive but risky. Replay tables can identify policies with large apparent yield gains, yet they can also hide weak threshold support, multiple-comparison effects, subgroup harm, and bidder-response uncertainty. Existing replay and off-policy evaluation methods estimate or rank policy values, but they do not directly answer the operational question of whether the available evidence is strong enough to justify validation. This paper develops a support-aware offline decision framework for reserve-policy selection. Rather than outputting a single point-estimate winner, the framework converts logged evidence into a conservative decision object consisting of certified policies, statistically dominated alternatives, and unresolved candidates requiring further validation. The main theoretical result gives a unified finite-catalog guarantee showing that, under simultaneous uncertainty control and conservative support gates, the framework preserves the best gate-passing policy while eliminating only policies with certified regret. Supporting results characterize support-localized replay generalization, establish information-theoretic threshold-resolution limits, and quantify when heterogeneous bidder response can overturn localized replay rankings. Experiments on iPinYou real-time-bidding logs show that the leading reserve rule achieves a 47.66% replay lift in season two, a 40.71% simultaneous lower-bound lift, and a 43.87% frozen out-of-time replay lift in season three. The framework reduces a 19-policy catalog to a two-policy validation shortlist while certifying non-harm across 44 advertiser, exchange, and region segments. The results support the central claim that offline reserve-policy evaluation should produce certified validation decisions rather than point-estimate rankings alone.

---

📖 [Read original article](https://arxiv.org/abs/2605.21736)