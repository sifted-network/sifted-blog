---
title: "SpectralEarth-FM: Bringing Hyperspectral Imagery into Multimodal Earth Observation Pretraining"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21075"
author: "Nassim Ait Ali Braham, Aaron Banze, Conrad M. Albrecht, Julien Mairal, Jocelyn Chanussot, Xiao Xiang Zhu"
categories: ["cs.CV", "cs.LG"]
---

arXiv:2605.21075v1 Announce Type: cross Abstract: Earth observation (EO) foundation models (FMs) are increasingly trained on multisensor data, spanning multispectral imagery (MSI), synthetic aperture radar (SAR), and derived geospatial layers, but hyperspectral imagery (HSI) remains underrepresented. Conversely, existing hyperspectral FMs are trained on HSI alone, leaving joint pretraining and fusion of HSI with co-located EO sensors unexplored. We introduce SpectralEarth-FM, a hierarchical transformer for multisensor EO input with heterogeneous spectral dimensionality. The architecture combines spectral tokenization for hyperspectral inputs, sensor-specific encoders, a cross-sensor fusion module, and a shared hierarchical encoder, enabling joint processing of HSI and lower-channel observations. To pretrain SpectralEarth-FM, we curate SpectralEarth-MM, a dataset that co-locates HSI from three spaceborne sensors (EnMAP, EMIT, DESIS) with Sentinel-2, Landsat-8/9 optical imagery, Landsat land surface temperature (LST), and Sentinel-1 SAR, over common geographic footprints. It comprises approximately 2M globally distributed locations, 25M georeferenced patches, and over 40TB of data. Pretraining uses a Joint-Embedding Predictive Architecture (JEPA)-style objective that matches representations between global views and single-sensor local views from the same location. We evaluate SpectralEarth-FM on hyperspectral downstream tasks and standard EO benchmarks following the PANGAEA protocol, achieving state-of-the-art results across both evaluation settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.21075)