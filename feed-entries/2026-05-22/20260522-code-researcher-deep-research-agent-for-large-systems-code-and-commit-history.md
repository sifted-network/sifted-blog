---
title: "Code Researcher: Deep Research Agent for Large Systems Code and Commit History"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2506.11060"
author: "Ramneet Singh, Sathvik Joel, Abhav Mehrotra, Nalin Wadhwa, Ramakrishna B Bairi, Aditya Kanade, Nagarajan Natarajan"
categories: ["cs.SE", "cs.AI"]
---

arXiv:2506.11060v2 Announce Type: replace-cross Abstract: Large Language Model (LLM)-based coding agents have shown promising results on coding benchmarks, but their effectiveness on systems code remains underexplored. Due to the size and complexities of systems code, making changes to a systems codebase requires researching about many pieces of context, derived from the large codebase and its massive commit history, before making changes. Inspired by the recent progress on deep research agents, we design the first deep research agent for code, called Code Researcher, and apply it to the problem of generating patches to mitigate crashes reported in systems code. Code Researcher performs multi-step reasoning about semantics, patterns, and commit history of code to retrieve all relevant context from the codebase and its commit history. We evaluate Code Researcher on kBenchSyz, a benchmark of Linux kernel crashes, and show that it significantly outperforms strong baselines, achieving a crash-resolution rate (CRR) of 48%, compared to 31.5% by SWE-agent and 31% by Agentless, using OpenAI's GPT-4o model. Scaling up sampling budget to 10 trajectories increases Code Researcher's CRR to 54%. Code Researcher is also robust to model choices, reaching 67% with the newer Gemini 2.5-Flash model. Through another experiment on an open-source multimedia software, we show the generalizability of Code Researcher and also conduct ablations. Our experiments highlight the importance of global context gathering and multi-faceted reasoning for large codebases.

---

📖 [Read original article](https://arxiv.org/abs/2506.11060)