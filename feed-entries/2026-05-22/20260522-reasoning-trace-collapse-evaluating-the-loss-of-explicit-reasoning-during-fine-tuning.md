---
title: "Reasoning-Trace Collapse: Evaluating the Loss of Explicit Reasoning During Fine-Tuning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21127"
author: "Lukas Twist, Helen Yannakoudakis, Jie M. Zhang"
categories: ["cs.LG"]
---

arXiv:2605.21127v1 Announce Type: new Abstract: Explicit reasoning models are trained to produce intermediate reasoning traces before final answers, but downstream fine-tuning is often performed on ordinary instruction-response data that contains no such traces. We show that this mismatch can induce reasoning-trace collapse: a fine-tuned model continues to produce plausible final answers while losing the structurally valid explicit reasoning traces that made it a reasoning model in the first place. We introduce a structural evaluation framework that separates answer correctness from reasoning-trace validity, measuring valid, empty, missing, and truncated reasoning alongside reasoning-conditioned task performance. Using this framework, we study four open-weight reasoning models and find that standard supervised fine-tuning can rapidly suppress valid reasoning traces, and that answer-only metrics can substantially obscure this failure: in several settings, performance conditional on valid reasoning remains high while the rate of valid reasoning falls sharply. We further show that simple loss-masking strategies can substantially mitigate collapse without requiring teacher-generated reasoning traces. These results suggest that evaluations of fine-tuned reasoning models should report structural reasoning reliability metrics in addition to final-answer performance, especially when adaptation data does not contain explicit reasoning traces.

---

📖 [Read original article](https://arxiv.org/abs/2605.21127)