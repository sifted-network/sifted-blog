---
title: "Theoretical guidelines for annealed Langevin dynamics in compositional simulation-based inference"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21253"
author: "Camille Touron, Gabriel V. Cardoso, Julyan Arbel, Pedro L. C. Rodrigues"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2605.21253v1 Announce Type: cross Abstract: Compositional score-based approaches to simulation-based inference (SBI) approximate the posterior over a shared parameter given $n$ independent observations by aggregating individually learned posterior scores: currently, there are two main propositions of such methods (Geffner et al. (2023), Linhart et al. (2026)). As the resulting composite score does not correspond to the score of any distribution along the forward diffusion path of the true multi-observation posterior, sampling from it via a reverse SDE leads to an irreducible bias. Annealed Langevin dynamics provides a principled alternative: it treats the composite score as the genuine score of a sequence of tractable bridging densities and samples from them in succession. When properly tuned, it could lead to a controllable bias. However, its hyperparameters, namely step sizes, the number of steps per level, and the number of annealing levels, have so far been chosen empirically. We derive Wasserstein bounds for annealed Langevin with approximate scores and translate them into explicit decision rules for these hyperparameters that guarantee a prescribed sampling accuracy, while highlighting different theoretical aspects of each composite score formulation. In the Gaussian setting, we obtain closed-form expressions for all relevant quantities and prove that the bridging densities of Linhart et al. (2026) consistently admit larger step sizes and require fewer total Langevin steps than those of Geffner et al. (2023). Furthermore, we show empirically that the tuning obtained in the Gaussian setting generalizes to more complex problems, thus providing a well-understood and theoretically grounded starting point for practitioners using compositional score-based approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.21253)