---
title: "Factored Diffusion Policies:Compositionally Generalized Robot Control with a Single Score Network"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22596"
author: "Sayan Mitra, Ege Yuceel, Noah Giles, Abhishek Pai"
categories: ["cs.LG"]
---

arXiv:2605.22596v1 Announce Type: new Abstract: Robotic tasks are typically specified by a tuple of factors, such as the object to be grasped, the obstacles to be avoided, the color of the target, and so on. Collecting expert demonstrations for every combination of factor values grows combinatorially. We present factored diffusion policies: a single shared diffusion network trained with per-factor null-token dropout, whose score decomposes additively across factors at inference. Under approximate conditional independence between factors given the action-observation pair, this composition approximates the true joint score with a bounded uniform error, reducing the training-task budget from a product of factor cardinalities to a sum. A trajectory-tube certificate chains this score-level bound through the reverse-time sampling ODE and a contracting tracking controller into a closed-loop state-trajectory tube whose radius factors into an ODE-sensitivity constant and a per-factor score-error budget. Unlike compositional-diffusion methods for control that combine separately trained networks, we use one shared network. Drone racing experiments confirm both the generalization bound and the certificate. On state-based multi-gate racing, the factored policy passes 90% of held-out gates -- matching an oracle -- while a K-network composition baseline collapses to 3%; on vision-based single-gate traversal, it transfers zero-shot to an unseen venue with +11.7pp success-rate gain and 2.4X crash-rate reduction.

---

📖 [Read original article](https://arxiv.org/abs/2605.22596)