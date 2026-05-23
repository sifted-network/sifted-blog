---
title: "Cross-Species RSA Reveals Conserved Early Visual Alignment but Divergent Higher-Area Rankings Across Human fMRI and Macaque Electrophysiology"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22401"
author: "Nils Leutenegger"
categories: ["cs.LG", "cs.NE", "q-bio.NC"]
---

arXiv:2605.22401v1 Announce Type: new Abstract: Does the relationship between learning rules and brain alignment generalize across species? We extend our prior finding that untrained CNNs match backpropagation at human V1 by testing the same five learning rules against macaque electrophysiology. The rules are backpropagation (BP), feedback alignment (FA), predictive coding (PC), spike-timing-dependent plasticity (STDP), and an untrained random-weights baseline. The macaque data come from two datasets: MajajHong2015 (V4/IT, 3,200 stimulus presentations, 88/168 neurons) and FreemanZiemba2013 (V1/V2, 135 stimuli, 102/103 neurons). Using RSA with identical model weights from our human study, we find: (1) all models achieve higher alignment with macaque early visual cortex (rho = 0.15-0.30 at V1/V2) than with human fMRI (rho = 0.01-0.08), consistent with the higher signal-to-noise ratio of electrophysiology; (2) STDP and PC produce the highest macaque V1/V2 alignment (rho ~ 0.30 and 0.28), consistent with their leading position among trained rules in human V1; (3) at IT, learning rule rankings show no detectable correlation across species (Kendall's tau = 0.00, p = 1.00), though this null result is expected given that n = 5 provides power only at tau = +/-1.0, and is further confounded by stimulus set differences; (4) a pretrained ResNet-50 (ImageNet) achieves rho = 0.25 at macaque IT, substantially above all custom CNN conditions (rho = 0.07-0.14), suggesting IT alignment is limited by model capacity and training data rather than by the learning rule. Noise ceilings, multi-seed variability (5 seeds), and a stimulus-control analysis are reported. These results demonstrate that early visual alignment is robust across species, while higher-area alignment is modulated by model capacity and stimulus domain.

---

📖 [Read original article](https://arxiv.org/abs/2605.22401)