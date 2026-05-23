---
title: "MDM-Prime-v2: Binary Encoding and Index Shuffling Enable Scaling of Diffusion Language Models"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.16077"
author: "Chen-Hao Chao, Wei-Fang Sun, Junwei Quan, Chun-Yi Lee, Rahul G. Krishnan"
categories: ["cs.LG"]
---

arXiv:2603.16077v3 Announce Type: replace Abstract: Masked diffusion models (MDM) exhibit superior generalization when learned using a Partial masking scheme (Prime). This approach converts tokens into sub-tokens and models the diffusion process at the sub-token level. We identify two limitations of the MDM-Prime framework. First, we find that the functional form of the subtokenizer significantly increases the cross-entropy loss in the objective when paired with commonly used Byte-Pair-Encoding (BPE) tokenizers. Second, we lack tools to guide the hyperparameter choice of the token granularity in the subtokenizer. To address these limitations, we analyze the optimal design of the subtokenizer that minimizes MDM-Prime training objective and develop MDM-Prime-v2, a masked diffusion language model which incorporates Binary Encoding and Index Shuffling. Our analysis characterizes how token granularity and sub-token entropy influence the training objective and downstream performance, providing principled criteria for subtokenizer design. When extending the model size to 1.1B parameters, MDM-Prime-v2 demonstrates superior average zero-shot accuracy across eight commonsense reasoning benchmarks, outperforming similar-sized baselines including GPT-Neo, OPT, Pythia, Bloom, SMDM, and TinyLLaMA.

---

📖 [Read original article](https://arxiv.org/abs/2603.16077)