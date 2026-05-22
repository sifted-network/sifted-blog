---
title: "Smaller Abstract State Spaces Enable Cross-Scale Generalization in Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20272"
author: "Nasehatul Mustakim, Lucas Lehnert"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2605.20272v1 Announce Type: cross Abstract: While humans readily generalize abstract concepts to more complex or larger tasks, building Reinforcement Learning (RL) systems with this ability remains elusive. Here, we present the first theoretical model of how such Out-of-Distribution (OOD) generalization can be achieved in RL agents. Our approach considers Partially Observable Markov Decision Processes (POMDPs) and assumes that an intelligent agent uses an abstraction function to determine which experiences can be treated as equivalent and which must be distinguished. First, we extend the existing state abstraction framework and proof techniques to POMDPs. Then, we define a successor-weighted model reduction, a model reduction variant that enables compression into smaller abstract spaces than prior definitions allow. We derive a bound on the agent's OOD test performance, thereby defining the conditions under which OOD generalization is achievable. This bound decomposes an agent's performance loss into approximation and estimation errors, revealing how reducing an agent's abstract state space size improves test performance and OOD generalization. Our analysis suggests that constraining an agent to operate over a small, finite set of abstract states is necessary for achieving generalization to more complex tasks. Our results motivate further research into learning RL architectures that scale across tasks of varying complexity levels.

---

📖 [Read original article](https://arxiv.org/abs/2605.20272)