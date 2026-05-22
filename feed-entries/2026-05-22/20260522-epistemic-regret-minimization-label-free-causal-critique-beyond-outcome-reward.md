---
title: "Epistemic Regret Minimization: Label-Free Causal Critique Beyond Outcome Reward"
date: "2026-05-22"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2602.11675"
author: "Edward Y. Chang, Longling Geng"
categories: ["cs.AI"]
---

arXiv:2602.11675v4 Announce Type: replace Abstract: Large language models can answer causal questions correctly for the wrong reasons. Current RL methods reward \emph{what} a model concludes but ignore \emph{why}, reinforcing correlational shortcuts -- a failure we call \emph{Reward Entrenchment}. We introduce \emph{Epistemic Regret Minimization} (\erm), a framework that critiques the causal \emph{structure} of a model's reasoning trace rather than its answer. Applying established causal principles, \erm flags unexamined confounders, correlation--intervention conflation, and unchecked back-door paths from exposed reasoning traces. The framework admits \emph{label-free} operation -- without the true causal graph or correct answer -- and we separately distinguish favorable benchmark-derived critique, error-direction cues, and fully label-free judge-generated critique in the experiments. Within a single episode, \erm detects and repairs causal reasoning errors; across episodes, it accumulates interventional evidence into a reward signal applicable where no answer key exists. Experiments on 1,360 scenarios across six frontier LLMs show that reasoning-heavy models (GPT-4 Turbo, GPT-5.2) resist outcome-only correction (25--31\% recovery) yet respond to causal critique (78--91\%), gaining $+53$--$59$ pp. Standard test-time methods (self-consistency, Best-of-$N$, Self-Refine) \emph{underperform} outcome-only reprompting on causal tasks, while ERM reduces residual Rung Collapse from 55--70\% to 4\%. A separation theorem proves outcome-only reward cannot close this gap; a controlled simulation confirms epistemic feedback does, outperforming outcome-only baselines 38-fold.

---

📖 [Read original article](https://arxiv.org/abs/2602.11675)