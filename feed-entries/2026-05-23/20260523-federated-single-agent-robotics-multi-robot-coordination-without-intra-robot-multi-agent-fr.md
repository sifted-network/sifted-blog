---
title: "Federated Single-Agent Robotics: Multi-Robot Coordination Without Intra-Robot Multi-Agent Fragmentation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2604.11028"
author: "Xue Qin, Simin Luan, John See, Cong Yang, Zhijun Li"
categories: ["cs.RO", "cs.AI"]
---

arXiv:2604.11028v2 Announce Type: replace-cross Abstract: As embodied robots move toward fleet-scale operation, multi-robot coordination is becoming a central systems challenge. Existing approaches often treat this as motivation for increasing internal multi-agent decomposition within each robot. We argue for a different principle: multi-robot coordination does not require intra-robot multi-agent fragmentation. Each robot should remain a single embodied agent with its own persistent runtime, local policy scope, capability state, and recovery authority, while coordination emerges through federation across robots at the fleet level. We present Federated Single-Agent Robotics (FSAR), a runtime architecture for multi-robot coordination built on single-agent robot runtimes. Each robot exposes a governed capability surface rather than an internally fragmented agent society. Fleet coordination is achieved through shared capability registries, cross-robot task delegation, policy-aware authority assignment, trust-scoped interaction, and layered recovery protocols. We formalize key coordination relations including authority delegation, inter-robot capability requests, local-versus-fleet recovery boundaries, and hierarchical human supervision, and describe a fleet runtime architecture supporting shared Embodied Capability Module (ECM) discovery, contract-aware cross-robot coordination, and fleet-level governance. We evaluate FSAR on representative multi-robot coordination scenarios against decomposition-heavy baselines. Results show statistically significant gains in governance locality (d=2.91, p<.001 vs. centralized control) and recovery containment (d=4.88, p<.001 vs. decomposition-heavy), while reducing authority conflicts and policy violations across all scenarios. Our results support the view that the path from embodied agents to embodied fleets is better served by federation across coherent robot runtimes than by fragmentation within them.

---

📖 [Read original article](https://arxiv.org/abs/2604.11028)