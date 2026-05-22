---
title: "ACL-Verbatim: hallucination-free question answering for research"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21102"
author: "G\\'abor Recski, Szilveszter T\\'oth, Nadia Verdha, Istv\\'an Boros, \\'Ad\\'am Kov\\'acs"
categories: ["cs.CL", "cs.AI", "cs.SE"]
---

arXiv:2605.21102v1 Announce Type: cross Abstract: Academic researchers need efficient and reliable methods for collecting high-quality information from trusted sources, but modern tools for AI-assisted research still suffer from the tendency of Large Language Models (LLMs) to produce factually inaccurate or nonsensical output, commonly referred to as hallucinations. We apply the extractive question answering system VerbatimRAG to research papers in the ACL Anthology, directly mapping user queries to verbatim text spans in retrieved documents. We contribute a novel ground truth dataset for the task of mapping user queries to relevant text spans in research papers, and use it to train and evaluate a variety of extractive models. Human annotation is performed by NLP researchers and is based on synthetic user queries generated using a custom pipeline based on the ScIRGen methodology, paired with chunks of research papers retrieved by VerbatimRAG. On this benchmark, a 150M-parameter ModernBERT token classifier trained on silver supervision from our pipeline achieves the best word-level F1 (53.6), ahead of the strongest evaluated LLM extractor (48.7).

---

📖 [Read original article](https://arxiv.org/abs/2605.21102)