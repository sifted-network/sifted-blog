---
title: "Meta-Soft: Leveraging Composable Meta-Tokens for Context-Preserving KV Cache Compression"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22337"
author: "Wei Luo, Yi Huang, Songchen Ma, Huanyu Qu, Jiang Cai, Mingkun Xu"
categories: ["cs.AI"]
---

arXiv:2605.22337v1 Announce Type: new Abstract: The KV cache used in large language models has linearly growing time complexity, so LLMs face memory blow-up and reduced decoding efficiency when they process long contexts.Current KV Cache eviction has become an important research direction; however, existing methods based on fixed Soft Tokens (e.g., Judge Q) rely on a static parameter set as the query to evaluate the importance of KV pairs, so they cannot adapt dynamically to different input prompts, and they cannot precisely capture complex and changing task relevance.Also, evicted KV pairs are discarded permanently, so this causes irreversible information loss and context breaks. To address this problem, we propose Meta-Soft, a dynamic compression framework based on probe-driven context integration. Specifically, we build a meta-library with a learnable orthogonal basis matrix $\mathcal{L}$, and we use a selector network with Gumbel-Softmax to produce differentiable sparse combination weights, so we dynamically synthesize the most targeted $k$ Soft Tokens from the input prompt features.We append these Soft Tokens to the end of the input sequence to probe key information. We also introduce an attention-flow based integration mechanism, which redistributes the semantic information of removed tokens into retained tokens, and this keeps the dropped context information effectively.Experiments on multiple datasets show that our method outperforms existing state-of-the-art eviction methods and provides a new solution for KV Cache compression.

---

📖 [Read original article](https://arxiv.org/abs/2605.22337)