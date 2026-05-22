---
title: "Physics-informed convolutional neural networks for fluid flow through porous media"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20250"
author: "Rafa{\\l} Topolnicki, Pawe{\\l} D{\\l}otko, Maciej Matyka"
categories: ["cs.LG", "physics.comp-ph", "physics.flu-dyn"]
---

arXiv:2605.20250v1 Announce Type: new Abstract: Accurate simulation of fluid flow in porous media is challenging due to complex pore-space geometries and the computational cost of solving the Navier-Stokes equations. This difficulty is particularly important when repeated simulations are required, as standard numerical solvers may converge slowly in intricate porous domains. We present a neural-network-based framework for predicting pore-scale velocity fields directly from sample geometry. The method uses a convolutional encoder-decoder architecture with skip connections to preserve spatial detail while extracting multi-scale features. Physical consistency is encouraged through a custom loss function combining velocity reconstruction with incompressibility, no-flow conditions inside solids, periodicity constraints, and agreement with the global tortuosity index. We analyze the influence of the corresponding loss weights and quantify the contribution of individual loss components to prediction accuracy. Several CNN backbones are evaluated to identify architectures providing accurate and robust predictions. The generalization ability of the trained model is tested on samples outside the training distribution, including changes in obstacle geometry, boundary conditions, porosity, and realistic porous structures. Finally, we demonstrate a practical use of the predicted velocity fields as initial conditions for Lattice-Boltzmann simulations. This warm-start strategy accelerates solver convergence, reducing the number of iterations in over 90% of tested cases.

---

📖 [Read original article](https://arxiv.org/abs/2605.20250)