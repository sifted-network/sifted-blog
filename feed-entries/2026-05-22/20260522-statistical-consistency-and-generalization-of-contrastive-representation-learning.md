---
title: "Statistical Consistency and Generalization of Contrastive Representation Learning"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.02116"
author: "Yuanfan Li, Xiyuan Wei, Tianbao Yang, Yiming Ying"
categories: ["cs.LG"]
---

arXiv:2605.02116v2 Announce Type: replace Abstract: Contrastive representation learning (CRL) underpins many modern foundation models. Despite recent theoretical progress, existing analyses suffer from several key limitations: (i) the statistical consistency of CRL remains poorly understood; (ii) available generalization bounds deteriorate as the number of negative samples increases, contradicting the empirical benefits of large negative sets; and (iii) the retrieval performance of CRL has received limited theoretical attention. In this paper, we develop a unified statistical learning theory for CRL. For downstream tasks, we evaluate retrieval quality using an AUC-type population criterion and show that the contrastive loss is \emph{statistically consistent} with optimal ranking. We further establish a \emph{calibration-style inequality} that quantitatively relates excess contrastive risk to excess retrieval suboptimality. For upstream training, we study both supervised and self-supervised contrastive objectives and derive generalization bounds of order $O(1/m + 1/\sqrt{n})$ and $O(1/\sqrt{m} + 1/\sqrt{n})$, respectively, where $m$ denotes the number of negative samples and $n$ the number of anchor points. These bounds not only explain the empirical advantages of large negative sets but also reveal an explicit trade-off between $m$ and $n$. Extensive experiments on large-scale vision--language models corroborate our theoretical predictions.

---

📖 [Read original article](https://arxiv.org/abs/2605.02116)