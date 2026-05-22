---
title: "Spectral Unforgetting: Post-Hoc Recovery of Damaged Capabilities Without Retraining"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20296"
author: "Aarash Abro, Muhammad Tahir"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20296v1 Announce Type: cross Abstract: Fine-tuning a language model for a target task routinely degrades capabilities the training data never explicitly threatened. We study this phenomenon, known as catastrophic forgetting, and propose a post-hoc repair solution that uses only the pretrained checkpoint $W_{\mathrm{base}}$ and its fine-tuned descendant $W_{\mathrm{ft}}$. The goal is not merely to revert the model toward the base checkpoint, but to recover capabilities damaged by fine-tuning while preserving both the target-task gains and any beneficial held-out improvements. We introduce DG-Hard, a checkpoint-only spectral repair method for the fine-tuning update $\Delta = W_{\mathrm{ft}} - W_{\mathrm{base}}$. DG-Hard treats $\Delta$ as a low-rank task-aligned signal embedded in an IID-like noise residual that gradient descent has no incentive to remove, and applies the Donoho-Gavish hard singular-value threshold to each weight-delta matrix, keeping the structured high-energy part of the update and removing the spectral bulk. This reduces repair to a closed-form SVD filtering step requiring no data-dependent tuning. A central difficulty is evaluation: average accuracy hides per-benchmark failures, while naive recovery scores reward models that simply revert toward the base. We therefore introduce a partition-conditional metric that separately tracks healing, preservation, non-damage, and target-task retention. Across $14$ (model, task) settings and nine cross-domain held-out benchmarks, DG-Hard achieves the strongest balanced repair among post-hoc baselines. DG-Hard also restores safety alignment degraded by benign fine-tuning on three independent safety axes, despite using no alignment data. These results suggest that part of fine-tuning-induced capability loss is not an unavoidable consequence of specialization, but a removable spectral residue in the weight update itself.

---

📖 [Read original article](https://arxiv.org/abs/2605.20296)