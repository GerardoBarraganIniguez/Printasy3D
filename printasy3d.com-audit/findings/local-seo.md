# Local SEO — Printasy 3D

**Auditado:** 2026-08-23

## Lo que funciona

- Schema LocalBusiness con coordenadas GPS correctas
- `geo.region: MX-JAL` y `geo.placename: Guadalajara, Jalisco` en meta tags
- Teléfono en formato internacional en schema (+523339487224)
- Ciudad mencionada en title, meta description, H1, body text
- `sameAs` con redes sociales activas (Instagram + TikTok)
- `priceRange: "$$"` informativo

## Hallazgos

### 🔴 CRÍTICO

| # | Problema | Detalle |
|---|----------|---------|
| L1 | **Sin Google Business Profile verificado** | No hay señal de GBP en el sitio (no hay embed de mapa, no hay link a perfil de Google). GBP es el factor #1 para aparecer en el Local Pack (las 3 fichas de Google Maps). |

### 🟡 ALTO

| # | Problema | Detalle |
|---|----------|---------|
| L2 | **NAP incompleto en el sitio** | El número de teléfono está en el schema pero NO visible en el HTML del cuerpo de la página (solo en el formulario de contacto). Google cruza NAP entre schema, HTML y GBP. |
| L3 | **Sin dirección física visible** | El schema tiene `addressLocality` pero sin calle/número/colonia. Si el negocio tiene ubicación física, debería mostrarse visiblemente en la página. |
| L4 | **Sin horarios de atención** | Ni en el HTML ni en el schema. Clave para conversión local y para GBP. |
| L5 | **Sin embed de Google Maps** | Mejora señales locales y aumenta conversión (usuarios pueden ver la ubicación sin salir del sitio). |

### 🟠 MEDIO

| # | Problema | Detalle |
|---|----------|---------|
| L6 | **Sin citas en directorios locales** | No hay evidencia de presencia en Yelp, Foursquare, Páginas Amarillas MX, Hotfrog MX — directorios que refuerzan NAP consistency. |
| L7 | **Sin reseñas visibles** | No hay widget de Google Reviews ni reseñas de clientes en el sitio. |
| L8 | **`areaServed` ausente en schema** | No especifica cobertura (ej. Guadalajara, Zapopan, Tlaquepaque, Tonalá). |
