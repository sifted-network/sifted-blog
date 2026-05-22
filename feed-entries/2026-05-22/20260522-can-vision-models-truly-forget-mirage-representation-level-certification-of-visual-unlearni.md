---
title: "Can Vision Models Truly Forget? Mirage: Representation-Level Certification of Visual Unlearning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20282"
author: "Zhenyu Yu, Yangchen Zeng, Chunlei Meng, Guangzhen Yao, Shuigeng Zhou"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.20282v1 Announce Type: cross Abstract: Machine unlearning in Vertical Federated Learning (VFL) has attracted growing interest, yet existing methods certify forgetting solely using output-level metrics. We challenge these claims by introducing Mirage, a representation-level auditing framework comprising four complementary diagnostics: Linear Probe Recovery (LPR), Centered Kernel Alignment (CKA), Feature Separability Scoring, and Layer-Wise Recovery Analysis. Through experiments across seven datasets and seven baseline methods following recent VFL unlearning protocols, Mirage reveals three key findings: (i) Forgetting gap: methods that pass output-level certification still retain substantial class structure in their representations, with LPR exceeding the retrained baseline by up to 15.4 points; CKA shows these models remain structurally closer to the original than to the retrained reference, while separability scores indicate persistent geometric discrimination. (ii) Unlearning trilemma: no existing method simultaneously achieves high utility, output-level forgetting, and representation-level forgetting. (iii) Class-sample asymmetry: class-level forgetting leaves strong representational traces (LPR up to 97%), whereas sample-level forgetting is indistinguishable from chance (LPR approx. 50%); layer-wise analysis further shows residual class information persists across network depths. These findings call for representation-aware evaluation standards in federated unlearning research.

---

📖 [Read original article](https://arxiv.org/abs/2605.20282)