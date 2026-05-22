---
title: "Consistent Geometric Deep Learning via Hilbert Bundles and Cellular Sheaves"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.06395"
author: "Kartik Tandon, Julian Gould, Tanishq Bhatia, Francesca Dominici, Alejandro Ribeiro, Claudio Battiloro"
categories: ["cs.LG", "cs.AI", "eess.SP"]
---

arXiv:2605.06395v2 Announce Type: replace-cross Abstract: Modern deep learning architectures increasingly contend with sophisticated signals that are natively infinite-dimensional, such as time series, probability distributions, or operators, and are defined over irregular domains. Yet, a unified learning theory for these settings has been lacking. To start addressing this gap, we introduce a novel convolutional learning framework for possibly infinite-dimensional signals supported on a manifold. Namely, we use the connection Laplacian associated with a Hilbert bundle as a convolutional operator, and we derive filters and neural networks, dubbed as \textit{HilbNets}. We make HilbNets and, more generally, the convolution operation, implementable via a two-stage sampling procedure. First, we show that sampling the manifold induces a Hilbert Cellular Sheaf, a generalized graph structure with Hilbert feature spaces and edge-wise coupling rules, and we prove that its sheaf Laplacian converges in probability to the underlying connection Laplacian as the sampling density increases. Notably, this result is a generalization to the infinite-dimensional bundle setting of the Belkin \& Niyogi \cite{BELKIN20081289} convergence result for the graph Laplacian to the manifold Laplacian, a theoretical cornerstone of geometric learning methods. Second, we discretize the signals and prove that the discretized (implementable) HilbNets converge to the underlying continuous architectures and are transferable across different samplings of the same bundle, providing consistency for learning. Finally, we validate our framework on synthetic and real-world tasks. Overall, our results broaden the scope of geometric learning as a whole by lifting classical Laplacian-based frameworks to settings where the signal at each point lives in its own Hilbert space.

---

📖 [Read original article](https://arxiv.org/abs/2605.06395)