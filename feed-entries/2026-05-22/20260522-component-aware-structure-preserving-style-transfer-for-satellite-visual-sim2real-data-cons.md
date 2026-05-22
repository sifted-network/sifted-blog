---
title: "Component-Aware Structure-Preserving Style Transfer for Satellite Visual Sim2Real Data Construction"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19624"
author: "Zongwu Xie, Yonglong Zhang, Yifan Yang, Yang Liu, Baoshi Cao"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.19624v2 Announce Type: replace-cross Abstract: For camera-based satellite visual sensing, Sim2Real data construction requires images that approach real-domain sensor appearance while retaining the annotations inherited from simulation. Real sensor images of satellite targets with reliable pose labels and component-level masks are difficult to acquire at scale, whereas synthetic rendering provides exact geometric annotations but suffers from a visible appearance gap. This paper presents a component-aware structure-preserving style transfer framework for satellite visual synthetic-to-real data construction. The method builds weakly paired real--synthetic samples from calibrated real acquisition, ArUco-based camera-pose measurement, CAD rendering, and component masks. It then extracts part-wise real-domain style codes from unlabeled real images and injects them into corresponding synthetic satellite regions through mask-aligned modulation. To keep the generated images usable for downstream sensor-data supervision, adversarial training is combined with local contrastive consistency, self-regularization, and edge-preserving constraints. Experiments are conducted on 5,000 rendered satellite images and 100 real images captured in a calibrated setup. The real images provide target-domain appearance references and final evaluation images, while the downstream GDRNet pose estimator is trained only on synthetic or translated synthetic images. Compared with representative image-translation baselines, the proposed method achieves the lowest image distribution discrepancy, with an FID of 54.32 and a KID of 0.048. When the translated data are used to train GDRNet in this target-domain adaptation setting, the ADD pass rate improves to 0.260 and the AUC improves to 0.611. These results indicate that component-level appearance transfer can improve annotation-preserving satellite visual Sim2Real data generation in the considered calibrated setup.

---

📖 [Read original article](https://arxiv.org/abs/2605.19624)