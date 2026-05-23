---
title: "Atom-anchored LLMs speak Chemistry: A Retrosynthesis Demonstration"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.16590"
author: "Alan Kai Hassen, Andrius Bernatavicius, Antonius P. A. Janssen, Mike Preuss, Gerard J. P. van Westen, Djork-Arn\\'e Clevert"
categories: ["cs.LG", "cs.AI", "q-bio.BM"]
---

arXiv:2510.16590v2 Announce Type: replace-cross Abstract: Applications of machine learning in chemistry are often limited by the scarcity and expense of labeled data, restricting traditional supervised methods. In this work, we introduce a framework for molecular reasoning using general-purpose Large Language Models (LLMs) that operates without requiring task-specific model training. Our method anchors chain-of-thought reasoning to the molecular structure by using unique atomic identifiers. First, the LLM performs a zero-shot task to identify relevant fragments and their associated chemical labels or transformation classes. In an optional second step, this position-aware information is used in a few-shot task with provided class examples to predict the chemical transformation. We apply our framework to single-step retrosynthesis, a task where LLMs have previously underperformed. Across academic benchmarks and expert-validated drug discovery molecules, our work enables LLMs to achieve high success rates in identifying chemically plausible reaction sites ($\geq90\%$), named reaction classes ($\geq40\%$), and final reactants ($\geq74\%$). Ultimately, our work establishes a general blueprint for applying LLMs to challenges where molecular reasoning and molecular transformations are key, positioning atom-anchored LLMs as a powerful solution for data-scarce chemistry domains.

---

📖 [Read original article](https://arxiv.org/abs/2510.16590)