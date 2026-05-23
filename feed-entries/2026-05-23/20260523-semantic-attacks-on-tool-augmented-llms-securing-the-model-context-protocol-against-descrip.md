---
title: "Semantic Attacks on Tool-Augmented LLMs: Securing the Model Context Protocol Against Descriptor-Level Manipulation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2512.06556"
author: "Saeid Jamshidi, Arghavan Moradi Dakhel, Kawser Wazed Nafi, Foutse Khomh"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2512.06556v2 Announce Type: replace-cross Abstract: The Model Context Protocol (MCP) enables Large Language Models (LLMs) to interact with external tools via tool descriptors, thereby extending their capabilities for task execution, autonomous decision-making, and multi-agent coordination. Existing MCP deployments treat tool descriptors as trusted metadata, despite their direct integration into the LLM reasoning context. This introduces a previously underexplored semantic attack surface. Current defenses primarily target prompt injection, neglecting descriptor-level manipulation that can bias tool selection and downstream reasoning. To address this gap, we formalize three descriptor-driven attack classes: Tool Poisoning, Shadowing, and Rug Pull. We propose a layered defense solution that integrates descriptor integrity verification, pre-context semantic vetting with an auxiliary LLM, and lightweight runtime guardrails, without requiring model retraining. We evaluate GPT-5.3, DeepSeek-V3, and LLaMA-3.5 across eight prompting strategies in controlled, adversarial MCP scenarios in which tool metadata is manipulated to simulate realistic attacks. Results demonstrate that descriptor manipulation can substantially alter tool-selection behavior, producing unsafe tool invocations in up to 36% of trials under baseline configurations. The proposed full-stack mitigation reduces unsafe invocations to 15% while increasing the block rate to 74%, demonstrating substantial improvement in resistance to descriptor-driven attacks. Cross-model analysis further reveals significant differences in robustness, latency, and sensitivity to descriptor-level manipulation across LLM architectures and prompting strategies. This study provides a controlled cross-model evaluation of descriptor-level threats and mitigation strategies in tool-calling LLM systems, establishing an empirical foundation for deploying secure and resilient tool-augmented LLMs.

---

📖 [Read original article](https://arxiv.org/abs/2512.06556)