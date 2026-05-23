---
title: "Disentanglement Beyond Generative Models with Riemannian ICA"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22531"
author: "Edmond Cunningham"
categories: ["cs.LG"]
---

arXiv:2605.22531v1 Announce Type: new Abstract: There is a gap between the theoretical foundations of disentanglement and the practice of modern representation learning. Existing theoretical frameworks, particularly Independent Component Analysis (ICA) and its nonlinear variants, assume a generative model with statistically independent latent variables underlying the data so that disentanglement amounts to identifying the latents that could have generated the data. This generative framework is interpretable and theoretically justified, but its strong assumptions make it difficult to apply to modern representation learning. Modern pretrained encoders often learn features that exhibit disentangled properties without making generative assumptions, yet there is no general theory for interpreting these features as independent factors of variation. We take a step toward such a theory by introducing Riemannian ICA (RICA), which replaces ICA's global generative model with local geometric structure. RICA is founded on the observation that in ICA, the factors of variation underlying a data point can be understood through radial curves emanating from the point that map to axis-aligned lines in the latent space. We formalize this perspective using Riemannian geometry and introduce our theory in a way that is consistent with the existing generative approach. Our main contribution is the disentanglement tensor, which encodes a second-order notion of disentanglement that we call pointwise disentanglement. This tensor depends on the Hessian of the data log likelihood as well as the Ricci curvature induced by the model. In a controlled source recovery setting with known ground-truth sources, RICA recovers sources across several manifolds, while the success of ICA baselines depends on the coordinates used to represent the observations. Our work provides a theoretical basis for studying local disentanglement without assuming a global generative model.

---

📖 [Read original article](https://arxiv.org/abs/2605.22531)