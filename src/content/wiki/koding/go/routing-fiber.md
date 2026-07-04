---
title: "Optimasi Custom Routing di Go Fiber"
description: "Cara memangkas alokasi memori pada routing dynamic menggunakan Go Fiber untuk performa ekstrem."
createdAt: 2026-06-20
updatedAt: 2026-07-02
tags: ["golang", "backend", "performance"]
isPinned: false
growthStage: "budding"
---

# Optimasi Custom Routing di Go Fiber

Saat membangun API dengan _throughput_ tinggi, penanganan parameter dinamis pada routing bisa menjadi _bottleneck_ memori tersembunyi karena alokasi di _heap_.

### Pendekatan Minimalis

Daripada menggunakan wildcard berlebihan, kita bisa memanfaatkan _strict routing_ dan melakukan _parsing_ manual pada segmen _path_ jika jalurnya sudah pasti.

```go
app := fiber.New(fiber.Config{
    StrictRouting: true,
})
```

Catatan Terkait:
Lihat [[docker-best-practices]] untuk melihat bagaimana membungkus aplikasi Go ini ke dalam container yang super aman.
