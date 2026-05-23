---
title: "An Improved Adaptive PID Optimizer with Enhanced Convergence and Stability for Deep Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21968"
author: "Saurabh Saini, Kapil Ahuja, Thomas Wick, Saurav Kumar"
categories: ["cs.LG"]
---

arXiv:2605.21968v1 Announce Type: new Abstract: Optimization is essential in deep learning. The foundational method upon which most optimizers are built is momentum-based stochastic gradient descent. However, it suffers from two key drawbacks. First, it has noisy and varying gradients, and second, it has an overshoot phenomenon. To address noisy gradients, Adam was proposed, which remains the most widely used adaptive optimizer. To address the overshoot phenomenon, a control-theory-based PID optimizer was proposed. To tackle both the limitations within a single framework, several variants of Adaptive PID (AdaPID) have recently been proposed. Although AdaPID performs well, it still inherits two critical drawbacks from Adam, namely convergence and stability issues. In this work, we address both these limitations. To fix the convergence issue, we uniquely integrate the idea of using a non-increasing effective learning rate into AdaPID (originally proposed in AMSGrad, an extension of Adam). To fix the stability issue, we innovatively integrate a gradient difference based modulation factor into AdaPID (originally proposed in DiffGrad, another extension of Adam). Combining both these ideas in AdaPID, results in our novel IAdaPID-ADG optimizer. We evaluate our proposed optimizer on multiple datasets, including benchmark datasets (MNIST and CIFAR10) and real-world datasets (IARC and AnnoCerv). The IAdaPID-ADG substantially outperforms all competing optimizers. Additionally, we perform an ablation study on the MNIST dataset to demonstrate the contribution of each added component.

---

📖 [Read original article](https://arxiv.org/abs/2605.21968)