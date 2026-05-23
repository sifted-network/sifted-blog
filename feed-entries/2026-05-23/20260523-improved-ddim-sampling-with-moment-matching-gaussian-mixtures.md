---
title: "Improved DDIM Sampling with Moment Matching Gaussian Mixtures"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2311.04938"
author: "Prasad Gabbur"
categories: ["cs.CV", "cs.AI", "cs.LG"]
---

arXiv:2311.04938v5 Announce Type: replace-cross Abstract: We propose using a Gaussian Mixture Model (GMM) as reverse transition operator (kernel) within the Denoising Diffusion Implicit Models (DDIM) framework, which is one of the most widely used approaches for accelerated sampling from pre-trained Denoising Diffusion Probabilistic Models (DDPM). Specifically we match the first and second order central moments of the DDPM forward marginals by constraining the parameters of the GMM. We see that moment matching is sufficient to obtain samples with equal or better quality than the original DDIM with Gaussian kernels. We provide experimental results with unconditional models trained on CelebAHQ and FFHQ, class-conditional models trained on ImageNet, and text-to-image generation using Stable Diffusion v2.1 on COYO700M datasets respectively. Our results suggest that using the GMM kernel leads to significant improvements in the quality of the generated samples when the number of sampling steps is small, as measured by FID and IS metrics. For example on ImageNet 256x256, using 10 sampling steps, we achieve a FID of 6.94 and IS of 207.85 with a GMM kernel compared to 10.15 and 196.73 respectively with a Gaussian kernel. Further, we derive novel SDE samplers for rectified flow matching models and experiment with the proposed approach. We see improvements using both 1-rectified flow and 2-rectified flow models. Code: https://github.com/pgabbur/ddim-gmm.

---

📖 [Read original article](https://arxiv.org/abs/2311.04938)