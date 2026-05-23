---
title: "Survive or Collapse: The Asymmetric Roles of Data Gating and Reward Grounding in Self-Play RL"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22217"
author: "Sophia Xiao Pu, Zhaotian Weng, Chengzhi Liu, Jayanth Srinivasa, Gaowen Liu, William Yang Wang, Xin Eric Wang"
categories: ["cs.LG", "cs.CL"]
---

arXiv:2605.22217v1 Announce Type: new Abstract: Self-play reinforcement learning trains language models on their own generated tasks, co-evolving a proposer and solver without human labels. Recent systems report strong reasoning gains, but collapse and instability are widely observed and poorly understood. The dominant response treats this as a reward-design problem. We argue instead that self-play stability is governed by two distinct levers: a data-level gate that decides which proposer-generated tasks enter the training pool, and the reward signal that updates the policy on tasks already admitted. Through controlled experiments on a Python output-prediction task and a deterministic-DSL twin task that strips pretraining priors, output ambiguity, and executor noise, we find the two levers are asymmetric. A strict gate is sufficient for stability under every reward variant we test, including a self-consistency reward with no access to ground truth; while no reward variant is sufficient once the gate is removed. This asymmetry exposes a counter-intuitive coupling we call the Grounded Proposer Paradox: a proposer with ground-truth access accelerates collapse faster than an ungrounded one when paired with a self-consistency solver, by concentrating training on clean tasks that form the fastest path to a spurious self-consistent attractor. Replacing the binary gate with a continuous strictness parameter $\varepsilon$ further reveals a two-stage phase transition: training-side metrics decouple at low $\varepsilon$, while validation accuracy holds until $\varepsilon$ is much higher. Data-level gating, not reward calibration, is the binding constraint on self-play stability.

---

📖 [Read original article](https://arxiv.org/abs/2605.22217)