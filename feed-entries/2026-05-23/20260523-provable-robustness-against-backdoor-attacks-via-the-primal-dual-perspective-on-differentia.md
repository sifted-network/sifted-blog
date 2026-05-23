---
title: "Provable Robustness against Backdoor Attacks via the Primal-Dual Perspective on Differential Privacy"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21780"
author: "Aman Saxena, Jan Schuchardt, Yan Scholten, Stephan G\\\"unnemann"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.21780v1 Announce Type: new Abstract: Randomized smoothing is a powerful tool for certifying robustness to adversarial perturbations, including poisoning attacks via randomized training and evasion attacks via randomized inference. Extending these guarantees to backdoor attacks, where training and test data are jointly perturbed, remains challenging because training- and test-time randomized mechanisms must be analyzed within a single robustness certificate. We address this by connecting randomized smoothing to the dual view of differential privacy through privacy profiles, which provide a numerical procedure for composing heterogeneous mechanisms. The resulting framework enables tight, modular, end-to-end certification of complex, composed mechanisms while leveraging existing analyses of differentially private mechanisms. We instantiate the framework for DP-SGD and Deep Partition Aggregation with inference-time smoothing, deriving joint robustness guarantees against both training-time and inference-time attacks. Experiments on MNIST and CIFAR-10 demonstrate the effectiveness of our framework. Overall, we provide a principled and general framework for using composite mechanisms to certify robustness under complex threat models that better capture the capabilities of real-world adversaries.

---

📖 [Read original article](https://arxiv.org/abs/2605.21780)