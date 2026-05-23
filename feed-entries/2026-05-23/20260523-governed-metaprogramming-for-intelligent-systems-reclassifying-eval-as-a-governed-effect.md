---
title: "Governed Metaprogramming for Intelligent Systems: Reclassifying Eval as a Governed Effect"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.05248"
author: "Alan L. McCann"
categories: ["cs.PL", "cs.AI"]
---

arXiv:2605.05248v3 Announce Type: replace-cross Abstract: AI systems increasingly synthesize executable structure at runtime: LLMs generate programs, agents construct workflows,self-improving systems modify their own behavior. In classical homoiconic and staged languages, the transition from code representation to execution is unrestricted. eval is a language primitive, not a governed operation. We argue that in governed intelligent systems, this transition is an authority amplification: it converts symbolic structure into executable authority and must be mediated like any other effect. We present governed metaprogramming, a language design where program representations (machine forms) are first-class values, form manipulation is pure computation, and materialization (the transition from form to executable machine) is a governed effect subject to structural inspection. The governance system analyzes the proposed program's capability requirements, policy compliance, and resource estimates before permitting execution. We formalize two judgments: pure form evaluation (which emits no directives) and governed materialization (which emits exactly one governed directive). We prove three properties: purity of form manipulation, the no-bypass theorem, and boundary preservation. We implement the design in mashinTalk, a DSL for AI workflows compiling to BEAM byte code, and report on integration with 454 existing machine-checked Rocq theorems. The central contribution is reclassifying eval from a language primitive into a governed effect.

---

📖 [Read original article](https://arxiv.org/abs/2605.05248)