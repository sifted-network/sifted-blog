---
title: "Adversarial Trust Poisoning in Vehicular Collaborative Perception"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22122"
author: "Yutong Liu, Chenyi Wang, Ming F. Li, Qingzhao Zhang"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.22122v1 Announce Type: cross Abstract: Collaborative perception (CP) enables connected and autonomous vehicles to share sensor data and jointly reason about their environment. To defend against adversaries that fabricate or manipulate shared data, existing systems employ cross-vehicle inconsistency detection and trust estimation, penalizing vehicles whose observations conflict with the majority. In this work, we show that these defenses themselves introduce a new attack surface. We present TrustFlip, a novel attack that weaponizes consistency-based defenses to poison the trust assigned to benign vehicles. Instead of injecting false data into the collaboration pipeline, it deploys physical adversarial objects that are genuine but induce inconsistent observations among benign vehicles. The resulting inconsistencies are misattributed by the defense to the targeted vehicle, causing its trust score to degrade and eventually leading to its downweighting or exclusion from collaboration. Consequently, the system loses reliable sensing contributors, degrading perception capability and potentially inducing safety-critical failures. We evaluate TrustFlip across multiple collaborative perception architectures and defense mechanisms. Our results show that state-of-the-art defenses can be significantly affected: the attack removes the targeted benign vehicle from collaboration in up to 87.7% of scenarios and drops Average Precision (AP) by up to 13%. As an initial mitigation, we introduce TrustReflect, a lightweight self-reflection mechanism that marks disputed regions as uncertain and excludes them from trust evaluation, reducing the attack success rate by 35-100%.

---

📖 [Read original article](https://arxiv.org/abs/2605.22122)