---
title: "Calibration, Uncertainty Communication, and Deployment Readiness in CKD Risk Prediction: A Framework Evaluation Study"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21566"
author: "Michael O. Eniolade"
categories: ["cs.LG"]
---

arXiv:2605.21566v1 Announce Type: new Abstract: Machine learning models for chronic kidney disease (CKD) risk prediction often post strong discrimination scores on internal test sets. Calibration and uncertainty quantification get far less attention, leaving clinicians without reliable information about whether the probability outputs are accurate. We trained five classifiers on the UCI CKD dataset (400 patients, 62.5% CKD prevalence): logistic regression, random forest, XGBoost, SVM with Platt scaling, and Gaussian naive Bayes. We evaluated each across calibration quality, conformal prediction coverage, and an eight-criterion deployment readiness framework. A distributional stress-test applied the best-calibrated variant of each model to the open-access MIMIC-IV demo cohort (97 patients, 23.7% CKD) to assess behaviour under prevalence shift and feature missingness. We measured calibration before and after Platt scaling and isotonic regression using Expected Calibration Error and Brier Score, and quantified uncertainty through split conformal prediction targeting 90% marginal coverage. All five models reached AUROC 1.00 on the UCI test set. Isotonic recalibration reduced internal ECE to 0.000-0.022. On MIMIC-IV, AUROC fell to 0.48-0.58, ECE rose to 0.68-0.76, and conformal coverage dropped from 0.80-0.98 to 0.21-0.25 against a 90% target. No model scored above 4 out of 16 on the deployment readiness checklist. Near-perfect internal performance did not transfer. Calibration stability and conformal coverage should be evaluated on external data before any clinical prediction model moves toward deployment.

---

📖 [Read original article](https://arxiv.org/abs/2605.21566)