---
title: "CryoNet: A Deep Learning Framework for Multi-Modal Debris-Covered Glacier Mapping. A Case Study of the Poiqu Basin, Central Himalaya"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21527"
author: "Farzaneh Barzegar, Tobias Bolch, Norbert Kuehtreiber, Silvia L. Ullo"
categories: ["eess.IV", "cs.CV", "cs.LG"]
---

arXiv:2605.21527v1 Announce Type: cross Abstract: Glaciers play a critical role as freshwater reserves and indicators of climate change, yet their automatic delineation, especially for debris-covered glaciers, remains challenging due to spectral similarity with surrounding terrain. This study introduces CryoNet, a deep learning framework that leverages a rich multi-modal dataset combining Sentinel-2 optical imagery, DEM-derived topographic variables, spectral indices, Principal Component Analysis (PCA), InSAR coherence and phase, tasseled-cap features, and GLCM texture to discriminate clean-ice glaciers, debris-covered glaciers, and glacial lakes. CryoNet is an encoder-decoder CNN with nested skip connections and spatial-channel Squeeze-and-Excitation (scSE) attention, built upon a ResNet101 encoder to capture hierarchical contextual and spatial features. The study is conducted in the Poiqu Basin in the central Himalaya, and transferability is evaluated by applying the trained model to the Mont Blanc Massif in the Alps. We additionally analyse the importance of each data layer in improving glacier mapping performance. The proposed model achieves an overall IoU of 90.52%, mean Recall of 98.08%, and mean Precision of 92.26%. For debris-covered glaciers specifically, CryoNet obtains an IoU of 90.46%, a recall of 95.79%, and a precision of 94.21%. Across both per-class and overall metrics, CryoNet surpasses DeepLabV3+, SegFormer, and U-Net, taken as state-of-the-art (SOTA) references, demonstrating its effectiveness for robust glacier mapping in complex high-mountain environments.

---

📖 [Read original article](https://arxiv.org/abs/2605.21527)