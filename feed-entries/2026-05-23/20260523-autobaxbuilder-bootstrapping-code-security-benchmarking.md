---
title: "AutoBaxBuilder: Bootstrapping Code Security Benchmarking"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.21132"
author: "Tobias von Arx, Niels M\\\"undler, Mark Vero, Maximilian Baader, Martin Vechev"
categories: ["cs.CR", "cs.AI", "cs.LG", "cs.PL"]
---

arXiv:2512.21132v2 Announce Type: replace-cross Abstract: As large language models (LLMs) see wide adoption in software engineering, the reliable assessment of the correctness and security of LLM-generated code is crucial. Notably, prior work showed that LLMs are prone to generating code with security vulnerabilities, highlighting that security is often overlooked. These insights were enabled by specialized benchmarks crafted by security experts through significant manual effort. However, benchmarks (i) inevitably end up contaminating training data, (ii) must extend to new tasks to provide a more complete picture, and (iii) must increase in difficulty to challenge more capable LLMs. In this work, we address these challenges and present AutoBaxBuilder, an automated pipeline that generates code security benchmarking tasks from scratch. It leverages the code-understanding capabilities of LLMs combined with robust reliability checks to construct functional tests and end-to-end security-probing exploits. The quality of the pipeline is quantitatively confirmed by aligning its predictions with an expert-written baseline and qualitatively validated through manual soundness verification. We use AutoBaxBuilder to construct a new benchmark and release it to the public as AutoBaxBench, together with a thorough evaluation on contemporary LLMs. AutoBaxBuilder generates new tasks in under 2 hours, for less than USD 4. Including a manual verification, this reduces the required human effort for benchmark construction by a factor of 12.

---

📖 [Read original article](https://arxiv.org/abs/2512.21132)