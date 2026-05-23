---
title: "Reading Task Failure Off the Activations: A Sparse-Feature Audit of GPT-2 Small on Indirect Object Identification"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22719"
author: "Mahdi Nasermoghadasi"
categories: ["cs.LG"]
---

arXiv:2605.22719v1 Announce Type: new Abstract: We report a small, reproducible audit of which sparse-autoencoder (SAE) features of GPT-2 small fire differently on failed versus successful trials of the Indirect Object Identification (IOI) task. On 300 prompts, GPT-2 small reaches 79.7% accuracy; 146 of the 24,576 features in the layer-8 residual-stream SAE release of Bloom (2024) clear a Holm-corrected significance threshold and 105 reach a large effect size (|Cohen's d| > 0.8). The strongest single correlate of failure -- feature 17,491, d=+2.93, Neuronpedia label 'cryptographic keys' -- is essentially silent except when the prompt's transferred object is 'the keys,' on which GPT-2 small fails 93.3% of the time vs. 7.5% on the other seven objects (Fisher exact p = 8.79 x 10^-33). We put this correlate through three controls that a mechanistic claim should pass. (i) A causal ablation: zeroing feature 17,491 in the residual stream across all token positions of the 45 keys prompts does not restore accuracy (6.7% -> 4.4%); the feature is a correlate, not a sufficient cause at this layer. (ii) A representation baseline: a logistic regression on the raw 768-dimensional residual stream reaches 5-fold ROC AUC = 0.929, matching the top-100 SAE features (0.927); the SAE basis adds interpretability, not predictive power. (iii) A seed-robustness check: across five random seeds the keys-subset failure rate stays in 75.0--93.3% (the behavioural effect is real), but feature 17,491 is the top-|d| feature in only 1 of 5 runs. The methodological contribution is therefore the audit pipeline (cheap, model-agnostic, surfaces named correlates) rather than any single feature found through it. We release the code, the 300-prompt corpus, the 300x24,576 activation matrix, the ablation and baseline scripts, and the figures. The full pipeline runs on a laptop (Apple M3 Max, no discrete GPU).

---

📖 [Read original article](https://arxiv.org/abs/2605.22719)