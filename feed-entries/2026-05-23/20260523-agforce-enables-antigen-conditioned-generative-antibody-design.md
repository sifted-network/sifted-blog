---
title: "AgForce Enables Antigen-conditioned Generative Antibody Design"
date: "2026-05-23"
source: "arXiv cs.LG"
sourceUrl: "https://rss.arxiv.org/rss/cs.LG"
originalUrl: "https://arxiv.org/abs/2605.21610"
author: "Mansoor Ahmed, Murray Patterson"
categories: ["cs.LG"]
---

arXiv:2605.21610v1 Announce Type: new Abstract: Antibody design methods condition on antigen structure to generate complementarity-determining regions (CDR), yet a systematic evaluation of baseline methods reveals that they largely ignore the antigen input. We identify three failure modes that explain this behavior. Antigen blindness arises because models derive predictions from antibody framework context rather than antigen information, producing nearly identical CDRs regardless of the target. Vocabulary collapse reduces predicted amino acids to three to five per position, far below the ground truth distribution in native sequences. Moreover, any model trained with standard per-position cross-entropy converges to the positional marginal distribution, making it provably unable to produce antigen-specific sequence predictions. We propose a novel encoder-decoder architecture called AgForce, that uses a graph neural network (GNN) as the encoder and specialized decoders for sequence-structure co-design. Specifically, we apply framework dropout, gated bottlenecks, and hyperbolic cross attention that prevent the antibody shortcut path. In the decoder, a Mixture Density Network (MDN) sequence head with Potts-like pairwise coupling and annealed Multiple Choice Learning (aMCL) replaces the cross-entropy objective with a multi-component distribution whose optimal solution differs from the positional marginal. An antigen cycle consistency head routes gradients through the sequence decoder, forcing predicted distributions to encode antigen identity. AgForce achieves the best binding quality and sequence recovery simultaneously on the CHIMERA-Bench dataset, improving amino acid recovery by 8% over the strongest sequence baseline while surpassing the baselines across all interface metrics, and nearly doubling the effective vocabulary of GNN methods. The source code is available at: https://github.com/mansoor181/ag-force.git

---

📖 [Read original article](https://arxiv.org/abs/2605.21610)