# Under the XitzTree — GitHub Pages

Dark, hacker-themed Jekyll blog for Sir Xitz with sidebar, search, categories/tags/archives, and an embedded Portfolio page.

## Quick Start
1. Create a repo named `xitzhacks.github.io` on GitHub (public).
2. Upload all files from this folder to the repo root.
3. In repo **Settings → Pages**, set Source: `Deploy from a branch`, Branch: `main` (or `master`), Folder: `/root`.
4. Wait 1–2 minutes. Your site will be live at https://xitzhacks.github.io

### Add a Post
Create a file in `_posts/` like:
```
YYYY-MM-DD-title.md
```
with front matter:
```
---
layout: post
title: "My Post"
date: 2025-08-25
categories: [CTF]
tags: [web, sqli]
image: /assets/img/sample1.png
---

Your content here in Markdown.
```

> Search is client-side and filters by title/tags.