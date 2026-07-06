---
title: "Go Best Practices"
description: "Conventions for the Go backend."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["go", "backend"]
isPinned: false
growthStage: "seedling"
---

# Go Backend Conventions

- Avoid package-level state. Use dependency injection for database connections and loggers.
- Return early to avoid deep nesting.
- Handle errors explicitly and wrap them with context using `fmt.Errorf("failed to do X: %w", err)`.
