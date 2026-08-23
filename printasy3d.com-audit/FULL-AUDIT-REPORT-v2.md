# Reporte SEO — Printasy 3D (v2 post-implementación)
**URL:** https://www.printasy3d.com/  
**Fecha:** 2026-08-23  
**Auditoria anterior:** 54/100 (misma fecha, antes del deploy)

---

## Puntaje de Salud SEO: **72 / 100** (+18 puntos)

| Categoría | Anterior | Ahora | Cambio |
|-----------|----------|-------|--------|
| Technical SEO | 58 | 82 | +24 |
| Content Quality | 48 | 55 | +7 |
| On-Page SEO | 68 | 76 | +8 |
| Schema / Structured Data | 62 | 78 | +16 |
| Performance (CWV) | 45 | 55 | +10 |
| AI Search Readiness | 35 | 58 | +23 |
| Images | 65 | 88 | +23 |
| Local SEO | 42 | 50 | +8 |

---

## Confirmado en vivo ✅

### Security Headers — todos presentes
```
Content-Security-Policy    ✅
X-Frame-Options            ✅ SAMEORIGIN
X-Content-Type-Options     ✅ nosniff
Referrer-Policy            ✅ strict-origin-when-cross-origin
Permissions-Policy         ✅ camera=(), microphone=(), geolocation=()
Strict-Transport-Security  ✅ max-age=63072000
```

### Schema LocalBusiness — enriquecido
```
openingHoursSpecification  ✅ L-S 10:00-19:00
areaServed                 ✅ Country: México
description                ✅ incluye "Envíos a todo México"
```

### Imágenes
```
Alt texts descriptivos     ✅ 13/13 imágenes con alt SEO
width/height declarados    ✅ en todas las imágenes de galería
poster en videos hero      ✅ atributo presente (archivo pendiente)
```

### Envíos nacionales — mensaje consistente
```
meta description           ✅ "Envíos a todo México"
OG / Twitter description   ✅
Hero subtitle              ✅ "Guadalajara, Jalisco · Envíos a todo México."
Sección Nosotros           ✅ "Hacemos envíos a todo México."
Schema description         ✅
llms.txt                   ✅ accesible en /llms.txt
sitemap lastmod            ✅ 2026-08-23
```

---

## Hallazgos pendientes (de la auditoría anterior)

### 🔴 CRÍTICO

| # | Problema | Estado |
|---|----------|--------|
| L1 | **Sin Google Business Profile verificado** | Pendiente (el negocio SÍ existe en GBP — verificar que la ficha esté reclamada y completa) |

### 🟡 ALTO

| # | Problema | Estado |
|---|----------|--------|
| P1 | **Posters de videos hero sin imagen real** | Atributo HTML listo. Faltan los archivos `hero-poster-desktop.jpg` y `hero-poster-mobile.jpg` |
| C1 | **Sin blog ni contenido educativo** | Pendiente |
| C2 | **Sin testimonios de clientes** | Pendiente |
| S1 | **Sin AggregateRating / Review schema** | Pendiente (depende de C2) |

### 🟠 MEDIO

| # | Problema | Estado |
|---|----------|--------|
| C6 | **Sin sección FAQ** | Pendiente |
| L5 | **Sin embed de Google Maps** | Pendiente |
| P3 | **6 imágenes JPEG sin convertir a WebP** | Pendiente |
| P5 | **Google Fonts como red request** | Pendiente |

---

## Próximos pasos recomendados

### Esta semana
1. **Crear los posters del hero** — Abre `background.mp4` y `Celular.mp4` en VLC, pausa en el primer frame y exporta como JPG. Guárdalos como `images/hero-poster-desktop.jpg` e `images/hero-poster-mobile.jpg`.
2. **Verificar y completar Google Business Profile** — Confirmar que la ficha esté reclamada, con horarios, fotos, categoría "Impresión 3D" y descripción actualizada.
3. **Convertir 6 JPEG a WebP** — `avion.jpg`, `bulbasaur.jpg`, `coraline.jpg`, `demogorgon.jpg`, `gato.jpg`, `jack.jpg`.

### Mes 2
4. Sección de testimonios (3-5 reseñas reales de clientes)
5. Sección FAQ con schema FAQPage
6. Embed de Google Maps en la sección de contacto
7. Primer artículo de blog

---

*Auditoría v2 — 2026-08-23 — sitio desplegado en Vercel*
