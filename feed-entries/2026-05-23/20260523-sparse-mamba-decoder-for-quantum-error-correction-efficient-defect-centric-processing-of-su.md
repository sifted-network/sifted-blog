---
title: "Sparse Mamba Decoder for Quantum Error Correction: Efficient Defect-Centric Processing of Surface Code Syndromes"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.17156"
author: "Samira Sayedsalehi, Nader Bagherzadeh, Maxim Shcherbakov, Jean-Luc Gaudiot"
categories: ["quant-ph", "cs.LG"]
---

arXiv:2605.17156v2 Announce Type: replace-cross Abstract: Quantum error correction (QEC) is essential for building fault-tolerant quantum computers, requiring decoders that are simultaneously accurate, fast, and scalable. Most state-of-the-art neural decoders achieve high accuracy but process the full dense syndrome array of size $O(d^2 R) $regardless of the actual error rate, where d is the code distance and R is the number of measurement rounds. At physically relevant error rates (p ~ 0.1%), fewer than 5% of syndrome entries contain active detection events -- yet existing decoders process the entire syndrome volume. We introduce the Sparse Mamba Decoder (SMD), a defect-centric neural decoder that processes only the k active detection events using a 13-dimensional feature representation per defect and a Mamba state-space backbone, achieving $O(k)$ complexity. Across depolarizing, uniform circuit-level, SI1000, and Google Sycamore experimental benchmarks, SMD reduces the MWPM logical error rate by up to 49% at $d \le 5$ under SI1000 noise, runs 95-467x faster than the Tesseract near-MLD decoder and 232-463x faster than Belief Matching, and maintains nearly constant latency (24-57 us) across d = 3-9 under uniform circuit-level noise. On the Sycamore experimental dataset, the SMD ensemble matches or slightly surpasses the dense Mamba decoder of Varbanov et al. All results are obtained on commodity NVIDIA GPUs with 7.5-16M parameters, without specialized accelerators.

---

📖 [Read original article](https://arxiv.org/abs/2605.17156)