---
title: "Expectation Consistency Loss: Rethink Confidence Calibration under Covariate Shift"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21552"
author: "Jinzong Dong, Zhaohui Jiang, Bo Yang"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2605.21552v1 Announce Type: new Abstract: Confidence calibration for classification models is vital in safety-critical decision-making scenarios and has received extensive attention. General confidence calibration methods assume training and test data are independent and identically distributed, limiting their effectiveness under covariate shifts. Previous calibration methods under covariate shift struggle with class-wise or canonical calibrations and often rely on unstable importance weighting when density ratios are large or unbounded. Given the above limitations, this paper rethinks confidence calibration under covariate shifts. First, we derive a necessary and sufficient condition for confidence calibration under covariate shifts, named Expectation consistency condition, which reveals covariate shifts do not necessarily lead to uncalibrated confidence and provides a weaker condition for confidence calibration than global covariate distribution alignment. Then, utilizing Expectation consistency condition, this paper proposes an unsupervised domain adaptation loss to calibrate confidence of the target domain, named Expectation consistency loss (ECL), which is compatible with canonical calibration, class-wise calibration, and top-label calibration. Third, we prove that computing ECL loss has the same sample complexity as Expected Calibration Error (ECE) and provide a theoretically grounded mini-batch trainable scheme for ECL loss. Finally, we validate the effectiveness of our method on both simulated and real-world covariate shift datasets.

---

📖 [Read original article](https://arxiv.org/abs/2605.21552)