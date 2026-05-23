---
title: "A Diffusive Classification Loss for Learning Energy-based Generative Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2601.21025"
author: "RuiKang OuYang, Louis Grenioux, Jos\\'e Miguel Hern\\'andez-Lobato"
categories: ["stat.ML", "cs.LG"]
---

arXiv:2601.21025v3 Announce Type: replace-cross Abstract: Score-based generative models have recently achieved remarkable success. While they are usually parameterized by the score, an alternative way is to use a series of time-dependent energy-based models (EBMs), where the score is obtained from the negative input-gradient of the energy. Crucially, EBMs can be leveraged not only for generation, but also for tasks such as compositional sampling or building Boltzmann Generators via Monte Carlo methods. However, training EBMs remains challenging. Direct maximum likelihood is computationally prohibitive due to the need for nested sampling, while score matching, though efficient, suffers from mode blindness. To address these issues, we introduce the Diffusive Classification (DiffCLF) objective, a simple method that avoids blindness while remaining computationally efficient. DiffCLF reframes EBM learning as a supervised classification problem across noise levels, and can be seamlessly combined with standard score-based objectives. We validate the effectiveness of DiffCLF by comparing the estimated energies against ground truth in analytical Gaussian mixture cases, and by applying the trained models to tasks such as model composition and Boltzmann Generator sampling. Our results show that DiffCLF enables EBMs with higher fidelity and broader applicability than existing approaches.

---

📖 [Read original article](https://arxiv.org/abs/2601.21025)