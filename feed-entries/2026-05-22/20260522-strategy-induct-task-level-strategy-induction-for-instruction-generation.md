---
title: "Strategy-Induct: Task-Level Strategy Induction for Instruction Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20924"
author: "Po-Chun Chen, Hen-Hsen Huang, Hsin-Hsi Chen"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2605.20924v1 Announce Type: cross Abstract: Designing effective task-level prompts is crucial for improving the performance of Large Language Models (LLMs). While prior work on instruction induction demonstrates that LLMs can infer better instructions with limited examples, existing approaches often rely on input-output pairs, where obtaining labeled answers can be difficult or costly. To address this limitation, we propose Strategy-Induct, a framework that derives task-level instructions solely from a small set of example questions without requiring labeled answers. Our approach first prompts the model to generate explicit reasoning strategies for each question, forming (strategy, question) pairs. These pairs are then used to induce a task instruction that guides reasoning. Experiments across multiple tasks and model scales demonstrate that Strategy-Induct outperforms state-of-the-art methods in question-only settings. Furthermore, we observe that jointly utilizing LLMs and Large Reasoning Models across task instruction generation and inference may lead to further performance improvements.

---

📖 [Read original article](https://arxiv.org/abs/2605.20924)