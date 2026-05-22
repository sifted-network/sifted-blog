---
title: "An Application-Layer Multi-Modal Covert-Channel Reference Monitor for LLM Agent Egress"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.20734"
author: "Alfredo Metere"
categories: ["cs.CR", "cs.AI"]
---

arXiv:2605.20734v1 Announce Type: cross Abstract: A large language model (LLM) agent that sends messages can leak data inside them. Destination allowlists and content scanners do not police whether an otherwise-benign payload is itself a covert channel: a compromised agent encodes bits in zero-width characters, homoglyphs, whitespace, base64, JavaScript Object Notation (JSON) key ordering, message timing or size -- and, in binary egress, in least-significant-bit (LSB) pixel planes, per-image mean luminance, inter-image sequence permutation, ultrasonic tones, or audible-band sonified data. Our egress reference monitor has three contributions. (i) A text pipeline of ten capacity-reducing stages, a per-sink leaky-bucket capacity ledger, and a staged posture that enforces lossless stages from day one. (ii) Two media scramblers (a Fourier-domain audio band-limiter and a red-green-blue (RGB) image bit-depth and mean-luminance bucketer) gated by a boot-time cryptographic legitimacy attestation: an auditor publishes at boot the trusted Ed25519 keys and {kind, data-class} pairs; only payloads with a verifying signature for an authorized class are exempt. The attestation sidesteps the intractable content-based discrimination between real media and data sonified or rasterized as a carrier; unsigned media is suspect by default; a content-addressed canonicalizer closes the inter-image permutation channel. (iii) Residual capacity is the Miller--Madow corrected mutual information between embedded and recovered bits (zero when destroyed), measured by an adversarial ensemble of fifteen working encoders across text, image and audio. The reference implementation drives residual capacity to zero on every destroyable channel and to a stated bound on the one (per-image mean luminance) that cannot be destroyed without ruining the image.

---

📖 [Read original article](https://arxiv.org/abs/2605.20734)