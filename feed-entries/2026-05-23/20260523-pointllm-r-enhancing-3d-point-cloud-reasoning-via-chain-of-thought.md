---
title: "PointLLM-R: Enhancing 3D Point Cloud Reasoning via Chain-of-Thought"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22013"
author: "Chaoqi Chen, Qile Xu, Wenjun Zhou, Hui Huang"
categories: ["cs.CV", "cs.GR", "cs.LG"]
---

arXiv:2605.22013v1 Announce Type: cross Abstract: Understanding 3D point clouds through language remains a fundamental challenge in computer graphics and visual computing, due to the irregular structure of point cloud data and the lack of explicit reasoning in existing 3D multimodal models. While Chain-of-Thought (CoT) reasoning has shown strong effectiveness in LLMs and image-based MLLMs, its extension to 3D understanding remains largely underexplored. In this paper, we propose a data-centric framework for constructing large-scale CoT supervision tailored to 3D point cloud understanding. Our framework consists of a two-stage pipeline that first refines point-text instruction data via vision-language-model-based quality evaluation and reference-guided refinement, and then synthesizes high-quality reasoning paths through Human-in-the-Loop Prompt Optimization (HiLPO). Using this approach, we build PoCoTI, a CoT-enhanced point-text instruction-following dataset containing 55K samples with explicit reasoning paths. Fine-tuning PointLLM on PoCoTI yields PointLLM-R, a reasoning-capable 3D multimodal language model. Extensive experiments on generative 3D classification and captioning demonstrate that PointLLM-R achieves state-of-the-art performance and generalizes robustly to real-world scanned point clouds and multi-turn dialogue scenarios.

---

📖 [Read original article](https://arxiv.org/abs/2605.22013)