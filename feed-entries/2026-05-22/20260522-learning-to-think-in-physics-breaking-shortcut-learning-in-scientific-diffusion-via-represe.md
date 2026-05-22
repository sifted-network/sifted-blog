---
title: "Learning to Think in Physics: Breaking Shortcut Learning in Scientific Diffusion via Representation Alignment"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20780"
author: "Haozhe Jia, Pengyu Yin, Wenshuo Chen, Shaofeng Liang, Lei Wang, Bowen Tian, Xiucheng Wang, Nanqian Jia, Yutao Yue"
categories: ["cs.LG", "cs.CV"]
---

arXiv:2605.20780v1 Announce Type: new Abstract: Physics-informed diffusion models typically enforce PDE constraints only on final outputs, leaving intermediate representations unconstrained and prone to shortcut learning under shifted boundary conditions. We introduce **REPA-P**, a teacher-free, architecture-agnostic framework that aligns intermediate features with physical states using first-principles residuals. REPA-P attaches lightweight $1{\times}1$ projection heads to selected layers, decodes hidden activations into physical quantities, and applies PDE residual losses during training. These heads are discarded at inference, introducing **zero overhead**. Across four PDE tasks, including Darcy flow, topology optimization, electrostatic potential, and turbulent channel flow, REPA-P accelerates convergence by up to $2{\times}$, reduces physics residuals by up to $66.4\%$, and improves out-of-distribution robustness by up to $49.3\%$, with consistent gains on both U-Net and Diffusion Transformer backbones. Ablations show that supervising a small set of intermediate layers captures most benefits and complements output-level physics losses. Code is available at [https://github.com/Hxxxz0/REPA-P](https://github.com/Hxxxz0/REPA-P).

---

📖 [Read original article](https://arxiv.org/abs/2605.20780)