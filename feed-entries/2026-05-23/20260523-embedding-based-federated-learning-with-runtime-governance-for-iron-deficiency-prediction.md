---
title: "Embedding-Based Federated Learning with Runtime Governance for Iron Deficiency Prediction"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21563"
author: "Fan Zhang, Simon Deltadahl, Majid Lotfian Delouee, Daniel Kreuter, Joseph Taylor, Allerdien Visser, BloodCounts Consortium, James H. F. Rudd, Nicholas S. Gleadall, Suthesh Sivapalaratnam, Folkert Asselbergs, Martijn C. Schut, Michael Roberts"
categories: ["cs.LG"]
---

arXiv:2605.21563v1 Announce Type: new Abstract: Recent reviews find that the vast majority of published healthcare federated learning (FL) studies never reach real-world deployment. We developed an embedding-based FL pipeline for iron deficiency prediction from routine full blood count (FBC) data and deployed it across real institutional environments at Amsterdam University Medical Centre (AUMC) and NHS Blood and Transplant (NHSBT), two clinical environments that differ markedly in iron deficiency prevalence, ferritin distribution, and subject populations. A frozen domain-specific haematology foundation model, DeepCBC, performs site-local representation extraction, restricting federated training to a compact downstream classifier and substantially reducing recurrent communication relative to full-encoder federation. The two clinical datasets are structurally not independent and identically distributed (non-IID), with heterogeneity arising from distinct population differences rather than sampling artefacts. Runtime governance is enforced by FLA$^3$, a healthcare-oriented FL platform providing study-scoped execution, policy-based authorisation, and signed audit logging. Standard sample-size-weighted aggregation (FedAvg) reduced the area under the receiver operating characteristic curve (ROC-AUC) at both sites relative to local-only training, as the global update was biased towards the larger AUMC distribution. FedMAP, a personalised aggregation method, raised ROC-AUC from 0.9470 to 0.9594 at AUMC and from 0.8558 to 0.8671 at NHSBT relative to local-only training, achieving the highest macro ROC-AUC of 0.9133 and the best macro balanced accuracy overall. These results support personalised aggregation in clinical federations where client sample size and task relevance diverge substantially.

---

📖 [Read original article](https://arxiv.org/abs/2605.21563)