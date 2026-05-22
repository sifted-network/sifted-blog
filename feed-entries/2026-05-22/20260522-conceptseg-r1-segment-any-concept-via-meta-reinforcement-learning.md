---
title: "ConceptSeg-R1: Segment Any Concept via Meta-Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20385"
author: "Yuan Zhao, Youwei Pang, Jiaming Zuo, Wei Ji, Kailai Zhou, Bin Fan, Yunkang Cao, Lihe Zhang, Xiaofeng Liu, Huchuan Lu, Weisi Lin, Dacheng Tao, Xiaoqi Zhao"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20385v1 Announce Type: cross Abstract: Recent progress in promptable segmentation has shifted visual perception from object-level localization toward concept-level understanding. However, the notion of a concept remains under-specified, making it unclear whether current methods truly generalize beyond category recognition. In this work, we formalize generalized concept segmentation through a three-level taxonomy consisting of context-independent (CI), context-dependent (CD), and context-reasoning (CR) concepts, which reveals a clear capability gap across increasing levels of cognitive complexity. To address this challenge, we propose ConceptSeg-R1, a unified framework that reformulates concept segmentation as rule-induced concept grounding. At the core of our method is Meta-GRPO, a meta-reinforcement learning mechanism that learns transferable task rules from visual demonstrations and verifies them through proxy reasoning. The inferred reasoning states are then translated into segmentation-ready concept prompts via a lightweight concept translation module, enabling deductive application to target images. A shortcut routing strategy further preserves the native efficiency of segmentation models on simple cases. To systematically evaluate generalized concept segmentation, we conduct extensive experiments across diverse CI, CD, and CR concept segmentation benchmarks spanning natural, industrial, medical and reasoning-intensive domains. Without bells and whistles, ConceptSeg-R1 achieves strong performance across the full concept hierarchy while maintaining the native capability of promptable segmentation backbones. As an initial step toward segmenting any concept, we hope ConceptSeg-R1 can serve as a practical baseline for advancing segmentation from object-level prediction toward concept-level understanding.

---

📖 [Read original article](https://arxiv.org/abs/2605.20385)