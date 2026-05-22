---
title: "Universal Reasoner: A Single, Composable Plug-and-Play Reasoner for Frozen LLMs"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2505.19075"
author: "Jaemin Kim, Hangeol Chang, Hyunmin Hwang, Choonghan Kim, Jong Chul Ye"
categories: ["cs.AI", "cs.CL", "cs.LG"]
---

arXiv:2505.19075v3 Announce Type: replace Abstract: Large Language Models (LLMs) have demonstrated remarkable general capabilities, but enhancing skills such as reasoning often demands substantial computational resources and may compromise generalization. While Parameter-Efficient Fine-Tuning (PEFT) methods offer a more resource-conscious alternative, they typically require retraining for each LLM backbone due to architectural dependencies. To address these challenges, we propose Universal Reasoner (UniR)-a modular, composable, and plug-and-play reasoning module that can be used with larger frozen LLMs to provide specialized reasoning capabilities with a shared or aligned token space. Specifically, UniR decomposes the reward into a standalone reasoning module trained in a decoupled manner using verifiable rewards, effectively translating trajectory-level signals into token-level guidance. Once trained, UniR is combined with frozen LLMs at inference time by simply adding its output logits to those of the backbone. This additive structure enables modular composition: multiple UniR modules trained for different tasks can be jointly applied by summing their logits, enabling complex reasoning via composition. Furthermore, UniR demonstrates weak-to-strong generalization, where reasoning modules trained on smaller models effectively guide much larger LLMs in the same model family, and generalize across domains such as in vision language models and medical reasoning. Experiments on mathematical reasoning and machine translation show that UniR surpasses existing fine-tuning methods. Code is open-sourced at https://github.com/hangeol/UniR.

---

📖 [Read original article](https://arxiv.org/abs/2505.19075)