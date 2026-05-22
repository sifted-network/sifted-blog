---
title: "LT2: Linear-Time Looped Transformers"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20670"
author: "Chunyuan Deng, Yizhe Zhang, Rui-Jie Zhu, Yuanyuan Xu, Jiarui Liu, T. S. Eugene Ng, Hanjie Chen"
categories: ["cs.LG"]
---

arXiv:2605.20670v1 Announce Type: new Abstract: Looped Transformers (LT) have emerged as a powerful architecture by iterating their layers multiple times before decoding the final token. However, pairing them with full attention retains quadratic complexity, making them computationally expensive and slow. We introduce LT2 (Linear-Time Looped Transformers), a family of looped architectures that replace quadratic softmax attention with subquadratic, linear-time attention. We study two variants: LT2-linear with linear attention and LT2-sparse with sparse attention. We find that looping uniquely synergizes with these variants: it enables iterative memory refinement in linear attention and progressively expands the effective receptive field in sparse attention. We formalize these benefits theoretically and demonstrate consistent empirical gains across controlled recall, state-tracking, and language modeling tasks. We then explore LT2-hybrid, which combines different attention variants in a looped setting. Two variants are especially promising: LT2-hybrid (GDN+DSA), which interleaves linear and sparse attention to maximize efficiency and matches the standard looped transformer's quality at fully linear-time cost; and LT2-hybrid (Full+GDN), which interleaves GDN with a small fraction of full attention layers to maximize quality, surpassing the standard looped transformer in both performance and efficiency. We also show how to convert a pre-trained LT into an LT2-hybrid model. With about 1B tokens of training, our converted model, Ouro-hybrid-1.4B, outperforms industry-level 1B models and is competitive with industry-level 4B models while retaining the speed benefits of linear-time attention. Together, these results show a clear path toward making looped transformers more scalable and advancing efficient, capable small language models.

---

📖 [Read original article](https://arxiv.org/abs/2605.20670)