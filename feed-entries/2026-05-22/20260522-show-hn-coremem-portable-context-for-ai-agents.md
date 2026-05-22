---
title: "Show HN: CoreMem – Portable context for AI agents"
date: "2026-05-22"
source: "Hacker News AI"
sourceUrl: "https://hnrss.org/newest?q=AI"
originalUrl: "https://coremem.app"
author: "20wenty"
categories: []
---

CoreMem lets you build collections of context, called a mem, and share it with any AI agent via URL, a Chrome extension, MCP, Cursor/VS Code plugins, a skill, and more. Instead of re-explaining your project or goal when you switch agents or start new sessions, CoreMem keeps your context centrally organized so that any AI tool can read it.This originally started as a CLI I built that kept pieces of context (Project A/B/C details, my writing style, preferred tech stacks, coding style, etc) in a SQLite database. I could instruct various agents to “use my `coremem` CLI to retrieve details about [project A] before we get started.” It solved a problem for me b/c I am continually bouncing around between different projects and chat agents, and having to re-explain myself every time became an exercise in either repeating myself or copy/pasting summaries I’d saved from previous sessions.I decided to make this a little more robust and portable, so I turned that original CLI into a SaaS. Tl;dr: You can create a “mem”, which is a collection of 1 or more pieces of related context, and share that mem with any agent to quickly get them up to speed.Right now I’ve got integrations in the form of revokable share links, a Chrome Plugin, Cursor Plugin, Cursor/VS Code extension, Claude Code plugin, ChatGPT/Claude/Gemini/et al via MCP. Since I mostly work from the CLI, I use the Claude Code plugin or create 5-min share links I can drop into a chat, but I’ve tried to make this useful to people who mainly work from a browser or an IDE.I’ve been coding for 30+ years, and I vibed most of this. I was able to use CoreMem to help it built itself as I jumped between various coding agents, having them grab context then start a new task. I’m sure my architecture and engineering experience helped, but building this in a few weeks confirmed for me that the barrier for someone to build a tool they need to solve a problem is incredibly low.The rush I used to get from coding has mostly faded, but I’m getting similar rushes managing different agents to build things now. Comments URL: https://news.ycombinator.com/item?id=48239117 Points: 3 # Comments: 0

---

📖 [Read original article](https://coremem.app)