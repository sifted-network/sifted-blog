---
title: "Mind the Sim-to-Real Gap & Think Like a Scientist"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21458"
author: "Harsh Parikh, Gabriel Levin-Konigsberg, Dominique Perrault-Joncas, Alexander Volfovsky"
categories: ["cs.AI", "cs.LG", "stat.ME"]
---

arXiv:2605.21458v1 Announce Type: new Abstract: Suppose a planner has a pre-trained simulator of a sequential decision problem and the option to run real experiments in the field. The simulator is cheap to query but inherits confounding and drift from its calibration data. Experimentation is unbiased but consumes one real unit per trial. We study when, and how, the planner should supplement the simulator with experiments. We give three results. First, an extended simulation lemma decomposes the simulator's value error into a calibration--deployment shift that randomization can identify and a parametric residual that no further interaction can reduce. Second, the value gap between the simulator-optimal policy and the optimum splits into a local component, on states the deployed policy already visits, and a reachability component, on states it does not. The reachability component stays bounded away from zero at any horizon under purely passive learning. Third, we propose Fisher-SEP, a simulation-aided experimental policy (SEP) that minimizes the posterior predictive variance of a target policy's value, with reward-only and transition-only specializations. Two case studies illustrate the regimes. In a vending-machine supply chain, front-loaded experimentation overtakes posterior updating once the horizon is long enough to amortize the pilot. In an HIV mobile-testing example with a corridor that separates a well-surveilled region from a poorly-surveilled one, only designed exploration reaches the poorly-surveilled region.

---

📖 [Read original article](https://arxiv.org/abs/2605.21458)