---
title: "Flow Map Language Models: One-step Language Modeling via Continuous Denoising"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.16813"
author: "Chanhyuk Lee, Jaehoon Yoo, Manan Agarwal, Sheel Shah, Jerry Huang, Aditi Raghunathan, Seunghoon Hong, Nicholas M. Boffi, Jinwoo Kim"
categories: ["cs.CL", "cs.AI"]
---

arXiv:2602.16813v3 Announce Type: replace-cross Abstract: Language models based on discrete diffusion have attracted widespread interest for their potential to provide faster generation than autoregressive models. Despite their promise, these models typically produce samples whose quality sharply degrades in the few-step regime, preventing a dramatic speedup in practice. Here, we show that language models based on continuous flows over one-hot token embeddings can outperform discrete diffusion in both quality and speed. Importantly, our continuous formulation defines a unique flow map that can be learned directly for efficient few-step inference, a structure we show is unavailable to discrete methods. In this setting, we show that both the flow and its associated flow map can be learned with simple cross-entropy objectives that respect the simplex geometry of the data, and we identify three distinct choices for flow map distillation whose performance we compare in practice. Using these insights, we build a flow language model (FLM), a continuous flow that matches state-of-the-art discrete diffusion baselines on the One Billion Words (LM1B) and OpenWebText (OWT) datasets. We then distill FLM into a flow map language model (FMLM), whose one-step generation exceeds the 8-step quality of recent few-step discrete diffusion language models. Our work challenges the widely-held hypothesis that discrete noising processes are necessary for generative modeling over discrete modalities and paves the way toward accelerated language modeling at scale. Code is available at https://github.com/david3684/flm.

---

📖 [Read original article](https://arxiv.org/abs/2602.16813)