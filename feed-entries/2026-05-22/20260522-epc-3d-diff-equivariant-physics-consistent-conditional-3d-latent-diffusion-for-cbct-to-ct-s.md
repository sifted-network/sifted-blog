---
title: "EPC-3D-Diff: Equivariant Physics Consistent Conditional 3D Latent Diffusion for CBCT to CT Synthesis"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20470"
author: "Alzahra Altalib, Chunhui Li, Haytham Al Ewaidat, Khaled Alawneh, Ahmad Qendel, Alessandro Perelli"
categories: ["cs.CV", "cs.AI", "physics.med-ph"]
---

arXiv:2605.20470v1 Announce Type: cross Abstract: Cone-beam CT (CBCT) is routinely acquired during radiotherapy for patient setup, but its quantitative reliability is degraded by scatter, noise, and reconstruction artifacts, limiting Hounsfield Unit (HU) accuracy. We propose EPC-3D-Diff, a novel conditional 3D latent diffusion framework for volumetric CBCT to CT synthesis that introduces a projection domain equivariance loss derived from acquisition physics. Unlike common image domain equivariance, we exploit the fact that an in plane rotation of the volume corresponds to an angular shift in its projections. During training, we enforce this relationship by forward projecting rotated synthesized CT volumes and matching them to appropriately angle shifted projections of the paired target CT, yielding a physics consistent equivariance constraint integrated into the diffusion objective. To capture full 3D context efficiently, conditional diffusion is performed in a compact latent space learnt by a lightweight 3D autoencoder, preserving axial depth while downsampling in plane resolution for stable training. We validate on a paired head CBCT/CT phantom dataset, including repeat scans, and paired clinical data using patient wise splits, and perform single and mixed domain training, ablations, and comparisons with diffusion and CycleGAN. EPC-3D-Diff generalizes well and achieved substantial improvements, +7.4 dB (phantom) and +1.8 dB (clinical data) in PSNR compared to state of the art methods, alongside improved SSIM and HU accuracy, within tissue boundaries. Overall, EPC-3D-Diff improves robustness and physics consistency, supporting HU aware synthesis for downstream radiotherapy workflows.

---

📖 [Read original article](https://arxiv.org/abs/2605.20470)