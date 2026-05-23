---
title: "Beyond Euclidean Proximity: Repairing Latent World Models with Horizon-Matched Trajectory Reachability Metrics"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22164"
author: "Liangyu Li, Shengzhi Wang, Qingwen Liu"
categories: ["cs.LG", "cs.RO"]
---

arXiv:2605.22164v1 Announce Type: new Abstract: Latent world models can contain the state needed for control, yet their terminal-cost interface can expose the planner to the wrong decision-relevant information. In common latent MPC, candidate sequences are ranked by Euclidean distance between predicted terminal and goal latent states; this assumes that raw latent distance weights reachability-relevant variables correctly. We propose trajectory reachability metrics (TRM), a post-hoc terminal-ranking method for fixed latent world models. TRM trains a small pairwise head from logged trajectory structure and uses it as a replacement or hybrid cost; the encoder, dynamics, sampler, optimizer, and evaluation manifests remain fixed. The key design choice is horizon-aware supervision: the metric is trained on broad, balanced temporal separations to match the long-horizon terminal candidate ranking problem. On a hard TwoRoom benchmark, raw latent planning with LeWorldModel (LeWM) reaches 7.0% success, while full-horizon TRM reaches 97.0%; shuffled temporal-label controls stay at 0.0%. The same recipe improves a PLDM baseline from 32.7% to 84.0% across three seeds, and a short-horizon TRM variant reaches only 35.0% with the 100,000 pair budget. In TwoRoom, we provide mechanistic evidence for why TRM works: XY position is linearly decodable (R^2=0.998), yet raw latent MSE misranks candidates; the XY-probe rowspace accounts for less than 1% of terminal-goal latent MSE but carries most candidate-quality signal; and SCSA audits show that TRM improves the ordering and selected endpoint seen by the planner. On PushT go50/go75, TRM-style task-state metrics improve SCSA ranking and selected final distance more cleanly than closed-loop success, motivating auxiliary hybrid costs in continuous manipulation. TRM is the planner-facing repair, and audits explain when terminal reachability metrics should replace or augment raw latent proximity.

---

📖 [Read original article](https://arxiv.org/abs/2605.22164)