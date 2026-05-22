---
title: "Decoupling Communication from Policy: Robust MARL under Bandwidth Constraints"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21085"
author: "Alexi Canesse, Beno\\^it Goupil, Jesse Read, Sonia Vanier"
categories: ["cs.MA", "cs.AI", "cs.LG"]
---

arXiv:2605.21085v1 Announce Type: cross Abstract: Communication enables coordination in multi-agent reinforcement learning (MARL), but many real-world applications, e.g., search-and-rescue with drone swarms, operate under severe bandwidth constraints. Many communication architectures still expose a coupled bottleneck in which a shared latent representation is used for both policy execution and inter-agent communication. Consequently, reducing message size directly limits the policy's latent space, often leading to significant performance degradation. We address this with two contributions. First, we introduce $\beta$, a normalised per-agent bandwidth budget that unifies sparsity, rounds, and message dimension into a single comparable constraint. Second, we provide SLIM, a minimal architecture that decouples the communication pathway from the policy's latent representation, allowing us to isolate the effect of bandwidth from the effect of policy capacity while benefiting from in-step communication. We evaluate our method on several partially-observable MARL benchmarks, where communication is essential. Our approach achieves state-of-the-art performance and exhibits scalability and robustness under limited communication, with only marginal degradation as bandwidth is reduced.

---

📖 [Read original article](https://arxiv.org/abs/2605.21085)