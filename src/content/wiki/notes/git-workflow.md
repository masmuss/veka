---
title: "Git Workflow & Standards"
description: "How we manage branches and commits."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["git", "standards"]
isPinned: false
growthStage: "evergreen"
---

# Git Workflow

We use a feature-branch workflow.

## Rules

1. Always create a new branch from `dev` before starting work.
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   ```
2. Use Conventional Commits for all commit messages.
   Example: `feat: add student registration endpoint`
3. Squash commits when merging if there are too many "wip" commits.
