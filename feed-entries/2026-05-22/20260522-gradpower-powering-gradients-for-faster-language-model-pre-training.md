---
title: "GradPower: Powering Gradients for Faster Language Model Pre-Training"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2505.24275"
author: "Jinbo Wang, Mingze Wang, Jiaqi Zhang, Wei Wang, Peng Pei, Xunliang Cai, Weinan E, Lei Wu"
categories: ["cs.LG", "math.OC", "stat.ML"]
---

arXiv:2505.24275v3 Announce Type: replace Abstract: We propose GradPower, a lightweight gradient-transformation technique for accelerating language model pre-training. Given a gradient vector $g=(g_i)_i$, GradPower first applies the elementwise sign-power transformation: $\varphi_p(g)=({\rm sign}(g_i)|g_i|^p)_{i}$ for a fixed $p>0$, and then feeds the transformed gradient into a base optimizer. Notably, GradPower requires only a single-line code change and no modifications to the base optimizer's internal logic, including the hyperparameters. When applied to Adam (termed AdamPower), GradPower consistently achieves lower terminal loss across diverse architectures (LLaMA, Qwen2MoE), parameter scales (66M to 2B), datasets (C4, OpenWebText), and learning-rate schedules (cosine, warmup-stable-decay). The most pronounced gains are observed when training modern mixture-of-experts models with warmup-stable-decay schedules. GradPower also integrates seamlessly with other state-of-the-art optimizers, such as Muon, yielding further improvements. Finally, we provide theoretical analyses that reveal the underlying mechanism of GradPower and highlight the influence of gradient noise.

---

📖 [Read original article](https://arxiv.org/abs/2505.24275)