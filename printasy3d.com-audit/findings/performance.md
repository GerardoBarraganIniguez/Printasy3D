# Performance & Core Web Vitals — Printasy 3D

**Auditado:** 2026-08-23  
*Nota: PageSpeed API sin cuota disponible. Análisis basado en inspección de código y headers.*

## Lo que funciona

- CDN Vercel con compresión Brotli
- HTTPS con `Age` header (cache hits confirmados: 43719s)
- `loading="lazy"` en todas las imágenes de galería
- Fuentes Google con `preconnect` configurado
- `defer` en EmailJS script
- Imágenes en formatos modernos: `.webp` para nuevas fotos, `.jpg` para las antiguas

## Hallazgos

### 🔴 CRÍTICO

| # | Problema | Detalle |
|---|----------|---------|
| P1 | **Video de hero sin `preload="none"` o `poster`** | Dos `<video>` (desktop + mobile) sin imagen de poster. LCP se dispara porque el primer frame visible requiere descargar el video. Impacto directo en LCP. |
| P2 | **Videos en hero sin dimensiones explícitas** | Puede causar Cumulative Layout Shift (CLS) mientras cargan. |

### 🟡 ALTO

| # | Problema | Detalle |
|---|----------|---------|
| P3 | **Imágenes .jpg en galería sin convertir a .webp** | `avion.jpg`, `bulbasaur.jpg`, `coraline.jpg`, `demogorgon.jpg`, `gato.jpg`, `jack.jpg` — siguen siendo JPEG. Conversión a WebP/AVIF daría 25-50% de ahorro. |
| P4 | **Sin `width`/`height` en `<img>`** | Ninguna imagen de galería tiene dimensiones declaradas, lo que causa CLS durante la carga. |
| P5 | **Font Inter cargada desde Google Fonts (red request)** | Añade ~50-150ms de latencia por la petición externa. Self-hosting de la fuente eliminaría esto. |
| P6 | **Sin `<link rel="preload">` para el video hero** | El video más importante del above-the-fold no tiene hint de preload para el navegador. |

### 🟠 MEDIO

| # | Problema | Detalle |
|---|----------|---------|
| P7 | **`video` móvil se carga en desktop y viceversa** | Ambos `<video>` están en el DOM. CSS oculta uno, pero el navegador puede precargar ambos. |
| P8 | **EmailJS cargado desde CDN externo** | Dependencia externa que añade latencia y riesgo de fallo. |
