# Schema & Structured Data — Printasy 3D

**Auditado:** 2026-08-23

## Lo que funciona

- Schema `LocalBusiness` implementado con JSON-LD (formato correcto)
- Incluye: `name`, `description`, `url`, `logo`, `telephone`, `address`, `geo`, `sameAs`, `priceRange`
- `hasOfferCatalog` con dos servicios listados
- `GeoCoordinates` con lat/lng de Guadalajara
- `PostalAddress` completo (localidad, región, país)
- `sameAs` con Instagram y TikTok
- Schema detectado como válido por el render

## Hallazgos

### 🟡 ALTO

| # | Problema | Detalle |
|---|----------|---------|
| S1 | **Sin schema `Review` / `AggregateRating`** | Sin reseñas en el sitio, Google no puede mostrar estrellas en los resultados. Esto es especialmente importante para negocio local. |
| S2 | **Sin schema `FAQPage`** | No hay sección FAQ ni schema correspondiente. Oportunidad de rich result en SERP. |
| S3 | **`openingHours` ausente** | El schema LocalBusiness no incluye horarios de atención. Campo relevante para búsquedas locales. |

### 🟠 MEDIO

| # | Problema | Detalle |
|---|----------|---------|
| S4 | **`image` apunta al logo, no a foto de producto** | Para LocalBusiness, Google prefiere una imagen del negocio o productos reales. El logo solo tiene 512x512px. |
| S5 | **Sin `areaServed`** | No se especifica que el servicio cubre Guadalajara y área metropolitana. |
| S6 | **Sin `knowsAbout`** | Oportunidad de señalar expertise: "Impresión FDM", "Bambu Lab", "PLA", "PETG". |
| S7 | **Portfolio sin schema `ImageGallery` o `ItemList`** | La galería de portafolio podría usar schema para mayor visibilidad en Google Images. |

### 🟢 BAJO

| # | Problema | Detalle |
|---|----------|---------|
| S8 | **Sin `BreadcrumbList`** | Relevante para portfolio.html. |
| S9 | **`Service` schema dentro de `Offer` podría ser más específico** | Usar `serviceType` con valores concretos. |
