---
title: "A Boundary-Layer Mechanism for One-Third Scaling in Online Softmax Classification"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22341"
author: "Marcel K\\\"uhn, Yoon Thelge, Bernd Rosenow"
categories: ["cs.LG", "cond-mat.dis-nn"]
---

arXiv:2605.22341v1 Announce Type: new Abstract: Hard-label classification is usually trained with smooth surrogate losses, most prominently softmax cross-entropy. We isolate an asymptotic mechanism by which this mismatch between smooth surrogate and discrete labels produces power-law learning curves in an online teacher-student model. After subtracting the mean logit, the thermodynamic-limit dynamics close in centered variables: a growing centered student-teacher alignment $D$ and the residual student variance $\Delta$. At late times, examples away from teacher decision boundaries are already classified confidently and contribute exponentially little. Only boundary layers of width $O(D^{-1})$ remain active, while the noise of fixed-learning-rate online gradient descent maintains a nonzero $\Delta$. As a function of the training time $\alpha$ the late-time solution yields a $\alpha^{-1/3}$ power law not only for the test loss but also for the generalization error $\epsilon_g$, i.e., one minus test accuracy. This is much slower than the $\alpha^{-1}$ Bayes-optimal reference for the same model. We further show that learning-rate schedules can improve the generalization error towards a $\epsilon_g \sim \alpha^{-1/2}$ power law. Simulations support the predicted order parameter dynamics and learning curves. Controlled experiments with correlated Gaussian inputs and whitened pretrained features show that data structure can dominate transients. Therefore, our result is an asymptotic, complementary mechanism rather than an alternative to spectral explanations of neural scaling laws.

---

📖 [Read original article](https://arxiv.org/abs/2605.22341)