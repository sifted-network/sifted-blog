---
title: "Federated Learning of Nonlinear Temporal Dynamics with Graph Attention-based Cross-Client Interpretability"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2602.13485"
author: "Ayse Tursucular, Ayush Mohanty, Nazal Mohamed, Nagi Gebraeel"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2602.13485v2 Announce Type: replace Abstract: Networks of modern industrial systems are increasingly monitored by distributed sensors, where each system comprises multiple subsystems generating high dimensional time series data. These subsystems are often interdependent, making it important to understand how temporal patterns at one subsystem relate to others. This is challenging in decentralized settings where raw measurements cannot be shared and client observations are heterogeneous. In practical deployments each subsystem (client) operates a fixed proprietary model that cannot be modified or retrained, limiting existing approaches. Nonlinear dynamics further make cross client temporal interdependencies difficult to interpret because they are embedded in nonlinear state transition functions. We present a federated framework for learning temporal interdependencies across clients under these constraints. Each client maps high dimensional local observations to low dimensional latent states using a nonlinear state space model. A central server learns a graph structured neural state transition model over the communicated latent states using a Graph Attention Network. For interpretability we relate the Jacobian of the learned server side transition model to attention coefficients, providing the first interpretable characterization of cross client temporal interdependencies in decentralized nonlinear systems. We establish theoretical convergence guarantees to a centralized oracle and validate the framework through synthetic experiments demonstrating convergence, interpretability, scalability and privacy. Additional real world experiments show performance comparable to decentralized baselines.

---

📖 [Read original article](https://arxiv.org/abs/2602.13485)