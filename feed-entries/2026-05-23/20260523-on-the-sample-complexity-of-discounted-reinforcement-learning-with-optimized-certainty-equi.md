---
title: "On the Sample Complexity of Discounted Reinforcement Learning with Optimized Certainty Equivalents"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21763"
author: "Oliver Mortensen, Mohammad Sadegh Talebi"
categories: ["cs.LG", "cs.SY", "eess.SY", "stat.ML"]
---

arXiv:2605.21763v1 Announce Type: new Abstract: We study risk-sensitive reinforcement learning in finite discounted MDPs, where a generative model of the MDP is assumed to be available. We consider a family or risk measures called the optimized certainty equivalent (OCE), which includes important risk measures such as entropic risk, CVaR, and mean-variance. Our focus is on the sample complexities of learning the optimal state-action value function (value learning) and an optimal policy (policy learning) under recursive OCE. We provide an exact characterization of utility functions $u$ for which the corresponding OCE defines an objective that is PAC-learnable. We analyze a simple model-based approach and derive PAC sample complexity bounds. We establish that whenever $u$ does not have full domain $\text{dom}(u)\neq \mathbb{R}$, the corresponding problem is not PAC-learnable. Finally, we establish corresponding lower bounds for both value and policy learning, demonstrating tightness in the size $SA$ of state-action space, and for a more restricted class of utilities, we derive lower bounds that makes the dependence on the effective horizon $\frac{1}{1-\gamma}$ explicit. Specifically, for $\text{CVaR}_\tau$ we show that the correct dependence on $\tau$ is $\frac{1}{\tau^2}$, thus improving by a factor of $\frac{1}{\tau}$ over state-of-the-art although our bound has a suboptimal dependence on $\frac{1}{1-\gamma}$.

---

📖 [Read original article](https://arxiv.org/abs/2605.21763)