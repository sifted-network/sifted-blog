---
title: "Quant.npu: Enabling Efficient Mobile NPU Inference for on-device LLMs via Fully Static Quantization"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20295"
author: "Jinghe Zhang, Daliang Xu, Chenghua Wang, Weikai Xie, Tao Qi, Yun Ma, Mengwei Xu, Gang Huang"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20295v1 Announce Type: cross Abstract: Large language models (LLMs) are increasingly deployed on mobile devices, where Neural Processing Units (NPUs) necessitate fully static quantization for optimal inference efficiency. However, existing post-training quantization (PTQ) methods predominantly rely on dynamic activation quantization, rendering them incompatible with NPU hardware constraints. To bridge the gap between high-fidelity PTQ and NPU-constrained inference, we propose Quant.npu, a integer-only fully static quantization framework. It incorporates learnable quantization parameters and rotation matrices, enabling low-bit activation-weight quantization without runtime quantization parameters re-computation. Crucially, we identify that initialization and selective optimization of quantization parameters is pivotal for optimization stability, as improper initialization and naive joint optimization induce gradient instability that disrupts the optimization of rotation matrices. To address this, we propose a rotation-and-bit-width-aware initialization tailored to diverse activation profiles and a distribution-aware selective optimization (two-stage quantization pipeline) tailored to rotated and unrotated tensors. Furthermore, we introduce a sensitivity-guided adaptive mixed-precision scheme to balance accuracy with inference efficiency. Extensive experiments on real-world mobile NPUs demonstrate that Quant.npu achieves comparable accuracy to state-of-the-art methods, while reducing inference latency by up to 15.1%.

---

📖 [Read original article](https://arxiv.org/abs/2605.20295)