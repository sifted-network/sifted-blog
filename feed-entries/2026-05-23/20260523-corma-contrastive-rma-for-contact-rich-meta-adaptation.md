---
title: "CoRMA: Contrastive RMA for Contact-Rich Meta-Adaptation"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22082"
author: "Wentian Wang, Chutong Wen, Hongxu Ma, Wuhao Wang, Zhexiong Xue, Abdul Haseeb Nizamani, Dandi Zhou, Xinhai Sun, Jianqiao Zhu"
categories: ["cs.RO", "cs.LG"]
---

arXiv:2605.22082v1 Announce Type: cross Abstract: We present CoRMA(Contrastive Robotic Motor Adaptation), a context-based meta-adaptation framework that modifies RMA for force-dominant assembly. CoRMA replaces raw simulator-parameter adaptation with a compact 6D simulator-only semantic contact context describing contact onset, lateral engagement, guided transition, contact direction, and jamming. A deployable causal Transformer adapter infers this context online from force, proprioceptive, and action histories using semantic regression and a force-regime contrastive objective. At deployment, oracle context is removed and replaced by the inferred context, enabling within-episode adaptation without demonstrations, privileged inputs, or gradient updates. We evaluate CoRMA on PegInsert, GearMesh, and NutThread in Isaac Lab / Isaac Sim~5.0 and on a real Marvin arm. Compared with FORGE baselines that achieve high simulation success but degrade substantially on hardware, CoRMA retains higher verified real success under controlled target-pose noise. These results support semantic contact inference as a reusable adaptation interface within a related assembly task family, while broader unseen-task generalization and Real2Sim calibration remain future work.

---

📖 [Read original article](https://arxiv.org/abs/2605.22082)