---
title: "Embedding by Elicitation: Dynamic Representations for Bayesian Optimization of System Prompts"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19093"
author: "Zhiyuan Jerry Lin, Benjamin Letham, Samuel Dooley, Maximilian Balandat, Eytan Bakshy"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.19093v1 Announce Type: new Abstract: System prompts are a central control mechanism in modern AI systems, shaping behavior across conversations, tasks, and user populations. Yet they are difficult to tune when feedback is available only as aggregate metrics rather than per-example labels, failures, or critiques. We study this aggregate feedback setting as sample-constrained black-box optimization over discrete, variable-length text. We introduce ReElicit, a Bayesian optimization framework based on \emph{embedding by elicitation}. Given a task description, previously evaluated prompts, and scalar scores, an LLM elicits a compact, interpretable feature space and maps prompts into it. Leveraging a probabilistic Gaussian process surrogate, an acquisition function then selects target feature vectors, which the LLM realizes and refines into deployable system prompts. Re-eliciting the feature space as new evaluations arrive lets the representation adapt to the observed prompt-score history. We evaluate the setting using offline benchmark accuracy as a controlled aggregate proxy: the optimizer observes one scalar score per prompt and no per-example labels, errors, or critiques. Across ten system prompt optimization tasks with a 30 total evaluation budget, ReElicit achieves the strongest aggregate performance profile among representative aggregate-only prompt-optimization baselines. These results suggest that LLMs can serve as adaptive semantic representation builders, not only prompt generators, for Bayesian optimization over natural-language artifacts.

---

📖 [Read original article](https://arxiv.org/abs/2605.19093)