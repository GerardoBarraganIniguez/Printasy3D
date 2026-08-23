# Reporte Completo de Auditoria SEO — Printasy 3D
**URL:** https://www.printasy3d.com/  
**Fecha:** 2026-08-23  
**Tipo de negocio:** Servicio local de impresión 3D bajo pedido — Guadalajara, Jalisco, MX  
**Páginas auditadas:** 2 (index.html, portfolio.html)

---

## Resumen Ejecutivo

### Puntaje de Salud SEO: **54 / 100**

| Categoría | Peso | Puntaje | Score ponderado |
|-----------|------|---------|-----------------|
| Technical SEO | 22% | 58/100 | 12.8 |
| Content Quality | 23% | 48/100 | 11.0 |
| On-Page SEO | 20% | 68/100 | 13.6 |
| Schema / Structured Data | 10% | 62/100 | 6.2 |
| Performance (CWV) | 10% | 45/100 | 4.5 |
| AI Search Readiness | 10% | 35/100 | 3.5 |
| Images | 5% | 65/100 | 3.3 |
| **Local SEO** | *(bonus)* | 42/100 | — |
| **TOTAL** | | | **54.9** |

### Top 5 Problemas Criticos

1. **Sin Google Business Profile verificado** — El factor #1 para aparecer en Google Maps y el Local Pack está ausente.
2. **Headers de seguridad HTTP faltantes** — CSP, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, Referrer-Policy ausentes.
3. **Videos hero sin `poster`** — El LCP se bloquea porque el navegador debe descargar el video antes de mostrar algo. Impacto directo en Core Web Vitals.
4. **Sitio de anclas sin páginas indexables por keyword** — Las secciones son `#anclas`, Google no las rankea de forma independiente para keywords específicas como "impresión 3D funcional Guadalajara".
5. **Sin prueba social ni E-E-A-T Trust** — No hay reseñas, testimonios, ni identidad del equipo visible.

### Top 5 Quick Wins (baja dificultad, alto impacto)

1. **Agregar headers de seguridad en `vercel.json`** — 15 minutos, elimina 5 hallazgos críticos/altos.
2. **Agregar `poster` a los 2 videos hero** — 1 línea HTML por video, mejora LCP inmediatamente.
3. **Corregir alt texts de 6 imágenes** — Copy/paste en el HTML.
4. **Agregar `openingHours` y `areaServed` al schema** — 10 líneas de JSON-LD.
5. **Corregir typos** — "Sacanpuntas" → "Sacapuntas", "Lamparas" → "Lámparas".

---

## 1. Technical SEO — 58/100

### Lo que funciona
- `robots.txt` correcto con `Allow: /` y referencia al sitemap
- Sitemap XML en `/sitemap.xml` con 2 URLs
- HTTPS activo con HSTS (`max-age=63072000` — ~2 años)
- Tags canónicos en ambas páginas
- `hreflang="es-MX"` y `lang="es"` correctos
- CDN Vercel con compresión Brotli activa (cache hits confirmados)
- Sin cadenas de redirección

### Hallazgos Tecnicos

**CRITICO — Headers de seguridad ausentes**

El servidor de Vercel no inyecta estos headers por defecto. Ninguno está presente:

```
Content-Security-Policy       ❌
X-Frame-Options               ❌
X-Content-Type-Options        ❌
Permissions-Policy            ❌
Referrer-Policy               ❌
```

**Solucion en `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://api.emailjs.com; media-src 'self'; frame-ancestors 'none';"
        }
      ]
    }
  ]
}
```

