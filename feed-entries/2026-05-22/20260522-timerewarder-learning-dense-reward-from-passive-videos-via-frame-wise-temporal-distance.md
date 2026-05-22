---
title: "TimeRewarder: Learning Dense Reward from Passive Videos via Frame-wise Temporal Distance"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2509.26627"
author: "Yuyang Liu, Chuan Wen, Yihang Hu, Dinesh Jayaraman, Yang Gao"
categories: ["cs.AI", "cs.LG", "cs.RO"]
---

arXiv:2509.26627v3 Announce Type: replace Abstract: Designing dense rewards is crucial for reinforcement learning (RL), yet in robotics it often demands extensive manual effort and lacks scalability. One promising solution is to view task progress as a dense reward signal, as it quantifies the degree to which actions advance the system toward task completion over time. We present TimeRewarder, a simple yet effective reward learning method that derives progress estimation signals from passive videos, including robot demonstrations and human videos, by modeling temporal distances between frame pairs. We then demonstrate how TimeRewarder can supply step-wise proxy rewards to guide reinforcement learning. In our comprehensive experiments on ten challenging Meta-World tasks, we show that TimeRewarder dramatically improves RL for sparse-reward tasks, achieving nearly perfect success in 9/10 tasks with only 200,000 environment interactions per task. This approach outperformed previous methods and even the manually designed environment dense reward on both the final success rate and sample efficiency. Moreover, we show that TimeRewarder pretraining can exploit real-world human videos, highlighting its potential as a scalable approach to rich reward signals from diverse video sources.

---

📖 [Read original article](https://arxiv.org/abs/2509.26627)