---
title: "AGPO: Adaptive Group Policy Optimization with Dual Statistical Feedback"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20722"
author: "Miaobo Hu, Shuhao Hu, Bokun Wang, Ruohan Wang, Xin Wang, Xiaobo Guo, Daren Zha, Jun Xiao"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20722v1 Announce Type: cross Abstract: Reinforcement learning improves LLM reasoning, but PPO/GRPO typically use fixed clipping and decoding temperature, which makes training brittle and tuning-heavy. We propose Adaptive Group Policy Optimization (AGPO), a critic-free refinement of GRPO that uses group-level statistics to control both update magnitude and exploration. AGPO uses a shared probe-derived statistical state to drive two controllers: (i) adaptive clipping, which sets the trust-region size from reward dispersion and skewness, probe vote entropy, policy entropy, and step-wise KL drift; and (ii) bidirectional adaptive temperature sampling, which heats or cools decoding around a base temperature according to centered uncertainty relative to a running baseline. On nine English and Chinese math/STEM benchmarks, Qwen2.5-14B trained with AGPO outperforms PPO/GRPO under the same generated-token budget, reaching 67.3% on GSM8K and 40.5% on MATH. Gains transfer to Llama-3-8B and Gemma-2-9B, and ablations confirm both modules are complementary. Our implementation is publicly available at https://github.com/wandugu/paper_agpo.

---

📖 [Read original article](https://arxiv.org/abs/2605.20722)