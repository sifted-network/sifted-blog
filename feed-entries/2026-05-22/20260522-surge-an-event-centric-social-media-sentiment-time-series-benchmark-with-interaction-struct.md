---
title: "SURGE: An Event-Centric Social Media Sentiment Time Series Benchmark with Interaction Structure"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21198"
author: "Chen Su, Pengsen Cheng, Yuanhe Tian, Yan Song"
categories: ["cs.SI", "cs.AI"]
---

arXiv:2605.21198v1 Announce Type: cross Abstract: Public events on social media generate large volumes of discussion whose collective dynamics carry direct value for opinion forecasting and crisis response. Capturing how these dynamics evolve across an event's lifecycle requires organizing fragmented posts into event-level time series. Existing datasets cover only a small number of events within a single category, and typically discard the interaction structure between posts when constructing time series, which restricts both transfer across event types and controlled study of how interactions shape the resulting collective dynamics. We present SURGE, a multi-event social media benchmark that pairs event-level time series with aligned text and interaction structure linking posts within an event. SURGE is built through an automated pipeline that produces calendar-aligned time series at three temporal granularities, covering 67 events and more than 800K posts across five event categories. Each time bin is paired with flat and structured textual views derived from the same selected posts, enabling controlled evaluation of whether social interaction structure affects forecasting behavior. On top of SURGE we define benchmark protocols for numerical-only forecasting, text-augmented forecasting, high-interaction evaluation, and leave-one-category-out generalization. Experiments with representative time-series and multimodal forecasting models reveal three properties of the benchmark: a strong local-persistence regime in which naive baselines remain hard to beat under absolute error, limited transfer of existing text-augmented forecasters to event-driven social-media data, and increased difficulty on reply-dense periods that aggregate metrics tend to obscure. We further include a lightweight structure-aware probe as a reference implementation, illustrating how SURGE can support interaction-aware forecasting research.

---

📖 [Read original article](https://arxiv.org/abs/2605.21198)