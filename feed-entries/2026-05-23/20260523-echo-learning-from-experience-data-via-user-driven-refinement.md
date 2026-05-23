---
title: "Echo: Learning from Experience Data via User-Driven Refinement"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21984"
author: "Hande Dong, Xiaoyun Liang, Jiarui Yu, Jiayi Lin, Changqing Ai, Feng Liu, Wenjun Zhang, Rongbi Wei, Chaofan Zhu, Linjie Che, Feng Wu, Xin Shen, Dexu Kong, Xiaotian Wang, Qiuyuan Chen, Bingxu An, Yueting Lei, Qiang Lin"
categories: ["cs.AI", "cs.CL"]
---

arXiv:2605.21984v1 Announce Type: new Abstract: Static "human data" faces inherent limitations: it is expensive to scale and bounded by the knowledge of its creators. Continuous learning from "experience data" - interactions between agents and their environments - promises to transcend these barriers. Today, the widespread deployment of AI agents grants us low-cost access to massive streams of such real-world experience. However, raw interaction logs are inherently noisy, filled with trial-and-error and low information density, rendering them inefficient for direct model training. We introduce Echo, a generalized framework designed to operationalize the transition from raw experience to learnable knowledge, effectively "echoing" environmental feedback back into the training loop for model optimization. In today's agent ecosystem, user refinement serves as a primary source of such feedback: driven by responsibility for the outcome, users rigorously transform flawed agent proposals into verified solutions. These user-driven refinement sequences inherently distill agents' crude attempts into high-quality training signals. Echo systematically harvests these signals to continuously align the agent with real-world needs. Large-scale validation in a production code completion environment confirms that Echo effectively harnesses this pipeline, breaking the static performance ceiling by increasing the acceptance rate from 25.7% to 35.7%.

---

📖 [Read original article](https://arxiv.org/abs/2605.21984)