---
title: "Velocityformer: Broken-Symmetry-Matched Equivariant Graph Transformers for Cosmological Velocity Reconstruction"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21483"
author: "Tilman Tr\\\"oster, David Mirkovic, Veronika Oehl, Arne Thomsen"
categories: ["astro-ph.CO", "cs.LG"]
---

arXiv:2605.21483v1 Announce Type: cross Abstract: Precise measurement of the kinematic Sunyaev-Zel'dovich (kSZ) effect - a probe of the large-scale distribution of baryonic matter, a key observable for cosmological inference - requires accurate reconstruction of galaxy velocities from spectroscopic surveys. The signal-to-noise ratio (SNR) of kSZ measurements scales directly with the correlation coefficient $r$ between reconstructed and true velocities. We introduce Velocityformer, an equivariant graph transformer architecture designed to match the specific symmetry of the observational data. While the underlying physics is equivariant with respect to translations and rotations, observational effects break this symmetry due to the preferred line-of-sight direction. Matching the model's inductive bias to the data's broken symmetry consistently improves performance across all model sizes and training volumes, with Velocityformer improving $r$ by 35% over the standard linear theory baseline and outperforming ML baselines at every data volume. By matching the model's inductive bias to the data and conditioning on the physics-based long-wavelength solution, Velocityformer is highly data-efficient, training to high accuracy on as few as 4 low-fidelity simulations, and generalises zero-shot across input geometry, cosmological parameters, and galaxy sample. On high-fidelity simulated galaxy catalogues, this yields a 30% improvement in $r$ over the physical baseline, directly translating to the same SNR gain on observational data.

---

📖 [Read original article](https://arxiv.org/abs/2605.21483)