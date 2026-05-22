---
title: "A Free Lunch in LLM Compression: Revisiting Retraining after Pruning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2510.14444"
author: "Moritz Wagner, Christophe Roux, Max Zimmer, Sebastian Pokutta"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2510.14444v3 Announce Type: replace-cross Abstract: Post-training pruning can substantially reduce LLM inference costs, but it often degrades quality unless the remaining weights are adapted. Since global retraining is expensive at LLM scale, recent work has largely focused on increasingly sophisticated pruning criteria that aim to select better sparsity patterns without adaptation. We revisit this trade-off through local reconstruction: after pruning, we adapt one subset of the model parameters at a time on a calibration set, training it to match the corresponding intermediate activations of the dense model. We evaluate local reconstruction across model families and scales, up to 72B parameters, and establish three main findings. First, local reconstruction is an effective adaptation mechanism for LLMs: it matches post-pruning retraining while using over an order of magnitude less data and compute, even when using PEFT techniques. Second, reconstruction exhibits a broad "free-lunch" regime in granularity, i.e., the reconstruction parameter window: as long as the reconstructed region contains at least a nonlinear submodule, final quality is largely insensitive to the window size, allowing granularity to be chosen primarily based on memory constraints. In contrast, reconstructing individual matrices, despite being the natural approach often proposed in the literature, consistently underperforms, as small matrix-level errors accumulate into larger activation drift. Lastly, reconstruction reduces the relative importance of the pruning criterion: performance gaps between sophisticated criteria and simple baselines shrink with model scale, making simple methods competitive again. Overall, our results challenge the prevailing view that post-pruning adaptation is impractical for LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2510.14444)