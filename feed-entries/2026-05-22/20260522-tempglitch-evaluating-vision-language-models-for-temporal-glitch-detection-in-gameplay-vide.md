---
title: "TempGlitch: Evaluating Vision-Language Models for Temporal Glitch Detection in Gameplay Videos"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21443"
author: "Yakun Yu, Ashley Wiens, Adri\\'an Barahona-R\\'ios, Benedict Wilkins, Saman Zadtootaghaj, Nabajeet Barman, Cor-Paul Bezemer"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.21443v1 Announce Type: cross Abstract: Vision-language models (VLMs) are increasingly being explored for video game quality assurance, especially gameplay glitch detection. Most existing evaluations, however, treat glitches as static visual anomalies, asking models to detect failures from a single frame. We argue that this framing misses a key distinction: some glitches are spatial and visible in an isolated frame, whereas others are temporal and become evident only through changes across ordered frames. A preliminary study confirms this gap, showing that temporal glitches are substantially harder for VLMs to detect than spatial ones. To enable systematic evaluation of this underexplored setting, we introduce TempGlitch, a controlled gameplay video benchmark for temporal glitch detection. TempGlitch covers five temporal glitch types with balanced per-category samples, together with paired glitch-free videos that enable reliable binary evaluation. We evaluate 12 proprietary and open-weight VLMs across multiple frame-sampling settings. Our results show that current VLMs remain near chance on TempGlitch, often collapsing into either overly conservative behavior that misses most glitches or overly sensitive behavior that flags clean videos as glitchy. Moreover, denser frame sampling and larger model size do not reliably resolve these failures. TempGlitch provides a focused testbed for temporal reasoning, robust gameplay understanding, and automated glitch detection with VLMs. Code and data are available at the project website.

---

📖 [Read original article](https://arxiv.org/abs/2605.21443)