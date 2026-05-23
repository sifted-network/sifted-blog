---
title: "Video as Natural Augmentation: Towards Unified AI-Generated Image and Video Detection"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21977"
author: "Zhengcen Li, Chenyang Jiang, Liangxu Su, Tong Shao, Shiyang Zhou, Ming Tao, Jingyong Su"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21977v1 Announce Type: cross Abstract: AI-generated content (AIGC) is rapidly improving, creating an urgent need for detectors that generalize across data sources, deployment pipelines, and visual modalities. A strongly generalizable detector should remain robust under distributional variations. However, we identify a consistent failure mode: SOTA AI-generated image detectors often collapse when applied to frames extracted from videos. Through systematic analysis, we show that this cross-modal gap arises from both entangled synthesis-agnostic video processing shifts, including color conversion, codec compression, resizing, and blur, and model-specific fingerprints introduced by modern video generators. Motivated by these findings, we propose VINA (Video as Natural Augmentation), a unified AIGC detection framework that jointly trains on image and video data. VINA uses video frames as physically grounded natural augmentations and further introduces a cross-modal supervised contrastive objective to align image and video representations under a shared real/fake decision boundary. Extensive experiments on 14 image, video, and in-the-wild benchmarks show that VINA delivers bidirectional gains, improves robustness and transferability, and achieves state-of-the-art performance across nearly all evaluated settings without complex augmentation or dataset-specific tuning.

---

📖 [Read original article](https://arxiv.org/abs/2605.21977)