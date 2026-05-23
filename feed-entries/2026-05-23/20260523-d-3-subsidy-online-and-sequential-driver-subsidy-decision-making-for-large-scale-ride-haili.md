---
title: "D$^3$-Subsidy: Online and Sequential Driver Subsidy Decision-Making for Large-Scale Ride-Hailing Market"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20036"
author: "Taijie Chen, Rui Su, Siyuan Feng, Laoming Zhang, Hongyang Zhang, Haijiao Wang, Zhaofeng Ma, Jintao Ke, Li Ma"
categories: ["cs.LG"]
---

arXiv:2605.20036v3 Announce Type: replace Abstract: Ride-hailing platforms like DiDi Chuxing operate in highly dynamic environments where balancing driver supply and passenger demand is critical. Although driver-side subsidies serve as a primary lever to align these forces and improve key KPIs like completed rides (\texttt{Rides}) and gross merchandise value (\texttt{GMV}), optimizing them in production requires simultaneously meeting three constraints: (i) responsiveness to stochastic shocks, (ii) strict subsidy-rate caps, and (iii) low-latency execution at city scale. These requirements rule out expensive per-order optimization, calling for a forward-looking, constraint-aware city-level controller for online sequential decision making. To meet these requirements, we introduce D$^3$-Subsidy (Dynamic Driver-side Diffusion-based Subsidy), a hierarchical diffusion-based framework for deployable city-wide subsidy control. To bridge the train-inference gap, D$^3$-Subsidy employs a prefix-conditioned diffusion model that samples plausible future trajectories from immutable historical observations, ensuring the training protocol aligns with the fixed-history nature of online deployment. These generated plans are then decoded by a context-conditioned inverse module into low-dimensional city-level control signals. For scalable execution, we bridge the gap between city-level planning and fine-grained dispatch via a Lagrangian-dual-derived mapping, which embeds subsidy-rate caps directly into order-driver incentives without iterative optimization. Additionally, a multi-city pretraining strategy with parameter-efficient fine-tuning enables robust transfer across heterogeneous cities. Extensive offline evaluations demonstrate that D$^3$-Subsidy improves \texttt{Rides} and \texttt{GMV} while enhancing cap compliance, and a real-world A/B test confirms significant uplift while keeping budget-related violation metrics within operational thresholds.

---

📖 [Read original article](https://arxiv.org/abs/2605.20036)