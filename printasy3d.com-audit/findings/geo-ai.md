# AI Search Readiness (GEO) — Printasy 3D

**Auditado:** 2026-08-23

## Lo que funciona

- Contenido en español con terminología técnica correcta (FDM, PLA, PETG, ASA, ABS)
- Mención explícita de equipos (Bambu Lab A1 Combo, P1S Combo) — señal de autoridad técnica
- Estructura semántica clara con H1/H2 bien organizados
- Schema LocalBusiness con datos estructurados
- `lang="es"` y `hreflang="es-MX"` correctos

## Hallazgos

### 🟡 ALTO

| # | Problema | Detalle |
|---|----------|---------|
| G1 | **Sin `llms.txt`** | Archivo estándar emergente para instruir a crawlers de LLMs (ChatGPT, Perplexity, Claude). Sin él, los modelos no saben cómo citar o tratar el contenido del sitio. |
| G2 | **Sin contenido respuesta-pregunta** | Los LLMs citan sitios que responden preguntas concretas. Sin FAQ ni artículos, el sitio no tiene el formato que los modelos prefieren para citar. |
| G3 | **Sin datos de autoridad citables** | No hay estadísticas propias, tiempos de entrega promedio, materiales disponibles con especificaciones técnicas. Los LLMs prefieren datos concretos y verificables. |

### 🟠 MEDIO

| # | Problema | Detalle |
|---|----------|---------|
| G4 | **Bajo volumen de contenido textual** | El sitio tiene ~800 palabras en total. Para ser referenciado por IA, los sitios necesitan más masa crítica de contenido experto. |
| G5 | **Sin links externos de autoridad** | No hay backlinks desde medios o blogs de manufactura/maker que los LLMs ya conocen. |
| G6 | **Sin especificaciones técnicas detalladas** | No hay tablas con tolerancias, resolución de capa, temperatura de fusión por material — datos que los LLMs de tecnología/manufactura usan al responder preguntas. |
