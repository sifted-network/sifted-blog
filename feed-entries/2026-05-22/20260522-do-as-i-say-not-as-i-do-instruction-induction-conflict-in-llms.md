---
title: "Do as I Say, Not as I Do: Instruction-Induction Conflict in LLMs"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20382"
author: "Carolina Camassa, Derek Shiller"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20382v1 Announce Type: cross Abstract: Language models are trained to follow instructions, but they are also powerful pattern completers. What happens when these two objectives conflict? We construct conversations in which a user instruction to behave in a target way T (e.g., always output a specific token, answer in a particular language, or adopt a persona) is opposed by N hardcoded assistant turns demonstrating a competing pattern P. We then measure instruction-following (IF) rates in this setting, across 13 models and 16 different instructions, for up to 50 turns. Average instruction-following rates range from 1% to 99% across models, largely uncorrelated with standard capability benchmarks. The transition from instruction-following to pattern-following is universal but highly model-dependent. Robustness is modulated both by instruction content, with models resisting induction longer when instructions align with their trained value priors, and by output format, with diverse multi-token responses proving substantially more resistant than single-token outputs. Chain-of-thought reasoning improves robustness but does not eliminate susceptibility, and can produce dissociation between correct deliberation and incorrect output. When asked to predict their behavior in this setting, models achieve 83.5% accuracy on average but systematically underestimate their own resistance to induction pressure. These results suggest that instruction-following remains brittle under induction pressure even for otherwise capable models, and that output diversity, rather than semantic engagement with the input, is the primary factor predicting robustness.

---

📖 [Read original article](https://arxiv.org/abs/2605.20382)