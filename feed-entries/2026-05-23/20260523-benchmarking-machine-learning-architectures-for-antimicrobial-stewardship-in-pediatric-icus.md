---
title: "Benchmarking Machine Learning Architectures for Antimicrobial Stewardship in Pediatric ICUs"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22611"
author: "Niklas Raehse, Luregn J. Schlapbach, Daphn\\'e Chopard"
categories: ["cs.LG"]
---

arXiv:2605.22611v1 Announce Type: new Abstract: Antimicrobial stewardship (AMS) is critical in pediatric intensive care units (PICUs), where diagnostic uncertainty often drives broad-spectrum antibiotic use, increasing antimicrobial resistance and potential long-term harms. Machine learning offers a promising approach for identifying patient-level opportunities for stewardship interventions from electronic health record data, yet prior work has focused largely on adult populations and static tabular representations. We present a systematic benchmarking study of AMS intervention prediction in the PICU across a public dataset and a private institutional cohort. We define four clinically relevant proxy targets for reducing antibiotic exposure: intravenous-to-oral switching, de-escalation, discontinuation, and short-course therapy. Under a unified evaluation framework, we compare tabular, sequence-based, and graph-based temporal models at multiple temporal resolutions. We find that predictive performance is driven primarily by target prevalence and dataset characteristics rather than model complexity. Sequence models improve the precision-recall trade-off over tabular approaches at coarse (24-hour) resolution, while finer temporal modeling provides limited additional benefit. However, these gains come at the cost of poorer calibration, with simpler tabular models yielding more reliable probability estimates. Multi-task learning produces only marginal improvements, suggesting limited shared structure across stewardship targets. Our findings highlight the importance of target design, temporal representation, and calibration in clinical machine learning, and provide practical guidance for developing reliable decision support systems for pediatric AMS.

---

📖 [Read original article](https://arxiv.org/abs/2605.22611)