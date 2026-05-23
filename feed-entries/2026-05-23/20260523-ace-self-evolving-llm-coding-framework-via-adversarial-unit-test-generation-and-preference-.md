---
title: "ACE: Self-Evolving LLM Coding Framework via Adversarial Unit Test Generation and Preference Optimization"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16299"
author: "Yixu Huang, Xinglei Yu, Zhongyu Wei"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2605.16299v2 Announce Type: replace-cross Abstract: Large Language Models (LLMs) excel at code generation but remain heavily reliant on large-scale annotated solutions and verification-based supervision, which constrains scalability and hinders sustained self-improvement. Recent solver--verifier frameworks exploit program execution as an automatic supervision signal, but their effectiveness degrades as solvers become moderately strong: verifier-generated tests increasingly confirm semantic correctness rather than exposing the remaining failure modes. We propose \textbf{ACE}, a self-evolving code generation framework based on a solver--adversary architecture that prioritizes active failure discovery through execution-centric supervision. A single LLM alternates between generating candidate programs and producing adversarial unit test inputs optimized to induce execution-level failures, such as runtime errors, exceptions, or non-termination. Supervision is derived solely from execution outcomes: robust programs are selected for supervised fine-tuning, while adversarial tests are optimized via Kahneman--Tversky Optimization using execution-derived preferences. Notably, the entire training loop requires no ground-truth code or external reward models. Experiments on CodeContests, MBPP, and LiveCodeBench demonstrate that ACE consistently outperforms strong solver--verifier baselines, achieving 3--7\% absolute gains in pass@1, with larger improvements on out-of-distribution benchmarks, while maintaining competitive or improved inference efficiency.

---

📖 [Read original article](https://arxiv.org/abs/2605.16299)