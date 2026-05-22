---
title: "Point Cloud Sequence Encoding for Material-conditioned Graph Network Simulators"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20978"
author: "Philipp Dahlinger, Bal\\'azs Gyenes, Niklas Freymuth, Luca Geminiani, Tobias W\\\"urth, Johannes Mitsch, Nadja Klein, Luise K\\\"arger, Gerhard Neumann"
categories: ["cs.LG"]
---

arXiv:2605.20978v1 Announce Type: new Abstract: Graph Network Simulators (GNSs) have emerged as powerful surrogates for complex physics-based simulation, offering inherent differentiability and orders-of-magnitude speedups over traditional solvers. However, GNSs typically assume access to the underlying material parameters, such as stiffness or viscosity, severely limiting their utility in realistic experimental settings. While recent meta-learning approaches address the parameter dependency by inferring properties from mesh trajectories, reconstructing a mesh from an observed scene is challenging. In this work, we introduce Point Cloud Encoding for Accurate Context Handling (PEACH), a novel framework that applies in-context learning on point clouds to adapt a learned simulator to unseen physical properties during inference. Our approach relies on a novel spatio-temporal point cloud sequence encoder, as well as two forms of auxiliary supervision to help improve simulation fidelity. We demonstrate that PEACH is capable of accurate zero-shot sim-to-real transfer on a challenging, dynamic scene. Experiments on simulation scenes show that PEACH even outperforms mesh-based baselines on prediction accuracy, while being much more practical for real-world deployment.

---

📖 [Read original article](https://arxiv.org/abs/2605.20978)