---
title: "Interaction Locality in Hierarchical Recursive Reasoning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20784"
author: "Yosuke Miyanishi, Tetsuro Morimura"
categories: ["cs.AI", "cs.LG"]
---

arXiv:2605.20784v1 Announce Type: new Abstract: Spatial reasoning requires both location-bound computation and location-invariant structure: agents must make local moves while preserving route, object, or constraint-level plans. We propose interaction locality, a task-geometry-aware framework for measuring whether information flow stays within nearby cells or semantic segments, or crosses them. We instantiate the framework with sparse-autoencoder feature ablations and finite-noise activation patching, with structural Jacobian and attention checks reported in the appendix, and apply it to HRM and TRM, two compact hierarchical and recursive reasoning models, on Maze-Hard, Sudoku Extreme, and ARC-AGI. Across these models, activation patching gives the clearest architectural fingerprint: high-level recurrent states tend to write information within nearby cells or same-segment units, while repeated recursive updates accumulate these local writes into broader solution structure. This pattern holds across maze paths, Sudoku constraints, and ARC-AGI object neighborhoods, with the strongest concentration in TRM. To test whether interaction locality extends beyond toy-yet-challenging grid benchmarks, we also apply it to MTU3D, a large-scale embodied 3D scene-grounding model. In this MTU3D setting, causal spatial locality appears primarily at the transition where visual scene features are handed to the downstream grounding module, rather than uniformly throughout the visual encoder. This contrast suggests that the local-to-global handoff observed in HRM and TRM is tied to explicit recursive reasoning dynamics, while embodied 3D models may concentrate causal spatial structure at module boundaries. Interaction locality turns the intuitive local-execution/global-planning story into a reproducible measurement framework for recursive and embodied spatial reasoning.

---

📖 [Read original article](https://arxiv.org/abs/2605.20784)