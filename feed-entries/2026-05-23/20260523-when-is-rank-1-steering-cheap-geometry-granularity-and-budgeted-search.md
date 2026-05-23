---
title: "When Is Rank-1 Steering Cheap? Geometry, Granularity, and Budgeted Search"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16362"
author: "John T. Robertson, Jianing Zhu, Haris Vikalo, Zhangyang Wang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.16362v2 Announce Type: replace-cross Abstract: Activation steering offers a lightweight way to control LLMs without retraining, but its effectiveness varies sharply across concepts. Prior work often reads this variability as evidence that many concepts are not captured by a single steering direction. We argue instead that much of it reflects search difficulty: a useful rank-1 intervention often exists, but finding it can be expensive. We formalize rank-1 steering as a budget-constrained optimization over intervention layer and coefficient. Across concepts and model families, prompt-boundary directional alignment predicts where effective interventions occur, enabling geometry-guided search that reaches high utility with substantially fewer evaluations, reducing the trials needed to recover 95% of best-found utility by 39.8% on average across three model families. To explain why some concepts remain expensive even under better search, we introduce concept granularity, a measure of directional heterogeneity across contrastive contexts. Granularity distinguishes concepts whose difference vectors share a stable global direction from those where prompts agree locally within each input but the utility-maximizing direction rotates systematically across inputs. Higher granularity is associated with slower convergence and lower best-found performance (Pearson $r{=}0.44$ with trials-to-95%, $r{=}{-}0.46$ with best-found utility, both $p<0.001$). We present GRACE, a Granularity- and Representation-Aware Concept Engineering framework that uses activation geometry to diagnose the dominant source of steering difficulty, select the appropriate remedy, and allocate optimization effort efficiently. Our results shift the frame from "when does rank-1 fail?" to "when is rank-1 cheap and stable?", turning activation geometry from a descriptive tool into an actionable prior for LLM control.

---

📖 [Read original article](https://arxiv.org/abs/2605.16362)