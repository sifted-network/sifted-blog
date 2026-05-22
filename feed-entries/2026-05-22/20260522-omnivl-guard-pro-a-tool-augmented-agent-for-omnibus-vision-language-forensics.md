---
title: "OmniVL-Guard Pro: A Tool-Augmented Agent for Omnibus Vision-Language Forensics"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16962"
author: "Jinjie Shen, Zheng Huang, Yuchen Zhang, Yujiao Wu, Yaxiong Wang, Lechao Cheng, Shengeng Tang, Tianrui Hui, Nan Pu, Zhun Zhong"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.16962v2 Announce Type: replace-cross Abstract: Existing vision-language forgery detection and grounding methods operate under a closed-world paradigm, assuming verification can be completed by the model alone. However, self-contained MLLMs are constrained by finite parametric knowledge, static training corpora, and limited perceptual resolution, creating a practical ceiling in dynamic open-world forensics -- particularly for real-time event verification requiring external clues and forgery segmentation demanding fine-grained scrutiny of local manipulations. To address these limitations, we shift from scaling up the self-contained model toward reaching beyond it. We propose \textbf{OmniVL-Guard Pro}, a tool-augmented agent that extends unified forensics from closed-world prediction to open-world clues-driven reasoning. OmniVL-Guard Pro integrates a tool environment spanning real-time event search, local cropping and zooming, edge-anomaly screening, face detection, video frame extraction, and SAM3-based segmentation. To generate high-quality tool-reasoning trajectories, we introduce \textbf{Tree-Structured Self-Evolving Tool Trajectory Generation}, which produces diverse trajectories through seed guidance, guider-free self-evolution, and weakly-hinted hard sample synthesis, yielding the Full-Spectrum Tool Reasoning (FSTR) dataset for training. We further propose \textbf{Checker-Guided Agentic Reinforcement Learning} (CGARL), which provides process-level supervision to penalize cases where the answer is correct but the reasoning is distorted. Extensive experiments demonstrate that OmniVL-Guard Pro achieves state-of-the-art performance across various tasks, and exhibits strong zero-shot generalization. The FSTR dataset and code for OmniVL-Guard Pro will be publicly released at https://github.com/shen8424/OmniVL-Guard-Pro.

---

📖 [Read original article](https://arxiv.org/abs/2605.16962)