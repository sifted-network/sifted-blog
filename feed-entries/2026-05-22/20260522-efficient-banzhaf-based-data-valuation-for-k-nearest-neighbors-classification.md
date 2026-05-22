---
title: "Efficient Banzhaf-Based Data Valuation for $k$-Nearest Neighbors Classification"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21033"
author: "Guangyi Zhang, Lutz Oettershagen, Lixu Wang, Aristides Gionis"
categories: ["cs.LG", "cs.DS"]
---

arXiv:2605.21033v1 Announce Type: new Abstract: Data valuation, the task of quantifying the contribution of individual data points to model performance, has emerged as a fundamental challenge in machine learning. Game-theoretic approaches, such as the Banzhaf value, offer principled frameworks for fair data valuation; however, they suffer from exponential computational complexity. We address this challenge by developing efficient algorithms specifically tailored for computing Banzhaf values in $k$-nearest neighbor ($k$NN) classifiers. We first establish the theoretical hardness of the problem by proving that it is \#P-hard. Despite this intractability, we exploit the locality properties of $k$NN classifiers to develop practical exact algorithms. Our main contribution is a dynamic programming framework that achieves significant computational improvements: we present a pseudo-polynomial algorithm with $O(Wkn^2)$ time complexity for weighted $k$NN classifiers, where $W$ is the maximum sum of top-$k$ weights, and a specialized algorithm for unweighted $k$NN that achieves $O(nk^2)$ time complexity, that is, linear in the number of data points. We also offer efficient Monte Carlo estimation methods. Extensive experiments on real-world datasets demonstrate the practical efficiency of our approach and its effectiveness in data valuation applications.

---

📖 [Read original article](https://arxiv.org/abs/2605.21033)