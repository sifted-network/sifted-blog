---
title: "Exploring Code Analysis: Zero-Shot Insights on Syntax and Semantics with LLMs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2305.12138"
author: "Wei Ma, Zhihao Lin, Shangqing Liu, Qiang Hu, Ye Liu, Wenhan Wang, Cen Zhang, Liming Nie, Li Li, Yang Liu, Lingxiao Jiang"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2305.12138v5 Announce Type: replace-cross Abstract: Code analysis is fundamental in Software Engineering, supporting debugging, optimization, and security assessment. Human developers approach it through syntax parsing, static semantics inference, and dynamic reasoning. Traditional tools are effective but limited by language specificity and weak cross-language generalization. Large language models (LLMs) are promising for code tasks, yet their capabilities for fundamental code analysis remain underexplored. We structure our study around three aspects aligned with human practices: syntax parsing, static semantics inference, and dynamic reasoning. We evaluate 21 state-of-the-art LLMs across nine tasks in four languages (C, Java, Python, Solidity), including AST generation, CFG construction, data dependency, taint analysis, and flaky test reasoning. We apply a three-layer evaluation protocol (automated metrics, expert adjudication, consistency validation) to 3,124 code samples, achieving high inter-rater reliability (Cohen's kappa = 0.844-0.936) and strong human-machine agreement (Gwet's AC1 = 0.500-0.727, F1 = 0.791-0.882). While the best LLMs excel in syntax parsing (AST 90%+, expression matching 84-100%) and show promise in static analysis, their dynamic reasoning remains limited (<70%) with high data-shift sensitivity (per-project F1 varying 0-1.0). This hierarchy holds across model families and scales, suggesting fundamental rather than transient limitations. These findings show how LLMs complement traditional analyzers: they offer cross-language generalization but non-deterministic outputs needing validation, while traditional tools give deterministic guarantees but need language-specific configuration. We contribute a validated evaluation framework with comparison against traditional analyzers (Tree-sitter, Soot, Joern) and task-specific applicability tiers. Benchmark: https://github.com/mathieu0905/llm_code_analysis.git

---

📖 [Read original article](https://arxiv.org/abs/2305.12138)