---
title: "FusionCell: Cross-Attentive Fusion of Layout Geometry and Netlist Topology for Standard-Cell Performance Prediction"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20287"
author: "Haoyi Zhang, Kairong Guo, Bojie Zhang, Yibo Lin, Runsheng Wang"
categories: ["cs.LG", "cs.AI", "cs.CV"]
---

arXiv:2605.20287v1 Announce Type: cross Abstract: Standard cells form the building blocks of digital circuits, so their delay and power critically influence chip-level performance; yet characterization still relies on slow simulation sweeps, and many fast predictors ignore layout geometry, missing coupling and layout-dependent effects. The challenge is to jointly represent layout geometry and netlist topology so models capture fine-grained spatial details together with structural connectivity for accurate performance prediction. We introduce FusionCell, a dual-modality predictor that treats routed layout geometry and netlist topology as inputs and fuses them explicitly in a unified model. A DeiT encoder processes three-layer routed layouts, while a graph transformer models heterogeneous device/net graphs. The modalities are integrated through a topology-guided mechanism, where the netlist acts as a structural "map" to actively query relevant physical regions in the layout for joint geometric and topological reasoning. We build a 7nm dataset based on the ASAP7 PDK with over 19.5k cells spanning 149 types using automatic tools, targeting six metrics: signal rise/fall delay, transition, and power. Experimental results demonstrate that FusionCell reduces regression error, with an average MAPE of 0.92 percent, and improves Spearman/Kendall ranking over baselines, while accelerating the characterization process by orders of magnitude compared to circuit simulation.

---

📖 [Read original article](https://arxiv.org/abs/2605.20287)