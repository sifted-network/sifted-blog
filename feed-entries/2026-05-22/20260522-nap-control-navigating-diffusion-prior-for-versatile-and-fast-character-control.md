---
title: "NaP-Control: Navigating Diffusion Prior for Versatile and Fast Character Control"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20209"
author: "Chia-Wen Chen, Yan Wu, Korrawe Karunratanakul, Siyu Tang"
categories: ["cs.GR", "cs.LG", "cs.RO"]
---

arXiv:2605.20209v1 Announce Type: cross Abstract: Achieving precise, versatile whole-body character control in physics-based animation remains challenging. Recent diffusion-based policies generate rich and expressive motions but typically rely on gradient-based test-time guidance to satisfy task objectives, which is slow and can reduce robustness. We introduce NaP-Control (Navigating Diffusion Prior for Versatile and Fast Character Control), abbreviated as NaP. Our method uses reinforcement learning to manipulate the latent noise of a task-agnostic diffusion policy prior, steering it toward task-specific behaviors for fast, robust control with high motion fidelity. In contrast to methods that rely solely on offline training, NaP interacts with the environment during training to correct motions and optimize task rewards, improving success rates and enabling adaptation to challenging scenarios. By directly predicting task-optimized diffusion noise, NaP eliminates iterative guidance during denoising and enables efficient inference. Experiments show that NaP attains higher success rates and faster inference while preserving natural motion across diverse tasks.

---

📖 [Read original article](https://arxiv.org/abs/2605.20209)