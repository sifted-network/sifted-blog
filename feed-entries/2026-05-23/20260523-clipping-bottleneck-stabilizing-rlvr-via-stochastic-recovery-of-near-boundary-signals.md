---
title: "Clipping Bottleneck: Stabilizing RLVR via Stochastic Recovery of Near-Boundary Signals"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22703"
author: "Shuo Yang, Jinda Lu, Chiyu Ma, Kexin Huang, Haoming Meng, Qihui Zhang, Yuyang Liu, Bolin Ding, Guoyin Wang, Li Yuan, Jingren Zhou"
categories: ["cs.LG"]
---

arXiv:2605.22703v1 Announce Type: new Abstract: Reinforcement Learning with Verifiable Rewards (RLVR) has emerged as a central paradigm for scaling LLM reasoning, yet its optimization often suffers from training instability and suboptimal convergence. Through a systematic dissection of clipping-based GRPO-style objectives, we identify the rigid clipping decision induced by hard clipping as a key practical bottleneck in the studied RLVR setups. Specifically, our analysis suggests that informative signals can lie in the near-boundary region just beyond the clipping threshold, and are therefore discarded by the standard hard-clipping rule. Notably, once this bottleneck is precisely identified, even simple stochastic perturbations at the boundary can recover meaningful performance gains. Building on this finding, we propose Near-boundary Stochastic Rescue (NSR), a minimal, plug-and-play modification that stochastically retains these slightly out-of-bound tokens to recover lost signals. While NSR, via stochastic sampling, can be interpreted as inducing an implicit gradient decay in expectation, our ablations reveal that its stochastic, boundary-local rescue mechanism is consistently more effective than deterministic gradient decay. Validated by extensive experiments across model sizes from 7B to 30B and both dense and MoE architectures, as a plug-and-play solution, NSR substantially improves training stability and delivers consistent gains over strong baselines such as DAPO and GSPO.

---

📖 [Read original article](https://arxiv.org/abs/2605.22703)