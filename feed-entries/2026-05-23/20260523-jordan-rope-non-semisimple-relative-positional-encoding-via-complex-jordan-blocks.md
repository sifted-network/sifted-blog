---
title: "Jordan-RoPE: Non-Semisimple Relative Positional Encoding via Complex Jordan Blocks"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.04217"
author: "Yaobo Zhang"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.04217v2 Announce Type: replace Abstract: Relative positional encodings determine which functions of query-key lag can enter the primitive attention logit. RoPE supplies a rotary phase, while ALiBi supplies an additive distance bias. Motivated by group-theoretic views of linear translation-invariant positional encodings, we study a non-semisimple case in which a complex rotary eigenvalue and a nilpotent response live in the same defective Jordan block. The resulting relative operator generates oscillatory-polynomial features such as $e^{-\gamma d}\cos(\omega d)$, $e^{-\gamma d}\sin(\omega d)$, $d e^{-\gamma d}\cos(\omega d)$, and $d e^{-\gamma d}\sin(\omega d)$, for causal lag $d=i-j\geq 0$. Thus the construction realizes a distance-modulated phase basis $d e^{i\omega d}$, rather than merely adding a separate distance channel to RoPE. We formulate Exact Jordan-RoPE as a non-semisimple one-parameter representation, give its real block form, and specify the contragredient query action required by non-orthogonal positional maps. We also distinguish this exact representation from stabilized variants whose bounded shear improves numerical behavior but breaks the exact group law. Kernel-level diagnostics and a Jordan-friendly synthetic language-model task show that the coupled Jordan basis is useful when the target contains distance-modulated phase interactions. On a small WikiText-103 byte language model, a scaled-exact variant improves over RoPE and direct-sum baselines within the Jordan family, while RoPE+ALiBi remains strongest overall. The evidence is structural rather than a broad performance claim.

---

📖 [Read original article](https://arxiv.org/abs/2605.04217)