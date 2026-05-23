---
title: "MAVEN: A Multi-stage Agentic Annotation Pipeline for Video Reasoning Tasks"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21917"
author: "Han Zhang, Wanting Jiang, Tomasz Kornuta, Tian Zheng, Vidya Murali"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21917v1 Announce Type: cross Abstract: Training Vision Language Models (VLMs) for video event reasoning requires high-quality structured annotations capturing not only what happened, but when, where, why, and with what consequence, at a scale manual labelling cannot support. We present MAVEN (Multi-stage Agentic Video Event aNnotation), a multi-stage agentic pipeline that turns raw videos into multi-task training data with Chain-of-Thought (CoT) reasoning traces, organized around a designated Event of Focus. At its core, MAVEN synthesizes a Multi-Scale Spatio-Temporal Event Description (MSTED) from three complementary caption levels; this explicit intermediate serves as the sole input to downstream Q&A generation across multiple task formats. Crucially, MAVEN supports agent-driven domain adaptation: given a new video dataset and target question examples, the agent redesigns all prompts top-down without manual re-engineering. A hierarchical refinement loop further classifies annotation errors against a taxonomy, traces root causes to the originating pipeline stage, and applies targeted edits that rewrite prompts or modify the pipeline structure itself, iteratively improving data quality. We apply MAVEN to label over 5,300 traffic videos and fine-tune Cosmos-Reason2-8B on the resulting data. On a private CCTV evaluation set, fine-tuning surpasses both Gemini 2.5 Pro and 3.1 Flash, including a $+38.8$-point gain in MCQ accuracy over zero-shot. On AccidentBench, CCTV-only training lifts Cosmos-Reason2 by $+10.7$ MCQ points and matches Gemini 2.5 Pro despite seeing no dashcam videos; adding agent-adapted dashcam annotations narrows the gap to Gemini 3.1 Flash, and RL post-training pushes overall performance past both Gemini baselines. Qualitative results on warehouse surveillance and public safety videos further show the agentic workflow readily adapts the pipeline to new domains.

---

📖 [Read original article](https://arxiv.org/abs/2605.21917)