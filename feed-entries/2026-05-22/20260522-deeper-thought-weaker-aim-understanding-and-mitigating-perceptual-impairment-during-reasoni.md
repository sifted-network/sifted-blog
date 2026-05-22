---
title: "Deeper Thought, Weaker Aim: Understanding and Mitigating Perceptual Impairment during Reasoning in Multimodal Large Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.14184"
author: "Ruiying Peng, Xueyu Wu, Jing Lei, Lu Hou, Yuanzheng Ma, Xiaohui Li"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2603.14184v2 Announce Type: replace-cross Abstract: Multimodal large language models (MLLMs) often suffer from perceptual impairments under extended reasoning modes, particularly in visual question answering (VQA) tasks. We identify attention dispersion as the underlying cause: during multi-step reasoning, the model's visual attention becomes scattered and drifts away from question-relevant regions, effectively "losing focus" on the visual input. To better understand this phenomenon, we analyze the attention maps of MLLMs and observe that reasoning prompts significantly reduce attention to regions critical for answering the question. We further find a strong correlation between the model's overall attention on image tokens and the spatial dispersiveness of its attention within the image. Leveraging this insight, we propose a training-free Visual Region-Guided Attention (VRGA) framework that selects visual heads based on an entropy-focus criterion and reweights their attention, effectively guiding the model to focus on question-relevant regions during reasoning. Extensive experiments on vision-language benchmarks demonstrate that our method effectively alleviates perceptual degradation, leading to improvements in visual grounding and reasoning accuracy while providing interpretable insights into how MLLMs process visual information.

---

📖 [Read original article](https://arxiv.org/abs/2603.14184)