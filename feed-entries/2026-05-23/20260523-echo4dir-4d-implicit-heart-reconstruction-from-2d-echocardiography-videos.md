---
title: "Echo4DIR: 4D Implicit Heart Reconstruction from 2D Echocardiography Videos"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22066"
author: "Yanan Liu, Qinya Li, Hao Zhang, Kangjian He, Xuan Yang, Hao Li, Dan Xu, Lei Li"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22066v1 Announce Type: cross Abstract: Reconstructing 4D (3D+t) cardiac geometry from sparse 2D echocardiography is highly desirable yet fundamentally challenged by geometric ambiguity and temporal discontinuity. To tackle these issues, we propose Echo4DIR, a novel test-time 4D implicit reconstruction framework. Specifically, we learn robust 3D shape priors from statistical shape models (SSMs) via a cardiac conditional SDF, constructing an Epipolar Mask Encoder module with epipolar cross attention to effectively fuse multi-view features. To bridge the synthetic-to-real domain gap, we introduce a self-supervised SDF-tailored differentiable rendering strategy for patient-specific 3D shape adaptation using uncalibrated clinical masks without requiring 3D ground truth. Crucially, the inherent continuity of implicit representation overcomes sparse observations, enabling anatomically reliable geometry at arbitrary resolutions. Furthermore, to empower our framework with physically continuous 4D extension, we introduce a Radial SDF Alignment strategy that strictly locks shape evolution to the predicted velocity field, fundamentally eliminating mesh drift. Extensive experiments on synthetic benchmarks and real clinical datasets demonstrate that Echo4DIR achieves state-of-the-art 4D cardiac mesh reconstruction, notably yielding an impressive clinical overlap of up to 98.35% Dice and 96.75% IoU.

---

📖 [Read original article](https://arxiv.org/abs/2605.22066)