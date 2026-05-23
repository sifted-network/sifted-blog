---
title: "F-TIS: Harnessing Diverse Models in Collaborative GRPO"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22537"
author: "Nikolay Blagoev, O\\u{g}uzhan Ersoy, Wendelin Boehmer, Lydia Yiyu Chen"
categories: ["cs.LG"]
---

arXiv:2605.22537v1 Announce Type: new Abstract: Reinforcement learning methods such as GRPO have seen great popularity in LLM post-training. In GRPO, models produce completions to a set of prompts, which are rewarded, and the policy is updated towards the relatively high reward completions. Due to the auto-regressive nature of models, the generation phase of such style of training can be extremely time consuming. As a solution, prior work has sought to distribute the inference step across many nodes, working parallel. These works assume primarily homogeneous models in the training in order to keep samples as close to on-policy as possible. This assumption may be impractical in decentralized systems, where parties with various computes and preferences may wish to collaborate on the same task. Thus, decentralized training requires an approach that can handle heterogeneous models - different models collaborating on the same tasks. However, this leads to highly off-policy samples presented during training, which prior work has identified that off-policy samples can hurt GRPO convergence. To enable heterogeneity, we propose Filtered Truncated Importance Sampling (F-TIS) - a GRPO-style training paradigm that can use off-policy samples to improve local model's learning. Our framework allows various models to collaborate in the same RL training run while being communication efficient. We extensively evaluate F-TIS in various heterogeneous setups and we show that it exhibits identical final model convergence to purely on-sample training. Furthermore, we observe in some setups better generalization on out-of-distribution tasks than on-policy training, increasing model's performance by up to 12\%.

---

📖 [Read original article](https://arxiv.org/abs/2605.22537)