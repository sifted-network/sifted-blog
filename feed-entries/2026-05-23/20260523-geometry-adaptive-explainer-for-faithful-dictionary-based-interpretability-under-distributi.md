---
title: "Geometry-Adaptive Explainer for Faithful Dictionary-Based Interpretability under Distribution Shift"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21849"
author: "Sungjun Lim, Heedong Kim, Andrew Lee, Kyungwoo Song"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.21849v1 Announce Type: new Abstract: Mechanistic interpretability aims to explain a model's behavior by identifying causally responsible internal structures. Dictionary-based explainers such as sparse autoencoders and transcoders are a primary tool, but their faithfulness under out-of-distribution (OOD) shift has received little systematic attention. We show that distribution shift rotates the subspace that the model actively uses, misaligning the explainer's dictionary trained on in-distribution (ID) activations. We formalize this misalignment as the faithfulness gap, a geometric distance between the ID dictionary and the OOD-active subspace, and show that it controls OOD faithfulness degradation. To reduce this gap, we propose the Geometry-Adaptive Explainer (GAE), which realigns the explainer's dictionary with the OOD-active subspace while preserving the original feature structure. This requires only unlabeled OOD activations and no gradient updates. We prove that GAE improves over the unadapted ID explainer, with excess loss bounded quadratically by the second-moment shift. Empirically, GAE even matches or surpasses all training-based baselines in causal faithfulness across multiple models and OOD settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.21849)