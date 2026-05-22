---
title: "Generation of Heterogeneous PET Images from Uniform Organ Activity Maps Using a Pretrained Domain-Adapted Diffusion Model"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20267"
author: "Suya Li, Kaushik Dutta, Debojyoti Pal, Jingqin Luo, Kooresh I. Shoghi"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20267v1 Announce Type: cross Abstract: Synthetic PET images are valuable for quantitative imaging workflow development, scalable virtual imaging trials, and deep learning model training, but conventional physics-based simulation approaches are computationally intensive, limited in anatomical variability, and often fail to capture heterogeneous PET uptake. This study developed a pretrained domain-adapted diffusion (PAD) model for anatomy-conditioned PET synthesis from uniform organ activity maps. PAD adopts a natural-image pretrained text-to-image decoder with an upstream conditioning encoder and a downstream PET-domain adapter. A two-phase training strategy was used, with the first phase learning coarse uptake distributions and the second refining local image details. Uniform organ activity maps were generated from CT-based segmentations by assigning each organ its mean uptake from the paired PET image. Evaluation included quantitative accuracy, noise assessment, radiomic analysis, tumor segmentation performance, and a human observer study. PAD-generated images achieved high quantitative accuracy, with concordance correlation coefficients above 0.92 between organ mean SUVs and assigned activity values. The synthesized images showed noise levels and texture characteristics similar to target PET images and produced comparable tumor segmentation performance. In a two-alternative forced-choice observer study, four readers achieved approximately 50% accuracy, indicating visual indistinguishability between synthesized and target images. PAD also generated realistic PET images from XCAT-derived activity maps, demonstrating compatibility with phantom-based anatomical priors. Overall, PAD provides a diffusion-based framework for generating clinically relevant heterogeneous PET images from uniform organ activity maps derived from clinical segmentations or digital phantoms, supporting data augmentation and downstream imaging studies.

---

📖 [Read original article](https://arxiv.org/abs/2605.20267)