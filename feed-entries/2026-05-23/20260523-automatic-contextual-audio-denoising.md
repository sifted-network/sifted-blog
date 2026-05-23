---
title: "Automatic Contextual Audio Denoising"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22262"
author: "Diep Luong, Konstantinos Drossos, Mikko Heikkinen, Tuomas Virtanen"
categories: ["cs.SD", "cs.LG", "eess.AS"]
---

arXiv:2605.22262v1 Announce Type: cross Abstract: Audio context determines which sound components and sources are relevant and which can be perceived as irrelevant (noise) by listeners. For example, traffic noise is informative in urban surveillance but noise for a phone call at the same location. Most current audio denoising systems apply fixed target-noise definitions, often removing useful components in one context while failing to suppress irrelevant components. To address this, we introduce the concept automatic contextual audio denoising (ACAD) which defines target and noise based on the inferred context. In this work, we restrict context to be associated with an acoustic scene class. We label sound events outside the event distribution of a scene class (noise) as out-of-context (OC) and events typical for that scene as in-context (IC). We implement a deep learning method that automatically infers the context of the audio signal and removes OC components, and benchmark it against variants: without context inference, with oracle context, and with separately provided uninformative context. On paired clean/noisy data across diverse contexts, where OC components in one context may be IC in another, our proposed method outperforms other approaches across standard objective metrics, indicating that the model can infer context and context-dependent processing can enhance denoising.

---

📖 [Read original article](https://arxiv.org/abs/2605.22262)