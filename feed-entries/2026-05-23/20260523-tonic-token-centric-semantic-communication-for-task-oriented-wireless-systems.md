---
title: "TONIC: Token-Centric Semantic Communication for Task-Oriented Wireless Systems"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21553"
author: "Sige Liu, Kezhi Wang"
categories: ["cs.LG", "cs.IT", "eess.IV", "math.IT"]
---

arXiv:2605.21553v1 Announce Type: new Abstract: Tokens are becoming the basic units through which foundation models represent and process information for understanding and inference. However, traditional wireless communication, centered on bit-level fidelity, faces a mismatch between what is transmitted reliably and what downstream models actually consume. This mismatch calls for a communication design that directly accounts for token-level task relevance and downstream model requirements, rather than treating all transmitted bits as equally important. In this paper, we propose TONIC, a token-centric semantic communication framework for task-oriented wireless systems. The transmitter converts each source sample into a sequence of tokens, estimates token-level task relevance, and allocates protection through utility-aware unequal error protection under a fixed channel-use budget. At the receiver, token-level confidence is used to gate unreliable decisions, turning harmful substitutions into recoverable erasures before a Transformer-based completion model restores the masked tokens for final task inference. Our framework combines transmitter-side semantic-aware protection with receiver-side confidence-aware gating in a modular and interpretable architecture, rather than relying solely on fully black-box end-to-end learning. We further establish a utility-aware Bayes-risk interpretation for the receiver-side gating rule and study its interaction with unequal protection and completion. Experimental results on image classification show that TONIC consistently outperforms separation-based schemes, the pixel-domain DeepJSCC baseline, and token-domain baselines under matched communication budgets over AWGN, Rayleigh, and Rician channels.

---

📖 [Read original article](https://arxiv.org/abs/2605.21553)