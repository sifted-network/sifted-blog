---
title: "PlexRL: Cluster-Level Orchestration of Serviceized LLM Execution for RLVR"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20863"
author: "Yiqi Zhang, Fangzheng Jiao, Tian Tang, Boyu Tian, Hangyu Wang, Qiaoling Chen, Guoteng Wang, Zhen Jiang, Peng Sun, Ping Zhang, Xiaohe Hu, Ziming Liu, Menghao Zhang, Yanmin Jia, Yang You, Siyuan Feng"
categories: ["cs.DC", "cs.LG"]
---

arXiv:2605.20863v1 Announce Type: cross Abstract: Reinforcement learning with verifiable rewards (RLVR) has recently unlocked strong reasoning capabilities in large language models (LLMs), triggering rapid exploration of new algorithms and data. However, RLVR training is notoriously inefficient: long-tailed rollouts, tool-induced stalls, and asymmetric resource requirements between rollout and training introduce substantial idle time that cannot be eliminated by job-local optimizations such as synchronous pipelining, asynchronous rollout, or colocated execution. We argue that this inefficiency is structural. While idle gaps are unavoidable within individual RLVR jobs, they are largely anti-correlated across jobs and therefore exploitable at the cluster level. Leveraging this observation, we present PlexRL, a cluster-level runtime for multiplexing unified LLM services across RLVR jobs. By centrally managing model placement, state transitions, and function-level scheduling under strict affinity constraints, PlexRL time-slices LLM execution across jobs to fill otherwise idle periods without expensive model migration. Our implementation and evaluations demonstrate that PlexRL significantly improves effective cluster capacity and reduces user GPU hour cost by maximum 37.58% while preserving algorithmic flexibility and introducing minimal per-job overhead.

---

📖 [Read original article](https://arxiv.org/abs/2605.20863)