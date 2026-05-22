---
title: "Diffusion Models Memorize in Training -- and Generalize in Inference"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.13419"
author: "Tim Kaiser, Markus Kollmann"
categories: ["cs.LG"]
---

arXiv:2603.13419v2 Announce Type: replace Abstract: Diffusion models generalize well in practice. However, an optimal diffusion model fully memorizes the training data and therefore fails to generalize, raising the question of what induces generalization in a real diffusion model. We show that, despite generalizing at the sample level, diffusion models progressively overfit the denoising training objective and thereby create a generalization gap between the performance on validation and training samples. This gap is most pronounced at intermediate noise levels. Using a fully analytic error-prone toy model, we trace the factors affecting the generalization gap. We find that the optimal denoising flow field localizes sharply around training points, but the model error suppresses the exact recall of training points, yielding a smooth, generalizing flow field. Finally, we find that the generalization gap observed in training does not translate to inference, which would result in a strong similarity between generated samples and training samples. This is because the intermediate states of sampling trajectories are sufficiently far from the distribution of noisy training samples the model is trained on. Together, these findings reveal a novel picture of how diffusion models generalize: the flow field generalizes through model error, which moves sampling trajectories outside the domain of noisy training samples and thereby naturally prevents overfitting.

---

📖 [Read original article](https://arxiv.org/abs/2603.13419)