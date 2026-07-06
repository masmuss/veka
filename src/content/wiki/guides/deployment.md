---
title: "Deployment Guide"
description: "Manual deployment steps."
createdAt: 2026-07-06
updatedAt: 2026-07-06
tags: ["deployment", "devops"]
isPinned: false
growthStage: "budding"
---

# Deployment

If CI/CD fails, you can manually deploy using the AWS CLI:
`aws ecs update-service --cluster eduos-prod --service web-app --force-new-deployment`
