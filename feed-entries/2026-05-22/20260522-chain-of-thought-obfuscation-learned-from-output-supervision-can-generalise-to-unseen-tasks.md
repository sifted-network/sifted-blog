---
title: "Chain-of-thought obfuscation learned from output supervision can generalise to unseen tasks"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2601.23086"
author: "Nathaniel Mitrani Hadida, Sassan Bhanji, Cameron Tice, Puria Radmard"
categories: ["cs.AI"]
---

arXiv:2601.23086v2 Announce Type: replace Abstract: Chain-of-thought (CoT) reasoning provides a significant performance uplift to LLMs by enabling planning, exploration, and deliberation of their actions. CoT is also a powerful tool for monitoring the behaviours of these agents: when faithful, they offer interpretations of the model's decision making process, and an early warning sign for dangerous behaviours. However, optimisation pressures placed on the CoT may cause the model to obfuscate reasoning traces, losing this beneficial property. We show that obfuscation can generalise across tasks; models that learn to obfuscate reasoning involving reward hacking (e.g. accessing and utilising leaked information) generalise both the reward hacking behaviour and its obfuscation in CoT to unseen reward hacking settings. Most worryingly, we show that obfuscation of CoT reasoning, and its generalisation across tasks, also follows when we penalise only the model's final actions after closing its CoT. Our findings suggest that current practices of penalising harmful generations may inadvertently lead to a reduction in the broader monitorability of LLMs in unpredictable ways.

---

📖 [Read original article](https://arxiv.org/abs/2601.23086)