---
title: "Testing Support Size More Efficiently Than Learning Histograms"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2410.18915"
author: "Renato Ferreira Pinto Jr., Nathaniel Harms"
categories: ["cs.DS", "cs.LG"]
---

arXiv:2410.18915v4 Announce Type: replace-cross Abstract: Consider two problems about an unknown probability distribution $p$: 1. How many samples from $p$ are required to test if $p$ is supported on $n$ elements or not? Specifically, given samples from $p$, determine whether it is supported on at most $n$ elements, or it is "$\epsilon$-far" (in total variation distance) from being supported on $n$ elements. 2. Given $m$ samples from $p$, what is the largest lower bound on its support size that we can produce? The best known upper bound for problem (1) uses a general algorithm for learning the histogram of the distribution $p$, which requires $\Theta(\tfrac{n}{\epsilon^2 \log n})$ samples. We show that testing can be done more efficiently than learning the histogram, using only $O(\tfrac{n}{\epsilon \log n} \log(1/\epsilon))$ samples, nearly matching the best known lower bound of $\Omega(\tfrac{n}{\epsilon \log n})$. This algorithm also provides a better solution to problem (2), producing larger lower bounds on support size than what follows from previous work. The proof relies on an analysis of Chebyshev polynomial approximations outside the range where they are designed to be good approximations, and the paper is intended as an accessible self-contained exposition of the Chebyshev polynomial method.

---

📖 [Read original article](https://arxiv.org/abs/2410.18915)