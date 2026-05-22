---
title: "CRANE: Correcting Errors in Raw Nanopore Signals Using Hidden Markov Models"
date: "2026-05-22"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2603.20420"
author: "Simon Ambrozak, Ulysse McConnell, Bhargav Srinivasan, Burak Ozkan, Ernest Zhang, Can Firtina"
categories: ["q-bio.GN", "cs.LG", "q-bio.QM"]
---

arXiv:2603.20420v2 Announce Type: replace-cross Abstract: Nanopore sequencing can read substantially longer sequences of nucleic acid molecules, called reads, than other sequencing methods, which has led to advances in genomic analysis such as the gapless human genome assembly. By analyzing the raw electrical signal reads that nanopore sequencing generates from molecules, existing works can map these reads without translating them into DNA characters (i.e., basecalling), allowing for quick and efficient analysis of sequencing data. However, raw signals often contain errors due to noise and processing errors, which limits the overall accuracy of raw signal analysis. Our goal in this work is to detect and correct errors in raw signals to improve the accuracy of raw signal analyses. To this end, we propose CRANE, a mechanism that trains and utilizes a Hidden Markov Model (HMM) to accurately correct signal errors. Our extensive evaluation on various datasets shows that CRANE 1) consistently improves the overall accuracy of the underlying raw signal analysis tools, 2) minimizes the burden of optimizing analysis pipelines for newer nanopore technologies, and 3) does not introduce substantial computational overhead. We conclude that CRANE provides an effective mechanism to systematically identify and correct the errors in raw nanopore signals before further analysis, which can enable the development of a new class of error correction mechanisms purely designed for raw nanopore signals. Source Code: CRANE is available at https://github.com/STORMgroup/CRANE. We also provide the scripts to fully reproduce our results on our GitHub page

---

📖 [Read original article](https://arxiv.org/abs/2603.20420)