---
title: "Discovering High Level Patterns from Simulation Traces"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.10009"
author: "Sean Memery, Kartic Subr"
categories: ["cs.AI", "cs.HC"]
---

arXiv:2602.10009v2 Announce Type: replace Abstract: Large Language Models (LLMs) are unable to reliably reason about specific physical systems. Attempts to imbue LLMs with knowledge of the necessary physics concepts have shown great promise, but explainability and validation remain open challenges. An emerging alternative is tooling, where LLMs can query physical simulators and use the resulting simulation traces as context for validation. This approach suffers from poor scalability since simulation traces contain large volumes of fine-grained numerical and semantic data. We show that translating simulation traces to a sparse representation of "high-level" structural patterns leads to more effective interpretation by LLMs. We propose an unsupervised learning scheme to perform this translation, or annotation, via program synthesis. Our learning results in a library of programs that act as pattern detectors which can translate simulation traces to sparse, annotated pattern sequences. The detected patterns may optionally be guided by human experts via string labels (rigid collision, stretching spring, etc.). We show, using a recent physics benchmark, that such annotated representations are more amenable to natural language reasoning about specific physical systems. The synthesized programs serve as transparent, explainable functions that map system states to a sparse and efficient annotation space. As an example application, we show how goals within physical systems that are specified in natural language may be converted to reward programs which are maximized to find solutions.

---

📖 [Read original article](https://arxiv.org/abs/2602.10009)