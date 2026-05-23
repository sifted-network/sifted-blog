---
title: "The Neural Compiler: Program-to-Network Translation for Hybrid Scientific Machine Learning"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22498"
author: "Lucas Sheneman"
categories: ["cs.LG", "cs.AI", "cs.SC"]
---

arXiv:2605.22498v1 Announce Type: cross Abstract: Scientific machine learning often requires combining known physics with unknown parameters or correction terms learned from data. Existing approaches either ignore known structure, encode it as a soft penalty, or require hand-written PyTorch code for each equation. We present The Neural Compiler, a system that translates programs written in a first-order Scheme-like expression language into frozen, differentiable PyTorch modules. These modules match the source program to floating-point precision and provide gradients through autograd. In hybrid models, the compiled module encodes known physics exactly while learned components model the unknown remainder. We evaluate the compiler across six experiment domains: Feynman physics equations, Lotka-Volterra dynamics, a damped pendulum, a one-dimensional heat equation, three-dimensional vector mechanics, and compositional generalization. Compiled modules match hand-coded PyTorch implementations numerically for single equations, showing no accuracy loss from compilation. With only 1 to 4 trainable parameters, compiled models recover physical constants to less than 1 percent error in most cases, while standard PINN baselines with more than 8500 parameters show 7 to 93 percent error. Compiled modules also compose with zero error, while neural approximations can accumulate large errors in deep composition chains. The main value of the compiler is not improved accuracy over hand-coded equations, but systematic composability: it generates correct, differentiable modules from symbolic specifications without rewriting each equation by hand. The system supports 51 primitive operations, including vector and matrix algebra, enabling PDE discretizations and hybrid scientific models. This string-in, module-out interface also provides a natural target for large language models that translate scientific descriptions into executable differentiable modules.

---

📖 [Read original article](https://arxiv.org/abs/2605.22498)