---
title: "PolycubeNet: A Dual-latent Diffusion Model for Polycube-Based Hexahedral Mesh Generation"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20274"
author: "Lu He, Qitao Deng, Junjiang Deng, Liangbin Deng, Yanjun Liang, Wenting Yang, Guoqiang Wang, Na Lei"
categories: ["cs.GR", "cs.AI"]
---

arXiv:2605.20274v1 Announce Type: cross Abstract: Hexahedral meshes are widely used in simulation pipelines, yet automatic generation remains challenging for complex CAD geometries. Polycube-based hexahedral meshing is a representative approach due to its regular, parameterization-friendly structure, but existing polycube construction methods often rely on intricate surface segmentation and local heuristics, which can produce artifacts or fail on difficult shapes. In this paper, we propose an end-to-end framework for polycube generation based on conditional diffusion models. Given an input geometry represented as a point cloud, our method directly produces a corresponding polycube point cloud, eliminating the need for explicit surface segmentation or predefined polycube templates. At the core of our approach is a dual-latent conditional diffusion architecture that confines computationally expensive self-attention operations to a fixed-capacity, low-dimensional latent space. This design effectively decouples computational complexity from the resolution of both the input geometry and the output polycube, thereby avoiding the quadratic cost typical of point cloud self-attention mechanisms while supporting flexible input and output resolutions. To obtain a hexahedral mesh, the generated polycube is aligned to the input shape via rigid and non-rigid point cloud registration to establish surface correspondence, followed by a polycube-to-hex pipeline. We additionally create and release a paired dataset of CAD meshes and their corresponding polycube meshes, together with the core implementation of our model. Experiments show that PolycubeNet generalizes to complex CAD models with arbitrary genus and produces high-quality polycube structures within seconds, improving robustness and efficiency over prior learning-based approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.20274)