---
title: "SGR-Bench: Benchmarking Search Agents on State-Gated Retrieval"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22219"
author: "Ningyuan Li, Haiyang Shen, Mugeng Liu, Yudong Han, Zhuofan Shi, Sixiong Xie, Yun Ma"
categories: ["cs.AI"]
---

arXiv:2605.22219v1 Announce Type: new Abstract: Recent advances in large language models and tool-using agents have expanded the range of benchmarked web tasks. Yet an important class of specialized retrieval tasks remains undercharacterized. On many specialized data-retrieval websites, answer-bearing evidence becomes accessible only after establishing the correct site-specific retrieval state through filters, views, hierarchies, or scopes. We term this capability state-gated retrieval (SGR). We introduce SGR-Bench, a benchmark for this setting containing 100 expert-curated tasks spanning six source families and 12 public data ecosystems. Each task requires discovering the appropriate website and configuring its site-specific retrieval state to produce a structured answer. SGR-Bench pairs constraint-guided and goal-oriented formulations of the same underlying problems, enabling controlled comparisons between explicit and implicit guidance for state-gated retrieval. We evaluate eight CLI-based agentic LLM systems and three commercial search-agent products. On SGR-Bench, the strongest system reaches only 66.18% item-level F1, while row-level F1 remains much lower. A manual audit of 156 analyzable failed CLI trajectories shows why: agents often reach a relevant web source, but establish the wrong site-specific retrieval state. Retrieval-scope drift (37.2%) and criterion mismatch (27.6%) dominate, whereas final answer composition accounts for only 10.3%. The dataset and single-case evaluation instructions are available at https://huggingface.co/datasets/PKUAIWeb/SGR-BENCH.

---

📖 [Read original article](https://arxiv.org/abs/2605.22219)