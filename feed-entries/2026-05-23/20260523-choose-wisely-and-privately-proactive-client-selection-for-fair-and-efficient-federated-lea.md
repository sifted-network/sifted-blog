---
title: "Choose Wisely and Privately: Proactive Client Selection for Fair and Efficient Federated Learning"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20975"
author: "Adda Akram Bendoukha, Heber Hwang Arcolezi, Nesrine Kaaniche, Aymen Boudguiga"
categories: ["cs.LG", "cs.CR"]
---

arXiv:2605.20975v2 Announce Type: replace Abstract: Federated Learning enables collaborative model training across decentralized data sources without data transfer. Averaging-based FL is limited by the presence of non-IID data, which negatively impacts convergence speed and final model accuracy. Conventional alternatives suffer from significant inefficiency. Clients with noisy or highly heterogeneous data contribute expensive gradient computations that are either discarded or heavily down-weighted before aggregation. These reactive approaches waste computational resources, require more communication rounds and result in unnecessary privacy exposure. In this paper, we propose a proactive client selection framework that aims to find an optimal federation of clients whose combined data match utility and fairness requirements before training begins. Our method relies on mutual information computed from differentially private contingency tables to quantify the relevance of cross-feature correlations in the union dataset. We introduce a Potential Federation Loss (PFL) over the set of fixed-size federations, which balances two objectives. Maximizing collective data utility while ensuring fair cross-features correlations to prevent group unfairness. Client selection is expressed as an optimal subset search problem over the PFL objective, which we solve using simulated annealing under strong differential privacy guarantees for clients' local statistics. Experimental results on four benchmarks show faster, fairer, and more accurate models trained on optimally found federations, compared to uniform sampling, even when state-of-the-art adaptive aggregation or sampling strategies are employed.

---

📖 [Read original article](https://arxiv.org/abs/2605.20975)