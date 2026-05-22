---
title: "PrefixWall: Mitigating Prefix Caching Side Channels in Shared LLM Systems"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.10726"
author: "Panagiotis Georgios Pennas, Konstantinos Papaioannou, Marco Guarnieri, Thaleia Dimitra Doudali"
categories: ["cs.CR", "cs.DC", "cs.LG"]
---

arXiv:2603.10726v2 Announce Type: replace-cross Abstract: Large Language Models (LLMs) rely on optimizations like Automatic Prefix Caching (APC) to accelerate inference. APC works by reusing previously computed states for the beginning part of a request (prefix), when another request starts with the same text. While APC improves throughput, it introduces timing side channels: cache hits are faster than misses, creating observable latency differences. In multi-tenant systems, attackers can exploit these differences to infer sensitive information, e.g., by incrementally reconstructing another user's request by observing hit/miss patterns. Current defenses take a sledgehammer approach: they disable APC and cache sharing, isolating users, and sacrificing efficiency for regular users. This paper presents PrefixWall, a system that secures multi-tenant LLM serving systems against APC side channels without sacrificing performance and efficiency. PrefixWall monitors cache reuse across users, flags suspicious sharing, and selectively isolates prefixes, restricting their reuse only when necessary. Evaluation shows that PrefixWall enables up to 70% higher cache reuse and 30% lower inference latency compared to existing defenses that isolate users. PrefixWall's lightweight design demonstrates how security in LLM serving does not have to come at the cost of unnecessarily reduced performance or unbearable overheads.

---

📖 [Read original article](https://arxiv.org/abs/2603.10726)