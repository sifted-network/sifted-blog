---
title: "Identifiable Token Correspondence for World Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.16457"
author: "Youngin Kim, Ray Sun, Inho Kim, Bumsoo Park, Hyun Oh Song"
categories: ["cs.LG", "cs.AI", "cs.CV"]
---

arXiv:2605.16457v2 Announce Type: replace-cross Abstract: Token-based transformer world models have shown strong performance in visual reinforcement learning, but often suffer from temporal inconsistency in long-horizon rollouts, including object duplication, disappearance, and transmutation. A key reason is that most existing approaches treat next-frame prediction purely as a token generation problem, without considering the persistence of tokens across time. We introduce Identifiable Token Correspondence (ITC), a decoding step for token-based transformer world models that formulates next-frame prediction as a structured assignment problem with latent token correspondence variables: each next-frame token is explained either by copying a token from the previous frame or by generating a new one. ITC leaves the transformer architecture and training procedure unchanged and can be added on top of existing backbones. Our experiments show state-of-the-art performance on 4 challenging benchmarks. The proposed method achieves a return of 72.5% and a score of 35.6% on the Craftax-classic benchmark, significantly surpassing the previous best of 67.4% and 27.9%. We release our source code on https://github.com/snu-mllab/Identifiable-Token-Correspondence.

---

📖 [Read original article](https://arxiv.org/abs/2605.16457)