---
title: "Co-Fusion4D: Spatio-temporal Collaborative Fusion for Robust 3D Object Detection"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20301"
author: "Wenxuan Li, Qin Zou, Shoubing Chen, Chi Chen, Yingyi Yang, Shoubing Chen, Qingxiang Meng"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20301v1 Announce Type: cross Abstract: In autonomous driving, 3D object detection is essential for accurate perception and reliable decision-making. However, object motion and ego-motion often induce cross-frame spatiotemporal inconsistencies in BEV-based detectors, leading to temporal BEV feature misalignment and degraded spatiotemporal consistency. To address these challenges, we propose Co-Fusion4D, a unified framework that explicitly preserves cross-frame spatiotemporal consistency and suppresses temporal feature drift. Co-Fusion4D adopts a current-frame-centric strategy, treating the current frame as the primary source of information while selectively incorporating historical frames after spatiotemporal filtering and alignment. This dominant-complementary mechanism effectively mitigates cumulative alignment errors, suppresses noisy feature propagation, and exploits reliable temporal cues for a more consistent BEV representation. In addition, Co-Fusion4D integrates a Dual Attention Fusion (DAF) module to further enhance spatiotemporal feature interaction. DAF jointly leverages intra-frame spatial attention and inter-frame temporal attention to adaptively align and fuse multi-frame features, emphasizing motion-consistent regions while suppressing spurious correlations. By departing from conventional uniform fusion paradigms, this design substantially improves the temporal stability and discriminative capability of BEV representations. Extensive experiments on the nuScenes benchmark demonstrate that Co-Fusion4D achieves state-of-the-art performance, with 74.9% mAP and 75.6% NDS, without relying on test-time augmentation or external data.

---

📖 [Read original article](https://arxiv.org/abs/2605.20301)