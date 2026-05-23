---
title: "Provably Protecting Fine-Tuned LLMs from Training Data Extraction while Preserving Utility"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.00688"
author: "Tom Segal, Asaf Shabtai, Yuval Elovici"
categories: ["cs.LG"]
---

arXiv:2602.00688v2 Announce Type: replace Abstract: Fine-tuning large language models (LLMs) on sensitive datasets raises privacy concerns, as training data extraction (TDE) attacks can expose highly confidential information. Existing defenses against such attacks either lack formal privacy guarantees or incur substantial utility degradation. We observe that fine-tuning induces widespread probability shifts, yet preserving only a small subset of influential token-level deviations is sufficient; the remaining shifts can be aggressively smoothed with minimal impact on utility. Motivated by this insight, we propose SCP-$\Delta_r$, a Near Access Freeness (NAF)-based algorithm that operates on relative probabilities and explicitly smooths low-impact tokens using a base model. SCP-$\Delta_r$ achieves orders-of-magnitude better theoretical bounds than existing NAF based methods and provides strong empirical protection against TDE attacks with minimal performance loss.

---

📖 [Read original article](https://arxiv.org/abs/2602.00688)