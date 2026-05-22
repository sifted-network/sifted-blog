---
title: "Sustainability Is Not Linear: Quantifying Performance, Energy, and Privacy Trade-offs in On-Device Intelligence"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.26603"
author: "Eziyo Ehsani, Luca Giamattei, Ivano Malavolta, Roberto Pietrantuono"
categories: ["cs.SE", "cs.AI", "cs.LG"]
---

arXiv:2603.26603v2 Announce Type: replace-cross Abstract: The migration of Large Language Models (LLMs) from cloud clusters to edge devices promises enhanced privacy and offline accessibility, but this transition encounters a harsh reality: the physical constraints of mobile batteries, thermal limits, and, most importantly, memory constraints. To navigate this landscape, we constructed a replicable and reproducible experimental pipeline to profile the complex interplay between energy consumption, latency, and quality of LLMs on mobile devices. We harness this pipeline to conduct an empirical case study on a flagship Android device, capturing granular metrics across eight LLMs ranging from 0.5B to 9B parameters without requiring root access, ensuring our findings reflect realistic user conditions. The findings highlight the trade-offs between generation quality, performance, power and resource consumption, revealing which LLMs offer the best balance across metrics and under different conditions. Besides, we uncovered a counter-intuitive quantization energy paradox: while modern importance-aware quantization successfully reduces memory footprints to fit larger models into RAM, we found it yields negligible energy savings compared to standard mixed-precision methods. This proves that for battery life, the architecture of the model, not its quantization scheme, is the decisive factor. We further identified that Mixture-of-Experts (MoE) architectures defy the standard size-energy trend, offering the storage capacity of a 7B model while maintaining the lower energy profile of a 1B to 2B model. Finally, an analysis of these multi-objective trade-offs reveals a pragmatic sweet spot of mid-sized models, such as Qwen2.5-3B, that effectively balance response quality with sustainable energy consumption.

---

📖 [Read original article](https://arxiv.org/abs/2603.26603)