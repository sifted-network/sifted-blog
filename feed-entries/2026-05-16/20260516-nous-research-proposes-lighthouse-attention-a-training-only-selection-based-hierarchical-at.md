---
title: "Nous Research Proposes Lighthouse Attention: A Training-Only Selection-Based Hierarchical Attention That Delivers 1.4–1.7× Pretraining Speedup at Long Context"
date: "2026-05-16"
source: "MarkTechPost"
sourceUrl: "https://www.marktechpost.com/feed"
originalUrl: "https://www.marktechpost.com/2026/05/16/nous-research-proposes-lighthouse-attention-a-training-only-selection-based-hierarchical-attention-that-delivers-1-4-1-7x-pretraining-speedup-at-long-context/"
author: "Asif Razzaq"
categories: ["AI Infrastructure", "AI Paper Summary", "AI Shorts", "Applications", "Artificial Intelligence", "Context Engineering", "Deep Learning", "Editors Pick", "Language Model", "Large Language Model", "Machine Learning", "Software Engineering", "Staff", "Tech News", "Technology"]
---

<p>Nous Research has published Lighthouse Attention, a selection-based hierarchical attention mechanism that wraps around standard scaled dot-product attention during pretraining and is removed afterward. Unlike prior methods such as NSA and HISA that pool only keys and values, Lighthouse pools Q, K, and V symmetrically across a multi-resolution pyramid, reducing the attention call from O(N·S·d) to O(S²·d) and running stock FlashAttention on a small dense sub-sequence. Tested on a 530M Llama-3-style model at 98K context, it achieves a 1.40–1.69× end-to-end wall-clock speedup against a cuDNN SDPA baseline with matching or lower final training loss.</p>
<p>The post <a href="https://www.marktechpost.com/2026/05/16/nous-research-proposes-lighthouse-attention-a-training-only-selection-based-hierarchical-attention-that-delivers-1-4-1-7x-pretraining-speedup-at-long-context/">Nous Research Proposes Lighthouse Attention: A Training-Only Selection-Based Hierarchical Attention That Delivers 1.4–1.7× Pretraining Speedup at Long Context</a> appeared first on <a href="https://www.marktechpost.com">MarkTechPost</a>.</p>


---

📖 [Read original article](https://www.marktechpost.com/2026/05/16/nous-research-proposes-lighthouse-attention-a-training-only-selection-based-hierarchical-attention-that-delivers-1-4-1-7x-pretraining-speedup-at-long-context/)