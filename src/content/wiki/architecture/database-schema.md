---
title: "Database Schema"
description: "Core tables and relationships."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["db", "architecture"]
isPinned: false
growthStage: "budding"
---

# Database Architecture

The primary database is PostgreSQL.

## Core Tables

- **Users:** Stores authentication and profile data.
- **Courses:** Contains course metadata and syllabus.
- **Enrollments:** Maps users to courses (Many-to-Many).

_Note: Full ER diagram is being generated in the `docs/` folder._
