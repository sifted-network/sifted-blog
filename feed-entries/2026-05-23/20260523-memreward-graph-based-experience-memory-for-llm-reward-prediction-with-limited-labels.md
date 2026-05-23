---
title: "MemReward: Graph-Based Experience Memory for LLM Reward Prediction with Limited Labels"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2603.19310"
author: "Tianyang Luo, Tao Feng, Zhigang Hua, Yan Xie, Shuang Yang, Ge Liu, Jiaxuan You"
categories: ["cs.LG", "cs.AI"]
---

arXiv:2603.19310v3 Announce Type: replace-cross Abstract: Reinforcement learning has emerged as a powerful paradigm for improving large language model (LLM) reasoning, where rollouts are sampled from the policy and reward signals computed on those rollouts are used to update the policy. However, in data-scarce scenarios, obtaining ground-truth labels to verify rollouts at scale often requires expensive human annotation or labor-intensive expert verification. For instance, evaluating mathematical proofs demands expert review, and open-ended question answering lacks definitive ground truth. When ground-truth labels are scarce, the effectiveness of reinforcement learning fine-tuning is constrained. Inspired by the success of semi-supervised learning in propagating labels from labeled to unlabeled samples, we propose MemReward, a graph-based experience memory framework that integrates reward propagation directly into online policy optimization. MemReward stores rollouts (thinking processes and final answers) from an initial LLM policy as nodes in a heterogeneous graph connected by similarity and structural edges, over which a GNN propagates rewards from labeled to unlabeled rollouts. To train such a framework, we first warm up the GNN on labeled rollouts to predict rewards via heterogeneous aggregation over query, thinking, and answer nodes. During online RL fine-tuning, unlabeled rollouts are attached to the graph by query similarity, and the GNN predicts their rewards, yielding a hybrid reward acquisition strategy that combines ground-truth and GNN-predicted rewards. Experiments on Qwen2.5-1.5B and 3B in mathematics, question answering, and code generation demonstrate that MemReward, with ground-truth rewards on only 20% of rollouts, achieves 96.6% of Oracle performance on 1.5B and 97.3% on 3B, and closely approaches Oracle on out-of-domain tasks.

---

📖 [Read original article](https://arxiv.org/abs/2603.19310)