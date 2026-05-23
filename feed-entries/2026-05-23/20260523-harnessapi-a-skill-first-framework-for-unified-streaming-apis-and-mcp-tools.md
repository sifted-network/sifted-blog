---
title: "HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools"
date: "2026-05-23"
source: "arXiv cs.AI"
sourceUrl: "https://rss.arxiv.org/rss/cs.AI"
originalUrl: "https://arxiv.org/abs/2605.22733"
author: "Edwin Jose"
categories: ["cs.AI", "cs.SE"]
---

arXiv:2605.22733v1 Announce Type: new Abstract: Every Python function deployed as an LLM tool must today exist in two forms: an HTTP endpoint for human-facing clients and CI pipelines, and an MCP tool registration for agent runtimes such as Claude and Cursor. These representations share business logic yet diverge in all the surrounding machinery (routing, validation, serialisation, streaming, and schema maintenance), and they drift apart as the underlying code evolves. We present HarnessAPI, a Python framework that eliminates this duplication by treating a typed skill folder as the single source of truth. From one handler.py plus Pydantic schemas, the framework automatically derives a streaming HTTP endpoint with Server-Sent Events, an interactive OpenAPI/Swagger UI, and a zero-configuration MCP tool, all served from a single process. Dual-mode content negotiation lets the same handler serve SSE-streaming and JSON-returning clients with no handler changes. A dynamic code-generation mechanism ensures Pydantic type annotations propagate correctly to FastMCP's inspection layer, resolving a technical limitation that prevents naive closure-based registration. Measured across six representative skills using cloc, HarnessAPI reduces framework-facing boilerplate by 74% compared with a manually maintained dual-stack implementation (FastAPI server + FastMCP server). HarnessAPI subclasses FastAPI, inheriting its full middleware, dependency-injection, and deployment ecosystem. It is available at https://github.com/edwinjosechittilappilly/harnessapi and on PyPI (pip install harnessapi)

---

📖 [Read original article](https://arxiv.org/abs/2605.22733)