---
title: "PocketAgents: A Manifest-Driven Library of Autonomous Defense Agents"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.21694"
author: "Sidnei Barbieri, \\'Agney Lopes Roth Ferraz, Louren\\c{c}o Alves Pereira J\\'unior"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.21694v1 Announce Type: cross Abstract: Connecting large language models (LLMs) to defensive enforcement requires more than asking a model whether an attack is happening. A defender must decide which model outputs may change the system state, which outputs must be rejected, and how failures should be recorded. We present PocketAgents, a manifest-driven library of autonomous defense agents. Each agent is installed as three data files: a manifest, a prompt, and a runtime context. The shared runtime gives the agent bounded telemetry access and accepts only typed reports whose requested action appears in the manifest. We implemented PocketAgents on top of a cyber arena (Perry), a cyber-deception testbed, and evaluated two agents, Command and Control and Exfiltration, in 18 closed-loop trials of a DarkSide-inspired attack on a small enterprise topology. Thirteen trials produced validated network-block actions and contained the attack; four failed schema validation; one produced a valid no-action decision. The experiments show that a typed boundary makes LLM-driven defense measurable, extensible, and attributable.

---

📖 [Read original article](https://arxiv.org/abs/2605.21694)