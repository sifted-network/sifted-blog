---
title: "Reptile: A scalable meta-learning algorithm"
date: "2018-03-07"
source: "OpenAI Blog"
sourceUrl: "https://openai.com/blog/rss.xml"
originalUrl: "https://openai.com/index/reptile"
author: ""
categories: ["Research"]
---

We’ve developed a simple meta-learning algorithm called Reptile which works by repeatedly sampling a task, performing stochastic gradient descent on it, and updating the initial parameters towards the final parameters learned on that task. Reptile is the application of the Shortest Descent algorithm to the meta-learning setting, and is mathematically similar to first-order MAML (which is a version of the well-known MAML algorithm) that only needs black-box access to an optimizer such as SGD or Adam, with similar computational efficiency and performance.

---

📖 [Read original article](https://openai.com/index/reptile)