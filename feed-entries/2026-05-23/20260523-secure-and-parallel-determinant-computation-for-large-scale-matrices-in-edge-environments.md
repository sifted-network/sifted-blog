---
title: "Secure and Parallel Determinant Computation for Large-Scale Matrices in Edge Environments"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22039"
author: "Prajwal Panth"
categories: ["cs.DC", "cs.AI", "cs.CR", "cs.MS"]
---

arXiv:2605.22039v1 Announce Type: cross Abstract: The advent of edge computing has enabled resource-constrained clients to delegate intensive computational tasks to distributed edge servers, especially within Internet of Things (IoT) environments. Among such tasks, Matrix Determinant Computation (MDC) remains critical for applications in control systems, cryptography, and machine learning. However, the cubic complexity of traditional determinant algorithms makes them unsuitable for real-time processing in constrained edge scenarios. We propose a Secure Parallel Determinant Computation (SPDC) framework, which provides strong security guaranties, including privacy-preserving MDC, across N distributed edge servers. The framework achieves privacy through Composite Element Distortion (CED) - a lightweight encryption method that combines Element-wise Obfuscation (EWO) and the Panth Rotation Theorem (PRT) to conceal both structural and numerical matrix content while preserving determinant properties. Parallel LU decomposition is used to distribute encrypted matrix blocks across an arbitrary number of untrusted edge servers, enabling efficient and scalable determinant computation. A one-way communication model further reduces coordination overhead by eliminating inter-server interactions. To ensure result integrity with minimal client burden, we further introduce two verification algorithms: Q_2, a probabilistic scalar method, and Q_3, a deterministic and low-complexity alternative. Mathematical analysis demonstrates that the proposed framework provides strong privacy and security guaranties, low computational overhead, and deployment flexibility - making it well-suited for secure, scalable, and real-time MDC in distributed edge-assisted systems.

---

📖 [Read original article](https://arxiv.org/abs/2605.22039)