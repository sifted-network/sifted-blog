---
title: "Community-Aware Vertex Ordering for Reference-Based Graph Compression: A Cross-Encoder Empirical Study"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21510"
author: "Jimmy Dubuisson"
categories: ["cs.SI", "cs.LG"]
---

arXiv:2605.21510v1 Announce Type: cross Abstract: Reference-based graph compression encodes each vertex's neighbor list relative to a recent vertex, exploiting locality to compress large directed graphs. The dominant tool, WebGraph's BVGraph, fixes a single encoding pipeline and relies on a separately chosen vertex ordering -- typically URL-lexicographic or Layered Label Propagation (LLP). The interaction between ordering and encoder is rarely measured. We propose a two-stage Leiden+LLP vertex ordering -- global LLP to seed labels, Leiden community detection, then per-cluster LLP on each induced subgraph -- and study how it interacts with reference-based compression. On graphs with poor initial vertex order, reordering saves 0.3 to 5.4 bits per edge on every dataset and encoder we measured. The size of that gain is largely insensitive to the encoder: on four of five weakly ordered datasets, four independently parameterised encoders agree on the Leiden+LLP-vs-plain-LLP gain within roughly +/- 0.04 bpe. On URL-ordered web crawls, where the distributed ordering already encodes locality, adaptive encoders still benefit from reordering, but encoders tuned to URL-induced residual structure (BV-HC, CG at K>1) are mildly hurt by it. To quantify how much encoder choice matters once ordering is fixed, we contribute three reference-based encoders -- BG, CS, and CG -- that perform per-vertex cost-optimal selection from up to 28 candidate decompositions. Each is run under its own best-tested ordering. The best of the three improves over BVGraph high-compression by 2-9% on every dataset tested, with the encoder-level gain consistently smaller than the ordering-level gain on weakly ordered datasets. The encoder framework also yields a self-delimiting bitstream that supports low-overhead random access.

---

📖 [Read original article](https://arxiv.org/abs/2605.21510)