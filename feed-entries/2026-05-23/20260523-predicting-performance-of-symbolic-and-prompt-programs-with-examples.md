---
title: "Predicting Performance of Symbolic and Prompt Programs with Examples"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21515"
author: "Chengqi Zheng, Keya Hu, Shuzhi Liu, Tao Wu, Kevin Ellis, Yewen Pu"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.21515v1 Announce Type: cross Abstract: LLM prompting is widely used for naturally stated tasks, yet it is unreliable it may succeed on a few test cases but fail at deployment time. We study performance prediction: given a program, either symbolic (e.g. Python) or a prompt executed on an LLM, and a few in-domain examples, predict its performance on unseen tasks from the same domain. We use a simple coin-flip model, treating each pass/fail program execution as a Bernoulli random variable, whose success probability is the programs unknown performance. In this model, performance depends entirely on: 1) the observed execution outcomes on test cases, and 2) a prior over performances. We compile empirical performance priors from a corpus of diverse programs and tasks, and find that performance for symbolic programs (e.g., Python) are all or nothing, while prompt programs have a diffuse prior with many nearly-correct programs. This difference explains why a few passing tests can certify symbolic programs but not prompt programs. Building on this insight, we develop RAP (Retrieved Approximate Prior), which retrieves similar tasks and prompt programs from an existing corpus to construct a proxy prior, which is then used to predict performance. We show RAP achieves solid performances.

---

📖 [Read original article](https://arxiv.org/abs/2605.21515)