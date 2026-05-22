---
title: "How Many Human Survey Respondents is a Large Language Model Worth? An Uncertainty Quantification Perspective"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2502.17773"
author: "Chengpiao Huang, Yuhang Wu, Kaizheng Wang"
categories: ["stat.ME", "cs.AI", "cs.LG"]
---

arXiv:2502.17773v5 Announce Type: replace-cross Abstract: Large language models (LLMs) are increasingly used to simulate survey responses, but synthetic data can be misaligned with the human population, leading to unreliable inference. We develop a general framework that converts LLM-simulated responses into reliable confidence sets for population parameters of human responses, quantifying the uncertainty induced by the human-LLM misalignment. The key design choice is the number of simulated responses: too many produce overly narrow sets with poor coverage, while too few yield overly wide and uninformative sets dominated by stochastic noise. We propose a data-driven approach that adaptively selects the simulation sample size to achieve nominal average-case coverage, regardless of the LLM's simulation fidelity or the confidence set construction procedure. The selected sample size is further shown to reflect the effective human population size that the LLM can represent, providing a quantitative measure of its simulation fidelity. Experiments on real survey datasets reveal heterogeneous simulation fidelity across different LLMs and domains.

---

📖 [Read original article](https://arxiv.org/abs/2502.17773)