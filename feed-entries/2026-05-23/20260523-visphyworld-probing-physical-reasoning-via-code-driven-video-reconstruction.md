---
title: "VisPhyWorld: Probing Physical Reasoning via Code-Driven Video Reconstruction"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.13294"
author: "Jiarong Liang, Max Ku, Ka-Hei Hui, Ping Nie, Wenhu Chen"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2602.13294v3 Announce Type: replace-cross Abstract: Evaluating whether Multimodal Large Language Models (MLLMs) genuinely reason about physical dynamics remains challenging. Most existing benchmarks rely on recognition-style protocols such as Visual Question Answering (VQA) and Violation of Expectation (VoE), which can often be answered without committing to an explicit, testable physical hypothesis. We propose VisPhyWorld, an execution-based framework that evaluates physical reasoning by requiring models to generate executable simulator code from visual observations. By producing runnable code, the inferred world representation is directly inspectable, editable, and falsifiable. This separates physical reasoning from rendering. Building on this framework, we introduce VisPhyBench, comprising 209 evaluation scenes derived from 108 physical templates and a systematic protocol that evaluates how well models reconstruct appearance and reproduce physically plausible motion. Our pipeline produces valid reconstructed videos in 97.7% of benchmark runs before fallback. Experiments show that while state-of-the-art MLLMs achieve strong semantic scene understanding, they struggle to accurately infer physical parameters and to simulate consistent physical dynamics. Our code is available https://github.com/TIGER-AI-Lab/VisPhyWorld

---

📖 [Read original article](https://arxiv.org/abs/2602.13294)