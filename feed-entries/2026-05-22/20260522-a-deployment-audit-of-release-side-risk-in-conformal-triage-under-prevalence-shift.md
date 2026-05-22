---
title: "A Deployment Audit of Release-Side Risk in Conformal Triage under Prevalence Shift"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20956"
author: "Chengze Li, Xiao Liu, Hanrong Zhang, Haiyang Peng, Yanghao Ruan, Huanhuan Ma, Chunyu Miao, Qichao Zhou, Xiangrong Qi, Philip Yu"
categories: ["cs.LG", "cs.CY"]
---

arXiv:2605.20956v1 Announce Type: new Abstract: Conformal triage converts predictive scores into deployment actions that either release a case, flag it for urgent attention, or defer it to human review. Under prevalence shift, however, the usual summaries of marginal coverage and human-review rate can miss the safety-critical question of whether patients who truly experience the target event are released without review. To address this gap, we introduce a leakage-aware deployment audit for release-side conformal triage. It first assigns target subjects to three non-overlapping roles: prevalence correction, conformal calibration, and held-out release-safety evaluation. This separation then lets the audit evaluate release directly: how many event-positive patients are cleared without review, whether the pilot has enough event labels for calibration, and how the safety-review trade-off shifts. Applying this audit to a retrospective NSCLC pilot shows why lower review can be misleading: after prevalence correction, the pooled conformal branch lowers review by releasing more patients, some of whom are event-positive. Within the audit, the classwise branch acts as a scarcity diagnostic: the pilot has too few event labels to certify safe low-review release.

---

📖 [Read original article](https://arxiv.org/abs/2605.20956)