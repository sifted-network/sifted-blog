---
title: "Automatic Discovery of Disease Subgroups by Contrasting with Healthy Controls"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21301"
author: "Robin Louiset, Edouard Duchesnay, Benoit Dufumier, Antoine Grigis, Pietro Gori"
categories: ["cs.LG", "cs.CV"]
---

arXiv:2605.21301v1 Announce Type: new Abstract: In biomedical Subgroup Discovery, practitioners are interested in discovering interpretable and homogeneous subgroups within a group of patients. In this paper, assuming that healthy subjects (i.e., controls) share common but irrelevant factors of variation with the patients, we motivate and develop a Contrastive Subgroup Discovery method, entitled Deep UCSL. By contrasting patients with controls, Deep UCSL identifies subgroups driven solely by pathological factors, ignoring common variability shared with healthy subjects. Our framework employs a deep feature extractor to learn a discriminative representation space. Mathematically, we derive a novel loss based on the conditional joint likelihood of latent clusters and patient/control labels, optimized via an Expectation-Maximization strategy alternating between subgroup inference and feature encoder updates. A regularization term further encourages representations to capture disease-specific variability while ignoring variability shared with controls. Compared to previous related works, our approach quantitatively improves the quality of the estimated subgroups, as demonstrated on a MNIST example and four distinct real medical imaging datasets. Code and datasets are available at: https://github.com/rlouiset/deep_ucsl.

---

📖 [Read original article](https://arxiv.org/abs/2605.21301)