---
title: "CI/CD Pipeline"
description: "Deployment pipeline using GitHub Actions."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["ci-cd", "devops"]
isPinned: false
growthStage: "budding"
---

# CI/CD Pipeline

Our pipeline runs on every PR to `dev`:

1. Linting (`pnpm lint`)
2. Type checking (`pnpm astro check`)
3. Unit tests
4. Build artifact generation
