---
title: "IVGT: Implicit Visual Geometry Transformer for Neural Scene Representation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16258"
author: "Yuqi Wu, Tianyu Hu, Wenzhao Zheng, Yuanhui Huang, Haowen Sun, Jie Zhou, Jiwen Lu"
categories: ["cs.CV", "cs.AI", "cs.RO"]
---

arXiv:2605.16258v2 Announce Type: replace-cross Abstract: Reconstructing coherent 3D geometry and appearance from unposed multi-view images is a fundamental yet challenging problem in computer vision. Most existing visual geometry foundation models predict explicit geometry by regressing pixel-aligned pointmaps, often suffering from redundancy and limited geometric continuity. We propose IVGT, an Implicit Visual Geometry Transformer that implicitly models continuous and coherent geometry from pose-free multi-view images. This formulation learns a continuous neural scene representation in a canonical coordinate system and supports continuous spatial queries at any 3D positions, retrieving local features to predict signed distance (SDF) values and colors using lightweight decoders. It allows direct extraction of continuous and coherent surface geometry, enabling rendering of RGB images, depth maps, and surface normal maps from arbitrary viewpoints. We train IVGT via multi-dataset joint optimization with 2D supervision and 3D geometric regularization. IVGT demonstrates generalization across scenes and achieves strong performance on various tasks, including mesh and point cloud reconstruction, novel view synthesis, depth and surface normal estimation, and camera pose estimation.

---

📖 [Read original article](https://arxiv.org/abs/2605.16258)