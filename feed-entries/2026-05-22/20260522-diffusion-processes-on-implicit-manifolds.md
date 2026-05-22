---
title: "Diffusion Processes on Implicit Manifolds"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2604.07213"
author: "Victor Kawasaki-Borruat, Clara Grotehans, Pierre Vandergheynst, Adam Gosztolai"
categories: ["cs.LG", "math.PR"]
---

arXiv:2604.07213v2 Announce Type: replace Abstract: High-dimensional data are often assumed to lie on lower-dimensional manifolds. We study how to construct diffusion processes on this data manifold using only point cloud samples and without access to charts, projections, or other geometric primitives. Here, we introduce Implicit Manifold-valued Diffusions (IMDs), a data-driven mathematical formalism for defining stochastic differential equations in the original high-dimensional space that describe drifting Brownian particles evolving intrinsically on the underlying manifold. Our construction hinges on approximating the corresponding infinitesimal generator of the diffusion process using a proximity graph over the data and using the carr\'e-du-champ of the generator, which encodes the local tangent spaces of the manifold and lifts the intrinsic process into ambient coordinates. We show that as the number of samples grows, our discrete diffusion process converges in law on the space of probability paths to its smooth manifold counterpart. We further present an Euler-Maruyama scheme for the numerical integration of IMDs. We validate our framework using numerical experiments on synthetic manifolds and the MNIST data manifold, showing that IMDs remain confined over the manifold and enable its guided exploration. Our work provides the mathematical foundation and practical implementations of diffusion processes on data manifolds, opening new avenues for manifold-aware sampling, exploration, and generative modeling.

---

📖 [Read original article](https://arxiv.org/abs/2604.07213)