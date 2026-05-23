---
title: "HIDBench: Benchmarking Large Language Models for Host-Based Intrusion Detection"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21773"
author: "Danyu Sun, Jinghuai Zhang, Yuan Tian, Zhou Li"
categories: ["cs.CR", "cs.LG"]
---

arXiv:2605.21773v1 Announce Type: cross Abstract: Recent benchmark efforts have advanced the evaluation of large language models (LLMs) in cybersecurity, including tasks such as penetration testing and vulnerability identification. However, a critical cybersecurity task, namely intrusion detection from system logs, remains unexplored. In this work, we present a new benchmark to assess LLMs' capabilities in supporting host-based intrusion detection systems (HIDS). This task requires fine-grained reasoning over large-scale, noisy, and highly imbalanced system logs, where complex interactions between benign and malicious activities make reliable detection challenging. Our benchmark unifies three public system log datasets, DARPA-E3, DARPA-E5, and NodLink, and introduces a data construction pipeline that transforms raw host telemetry into LLM-compatible inputs, enabling systematic evaluation under realistic intrusion detection settings. Our evaluation of frontier LLMs reveals substantial performance gaps across datasets. While many models achieve high precision (often above 0.8) on simpler datasets, their performance degrades significantly as system logs become noisier and more complex, with MCC frequently dropping below 0.5 and false positive rates increasing sharply. We further analyze model behavior and identify distinct regimes, including conservative detectors with low false positive rates and over-sensitive models that generate excessive alerts. Overall, our results highlight that while LLMs show strong potential for HIDS, their effectiveness is highly sensitive to data complexity, and robust system design is essential for reliable deployment.

---

📖 [Read original article](https://arxiv.org/abs/2605.21773)