---
title: "Iterative LLM-based improvement for French Clinical Interview Transcription and Speaker Diarization"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.00086"
author: "Ambre Marie (LaTIM), Thomas Bertin (DySoLab), Guillaume Dardenne (LaTIM), Gwenol\\'e Quellec (LaTIM)"
categories: ["cs.CL", "cs.AI", "cs.SD", "eess.AS"]
---

arXiv:2603.00086v2 Announce Type: replace-cross Abstract: Automatic speech recognition for French medical conversations remains challenging, with word error rates often exceeding 30% in spontaneous clinical speech. This study proposes a multi-pass LLM post-processing architecture alternating between Speaker Recognition and Word Recognition passes to improve transcription accuracy and speaker attribution. Ablation studies on two French clinical datasets (suicide prevention telephone counseling and preoperative awake neurosurgery consultations) investigate four design choices: model selection, prompting strategy, pass ordering, and iteration depth. Using Qwen3-Next-80B, Wilcoxon signed-rank tests confirm significant WDER reductions on suicide prevention conversations (p<0.05, n=18), while maintaining stability on awake neurosurgery consultations (n=10), with zero output failures and acceptable computational cost (RTF 0.32), suggesting feasibility for offline clinical deployment, pending validation on larger corpora.

---

📖 [Read original article](https://arxiv.org/abs/2603.00086)