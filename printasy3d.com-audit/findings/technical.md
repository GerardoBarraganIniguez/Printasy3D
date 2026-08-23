# Technical SEO — Printasy 3D

**Auditado:** 2026-08-23

## Lo que funciona

- robots.txt presente y correcto (`Allow: /`, sitemap referenciado)
- Sitemap XML existe en `/sitemap.xml`
- HTTPS activo con HSTS (`max-age=63072000`)
- Canonical tags presentes en ambas páginas
- `hreflang="es-MX"` implementado
- `lang="es"` en `<html>`
- `meta robots: index, follow` explícito
- No hay cadenas de redirección
- Hosted en Vercel (CDN global con Brotli)

## Hallazgos

### 🔴 CRÍTICO

| # | Problema | Detalle |
|---|----------|---------|
| T1 | **Sin CSP (Content Security Policy)** | El header `Content-Security-Policy` no está presente. Vercel no lo inyecta por defecto. |
| T2 | **Sin X-Frame-Options** | Permite clickjacking. |
| T3 | **Sin X-Content-Type-Options** | Ausente `nosniff`. |
| T4 | **Sin Permissions-Policy** | No hay restricción de APIs de navegador. |
| T5 | **Sin Referrer-Policy** | Fuga de datos al hacer clic en links externos. |

### 🟡 ALTO

| # | Problema | Detalle |
|---|----------|---------|
| T6 | **Sitemap solo tiene 2 URLs** | El sitio es de una sola página (SPA-like) + portfolio.html. No hay blog, páginas de materiales ni de servicios individuales. Esto limita la superficie indexable. |
| T7 | **Sitio de una sola página con anclas** | Secciones Inicio/Nosotros/Servicios/Galería/Contacto son anclas (`#`). Google no las indexa como páginas independientes, perdiendo oportunidades de ranking para keywords específicas. |
| T8 | **`lastmod` en sitemap desactualizado** | Figura `2026-04-21` pero el servidor muestra `Last-Modified: Sun, 23 Aug 2026`. |

### 🟠 MEDIO

| # | Problema | Detalle |
|---|----------|---------|
| T9 | **Sin `llms.txt`** | No hay archivo para instrucciones a LLMs crawlers (ChatGPT, Perplexity). Oportunidad perdida para GEO. |
| T10 | **Sin `favicon.ico` estándar** | Solo usa PNG. Algunos crawlers y agregadores esperan `/favicon.ico`. |
| T11 | **Preload de video sin `fetchpriority`** | Los dos `<video>` del hero se cargan sin prioridad explícita, afectando LCP. |

### 🟢 BAJO

| # | Problema | Detalle |
|---|----------|---------|
| T12 | **`changefreq: monthly`** | Para un portafolio que actualiza seguido podría ser `weekly`. |
