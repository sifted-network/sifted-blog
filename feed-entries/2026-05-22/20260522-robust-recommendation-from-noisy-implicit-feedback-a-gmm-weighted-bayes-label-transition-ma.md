---
title: "Robust Recommendation from Noisy Implicit Feedback: A GMM-Weighted Bayes-label Transition Matrix Framework"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.20721"
author: "Zongyu Li, Xuanyu Liu, Gongce Cao, Shirui Sun, Yaqi Fang, Yongshuai Yu"
categories: ["cs.LG"]
---

arXiv:2605.20721v1 Announce Type: new Abstract: Learning from implicit feedback in recommender systems is fundamentally challenged by pervasive label noise. While conventional denoising approaches often discard noisy instances to ensure robustness, this strategy inevitably suffers from low data utilization. Alternative methods that employ a Bayes-label transition matrix (BLTM) can leverage all available data, but their estimates tend to be biased in practical recommendation scenarios. To address these limitations, this paper proposes a Robust GMM-weighted Bayes-label Transition Matrix framework (RGBT). Our solution utilizes a Gaussian Mixture Model (GMM) to derive instance-specific reliability scores, which systematically calibrate the BLTM estimation to mitigate bias. Theoretical analysis confirms that our approach, by leveraging the BLTM framework with GMM calibration, simultaneously ensures full sample utilization, delivers consistent estimation, and critically, achieves a significant reduction in estimation variance. Extensive experiments on multiple real-world and synthetically flipped datasets demonstrate that RGBT not only utilizes noisy samples more effectively than mainstream reliable sample-based denoising methods, but also achieves significantly superior calibration capability of the transition matrix compared to state-of-the-art transition matrix-based denoising approaches.

---

📖 [Read original article](https://arxiv.org/abs/2605.20721)