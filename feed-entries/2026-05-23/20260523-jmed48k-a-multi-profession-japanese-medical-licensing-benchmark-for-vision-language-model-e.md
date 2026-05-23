---
title: "JMed48k: A Multi-Profession Japanese Medical Licensing Benchmark for Vision-Language Model Evaluation"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22080"
author: "Yue Xun, Junyu Liu, Qian Niu, Xinyi Wang, Zheng Yuan, Zirui Li, Zequn Zhang, Bowen Zhao, Shujun Wang, Irene Li, Kan Hatakeyama-Sato, Yusuke Iwasawa, Yutaka Matsuo"
categories: ["cs.CV", "cs.AI"]
---

arXiv:2605.22080v1 Announce Type: cross Abstract: We introduce JMed48k, a multi-profession Japanese healthcare licensing benchmark for evaluating vision-language models. Built from official PDF materials released by the Japanese Ministry of Health, Labour and Welfare, JMed48k contains 48,862 exam questions and 20,142 images from 11 national licensing examinations between 2005 and 2025, with visual content annotated under an 8-type taxonomy. From this corpus, we derive JMed48k-Eval, a recent five-year evaluation subset with 12,484 scored questions, including 9,905 text-only questions and 2,579 questions with images. We evaluate 21 proprietary, open-source, and medical-specific models, reporting text-only and with-image performance separately. Because these subsets contain different questions, we further introduce a paired image-removal audit that evaluates questions with images before and after removing visual content to explore four answer-transition states. The audit shows that proprietary and open source models gain substantially from images, whereas medical-specific systems show limited observable use of visual evidence, with many correct answers persisting after image removal. Even among proprietary models, the net image-removal effect varies sevenfold across professions, from +5.7 points on Physician questions to +39.8 points on Public Health Nurse questions. We release JMed48k to support reproducible, profession-stratified evaluation of vision-language models in medical licensing settings.

---

📖 [Read original article](https://arxiv.org/abs/2605.22080)