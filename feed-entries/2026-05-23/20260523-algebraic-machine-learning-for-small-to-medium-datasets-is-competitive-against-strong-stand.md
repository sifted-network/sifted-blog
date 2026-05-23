---
title: "Algebraic Machine Learning for Small-to-Medium Datasets Is Competitive against Strong Standard Baselines"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22155"
author: "David Mendez, Fernando Martin-Maroto, Gonzalo G. de Polavieja"
categories: ["cs.LG"]
---

arXiv:2605.22155v1 Announce Type: new Abstract: Symbolic methods are generally not considered competitive with strong modern learners on realistic supervised tasks. We evaluate Algebraic Machine Learning (AML), a framework that learns through subdirect decomposition of algebraic structure rather than numerical optimization, against standard baselines on image and tabular classification across varying training-set sizes. We find that AML trained only on training data without using validation or cross-validation outperforms a family of cross-validated baseline methods including CNNs on small to medium image datasets (50--2000 training examples). On tabular datasets in the same size range, XGBoost is overall the best performing method, but AML is nonetheless comparable to methods incorporating task-specific biases such as LightGBM and random forests. AML achieves this competitive performance across two very different types of datasets using a generic algebraic inductive bias, rather than the modality-specific biases built into standard baselines like CNNs for images or XGBoost for tabular data, and requires no cross validation because it has no task-dependent hyperparameters to tune.

---

📖 [Read original article](https://arxiv.org/abs/2605.22155)