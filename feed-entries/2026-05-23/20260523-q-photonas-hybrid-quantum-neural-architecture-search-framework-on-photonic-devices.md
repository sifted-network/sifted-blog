---
title: "Q-PhotoNAS: Hybrid Quantum Neural Architecture Search Framework on Photonic Devices"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22097"
author: "Farah Elnakhal, Alberto Marchisio, Nouhaila Innan, Gabriel Falcao, Muhammad Shafique"
categories: ["quant-ph", "cs.LG"]
---

arXiv:2605.22097v1 Announce Type: cross Abstract: Photonic quantum computing is a promising platform for scalable quantum machine learning, but designing effective hybrid architectures remains challenging under hardware and optimization constraints. Existing approaches rely on manually tuned architectures that fail to account for the collaboration between classical preprocessing, phase encoding, and photonic circuit structure, limiting both accuracy and hardware compatibility. In this paper, we propose a neural architecture search framework for hybrid photonic quantum-classical models that combines genetic algorithm-based search with learnable quantum phase encoding to systematically explore the joint design space of classical and quantum components. Our framework encodes 19 hyperparameters across six gene groups and evolves a population of hybrid architectures using group-based crossover, per-gene mutation, and elitism, evaluating each candidate on a short training budget before full retraining of the best found design. We evaluate our framework on two image classification benchmarks, Digits and MNIST, achieving final validation accuracies of 99.44% and 98.78%, respectively, with first-principles execution time estimates on the Quandela Ascella photonic QPU projecting single-image inference at 67 ms (Digits) and 149 ms (MNIST). Our quantum contribution analysis further shows that the photonic layer extracts non-redundant features orthogonal to the classical pathway, providing a measurable accuracy advantage over classical-only baselines. Our results demonstrate that automated architecture search is both practical and impactful for hybrid photonic systems, opening the way for systematic design space exploration of quantum AI on photonic devices.

---

📖 [Read original article](https://arxiv.org/abs/2605.22097)