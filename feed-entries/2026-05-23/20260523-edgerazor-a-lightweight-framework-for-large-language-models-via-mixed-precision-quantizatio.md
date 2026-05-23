---
title: "EdgeRazor: A Lightweight Framework for Large Language Models via Mixed-Precision Quantization-Aware Distillation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.04062"
author: "Shu-Hao Zhang, Le-Tong Huang, Xiang-Sheng Deng, Xin-Yi Zou, Chen Wu, Nan Li, Shao-Qun Zhang, Zhi-Hua Zhou"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.04062v2 Announce Type: replace-cross Abstract: Quantization has emerged as a mainstream approach for deploying Large Language Models (LLMs) on resource-constrained devices, yet compressing precision below 4-bit typically causes severe performance degradation or prohibitive retraining costs. In this paper, we propose EdgeRazor, a lightweight framework for LLMs via Mixed-Precision Quantization-Aware Distillation. It contains three modules: Structural Quantization with Mixed Precision for fine-grained control of bit-widths, Layer-Adaptive Feature Distillation that dynamically selects the most informative features for alignment, and Entropy-Aware KL Divergence for forward-reverse balance on both human-annotated and distilled datasets. Evaluations conducted on MobileLLM and Qwen families show that under weight-activation quantization, the 1.88-bit Qwen3-0.6B-EdgeRazor outperforms the state-of-the-art 2-bit baselines by 11.27 and surpasses the strongest 3-bit baselines by 4.38, while the quantized MobileLLM-350M-EdgeRazor requires a training budget 4-10$\times$ lower than the leading quantization-aware training method. In terms of efficiency, EdgeRazor achieves higher compression ratios at all bit-widths, and the 1.58-bit Qwen3-0.6B-EdgeRazor reduces storage from 1.11 GB to 0.19 GB while accelerating decoding by 15.16$\times$ over the 16-bit baseline. These results empirically validate the effectiveness and efficiency of EdgeRazor. The codes can be accessed from \href{https://github.com/zhangsq-nju/EdgeRazor}{GitHub} and \href{https://huggingface.co/collections/zhangsq-nju/edgerazor-nbit}{Huggingface}.

---

📖 [Read original article](https://arxiv.org/abs/2605.04062)