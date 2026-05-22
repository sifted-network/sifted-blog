---
title: "A Theory of Time-Sensitive Language Generation: Sparse Hallucination Beats Mode Collapse"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.11302"
author: "Atul Ganju, Travis McVoy, Shaddin Dughmi, Shang-Hua Teng"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.11302v2 Announce Type: replace-cross Abstract: We study language generation in the limit under a global preference ordering on strings, as introduced by Kleinberg and Wei. As is done in previous work, we aim for breadth, but impose an additional requirement of timeliness: higher-ranked strings should be generated earlier. A string is then only credited if it is generated before a deadline, where its deadline is defined by a function that maps a string's rank in the target language to the time by which it must be produced. This is in keeping with a central consideration in machine learning, where inductive bias favors ``simpler'' or ``more plausible'' outputs, all else being equal. We show that timely generation is impossible in a strong sense for eventually consistent generators -- the protagonists of most prior related work. Under what is perhaps the mildest natural relaxation of consistency, a hallucination rate that vanishes over time, we show that we can circumvent our impossibility result. In particular, we can achieve optimal density with respect to any superlinear deadline function. We also show this is tight by ruling out timely generation with linear deadlines and vanishing hallucination rate.

---

📖 [Read original article](https://arxiv.org/abs/2605.11302)