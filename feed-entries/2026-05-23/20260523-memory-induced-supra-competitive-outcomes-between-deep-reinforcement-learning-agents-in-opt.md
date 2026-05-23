---
title: "Memory-Induced Supra-Competitive Outcomes Between Deep Reinforcement Learning Agents in Optimal Trade Execution"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20348"
author: "Christos Spyridon Koulouris, Carlo Campajola"
categories: ["q-fin.CP", "cs.AI"]
---

arXiv:2605.20348v1 Announce Type: cross Abstract: In this paper, we investigate whether deep reinforcement-learning agents interacting in a shared optimal-execution environment can sustain supra-competitive outcomes, in the sense of achieving lower implementation shortfalls than the relevant game-theoretical competitive benchmark. We study a two-agent Almgren-Chriss liquidation game and examine how learned behavior depends on intra-episode environment feedback, the ability to interpret the mid-price and the agent's knoledge of the past. We first use ex-ante schedule-learning agents to remove intra-episode feedback and isolate what can arise when agents commit to complete liquidation trajectories before execution begins. We then allow agents to condition on the evolving state using a variety of DDQN architectures. We find that, when agents are given access to intra-episode history, especially recent prices and own past actions, supra-competitive outcomes become substantially more frequent and more persistent. These findings indicate that supra-competitive behavior in this execution game is driven not by multi-agent learning or by current price observation alone, but by feedback, memory, and state-contingent interaction along the realized execution path.

---

📖 [Read original article](https://arxiv.org/abs/2605.20348)