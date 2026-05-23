---
title: "Characterizing the Fault Response of the Intel Neural Compute Stick 2 Under Single-Pulse Electromagnetic Fault Injection"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22437"
author: "\\v{S}tefan Ku\\v{c}er\\'ak, Jakub Breier, Xiaolu Hou"
categories: ["cs.CR", "cs.AI", "cs.LG"]
---

arXiv:2605.22437v1 Announce Type: cross Abstract: Vision processing units and other commercial neural-network inference accelerators are increasingly deployed in safety-relevant edge applications, but their fault response under transient hardware disturbances remains poorly characterized in the open literature. For the Intel Movidius Myriad X, packaged as the Intel Neural Compute Stick 2 (NCS2), only a single feasibility study has been published. We report a systematic single-pulse electromagnetic fault injection (EMFI) campaign on the NCS2 running three ImageNet-trained convolutional neural networks (ResNet-18, ResNet-50, VGG-11) on the OpenVINO runtime. Across 1,536 spot-test trials at characterized hotspots and approximately 16,000 parameter-search trials, single pulses produce four reproducible outcome classes: no measured accuracy change, minor silent data corruption, major persistent degradation that survives across subsequent inferences until model reload, and device hangs requiring USB power-cycling; these outcomes are respectively interpreted as no-effect, SDC with possible SET-like or small persistent-state mechanisms, SEU-like persistent corruption, and SEFI-like loss of functionality. Two findings are central. First, the major-degradation class can be induced at 18-31% of trials at characterized hotspots, with post-collapse top-1 accuracy below five percent and persistence across all subsequent inferences until explicit model reload - a regime that no inference-API-level mechanism detects. Second, this regime is also inducible by pulses delivered to an idle device with the model already loaded, demonstrating that load-time integrity checks alone are insufficient. We discuss mitigation strategies graded by class, focusing on mechanisms implementable at the application level without modification to the device firmware or the OpenVINO runtime.

---

📖 [Read original article](https://arxiv.org/abs/2605.22437)