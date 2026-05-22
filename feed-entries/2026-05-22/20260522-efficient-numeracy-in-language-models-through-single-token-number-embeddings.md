---
title: "Efficient numeracy in language models through single-token number embeddings"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2510.06824"
author: "Linus Kreitner, Paul Hager, Jonathan Mengedoht, Georgios Kaissis, Daniel Rueckert, Martin J. Menten"
categories: ["cs.LG"]
---

arXiv:2510.06824v2 Announce Type: replace Abstract: To drive progress in science and engineering, large language models (LLMs) must be able to process large amounts of numerical data and solve long calculations efficiently. This is currently only possible through the use of external tools or extensive reasoning chains, either weakening the numerical representations of LLMs or limiting the length of problems they can solve. We show that frontier LLMs require excessive amounts of reasoning tokens to solve even basic calculations, which is exacerbated by their tokenization strategies that split single numbers into multiple tokens. This motivates the need for efficient and effective single-token number encodings. We introduce a set of desiderata for such encodings and show that existing approaches fail to fulfill them. To address these shortcomings, we propose BitTokens, a novel encoding strategy that represents any number as a single token using its IEEE 754 binary floating-point representation. Through extensive experiments we show that our BitTokens allow even small language models to learn algorithms that solve basic arithmetic operations nearly perfectly. This newly gained efficiency could expand the length and complexity of problems language models can solve.

---

📖 [Read original article](https://arxiv.org/abs/2510.06824)