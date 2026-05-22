---
title: "InteractScience: Programmatic and Visually-Grounded Evaluation of Interactive Scientific Demonstration Code Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.09724"
author: "Qiaosheng Chen, Yang Liu, Lei Li, Kai Chen, Qipeng Guo, Gong Cheng, Fei Yuan"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2510.09724v2 Announce Type: replace-cross Abstract: Large Language Models (LLMs) are increasingly capable of generating complete applications from natural language instructions, creating new opportunities in science and education. In these domains, interactive scientific demonstrations are particularly valuable for explaining concepts, supporting new teaching methods, and presenting research findings. Generating such demonstrations requires models to combine accurate scientific knowledge with the ability to implement interactive front-end code that behaves correctly and responds to user actions. This capability goes beyond the scope of existing benchmarks, which typically evaluate either knowledge question answering without grounding in code or static web code generation without scientific interactivity. To evaluate this integrated ability, we design a hybrid framework that combines programmatic functional testing to rigorously verify interaction logic with visually-grounded qualitative testing to assess rendered outputs against reference snapshots. Building on this framework, we present InteractScience, a benchmark consisting of a substantial set of carefully designed questions across five scientific domains, each paired with unit tests, reference snapshots, and checklists. We evaluate 30 leading open- and closed-source LLMs and report results that highlight ongoing weaknesses in integrating domain knowledge with interactive front-end coding. Our work positions InteractScience as the first benchmark to automatically measure this combined capability with realistic interactive operations, providing a foundation for advancing reliable and educationally useful scientific demonstration code generation. All code and data are publicly available at https://github.com/open-compass/InteractScience.

---

📖 [Read original article](https://arxiv.org/abs/2510.09724)