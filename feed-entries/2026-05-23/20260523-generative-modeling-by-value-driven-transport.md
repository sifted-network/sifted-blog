---
title: "Generative Modeling by Value-Driven Transport"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22507"
author: "Pablo Moreno-Mu\\~noz, Adrian M\\\"uller, Gergely Neu"
categories: ["cs.LG", "stat.ML"]
---

arXiv:2605.22507v1 Announce Type: new Abstract: We propose a new framework for generative modeling based on a discrete-time stochastic control formulation of measure transport. Adapting classic results from control theory, we formulate our problem as a linear program whose dual variables correspond to the \emph{optimal value function} of the control problem, which directly encodes the optimal control policy. Exploiting this LP formulation, we develop an efficient simulation-free primal-dual algorithm for computing approximately optimal value functions and the associated \emph{value-driven transport} (VDT) policies which approximate the true optimal policy. We show that well-trained VDT policies enjoy numerous favorable properties in comparison with other state-of-the-art methods based on flows, diffusions, or Schr\"odinger bridges: they lead to straight transport paths which can be simulated quickly and robustly, and can be enhanced in all the same ways as diffusion and flow-based models (e.g., conditional generation, classifier-free guidance, unpaired data-to-data translation are all easy to incorporate). We evaluate our methodology in a range of experiments, with results that indicate strong performance and good potential for scalability.

---

📖 [Read original article](https://arxiv.org/abs/2605.22507)