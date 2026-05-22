---
title: "GraphRAG on Consumer Hardware: Benchmarking Local LLMs for Healthcare EHR Schema Retrieval"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20815"
author: "Peter Fernandes, Ria Kanjilal"
categories: ["cs.CL", "cs.AI", "cs.IR", "cs.LG"]
---

arXiv:2605.20815v1 Announce Type: cross Abstract: Graph-based Retrieval Augmented Generation (GraphRAG) extends retrieval-augmented generation to support structured reasoning over complex corpora, but its reliability under resource-constrained, privacy-sensitive deployments remains unclear. In healthcare, where Electronic Health Record (EHR) data is complex and strictly regulated, reliance on cloud-based large language models (LLMs) introduces challenges in cost, latency, and compliance. In this work, we present a systematic evaluation of GraphRAG for EHR schema retrieval using locally deployed open-source LLMs. We implement the Microsoft GraphRAG pipeline on real-world EHR schema documentation and benchmark four models, including Llama 3.1 (8B), Mistral (7B), Qwen 2.5 (7B), and Phi-4-mini (3.8B), each deployed via Ollama on a single consumer GPU (8 GB VRAM). We evaluate indexing efficiency, knowledge graph construction, query latency, answer quality, and hallucination under both global and local retrieval modes. Our results reveal substantial differences: Llama 3.1 produces the richest knowledge graph (1,172 entities), Qwen 2.5 achieves the best answer quality (3.3/5), Phi-4-mini fails to complete the pipeline due to structured-output errors, and Mistral exhibits degenerate repetition behavior. We further show that GraphRAG exhibits a practical capacity threshold, where models below approximately 7B parameters fail to reliably produce valid structured outputs and cannot complete the pipeline. In addition, indexing and answer quality are decoupled across models, and local retrieval consistently outperforms global summarization in both latency and factual grounding, with reduced hallucination. These findings demonstrate that GraphRAG is feasible on consumer hardware while highlighting the importance of model selection and retrieval design for robust deployment in regulated settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.20815)