---
title: "CODE-SHARP: Continuous Open-ended Discovery and Evolution of Skills as Hierarchical Reward Programs"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.10085"
author: "Richard Bornemann, Pierluigi Vito Amadori, Antoine Cully"
categories: ["cs.AI"]
---

arXiv:2602.10085v3 Announce Type: replace Abstract: A core quality of general intelligence is the ability to open-endedly expand and evolve its set of mastered skills autonomously. While recent Foundation Model (FM) driven approaches have shown promising results towards this goal, they typically rely on significant human-in-the-loop engineering, limiting their transferability to novel environments. To address this, we introduce Continuous Open-ended Discovery and Evolution of Skills as Hierarchical Reward Programs (CODE-SHARP), a framework that leverages FMs to open-endedly grow and evolve an archive of Python programs encoding skills to train a generalist agent policy entirely from scratch via reinforcement learning, directly from source code. These programs, termed Skills as Hierarchical Reward Programs (SHARPs), each encode a local success condition and a set of prerequisites delegated to previously discovered SHARPs. At runtime, SHARPs dynamically route the agent through their prerequisite chain based on the current state, rewarding each completion along the way, requiring the agent to learn only the marginal behaviour each new SHARP introduces, enabling efficient learning of long-horizon skills without any pre-defined rewards. On Craftax-Classic and XLand, agents trained fully autonomously by CODE-SHARP outperform previous works by 6x and 2.6x in median performance and are the only agents capable of crafting iron tools and mining diamonds. Scaled to Craftax-Extended, CODE-SHARP trains a generalist agent on over 90 discovered SHARPs, enabling the agent to solve challenging long-horizon tasks zero-shot, matching agents trained on ground-truth rewards.

---

📖 [Read original article](https://arxiv.org/abs/2602.10085)