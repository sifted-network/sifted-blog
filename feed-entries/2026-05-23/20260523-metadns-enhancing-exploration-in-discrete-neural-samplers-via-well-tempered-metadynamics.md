---
title: "MetaDNS: Enhancing Exploration in Discrete Neural Samplers via Well-Tempered Metadynamics"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21722"
author: "Xiaochen Du, Juno Nam, Jaemoo Choi, Wei Guo, Sathya Edamadaka, Junyi Sha, Elton Pan, Yongxin Chen, Molei Tao, Rafael G\\'omez-Bombarelli"
categories: ["cond-mat.stat-mech", "cond-mat.mtrl-sci", "cs.LG"]
---

arXiv:2605.21722v1 Announce Type: cross Abstract: Sampling from discrete distributions with multiple modes and energy barriers is fundamental to machine learning and computational physics. Recent discrete neural samplers like MDNS suffer from mode collapse and fail to sample high-energy barrier regions between modes, which is critical for free energy estimation and understanding phase transitions. We propose Metadynamics Discrete Neural Sampler (MetaDNS), a general framework integrating well-tempered metadynamics into discrete diffusion or autoregressive samplers. By maintaining an adaptive, history-dependent bias potential along selected low-dimensional coordinates, MetaDNS forces exploration of previously inaccessible regions, enabling free energy reconstruction infeasible with standard neural samplers due to a lack of high-energy samples. On challenging low-temperature benchmarks including Ising, Potts, and the copper-gold binary alloy, MetaDNS reproduces the thermodynamic distribution. Compared to MCMC-based metadynamics, MetaDNS also achieves comparable exploration requiring fewer bias deposition steps.

---

📖 [Read original article](https://arxiv.org/abs/2605.21722)