---
title: "DrugRAG: Enhancing Pharmacy LLM Performance Through A Novel Retrieval-Augmented Generation Pipeline"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.14896"
author: "Houman Kazemzadeh, Kiarash Mokhtari Dizaji, Seyed Reza Tavakoli, Farbod Davoodi, MohammadReza KarimiNejad, Parham Abed Azad, Fatemeh Latifi, Ali Sabzi, Armin Khosravi, Siavash Ahmadi, Babak Khalaj, Mohammad Hossein Rohban, Glolamali Aminian, Zohreh Amoozgar, Tahereh Javaheri"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2512.14896v2 Announce Type: replace-cross Abstract: In our study, we evaluated large language model (LLM) performance on pharmacy licensure-style question-answering tasks and developed an external knowledge integration method to improve accuracy. We benchmarked ten LLMs with varying parameter sizes (8 billion to 70+ billion) using a 141-question pharmacy dataset, measuring baseline accuracy without modification. Baseline performance ranged from 46% to 92%, with GPT-5 (92%) and o3 (89%) achieving the highest scores, while smaller open-source models showed substantially lower performance. We then developed DrugRAG, a three-step retrieval-augmented generation (RAG) pipeline that retrieves structured, evidence-based drug information and augments model prompts with contextual pharmacological evidence, operating externally and requiring no changes to model architecture or parameters. DrugRAG increased accuracy across all five evaluated models, with gains ranging from 7 to 21 percentage points (e.g., Gemma 3 27B: 61.0% to 71%, Llama 3.1 8B: 46% to 67%). McNemar analyses demonstrated statistically significant paired improvements primarily in smaller and mid-sized open-source models. These findings demonstrate that integrating structured external drug knowledge via DrugRAG can improve LLM performance on pharmacy-focused question-answering tasks without modifying the underlying models, providing a practical pipeline for enhancing evidence-based pharmacy-focused AI applications.

---

📖 [Read original article](https://arxiv.org/abs/2512.14896)