**ALTO — Sitio de anclas (#) limita indexación**

Actualmente el sitio tiene solo 2 URLs indexables:
- `https://www.printasy3d.com/`
- `https://www.printasy3d.com/portfolio.html`

Las secciones Nosotros, Servicios, Galería son anclas JavaScript. Google no puede rankear `/#servicios` para "servicios de impresión 3D Guadalajara" como página independiente.

**Oportunidad:** Crear páginas HTML separadas para capturar keywords de intención comercial:
- `/servicios/` → "servicios impresión 3D Guadalajara"
- `/materiales/` → "PLA PETG ASA impresión 3D"
- `/contacto/` → "cotizar impresión 3D Guadalajara"

**ALTO — Sitemap desactualizado**

`lastmod: 2026-04-21` pero `Last-Modified: Sun, 23 Aug 2026` en los headers HTTP.

**MEDIO — Sin llms.txt**

```
GET https://www.printasy3d.com/llms.txt → 404
```

---

## 2. Content Quality & E-E-A-T — 48/100

### Lo que funciona
- Título H1 claro y con personalidad de marca
- Meta description con keyword local + CTA
- Equipos específicos mencionados (Bambu Lab A1 + P1S Combo)
- Galería visual con 13 piezas reales — señal de Experiencia

### Hallazgos de Contenido

**ALTO — Sin blog ni contenido educativo**

El sitio no puede capturar el 60-70% del tráfico orgánico que viene de búsquedas informacionales. Keywords sin capturar:
- "cuánto tarda imprimir en 3D"
- "diferencia PLA y PETG"
- "cómo pedir impresión 3D personalizada"
- "impresión 3D para prototipos Guadalajara"

**ALTO — Sin testimonios o reseñas visibles**

Google E-E-A-T prioriza la T (Trust). Sin prueba social el sitio tiene un punto de confianza bajo. Impacta tanto en rankings como en conversión.

**MEDIO — Alt texts genéricos en galería (6 imágenes)**

| Imagen | Alt actual | Alt recomendado |
|--------|-----------|-----------------|
| FunkoGraduado.webp | "Funko" | "Funko de graduado personalizado impreso en 3D Guadalajara" |
| SacapuntasGigante.webp | "sacapuntas" | "Sacapuntas gigante decorativo impreso en 3D" |
| ExpositorNFC.webp | "expositor" | "Expositor NFC personalizado impreso en 3D" |
| Lamparas.webp | "lamparas" | "Lámparas de sombra impresas en 3D Guadalajara" |
| Portalabiales.webp | "Porta labiales" | "Porta labiales organizador impreso en 3D" |
| Lightbox img | "" (vacío) | Agregar alt dinámico con JS |

**BAJO — Typos en el HTML**

- `data-label="Sacanpuntas Gigante"` → "Sacapuntas Gigante"
- `<span>Lamparas de sombra</span>` → "Lámparas de sombra"
- `"¿Quieres piezas Únicas?"` → "¿Quieres piezas únicas?"

---

## 3. On-Page SEO — 68/100

### Lo que funciona
- Title: "Printasy 3D | Impresión 3D en Guadalajara, Jalisco" (56 chars)
- Meta description con keyword + CTA (154 chars)
- OG tags completos
- Twitter Card configurado

### Hallazgos On-Page

**MEDIO — OG image es el logo cuadrado**

`og:image: https://www.printasy3d.com/images/logoPrintasy.png` (512x512px)

Twitter Card `summary_large_image` requiere imagen 1200x630px. El logo cuadrado se verá mal en previews de redes sociales.

**Solucion:** Crear `images/og-printasy3d.jpg` de 1200x630px con foto de pieza impresa + overlay de marca.

**MEDIO — H1 de portfolio.html genérico**

Actual: `<h1>Portafolio</h1>`  
Recomendado: `<h1>Portafolio de Impresión 3D — Piezas Funcionales y Decorativas</h1>`

---

## 4. Schema & Structured Data — 62/100

### Lo que funciona
El schema LocalBusiness está bien implementado con JSON-LD:
- Nombre, descripción, URL, logo, telefono
- PostalAddress con región y país
- GeoCoordinates precisas
- sameAs con Instagram y TikTok
- hasOfferCatalog con 2 servicios

### Hallazgos de Schema

**ALTO — Sin openingHours**

```json
// Agregar al schema existente:
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
]
```

**ALTO — Sin AggregateRating**

Una vez tengan reseñas de clientes, agregar:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "12"
}
```

**MEDIO — Sin areaServed**

```json
"areaServed": [
  {"@type": "City", "name": "Guadalajara"},
  {"@type": "City", "name": "Zapopan"},
  {"@type": "City", "name": "Tlaquepaque"},
  {"@type": "City", "name": "Tonalá"}
]
```

**MEDIO — Sin FAQPage schema**

Con una sección FAQ en el sitio se puede obtener rich result de preguntas en la SERP:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tarda una pieza impresa en 3D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dependiendo del tamaño y complejidad, las entregas son de 2-5 días hábiles."
      }
    }
  ]
}
```

---

## 5. Performance (Core Web Vitals) — 45/100

*Nota: PageSpeed API no disponible. Análisis de código estático.*

### Lo que funciona
- `loading="lazy"` en galería
- Brotli + Vercel CDN
- preconnect para Google Fonts
- `defer` en EmailJS
- WebP en nuevas imágenes

### Hallazgos de Performance

**CRITICO — Videos hero sin poster (LCP)**

```html
<!-- ACTUAL (malo): -->
<video src="images/background.mp4" autoplay muted loop playsinline preload="metadata"></video>

<!-- CORRECTO: -->
<video src="images/background.mp4" autoplay muted loop playsinline 
       preload="metadata" 
       poster="images/hero-poster-desktop.jpg"
       width="1920" height="1080"></video>
```

El `poster` permite al navegador mostrar inmediatamente una imagen estática mientras carga el video, mejorando LCP dramáticamente.

**ALTO — Imágenes sin width/height (CLS)**

