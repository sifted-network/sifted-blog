---
title: "ARC-RL: A Reinforcement Learning Playground Inspired by ARC Raiders"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.19503"
author: "Carlo Romeo, Andrew D. Bagdanov"
categories: ["cs.RO", "cs.AI", "cs.LG"]
---

arXiv:2605.19503v2 Announce Type: replace-cross Abstract: Reinforcement learning for legged locomotion has matured into a stack of multi-component reward functions and physics-engine benchmarks whose morphologies are uniformly derived from real commercial hardware. Game NPCs, however, are bound by stylistic constraints absent from sim-to-real robotics and routinely take the form of creatures with no real-robot counterpart. We introduce ARC-RL, a suite of four MuJoCo continuous-control environments featuring robotic morphologies inspired by the bestiary of ARC Raiders: the 18-DoF tall hexapod Queen, the 12-DoF armoured hexapod Bastion, the 18-DoF compact hexapod Tick, and the 12-DoF quadruped Leaper. All four robots share a unified observation template, action convention, simulation cadence, and a single closed-form multi-component reward function whose only per-morphology variation lives in a small set of weights and parameters. The reward fuses a velocity-tracking tent, a healthy survive bonus, a phase-locked gait-compliance bonus/cost pair, action regularisers, three safety penalties, and a posture anchor; no motion-capture data enters the reward at any point. We additionally provide hand-crafted Central Pattern Generator demonstrators per morphology, which serve both as fixed expert references and as sources of prior data for offline-to-online training. On this playground, we conduct a controlled empirical study comparing standard online algorithms (SAC, SPEQ, SOPE-EO) and methods augmented with prior data (SACfD, SPEQ-O2O, SOPE), and characterise how each paradigm copes with the playground's morphological diversity and animation-style stylistic constraints. Source code is available at https://github.com/CarloRomeo427/ARC_RL.git.

---

📖 [Read original article](https://arxiv.org/abs/2605.19503)