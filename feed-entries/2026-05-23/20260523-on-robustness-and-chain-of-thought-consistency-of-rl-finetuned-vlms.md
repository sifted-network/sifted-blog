---
title: "On Robustness and Chain-of-Thought Consistency of RL-Finetuned VLMs"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.12506"
author: "Rosie Zhao, Anshul Shah, Xiaoyu Zhu, Xinke Deng, Zhongyu Jiang, Yang Yang, Joerg Liebelt, Arnab Mondal"
categories: ["cs.LG"]
---

arXiv:2602.12506v3 Announce Type: replace Abstract: Reinforcement learning (RL) finetuning has become a key technique for enhancing large language models (LLMs) on reasoning-intensive tasks, motivating its extension to vision-language models (VLMs). While RL-tuned VLMs improve on visual reasoning benchmarks, they remain vulnerable to weak visual grounding, hallucinations, and over-reliance on textual cues. We show that simple, controlled textual perturbations, including misleading captions or incorrect chain-of-thought (CoT) traces, cause substantial drops in robustness and confidence, and that these effects are more pronounced when CoT consistency is taken into account across open-source multimodal reasoning models. In contrast, closed models exhibit similar failure modes but maintain markedly greater robustness and reasoning consistency, suggesting that the gap reflects a shortcoming in current open-source RL finetuning rather than an inherent limitation of the task. To better understand these vulnerabilities, we further analyze RL finetuning dynamics and uncover an accuracy-faithfulness trade-off: finetuning raises benchmark accuracy, but can simultaneously erode the reliability of the accompanying CoT and its robustness to contextual shifts. Although adversarial augmentation improves robustness, it does not by itself prevent faithfulness drift. Incorporating a faithfulness-aware reward can restore alignment between answers and reasoning, but when paired with augmentation, training risks collapsing onto shortcut strategies and robustness remains elusive. Together, these findings highlight the limitations of accuracy-only evaluations and motivate training and assessment protocols that jointly emphasize correctness, robustness, and the faithfulness of visually grounded reasoning.

---

📖 [Read original article](https://arxiv.org/abs/2602.12506)