```html
<!-- ACTUAL (malo): -->
<img src="images/avion.jpg" alt="..." loading="lazy">

<!-- CORRECTO: -->
<img src="images/avion.jpg" alt="..." loading="lazy" width="600" height="400">
```

**ALTO — 6 imágenes JPEG sin WebP**

Imágenes a convertir: `avion.jpg`, `bulbasaur.jpg`, `coraline.jpg`, `demogorgon.jpg`, `gato.jpg`, `jack.jpg`

Comando de conversion:
```bash
for f in avion bulbasaur coraline demogorgon gato jack; do
  cwebp -q 85 images/$f.jpg -o images/$f.webp
done
```

---

## 6. AI Search Readiness (GEO) — 35/100

### Lo que funciona
- Terminología técnica correcta (FDM, materiales, equipos)
- Contenido en español con geo local
- Schema con datos estructurados

### Hallazgos GEO

**ALTO — Sin llms.txt**

Crear `/llms.txt`:
```
# Printasy 3D — Servicio de Impresión 3D en Guadalajara, Jalisco, México

## Sobre nosotros
Estudio de impresión 3D especializado en piezas funcionales y decorativas personalizadas.
Operamos con impresoras Bambu Lab A1 Combo y P1S Combo.

## Servicios
- Piezas funcionales: cajas, organizadores, partes automotrices, contramoldes
- Piezas decorativas: figuras, macetas, arte, personajes de videojuegos
- Materiales: PLA, PETG, ASA, ABS

## Zona de cobertura
Guadalajara, Zapopan, Tlaquepaque, Tonalá, Jalisco, México.

## Cómo contactar
Web: https://www.printasy3d.com/
Instagram: @printasy_3d
TikTok: @printasy3d

## Cómo citar
Citar como "Printasy 3D, estudio de impresión 3D en Guadalajara, Jalisco."
```

---

## 7. Local SEO — 42/100

### Lo que funciona
- Mención de Guadalajara en todos los elementos clave
- Schema con coordenadas GPS precisas
- meta `geo.region` y `geo.placename`

### Hallazgos Local SEO

**CRITICO — Sin Google Business Profile**

Sin GBP verificado el negocio no aparece en:
- El Local Pack de Google (las 3 fichas con mapa)
- Google Maps
- Búsquedas de voz locales

**Pasos para crear GBP:**
1. Ir a `business.google.com`
2. Buscar "Printasy 3D Guadalajara" — si ya existe, reclamar
3. Completar: nombre, categoría ("Servicio de impresión 3D"), dirección, teléfono, horario, fotos
4. Verificar por postal o video

**ALTO — NAP inconsistente: teléfono no visible en HTML**

El número `+523339487224` está en el schema pero no en el `<body>`. Agregar:
```html
<a href="tel:+523339487224" class="contact-item">
  <svg>...</svg>
  <span>+52 33 3948 7224</span>
</a>
```

---

## 8. Images — 65/100

### Lo que funciona
- lazy loading en todas las imágenes
- WebP en 7 de 13 imágenes de galería
- Alt text presente en casi todas

### Hallazgos de Imágenes

Ver sección de Content (alt texts) y Performance (WebP conversion).

El `<img>` del lightbox tiene `alt=""` vacío — agregar alt dinámico con JavaScript cuando se abre el lightbox.

---

## Plan de Accion Priorizado

### Semana 1 — Correcciones Criticas
- [ ] Crear y verificar Google Business Profile
- [ ] Agregar security headers en `vercel.json`
- [ ] Agregar `poster` + `width`/`height` a los 2 videos del hero
- [ ] Agregar `width`/`height` a imágenes de galería

### Semanas 2-3 — Alto Impacto
- [ ] Convertir 6 JPEG a WebP
- [ ] Mejorar alt texts de 6 imágenes
- [ ] Agregar `openingHours`, `areaServed` al schema
- [ ] Hacer teléfono visible en el HTML
- [ ] Actualizar `lastmod` en sitemap.xml
- [ ] Corregir typos (Sacanpuntas, Lamparas, Únicas)
- [ ] Crear imagen OG 1200x630px
- [ ] Crear `/llms.txt`

### Mes 2 — Contenido y Autoridad
- [ ] Sección de testimonios (3-5 reseñas reales)
- [ ] Página de Materiales y Especificaciones
- [ ] Sección FAQ + schema FAQPage
- [ ] 2-3 artículos de blog iniciales
- [ ] Embed de Google Maps en contacto
- [ ] Self-host fuente Inter

### Mes 3+ — Monitoreo y Expansion
- [ ] Configurar Google Search Console
- [ ] Capturar baseline SEO con seo-drift
- [ ] Crear páginas de servicios individuales
- [ ] Directorios locales MX (Yelp, Hotfrog, Páginas Amarillas)

---

*Auditoria generada con claude-seo v2.2.4 — 2026-08-23*
