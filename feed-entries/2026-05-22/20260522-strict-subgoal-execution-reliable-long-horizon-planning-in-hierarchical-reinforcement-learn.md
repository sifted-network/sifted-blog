---
title: "Strict Subgoal Execution: Reliable Long-Horizon Planning in Hierarchical Reinforcement Learning"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2506.21039"
author: "Jaebak Hwang, Sanghyeon Lee, Jeongmo Kim, Seungyul Han"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2506.21039v3 Announce Type: replace-cross Abstract: Long-horizon goal-conditioned tasks pose fundamental challenges for reinforcement learning (RL), particularly when goals are distant and rewards are sparse. While hierarchical and graph-based methods offer partial solutions, their reliance on conventional hindsight relabeling often fails to correct subgoal infeasibility, leading to inefficient high-level planning. To address this, we propose Strict Subgoal Execution (SSE), a graph-based hierarchical RL framework that integrates Frontier Experience Replay (FER) to separate unreachable from admissible subgoals and streamline high-level decision making. FER delineates the reachability frontier using failure and partial-success transitions, which identifies unreliable subgoals, increases subgoal reliability, and reduces unnecessary high-level decisions. Additionally, SSE employs a decoupled exploration policy to cover underexplored regions of the goal space and a path refinement that adjusts edge costs using observed low-level failures. Experimental results across diverse long-horizon benchmarks show that SSE consistently outperforms existing goal-conditioned and hierarchical RL methods in both efficiency and success rate. Our code is available at https://jaebak1996.github.io/SSE/

---

📖 [Read original article](https://arxiv.org/abs/2506.21039)