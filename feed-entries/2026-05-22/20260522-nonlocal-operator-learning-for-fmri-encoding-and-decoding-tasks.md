---
title: "Nonlocal operator learning for fMRI encoding and decoding tasks"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20389"
author: "Andreas Kramer, Saugat Acharya, Alice Giola, Emanuele Zappala"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20389v1 Announce Type: cross Abstract: Functional MRI data exhibit high-dimensional spatiotemporal structure, making both prediction and decoding challenging. In this work, we investigate neural integral-operator-based models for encoding and decoding tasks in fMRI, with particular emphasis on the role of nonlocal spatiotemporal context. We implement a latent neural integral operator framework that performs fixed point iterations in an auxiliary space from which classification and stimuli prediction is performed via a decoder. We evaluate our model on two open-source fMRI datasets. Our experiments examine both decoding of stimuli from fMRI recordings and encoding of fMRI dynamics from stimulus representations. A main focus is the effect of spatiotemporal context: we systematically compare short and long temporal windows, as well as the use of visual cortex vs whole brain recordings, and analyze their influence on performance and latent-space geometry. Across tasks and datasets, larger temporal windows generally improve results and produce more structured learned representations. In decoding experiments, the learned latent space often provides clearer class separation than the raw data. In encoding experiments, although absolute performance remains moderate due to the difficulty of the task, longer temporal windows still yield consistent gains. These findings suggest that neural integral operators provide a promising framework for modeling fMRI dynamics and that broader spatiotemporal context can be beneficial for both prediction and representation learning. More broadly, the results indicate that exploiting distributed nonlocal structure in brain dynamics requires model architectures specifically designed to capture such dependencies.

---

📖 [Read original article](https://arxiv.org/abs/2605.20389)