---
title: "Sample Complexity of Transfer Learning: An Optimal Transport Approach"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20545"
author: "Haoyang Cao, Xin Guo, Wenpin Tang, Guan Wang"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.20545v1 Announce Type: cross Abstract: Transfer learning is an essential technique for many machine learning/AI models of complex structures such as large language models and generative AI. The essence of transfer learning is to leverage knowledge from resolved source tasks for a new target task, especially when the sample size $m$ of the training data for the latter is low. In this work, we rigorously analyze the potential benefit of transfer learning in terms of sample efficiency. Specifically, taking an optimal transport viewpoint of transfer learning, we find that when the data dimension $d$ is higher than $3$, the sample complexity for transfer learning is $O(m^{-(\alpha+1)/d})$, with $\alpha$ indicating the smoothness of the data distribution, as opposed to the $O(m^{-p/d})$ sample complexity for direct learning with $p$ indicating the smoothness of the optimal target model. Our finding theoretically supports a better sample efficiency for transfer learning, when the target task is optimizing over a family of not-so-smooth models (i.e., highly complex networks with the possible use of non-smooth activation functions). Using image classification as an example, we numerically demonstrate the sample efficiency for transfer learning, that is, in the data hungry regime, the model performance can be significantly improved by transfer learning.

---

📖 [Read original article](https://arxiv.org/abs/2605.20545)