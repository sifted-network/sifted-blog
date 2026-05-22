---
title: "Focus-then-Context: Subject-Centric Progressive Visual Token Reduction for Vision-Language Models"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20950"
author: "Yulin Zhao, Yun Wang, Dehua Zheng, Borui jiang, Zheng Zhang"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20950v1 Announce Type: cross Abstract: Vision-Language Models (VLMs) face a bottleneck of prohibitive computational costs arising from massive visual token sequences during inference. Existing vision token reduction methods alleviate this burden, but they unintentionally preserve the isolated visual subject strictly aligned with the user's query, which fails to substantially explore salient subjects and their contextual relationships. In this paper, we propose SPpruner, a subject-centric progressive reduction paradigm that emulates the \textit{Focus-then-Context} mechanism of the human visual perception system. Specifically, we first construct a focus identification module to explicitly model the interplay between visual saliency and semantic relevance. Herein, it can excavate the comprehensive visual subject spectrum to ensure a high-fidelity representation of visual input. Subsequently, a context-aware structural scanning module is developed to aggregate contextual cues from neighboring regions. As such, it can effectively restore global relational dependencies to uphold the structural integrity of the preserved subjects. Extensive experiments demonstrate that our paradigm consistently outperforms SOTA methods, achieving up to 2.53 times speedup with only 22.2% of visual tokens retained in Qwen2.5-VL and a 67% FLOPs reduction on LLaVA with a negligible 0.6% accuracy drop.

---

📖 [Read original article](https://arxiv.org/abs/2605.20950)