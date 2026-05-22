---
title: "Fast and Stable Triangular Inversion for Delta-Rule Linear Transformers"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21325"
author: "Aleksandros Sobczyk, Gioele Gottardo, Christos K. Matzoros, Mirko De Vita, Filip Skogh, Anastasios Zouzias, Jiawei Zhuang"
categories: ["cs.LG"]
---

arXiv:2605.21325v1 Announce Type: new Abstract: Linear attention has emerged as a cornerstone for efficient long-context architectures, as evidenced by its integration into state-of-the-art open-source models including Qwen3.5/3.6, Kimi Linear, and RWKV-7. Models that incorporate linear attention layers with the so-called Delta-Rule involve the inversion of triangular matrices as a core sub-routine. This operation often forms a performance bottleneck, and, due to its high-sensitivity to numerical errors, it can significantly deteriorate end-to-end model accuracy if it is not carefully implemented. This work provides a systematic analysis of both direct and iterative triangular inversion algorithms, targeting methods that are rich in matrix products, and, therefore, have the potential to efficiently utilize modern hardware. To that end, our analysis covers a broad spectrum of mathematical and practical aspects, with a heavy focus on numerical stability, computational complexity, and, ultimately, hardware efficiency and practical considerations. We provide a rigorous experimental evaluation to verify these properties in practical scenarios, and in low-precision floating-point representations, highlighting the strengths and limitations of each method. Performance benchmarks on NPUs reveal up to $4.3\times$ speed-up against the state-of-the-art implementations of SGLang for triangular matrix inversion, leading to significant performance improvements on the entire layer level, while maintaining full end-to-end model accuracy.

---

📖 [Read original article](https://arxiv.org/abs/2605.21325)