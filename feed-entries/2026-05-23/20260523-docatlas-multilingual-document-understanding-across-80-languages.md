---
title: "DocAtlas: Multilingual Document Understanding Across 80+ Languages"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.12623"
author: "Ahmed Heakl, Youssef Mohamed, Abdullah Sohail, Rania Elbadry, Ahmed Nassar, Peter W. J. Staar, Fahad Shahbaz Khan, Imran Razzak, Salman Khan"
categories: ["cs.CL", "cs.CV", "cs.LG"]
---

arXiv:2605.12623v2 Announce Type: replace-cross Abstract: Multilingual document understanding remains limited for low-resource languages due to scarce training data and model-based annotation pipelines that perpetuate existing biases. We introduce DocAtlas, a framework that constructs high-fidelity OCR datasets and benchmarks covering 82 languages and 9 evaluation tasks. Our dual pipelines, differential rendering of native DOCX documents and synthetic LaTeX-based generation for right-to-left scripts produce precise structural annotations in a unified DocTag format encoding layout, text, and component types, without learned models for core annotation. Evaluating 16 state-of-the-art models reveals persistent gaps in low-resource scripts. We show that Direct Preference Optimization (DPO) using rendering-derived ground truth as positive signal achieves stable multilingual adaptation, improving both in-domain (+1.9%) and out-of-domain (+1.8%) accuracy without measurable base-language degradation, where supervised fine-tuning degrades out-of-domain performance by up to 21%. Our best variant, DocAtlas-DeepSeek, improves +1.7% over the strongest baseline. Code is available at https://github.com/ahmedheakl/DocAtlas .

---

📖 [Read original article](https://arxiv.org/abs/2605.12623)