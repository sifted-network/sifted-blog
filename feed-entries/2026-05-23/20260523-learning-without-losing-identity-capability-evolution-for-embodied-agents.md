---
title: "Learning Without Losing Identity: Capability Evolution for Embodied Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.07799"
author: "Xue Qin, Simin Luan, John See, Cong Yang, Zhijun Li"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2604.07799v2 Announce Type: replace-cross Abstract: Embodied agents are expected to operate persistently in dynamic physical environments, continuously acquiring new capabilities over time. Existing approaches to improving agent performance often rely on modifying the agent itself -- through prompt engineering, policy updates, or structural redesign -- leading to instability and loss of identity in long-lived systems. In this work, we propose a capability-centric evolution paradigm for embodied agents. We argue that a robot should maintain a persistent agent as its cognitive identity, while enabling continuous improvement through the evolution of its capabilities. Specifically, we introduce the concept of Embodied Capability Modules (ECMs), which represent modular, versioned units of embodied functionality that can be learned, refined, and composed over time. We present a unified framework in which capability evolution is decoupled from agent identity. Capabilities evolve through a closed-loop process involving task execution, experience collection, model refinement, and module updating, while all executions are governed by a runtime layer that enforces safety and policy constraints. We demonstrate through simulated embodied tasks that capability evolution improves task success rates from 32.4% to 91.3% over 20 iterations, outperforming both agent-modification baselines and established skill-learning methods (SPiRL, SkiMo), while preserving zero policy drift and zero safety violations. Our results suggest that separating agent identity from capability evolution provides a scalable and safe foundation for long-term embodied intelligence.

---

📖 [Read original article](https://arxiv.org/abs/2604.07799)