---
title: "On-Policy Consistency Training Improves LLM Safety with Minimal Capability Degradation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21834"
author: "Andy Han, Kristina Fujimoto, Avidan Shah, Kiet Nguyen, Kai Xu, Chen Yueh-Han, Ilia Sucholutsky, Rico Angell"
categories: ["cs.LG"]
---

arXiv:2605.21834v1 Announce Type: new Abstract: Aligned models can misbehave in several ways: they are often sycophantic, fall victim to jailbreaks, or fail to include appropriate safety warnings. Consistency training is a promising new alignment paradigm to mitigate such failures by training invariants into the model using contrastive input pairs. Existing consistency training procedures generate the supervision signal once, offline, and use supervised fine-tuning (SFT) to update the model. Unfortunately, the resulting models tend to merely memorize the surface forms of the training distribution and thus generalize poorly and regress in their capabilities. We introduce On-Policy Consistency Training (OPCT), a new consistency training approach where the objective is computed over the model's own responses to prompts, supervised by itself conditioned on corresponding contrastive prompts. We evaluate OPCT on three safety axes: sycophancy, jailbreaking, and safety awareness. Across three model families, OPCT outperforms its SFT counterpart on all safety desiderata. It nearly halves the sycophancy rate relative to baseline (8.1% vs. 15.4%, compared to 11.2% for SFT). Under an adaptive per-target attacker, OPCT holds jailbreak defense success near 99% on held-out jailbreak behaviors, whereas SFT achieves 87% on average. On safety awareness, OPCT outperforms SFT in two out of three models, and matches it on the other. OPCT also largely avoids the capability regressions that SFT induces, such as a 28-point drop on MATH-500. Our results suggest that consistency training is best implemented as OPCT rather than as SFT, especially when generalization beyond the training distribution is desired.

---

📖 [Read original article](https://arxiv.org/abs/2605.21834)