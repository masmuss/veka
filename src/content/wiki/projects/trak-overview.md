---
title: "Trak Project Overview"
description: "Core documentation for the Trak repository."
createdAt: 2026-07-06
updatedAt: 2026-07-07
tags: ["project", "trak"]
isPinned: true
growthStage: "budding"
---

# Trak Repository

Trak is a ticketing and reporting platform with Telegram bot integration.

## Project Goal

Trak centralizes issue reporting, ticket tracking, and status updates across web and Telegram. The system is designed so reporters can submit tickets from chat, while agents manage workflow and notifications from the web portal.

## Core Concepts

- **Reporter:** A Telegram user who creates and follows up on tickets.
- **Agent:** A web user who reviews reports, updates ticket status, and responds to issues.
- **Ticket:** The main record for a report, including title, body, category, attachments, and status history.
- **Notification:** A message delivered when ticket state changes or action is needed.

## Tech Stack

- **Framework:** SvelteKit (Runes mode)
- **Database:** PostgreSQL + Drizzle ORM
- **Auth:** Better Auth
- **UI:** shadcn-svelte + Tailwind CSS v4
- **Bot:** grammY
- **Package Manager:** pnpm 11
- **Monorepo:** Turborepo + pnpm workspaces

## Workspace Layout

- `apps/web` — the web portal for agents and internal operations
- `apps/bot` — the Telegram bot used by reporters
- `packages/database` — database schema, migrations, and client setup
- `packages/services` — shared domain logic used by both apps
- `packages/shared` — types, constants, and shared utilities

## Data Flow

1. A reporter opens the bot and starts a new ticket flow.
2. The bot validates access and collects the report details.
3. Shared services create the ticket and persist it to PostgreSQL.
4. The web app lets agents review, update, and resolve the ticket.
5. Notification events keep the reporter informed of status changes.

## Current Focus

We are currently documenting the Trak architecture, workspace structure, and development workflow.

## Development Notes

- Use the root `pnpm` scripts to work across the monorepo.
- Keep domain logic inside shared packages so the web app and bot stay consistent.
- Treat the database schema as a shared contract between all workspace apps.
- Document important architectural changes in the wiki as the project evolves.

## Environment

The project expects a PostgreSQL database and environment-specific secrets for auth and bot integration. Local development typically requires the root database URL plus app-specific variables for the web and bot workspaces.
