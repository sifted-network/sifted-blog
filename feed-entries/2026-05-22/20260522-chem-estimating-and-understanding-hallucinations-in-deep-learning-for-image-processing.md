---
title: "CHEM: Estimating and Understanding Hallucinations in Deep Learning for Image Processing"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.09806"
author: "Jianfei Li, Ines Rosellon-Inclan, Gitta Kutyniok, Jean-Luc Starck"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2512.09806v2 Announce Type: replace-cross Abstract: Deep learning-based methods have recently achieved significant success in image reconstruction problems. However, challenges have emerged, as these methods may generate unrealistic artifacts or hallucinations, which can interfere with analysis in safety-critical scenarios. This paper introduces a framework for quantifying and characterizing hallucinated artifacts in image reconstruction models. The proposed method, termed the Conformal Hallucination Estimation Metric (CHEM), enables the identification of hallucination-prone regions in model predictions. It leverages wavelet and shearlet representations to localize such regions at the level of image features, and uses conformalized quantile regression to assess hallucination levels in a distribution-free manner. A theoretical analysis is provided, characterizing the sensitivity of CHEM to hallucinated artifacts and its relationship to the mean squared error. Building on these insights and adopting a viewpoint grounded in approximation theory, we investigate why U-shaped networks, widely used architectures for image reconstruction, tend to hallucination-prone predictions. We assess the effectiveness of the proposed approach on astronomical image deconvolution using the CANDELS dataset with architectures such as U-Net, SwinUNet, and Learnlets, and on natural image super-resolution using the DIV2K dataset with models such as DRUNet, Unfolded DRS, RAM, and DPS.

---

📖 [Read original article](https://arxiv.org/abs/2512.09806)