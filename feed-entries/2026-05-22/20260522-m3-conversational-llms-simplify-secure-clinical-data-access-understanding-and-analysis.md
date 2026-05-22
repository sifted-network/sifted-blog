---
title: "M3: Conversational LLMs Simplify Secure Clinical Data Access, Understanding, and Analysis"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2507.01053"
author: "Rafi Al Attrach, Pedro Moreira, Rajna Fani, Renato Umeton, Amelia Fiske, Leo Anthony Celi"
categories: ["cs.IR", "cs.AI", "cs.DB"]
---

arXiv:2507.01053v4 Announce Type: replace-cross Abstract: Large-scale clinical databases offer opportunities for medical research, but their complexity creates barriers to effective use. The Medical Information Mart for Intensive Care (MIMIC-IV), one of the world's largest open-source electronic health record databases, traditionally requires both SQL proficiency and clinical domain expertise. We introduce M3, a system that enables natural language querying of MIMIC-IV data through the Model Context Protocol. With a single command, M3 retrieves MIMIC-IV from PhysioNet, launches a local SQLite instance or connects to hosted BigQuery, and allows researchers to pose clinical questions in plain English. We evaluated M3 using samples from the EHRSQL 2024 benchmark with two language models. On one hundred answerable questions, the proprietary Claude Sonnet 4 achieved 94% accuracy and the open-weights gpt-oss-20B (deployable locally on consumer hardware) achieved 93%; on a matched sample of one hundred unanswerable questions, where correct behavior is to abstain rather than produce SQL, gpt-oss-20B correctly abstained on 69%. Both models translate natural language into SQL, execute queries against MIMIC-IV, and return structured results alongside the underlying query for verification. Error analysis revealed that most failures stemmed from complex temporal reasoning or ambiguous question phrasing rather than fundamental architectural limitations. The comparable performance of a smaller open-weights model demonstrates that privacy-preserving local deployment is viable for sensitive clinical data analysis. M3 lowers technical barriers to critical care data analysis and is designed with security measures including OAuth2 authentication, query validation, and audit logging.

---

📖 [Read original article](https://arxiv.org/abs/2507.01053)