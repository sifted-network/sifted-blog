---
title: "E-PCN: Jet Tagging with Explainable Particle Chebyshev Networks Using Kinematic Features"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2512.07420"
author: "Md Raqibul Islam, Adrita Khan, Mir Sazzat Hossain, Choudhury Ben Yamin Siddiqui, Md. Zakir Hossan, Tanjib Khan, M. Arshad Momen, Amin Ahsan Ali, AKM Mahbubur Rahman"
categories: ["hep-ph", "cs.LG", "hep-ex"]
---

arXiv:2512.07420v2 Announce Type: cross Abstract: The identification and classification of collimated particle sprays, or jets, are essential for interpreting data from high-energy collider experiments. While deep learning has improved jet classification, it often lacks interpretability. We introduce the Explainable Particle Chebyshev Network (E-PCN), a graph neural network extending the Particle Chebyshev Network (PCN). E-PCN integrates kinematic variables into jet classification by constructing four graph representations per jet, each weighted by a distinct variable: angular separation ($\Delta$), transverse momentum ($k_T$), momentum fraction ($z$), and invariant mass squared ($m^2$). We use the concept of Gradient-weighted Class Activation Mapping (Grad-CAM) to determine which kinematic variables dominate classification outcomes. Analysis reveals that angular separation and transverse momentum collectively account for approximately 76% of classification decisions (40.72% and 35.67%, respectively), with momentum fraction and invariant mass contributing the remaining 24%. Evaluated on the JetClass dataset with 10 signal classes, E-PCN achieves a macro-accuracy of 94.67%, macro-AUC of 96.78%, and macro-AUPR of 86.79%, representing improvements of 2.36%, 4.13%, and 24.88% respectively over the baseline PCN implementation, while demonstrating physically interpretable feature learning.

---

📖 [Read original article](https://arxiv.org/abs/2512.07420)