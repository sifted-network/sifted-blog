---
title: "Geometry-Lite: Interpretable Safety Probing via Layer-Wise Margin Geometry"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20241"
author: "Woo Seob Sim, Yu Rang Park"
categories: ["cs.LG", "cs.AI", "cs.CL"]
---

arXiv:2605.20241v1 Announce Type: new Abstract: Prompt-level safety probes for large language models use hidden-state representations to separate safe from unsafe prompts, but strong average detection performance does not explain the geometry of this separation. In particular, it remains unclear how safety evidence is formed across layers, which aspects of that layer-wise geometry support low-false-positive decisions, and which geometric biases remain stable under benchmark shift. We study this as an empirical decomposition problem and introduce Geometry-Lite, a compact prompt-level probe that maps each layer's final prompt-token representation to signed margins under centroid, local-neighborhood, and supervised linear-boundary readouts, then summarizes the resulting margin profiles by boundary position, layer-to-layer change, and coarse shape. Across nine instruction-tuned backbones ($1.2$B--$70$B) and seven safety benchmarks, Geometry-Lite improves over single-layer probes while remaining close to raw multi-layer score stacking, making it a useful instrument for analyzing the multi-layer safety signal. The decomposition shows that safety evidence is expressed primarily through persistent boundary-position geometry: final or extremal margins and unsafe-side layer occupancy dominate aggregate detection performance. In contrast, finite-difference drift and structural summaries add little to pooled AUROC, although drift can provide small recall-oriented corrections under shifted low-FPR thresholds. Under benchmark shift, optimized linear boundaries are sharp on the training mixture, whereas class-conditional mean geometry retains separation more reliably on a predefined hard held-out subset. Overall, prompt-level safety evidence is not primarily a layer-to-layer motion signal, but a persistent layer-wise margin geometry whose useful components and readout-level biases become visible in decision-critical regimes.

---

📖 [Read original article](https://arxiv.org/abs/2605.20241)