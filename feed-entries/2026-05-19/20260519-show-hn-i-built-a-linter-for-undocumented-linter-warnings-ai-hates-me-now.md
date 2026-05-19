---
title: "Show HN: I built a linter for undocumented linter warnings. AI hates me now"
date: "2026-05-19"
source: "Hacker News AI"
sourceUrl: "https://hnrss.org/newest?q=AI"
originalUrl: "https://github.com/BKDDFS/shamefile"
author: "BKDDFS"
categories: []
---


<p>You know the feeling? AI slaps a NOLINT instead of "thinking" for 5 seconds and "realising" it could do a 4-line refactor without adding a new suppression for the linter warning. Disgusted with this technology's narrowness, I usually say to it at that moment:<p>- WTF are you doin' bro?
- "You are right! ^^ ..."<p>And at that moment I realise I've just irrevocably, regrettably lost 2 minutes of my life. Shame on you, Claude!<p>That's why I dedicated 2 months of my life to automate the thing (you know, I'm a programmer, hopeless case).<p>Humans were actually the original NOLINT-slappers, AI just does it at scale now. So I built a linter for linting other linter warnings to fight my colleagues' laziness and my own (mostly). Maybe you just caught a lag from the number of "lint" words but the idea is simple. Imagine a yaml file. Now add an entry to it:<p><pre><code>  - location: ./the-file.rs
    token: '// NOLINT'
    why: 'the reason'
</code></pre>
Do you know what this NOLINT is? You don't? It's a suppression that you added 2 years ago. You don't remember? That's why you need shamefile. :)<p>Whoever's fault it is. Yours or the linter's. It doesn't matter. Document it, make sure you understand the code, get a review of your new entry in shamefile.yaml and let CI verify it. With shamefile your CI won't let any undocumented linter warning pass. Anymore. Instead of educating the business on why docs are important, you'll say: "quality tools won't let my code pass".<p>I've observed a noticeable difference in AI agents' behaviour. During the pre-commit phase, reasoning models can "rethink" adding a new shame entry. Not so easy now Claude, huh?<p>This is an early useable stage tool. We've been using it in prod for almost a month with my team and I'm using it in all my 3 OSS projects. Looking for feedback and contributors (adding new languages = good first issue ;))<p>Repo: <a href="https://github.com/BKDDFS/shamefile" rel="nofollow">https://github.com/BKDDFS/shamefile</a><p>Please tell me whether you'd use it or what I should change/add to make it usable for you. Also vote: shame me or shamefile sync, personality or matching the binary name?</p>
<hr>
<p>Comments URL: <a href="https://news.ycombinator.com/item?id=48192867">https://news.ycombinator.com/item?id=48192867</a></p>
<p>Points: 1</p>
<p># Comments: 0</p>


---

📖 [Read original article](https://github.com/BKDDFS/shamefile)