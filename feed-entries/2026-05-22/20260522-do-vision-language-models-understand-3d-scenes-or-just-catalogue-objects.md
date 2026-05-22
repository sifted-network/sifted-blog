---
title: "Do Vision--Language Models Understand 3D Scenes or Just Catalogue Objects?"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20448"
author: "Animesh Maheshwari, Divyansh Sahu, Nishit Verma"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.20448v1 Announce Type: cross Abstract: Vision--language models reliably name objects in a scene, but do they represent the 3D layout those objects inhabit? We introduce a 3,034-sample human-curated benchmark targeting three components of spatial understanding: depth-ordered occlusion (probed via three independent counterfactual operationalisations), optical-geometry inference over visible reflections, and volumetric rearrangement planning. Six frontier and open-weight VLMs, scored by trained annotators on 18,204 responses with no LLM-as-judge, reveal a sharp dissociation: models that plan rearrangements over visible layouts at 53--97% accuracy and rarely violate collision constraints fall to 6--45% on occlusion and below 7% on reflections. An embodied-reasoning model reproduces the same profile. White-box analysis on Qwen3-VL-8B-Thinking localises the failure to the visual-token merger: spatial information recoverable throughout the vision encoder becomes inaccessible after token compression and only stabilises again when clean post-merger activations are patched into the language decoder.

---

📖 [Read original article](https://arxiv.org/abs/2605.20448)