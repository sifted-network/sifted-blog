---
title: "What Twelve LLM Agent Benchmark Papers Disclose About Themselves: A Pilot Audit and an Open Scoring Schema"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21404"
author: "Mahdi Naser Moghadasi (BrightMind AI, Texas Tech University), Faezeh Ghaderi (University of Texas at Arlington)"
categories: ["cs.LG"]
---

arXiv:2605.21404v1 Announce Type: new Abstract: We read twelve well-known LLM agent benchmark papers and recorded, dimension by dimension, what each paper actually says about how its evaluation was run. The motivation came from a familiar frustration: two papers will report results on the same benchmark with the same model name and disagree, and you cannot tell why -- the scaffold, the sampling settings, the subset, or the evaluator version. In many cases the published artifact does not let you answer. This paper is an implementation report on the attempt. We designed a small audit schema (five fields: benchmark identity, harness specification, inference settings, cost reporting, failure breakdown), wrote a scoring codebook with the boundary cases we hit during pilot scoring, applied it to twelve canonical papers (eight agent, four classical static), and recorded what we saw. We score the disclosure of an agent run, not its correctness, and make no claim that disclosure implies a trustworthy result. The mean audit score across the eight agent-benchmark papers is 0.38 (out of 1.0), and across the four classical static benchmarks 0.66; the largest gap is on cost (none of the eight agent benchmark papers disclose inference cost in any form) and on harness specification (none fully disclose a content-addressed container image of the evaluation environment). We release the schema as a JSON Schema file, the codebook as a Markdown document, and the raw scoring sheet as a CSV. The scoring was performed by a single auditor in one pass; a multi-rater audit is the natural next step, and we discuss what we think it would change.

---

📖 [Read original article](https://arxiv.org/abs/2605.21404)