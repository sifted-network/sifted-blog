---
title: "Quality and Security Signals in AI-Generated Python Refactoring Pull Requests"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21453"
author: "Mohamed Almukhtar, Anwar Ghammam, Hua Ming"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2605.21453v1 Announce Type: cross Abstract: As AI agents increasingly contribute to code development and maintenance, there is still limited empirical evidence on the quality and risk characteristics of their changes in real-world projects, particularly for refactoring-oriented contributions. It remains unclear how agent-authored refactoring edits affect maintainability, code quality, and security once merged into GitHub repositories. To address this gap, we conduct an empirical study of Python refactoring pull requests (PRs) from the AIDev dataset. We analyze agentic refactoring PRs using PyQu, an ML-based quality assessment tool for Python, to quantify changes across five quality attributes, and we complement PyQu with domain-independent static analysis (Pylint and Bandit) to measure code quality and security issues before and after each change. Our results show that, on average, agentic commits improve a quality attribute in 22.5% of the studied changes, with usability improving most frequently (36.5%). At the same time, 24.17% of modified files introduce new Pylint issues predominantly convention level violations such as long lines-while 4.7% introduce new Bandit findings. From the observed diffs, we derive a taxonomy of 24 recurring change operations and map them to the lint and security findings they most commonly affect. Despite these mixed outcomes, developer acceptance is high: 73.5% of the analyzed PRs are merged, including cases that introduce new lint or security findings, often alongside the removal of existing issues. Overall, these findings highlight both the promise and current limitations of agentic refactoring, and motivate stronger tool-in-the-loop quality and security gating for AI-driven development workflows.

---

📖 [Read original article](https://arxiv.org/abs/2605.21453)