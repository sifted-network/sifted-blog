---
title: "Evaluating the Utility of Personal Health Records in Personalized Health AI"
date: "2026-05-21"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.18937"
author: "Rory Sayres, Kejia Chen, Ayush Jain, Matthew Thompson, Jonathan Richina, Xiang Yin, Jimmy Hu, Fan Zhang, Bob Lou, Mike Sanchez, Ines Mezerreg, Meredith Schreier, Hamsa Subramaniam, I-Ching Lee, Yugang Jia, Daniel Mcduff, Yossi Matias, Avinatan Hassidim, Dale Webster, Yun Liu, Jackie Barr, Quang Duong"
categories: ["cs.AI"]
---

arXiv:2605.18937v1 Announce Type: new Abstract: Patient-managed Personal Health Records (PHRs) promises to empower patients to better understand their health; but information in the record is complex, potentially hindering insights. In this study, we assess the potential of large language models (LLMs, Gemini 3.0 Flash) to provide helpful answers to user health queries, when provided clinical data from PHRs as context. A total of 2,257 user queries were drawn from 3 different distributions to represent patient questions: shorter web search queries, longer questions derived from templates of chatbot conversations, and questions patients asked to their healthcare team (patient calls). Queries were matched with de-identified PHRs (from a pool of 1,945). Gemini responses were generated (1) without PHR context; (2) with a basic summary of demographics, conditions, and medications; (3) with full, extensive clinical notes. For evaluation, we leveraged an existing rating framework (SHARP), and developed a new framework for specific error modes when interpreting PHRs. Evaluation was performed using autoraters for the full set, and with clinician ratings for a subset (n=95), with both sets of raters knowing the full PHR context. We see significant improvements in the helpfulness of answers to all question types with PHR data (p < 0.001, paired t-test). We also observe potential gains in safety, accuracy, relevance and personalization of answers. Our PHR evaluation framework further identifies gaps in LLM understanding of particular aspects of complex PHRs, such as temporal disorientation, and rare but meaningful confabulations. These results suggest potential for PHR data to help people with a wide range of user needs; and provide a framework for monitoring for gaps in LLM answers based on PHR context. This study motivates further work to assess and realize potential benefits to users from understanding their health records.

---

📖 [Read original article](https://arxiv.org/abs/2605.18937)