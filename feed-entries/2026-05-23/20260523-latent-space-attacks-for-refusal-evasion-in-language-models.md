---
title: "Latent-space Attacks for Refusal Evasion in Language Models"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21706"
author: "Giorgio Piras, Raffaele Mura, Fabio Brau, Maura Pintor, Luca Oneto, Fabio Roli, Battista Biggio"
categories: ["cs.AI"]
---

arXiv:2605.21706v1 Announce Type: new Abstract: Safety-aligned language models are trained to refuse harmful requests, yet refusal behavior can be suppressed by steering their internal representations. Existing methods do so by ablating a refusal direction from model activations, aiming to remove refusal from the model's residual stream. Despite their empirical success, these methods lack a principled account of the latent-space transformation they induce and why it suppresses refusal. In this work, we recast refusal suppression as a latent-space evasion attack against linear probes trained to separate refused from answered prompts. Under this view, prior work's difference-in-means direction naturally defines such a probe, and its ablation is exactly a projection onto its decision boundary, i.e., a minimum-confidence evasion attack. This perspective not only explains the empirical success of prior work but also admits a key limitation: evasion stops at the decision boundary, motivating the need to push representations further into the compliant region, i.e., where the model answers. We leverage this by proposing a Controlled Latent-space Evasion attack that projects representations past the boundary with an optimized confidence. We achieve state-of-the-art attack success rate across 15 instruction-tuned, multimodal, and reasoning models, outperforming existing refusal-ablation baselines and specialized jailbreak attacks.

---

📖 [Read original article](https://arxiv.org/abs/2605.21706)