---
title: "Beyond One-Size-Fits-All: Adaptive Subgraph Denoising for Zero-Shot Graph Learning with Large Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.02938"
author: "Fengzhi Li, Liang Zhang, Yuan Zuo, Ruiqing Zhao, YanSong Liu, Yunfei Ma, Fanyu Meng, Junlan Feng"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2603.02938v2 Announce Type: replace-cross Abstract: Graph-based tasks in the zero-shot setting remain a significant challenge due to data scarcity and the inability of traditional Graph Neural Networks (GNNs) to generalize to unseen domains or label spaces. While recent advancements have transitioned toward leveraging Large Language Models (LLMs) as predictors to enhance GNNs, these methods often suffer from cross-modal alignment issues. A recent paradigm (i.e., Graph-R1) overcomes the aforementioned architectural dependencies by adopting a purely text-based format and utilizing LLM-based graph reasoning, showing improved zero-shot generalization. However, it employs a task-agnostic, one-size-fits-all subgraph extraction strategy, which inevitably introduces significant structural noise--irrelevant neighbors and edges--that distorts the LLMs' receptive field and leads to suboptimal predictions. To address this limitation, we introduce GraphSSR, a novel framework designed for adaptive subgraph extraction and denoising in zero-shot LLM-based graph reasoning. Specifically, we propose the SSR pipeline, which dynamically tailors subgraph extraction to specific contexts through a "Sample-Select-Reason" process, enabling the model to autonomously filter out task-irrelevant neighbors and overcome the one-size-fits-all issue. To internalize this capability, we develop SSR-SFT, a data synthesis strategy that generates high-quality SSR-style graph reasoning traces for supervised fine-tuning of LLMs. Furthermore, we propose SSR-RL, a two-stage reinforcement learning framework that explicitly regulates sampling and selection operations within the proposed SSR pipeline designed for adaptive subgraph denoising. By incorporating Authenticity-Reinforced and Denoising-Reinforced RL, we guide the model to achieve accurate predictions using parsimonious, denoised subgraphs for reasoning.

---

📖 [Read original article](https://arxiv.org/abs/2603.02938)