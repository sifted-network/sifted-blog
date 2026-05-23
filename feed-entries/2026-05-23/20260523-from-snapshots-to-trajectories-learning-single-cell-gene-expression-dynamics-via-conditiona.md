---
title: "From Snapshots to Trajectories: Learning Single-Cell Gene Expression Dynamics via Conditional Flow Matching"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22340"
author: "Siyu Pu, Qingqing Long, Xiaohan Huang, Haotian Chen, Jiajia Wang, Meng Xiao, Xiao Luo, Hengshu Zhu, Yuanchun Zhou, Xuezhi Wang"
categories: ["cs.LG"]
---

arXiv:2605.22340v1 Announce Type: new Abstract: Single-cell RNA sequencing (scRNA-seq) provides high-dimensional profiles of cellular states, enabling data-driven modeling of cellular dynamics over time. In practice, time-resolved scRNA-seq is collected at only a few discrete time points as unpaired snapshot populations, leaving substantial temporal gaps. This motivates trajectory inference at unmeasured time points. Existing methods mainly follow two directions, optimal-transport (OT) alignment provides distribution-level matching between observed snapshots, while continuous-time generative models support forecasting via learned dynamics. However, two challenges remain: (i) unpaired snapshots render local transitions between adjacent time points ambiguous, leading to unstable supervision; and (ii) long-horizon prediction relies on repeated integration, where small modeling errors compound and cause distribution drift. To address these challenges, we propose single-cell Flow Matching (scFM), a latent generative framework based on coupling-conditioned flow matching. First, we compute entropically regularized OT couplings between adjacent snapshots and use them to construct soft, weighted flow-matching targets for learning time-dependent velocity fields. Second, we learn bidirectional velocity fields and leverage their consistency to refine couplings and improve temporal coherence under sparse supervision. Third, we introduce distribution-level alignment and latent dynamic regularization to anchor long rollouts and mitigate drift. Experiments on real-world time-series scRNA-seq datasets show that scFM consistently improves distributional prediction performance for both temporal interpolation and extrapolation. Moreover, scFM yields more accurate trajectory reconstruction and temporally coherent visualizations where intermediate time points are absent, indicating a more faithful recovery of underlying temporal gene expression dynamics.

---

📖 [Read original article](https://arxiv.org/abs/2605.22340)