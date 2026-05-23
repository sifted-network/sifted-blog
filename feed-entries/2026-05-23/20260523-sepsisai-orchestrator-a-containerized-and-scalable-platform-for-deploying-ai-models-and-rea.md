---
title: "SepsisAI Orchestrator: A Containerized and Scalable Platform for Deploying AI Models and Real-Time Monitoring in Early Sepsis Detection"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22331"
author: "Santiago Ospitia, John Sanabria, John Garcia-Henao"
categories: ["cs.LG", "cs.AI", "cs.DC"]
---

arXiv:2605.22331v1 Announce Type: cross Abstract: Despite strong predictive results in the clinical machine learning literature, the translation of these models into bedside use remains limited by systems-level barriers: heterogeneous data representations, the absence of standardized deployment workflows, and a mismatch between research prototypes and the concurrency and latency requirements of hospital environments. We present the SepsisAI-Orchestrator, an open-source modular platform that addresses this deployment gap for early sepsis detection. The platform integrates HL7 FHIR-inspired Clinical Document Architecture (CDA) preprocessing, NoSQL storage, a containerized LightGBM classifier served via REST APIs, and a Streamlit clinical dashboard, orchestrated with Docker and Kubernetes. A previously validated LightGBM model (F1 0.87-0.94 on PhysioNet 2019) is reused without modification; the contribution lies in the surrounding infrastructure and its empirical characterization under load. Using k6 with 50-1000 concurrent virtual users, we find that replica count must be matched to the physical CPU thread count of the host: scaling from 3 to 12 replicas on a 12-thread CPU reduces p95 latency from 3.3s to 1.41s (57.3% reduction) and eliminates all request failures, while over-provisioning to 24 or 48 replicas degrades performance due to scheduler contention. To our knowledge this U-shaped scaling behavior has not been quantified previously for clinical AI inference workloads. We do not claim prospective clinical validation. Source code and deployment manifests are available at https://github.com/nucleusai/sepsisai-orchestrator.

---

📖 [Read original article](https://arxiv.org/abs/2605.22331)