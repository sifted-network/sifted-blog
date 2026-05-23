---
title: "SENIOR: Efficient Query Selection and Preference-Guided Exploration in Preference-based Reinforcement Learning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2506.14648"
author: "Hexian Ni, Tao Lu, Haoyuan Hu, Yinghao Cai, Shuo Wang"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2506.14648v2 Announce Type: replace-cross Abstract: Preference-based Reinforcement Learning (PbRL) methods provide a solution to avoid reward engineering by learning reward models based on human preferences. However, poor feedback- and sample- efficiency still remain the problems that hinder the application of PbRL. In this paper, we present a novel efficient query selection and preference-guided exploration method, called SENIOR, which could select the meaningful and easy-to-comparison behavior segment pairs to improve human feedback-efficiency and accelerate policy learning with the designed preference-guided intrinsic rewards. Our key idea is twofold: (1) We designed a Motion-Distinction-based Selection scheme (MDS). It selects segment pairs with apparent motion and different directions through kernel density estimation of states, which is more task-related and easy for human preference labeling; (2) We proposed a novel preference-guided exploration method (PGE). It encourages the exploration towards the states with high preference and low visits and continuously guides the agent achieving the valuable samples. The synergy between the two mechanisms could significantly accelerate the progress of reward and policy learning. Our experiments show that SENIOR outperforms other five existing methods in both human feedback-efficiency and policy convergence speed on six complex robot manipulation tasks from simulation and four real-worlds. Videos can be found on our project website: https://2025senior.github.io/

---

📖 [Read original article](https://arxiv.org/abs/2506.14648)