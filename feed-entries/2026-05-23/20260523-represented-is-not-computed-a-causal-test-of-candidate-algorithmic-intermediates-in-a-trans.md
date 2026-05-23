---
title: "Represented Is Not Computed: A Causal Test of Candidate Algorithmic Intermediates in a Transformer"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.22488"
author: "Ishita Darade, Sushrut Thorat"
categories: ["cs.LG"]
---

arXiv:2605.22488v1 Announce Type: new Abstract: Structured prompts require integrating components according to task-relevant relations. How a network implements this integration is often hard to judge in language or vision, where those relations are rarely specified precisely enough to define a candidate internal algorithm. Arithmetic offers a cleaner setting. We study a Transformer trained on base-digit extraction: given $N$, $B$, and $D$, it must report the coefficient of $B^D$ in the base-$B$ expansion of $N$. The closed-form solution, $\lfloor N/B^D \rfloor \bmod B$, provides explicit candidate algorithmic intermediates. Across three seeds, the model reaches 99.83% exact-answer accuracy on held-out number-base intersections, establishing reliable task competence. Linear probes decode the intermediates, making staged arithmetic computation plausible. Causal tests then separate representation from use: within the localized route from the stream with $D$ as input to the output positions, behavior depends on early $D$-selective communication, independent of $N$ and $B$. Relatedly, a sparse circuit search finds mostly separate $N$, $B$, and $D$ routes that combine late rather than the staged route suggested by the probes. Thus, the model represents the intermediates that make the closed-form solution plausible, but the identified localized causal route does not transmit them to the output stream. This case shows that probe-based conclusions can diverge sharply from causal observations, even when explicit algorithmic hypotheses are available.

---

📖 [Read original article](https://arxiv.org/abs/2605.22488)