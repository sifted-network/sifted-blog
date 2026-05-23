---
title: "Cyber-Physical Anomaly Detection in IoT-Enabled Smart Grids Using Machine Learning and Metaheuristic Feature Optimization"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22749"
author: "Adis Alihod\\v{z}i\\'c, Eva Tuba, Milan Tuba"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.22749v1 Announce Type: cross Abstract: Modern smart grids rely on dense measurement infrastructures, communication links, and intelligent field devices. Although this improves supervision and control, it also increases vulnerability to cyber-physical disruptions. Operators must distinguish physical incidents, such as faults or line disturbances, from malicious actions, such as false data injection or unauthorized command execution. This chapter investigates this problem using the well-known MSU/ORNL Power System Attack Dataset. The proposed method combines machine learning with genetic-algorithm-based feature selection. The objective is twofold: to classify attack and natural events accurately, and to determine whether a reduced set of physically informative PMU/IED measurements can support reliable detection. Several baseline models are evaluated, including logistic regression, RBF-SVM, XGBoost, Random Forest, and Extra Trees. The results show that tree-based ensemble models are the most effective for the considered dataset, with Extra Trees providing the strongest full-feature baseline. After feature selection, the GA + Extra Trees model reduces the clean PMU feature space from 112 attributes to an average of 27.4 attributes over five runs, while increasing macro-F1 from 0.9118 to 0.9212 and ROC-AUC from 0.9791 to 0.9837. These results indicate that many synchronized electrical measurements are redundant. A compact subset of phasor-based features can still provide accurate and interpretable anomaly detection in smart grids.

---

📖 [Read original article](https://arxiv.org/abs/2605.22749)