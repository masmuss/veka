---
title: "Authentication Flow"
description: "How user authentication works in EduOS."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["auth", "security", "architecture"]
isPinned: false
growthStage: "budding"
---

# Authentication Flow

We use JWT-based authentication.

1. Client sends POST to `/api/login` with credentials.
2. Server validates credentials against the PostgreSQL DB.
3. Server returns an Access Token (15m expiry) and sets a HttpOnly Refresh Token cookie (7d expiry).
