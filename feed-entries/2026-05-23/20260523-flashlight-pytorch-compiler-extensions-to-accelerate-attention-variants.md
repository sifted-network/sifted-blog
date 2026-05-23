---
title: "Flashlight: PyTorch Compiler Extensions to Accelerate Attention Variants"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2511.02043"
author: "Bozhi You, Irene Wang, Zelal Su Mustafaoglu, Abhinav Jangda, Ang\\'elica Moreira, Roshan Dathathri, Divya Mahajan, Keshav Pingali"
categories: ["cs.LG", "cs.PF"]
---

arXiv:2511.02043v4 Announce Type: replace Abstract: Attention is a fundamental building block of large language models (LLMs), so there have been many efforts to implement it efficiently. For example, FlashAttention leverages tiling and kernel fusion to optimize attention. Recently, a number of variants of attention have been introduced to enhance model quality or efficiency. Supporting them efficiently remains difficult since they usually require specialized kernels or hand-tuned implementations. FlexAttention recently addressed part of this gap by using static programming templates to support FlashAttention-like kernels for a subset of attention variants. In this paper, we introduce Flashlight, a compiler-native framework within the PyTorch ecosystem that automatically generates fused, FlashAttention-style kernels for arbitrary attention-based programs, without relying on static templates or predefined kernel specializations. Flashlight leverages PyTorch's compilation workflow to fuse and tile attention computations transparently, enabling efficient execution for diverse attention patterns. Not only does it support all variants expressible in the FlexAttention model but it also handles more general, data-dependent attention formulations that are beyond the capabilities of FlexAttention. Our results show that Flashlight produces kernels with competitive or superior performance to FlexAttention, while offering the flexibility of native PyTorch code, enabling developers to rapidly explore new attention models without sacrificing performance.

---

📖 [Read original article](https://arxiv.org/abs/2511.02043)