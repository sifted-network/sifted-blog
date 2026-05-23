---
title: "MambaGaze: Bidirectional Mamba with Explicit Missing Data Modeling for Cognitive Load Assessment from Eye-Gaze Tracking Data"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22775"
author: "Amir Mousavi, Mohammad Sadegh Sirjani, Erfan Nourbakhsh, Mimi Xie, Rocky Slavin, Leslie Neely, John Davis, John Quarles"
categories: ["cs.LG", "cs.AI", "cs.HC"]
---

arXiv:2605.22775v1 Announce Type: cross Abstract: Real-time cognitive load assessment from eye-tracking signals could potentially enable adaptive human-centered-AI such as safety-critical applications such as driver vigilance monitoring or automated flight deck assistance, yet two challenges persist: handling frequent data missingness from blinks and tracking failures, and efficiently modeling long-range temporal dependencies. We propose MambaGaze, a framework that addresses these challenges through 1) XMD encoding, which augments raw features with observation masks and time-deltas to explicitly model data uncertainty, and 2) bidirectional Mamba-2, which captures temporal dependencies with linear computational complexity. Experiments on CLARE and CL-Drive datasets under leave-one-subject-out evaluation show that MambaGaze achieves 76.8% and 73.1% accuracy, respectively, outperforming CNN, Transformer, ResNet, and VGG baselines by 4-12 percentage points. Edge deployment benchmarks on NVIDIA Jetson platforms demonstrate real-time inference at 43-68 FPS with power consumption below 7.5W, confirming feasibility for wearable cognitive load monitoring.

---

📖 [Read original article](https://arxiv.org/abs/2605.22775)