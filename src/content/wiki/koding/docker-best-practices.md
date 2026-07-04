---
title: "Docker Best Practices untuk Homelab"
description: "Panduan membangun dan menjalankan container Docker yang aman dan efisien untuk homelab."
createdAt: 2026-06-15
updatedAt: 2026-07-04
tags: ["docker", "devops", "homelab", "security"]
isPinned: false
growthStage: "budding"
---

## Docker Best Practices untuk Homelab

Menjalankan Docker di homelab butuh pendekatan berbeda dibanding production skala besar. Prioritannya: keamanan cukup, sumber daya minimal, mudah diingat.

### 1. Container Security Sederhana

Jangan jalanin container sebagai root kalo gak perlu.

```yaml
services:
  app:
    image: my-app:latest
    user: "1000:1000"
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
```

### 2. Image Pinning biar Gak Kaget

Always pin versi, jangan pake `:latest` di production.

```yaml
services:
  nginx:
    image: nginx:1.27-alpine
```

### 3. Resource Limiter Biar Gak Ngabisin RAM

Kasih limit biar satu container gak bisa boros semua resource.

```yaml
services:
  db:
    image: postgres:16-alpine
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: "512M"
        reservations:
          memory: "256M"
```

### 4. Network Isolation

Bikin network terpisah biar service yang gak perlu ngobrol satu sama lain.

```yaml
services:
  api:
    networks:
      - internal
  db:
    networks:
      - internal

networks:
  internal:
    driver: bridge
    internal: true
```

### 5. Read-Only Root Filesystem

Kalo container gak perlu nulis ke filesystem, bikin read-only.

```yaml
services:
  app:
    image: my-app:latest
    read_only: true
    tmpfs:
      - /tmp
```

Catatan Terkait:
Lihat [[routing-fiber]] buat contoh aplikasi Go yang siap di-container-kan.
