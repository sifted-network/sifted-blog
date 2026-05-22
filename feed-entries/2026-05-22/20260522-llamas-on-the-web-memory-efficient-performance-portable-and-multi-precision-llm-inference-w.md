---
title: "Llamas on the Web: Memory-Efficient, Performance-Portable, and Multi-Precision LLM Inference with WebGPU"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20706"
author: "Reese Levine, Rithik Sharma, Nikhil Jain, Abhijit Ramesh, Zheyuan Chen, Neha Abbas, James Contini, Tyler Sorensen"
categories: ["cs.DC", "cs.AI", "cs.LG"]
---

arXiv:2605.20706v1 Announce Type: cross Abstract: Running language models in the browser presents a unique opportunity to build efficient, private, and portable AI applications, but requires contending with constrained memory availability and heterogeneous hardware targets. To realize this opportunity, we present Llamas on the Web (LlamaWeb), a WebGPU backend for llama$.$cpp that enables memory-efficient and performance-portable LLM inference across a wide range of model weight formats in the browser. Our design significantly reduces memory overhead through static memory planning and efficient model loading, addresses cross-device variability through a tunable kernel library, and introduces templated GPU kernels that support performant implementations of numerous quantization formats, enabling broad model support and extensibility to new formats. We evaluate LlamaWeb on 16 devices from 8 vendors, collecting data from 10 language models and four model weight formats. We compare LlamaWeb against existing browser-based LLM frameworks and find that LlamaWeb requires 29-33% less memory across several combinations of device, browser, and operating system. We also evaluate LlamaWeb's performance against these frameworks and find that it increases decode throughput by 45-69% across four GPUs from separate vendors. In addition, we compare LlamaWeb's performance against other llama$.$cpp backends, where it is competitive with and even beats vendor-specific backend performance on some devices.

---

📖 [Read original article](https://arxiv.org/abs/2605.20706)