---
title: "Is Capability a Liability? More Capable Language Models Make Worse Forecasts When It Matters Most"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22672"
author: "Nick Merrill, Jaeho Lee, Ezra Karger"
categories: ["cs.AI"]
---

arXiv:2605.22672v1 Announce Type: new Abstract: We document inverse scaling in LLMs on forecasting problems whose underlying time series exhibit superlinear growth and tail risk of regime change, a structure common in finance and epidemiology. On these tasks, more capable models produce worse distributional forecasts. The pattern appears on ForecastBench-Sim (FBSim), a contamination-free, simulated-world benchmark we release, in forecasting synthetic SIR epidemics with a matched linear control, and replicates in real-world datasets on COVID-19, measles, housing markets, and hyperinflation. A per-quantile decomposition shows the failure concentrates at the upper tail, which more capable models shift upward to track aggressive extrapolations of growth, while the lower tail stays put. A within-family study of Llama-3.1 shows that both model scale and post-training independently contribute to this effect. Domain knowledge does not reliably rescue calibration. This inverse scaling does not appear on single-threshold metrics common in LLM forecasting benchmarks, reversing the sign of the capability--accuracy relationship on identical outputs. Single-threshold scoring at conventional cutoffs misses the upper-tail cost; tail-inclusive scoring reverses the sign of the capability--accuracy relationship on the same outputs. We recommend that LLM forecasting evaluations use continuous (and unbounded) measures of accuracy alongside bounded binary threshold metrics.

---

📖 [Read original article](https://arxiv.org/abs/2605.22672)