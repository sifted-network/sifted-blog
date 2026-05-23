---
title: "Optimus: A Robust Defense Framework for Mitigating Toxicity while Fine-Tuning Conversational AI"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2507.05660"
author: "Aravind Cheruvu, Shravya Kanchi, Sifat Muhammad Abdullah, Nicholas Ka-Shing Kong, Daphne Yao, Murtuza Jadliwala, Bimal Viswanath"
categories: ["cs.CR", "cs.AI", "cs.CL"]
---

arXiv:2507.05660v3 Announce Type: replace-cross Abstract: Customizing Large Language Models (LLMs) on untrusted datasets poses severe risks of injecting toxic behaviors. In this work, we introduce Optimus, a novel defense framework designed to mitigate fine-tuning harms while preserving conversational utility. Unlike existing defenses that rely heavily on precise toxicity detection or restrictive filtering, Optimus addresses the critical challenge of ensuring robust mitigation even when toxicity classifiers are imperfect or biased. Optimus integrates a training-free toxicity classification scheme that repurposes the safety alignment of commodity LLMs, and employs a dual-strategy alignment process combining synthetic "healing data" with Direct Preference Optimization (DPO) to efficiently steer models toward safety. Extensive evaluations demonstrate that Optimus mitigates toxicity even when relying on extremely biased classifiers (with up to 85% degradation in Recall). Optimus outperforms the state-of-the-art defense StarDSS and exhibits strong resilience against adaptive adversarial and jailbreak attacks. Our source code and datasets are available at https://github.com/secml-lab-vt/Optimus

---

📖 [Read original article](https://arxiv.org/abs/2507.05660)