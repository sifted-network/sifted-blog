---
title: "When to Switch, Not Just What: Transition Quality Prediction in Clash Royale"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21868"
author: "Heeyun Heo, Huy Kang Kim"
categories: ["cs.LG"]
---

arXiv:2605.21868v1 Announce Type: new Abstract: In competitive games, players frequently switch strategies after losing streaks, yet our analysis of 926,334 match records from 34,619 Clash Royale players reveals a counterintuitive pattern: switching frequency is inversely associated with the win rate, with effects that vary substantially across players and situational contexts. We attribute this to a limitation common in many prior recommendation systems, which evaluate strategies by expected quality while overlooking the behavioral cost of switching and individual differences in switching propensity. We refer to this implicit premise as the Zero Switching Cost Assumption. To address this, we reformulate strategy recommendation as a transition-level decision problem and instantiate it as TQP (Transition Quality Predictor), a three-stage pipeline structured as Who -> When -> What. PersonaGate suppresses recommendations for players whose strategic consistency is empirically associated with superior outcomes. TimingGate identifies moments when switching is likely to yield a net benefit over staying, using a subtype- and state-matched baseline to control for natural win-rate recovery. ScoreFusion ranks candidate strategies by combining an adoptability signal with predicted transition quality (delta WR). We further introduce SwitchGap, an evaluation metric that measures a policy's discriminative quality without treating observed player choices as optimal ground truth. This property is particularly important because the most frequent switchers record the lowest win rates. The full pipeline achieves a SwitchGap of +10.4 percentage points at a recommendation rate of 5.4%, and loss-triggered switchers, despite being the lowest-performing group, benefit the most from subtype-conditioned guidance.

---

📖 [Read original article](https://arxiv.org/abs/2605.21868)