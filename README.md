# Estudio CTAL-TM v3.0

Plataforma web de estudio para la certificación **ISTQB Certified Tester Advanced Level — Test Management v3.0**.

Reúne en una sola página:

- el resumen del syllabus, navegable y con formato visual;
- tarjetas de repaso;
- un banco de 50 preguntas tipo examen.

🌐 **Sitio web:** https://braynerrosales.github.io/Resumen-y-Practica-ISTQB/

---

## Principio del proyecto

> **El contenido no se reescribe. Solo se presenta.**

- **El resumen** se inserta tal cual en la página a partir de su archivo Markdown. Todo lo que aparece después de `# CONTENIDO DEL RESUMEN` es la fuente única de verdad.
- **Las preguntas** se convierten a JSON con un script, sin transcribirlas a mano. Enunciados, opciones, respuestas y explicaciones quedan idénticos al original.
- **La interfaz** no añade teoría. Los rótulos visuales ("Clave de examen", "Ejemplo", etc.) solo clasifican contenido que ya existe en el documento.

---

## Inicio rápido

### Solo estudiar

Abre `index.html` con doble clic en cualquier navegador. No necesita servidor ni instalación.

> Sin conexión todo funciona. Lo único que cambia es la tipografía, que se sustituye por las fuentes del sistema.

### Modificar y regenerar

Requisito: **Node.js 18 o superior**.

```bash
node build.js
```

Salida esperada:

```
Preguntas: 50 por capítulo { '1': 25, '2': 15, '3': 10 } nivel { ... } respuestas { ... }
Resumen: 36706 caracteres
```

### Vista previa con servidor local (opcional)

```bash
python -m http.server 8765
```

Luego abre http://localhost:8765.

---

## Funcionalidades

### 📖 Resumen

| Función | Detalle |
|---|---|
| Navegación | Índice lateral por capítulos. Muestra el avance de cada uno (`3/24`) y resalta la sección visible. |
| Progreso | Botón **Marcar estudiado** en cada sección. El avance global aparece en la barra superior y en el panel de inicio. |
| Buscador | Busca en todo el resumen. No distingue tildes ni mayúsculas y resalta las coincidencias. Atajo: `/`. |
| Clave de examen | Los bloques *Idea clave*, *Importante*, *Diferencia clave*, *Principio*, etc. se destacan. |
| Ejemplos | Los bloques *Ejemplo…* aparecen en un recuadro propio. |
| Flujos | Las líneas en negrita con `→` se dibujan como diagramas de pasos. |
| Tablas | Barras para columnas numéricas, marcas Sí/No y cuadrante 2×2 para la matriz de stakeholders. |
| Comparaciones | Las tablas de dos columnas (Monitoring vs Control, etc.) se muestran enfrentadas. |
| Learning Objectives | Las listas de la sección 9 son casillas para autoevaluarte. |
| Enlaces directos | Cada sección tiene su propio ancla, por ejemplo `#sec-1-3-4`. |

### 🃏 Repaso rápido

Presenta los conceptos de la sección **7. Conceptos para repaso rápido** como tarjetas.

- La tarjeta se voltea al pulsarla o con la barra espaciadora.
- Cada concepto puede marcarse como **Lo domino** o **Repasar otra vez**.
- Opciones: barajar, filtro *Solo pendientes* y reinicio de marcas.
- Una tira inferior muestra el estado de cada concepto y permite saltar a cualquiera.

### ✅ Práctica

- **Filtros:** capítulo, nivel cognitivo (K2 / K3 / K4) y dificultad.
- **Dos modos:**
  - **Práctica:** al responder ves si acertaste, la explicación y un enlace a la sección del resumen que conviene repasar.
  - **Simulacro:** respondes sin ayudas, puedes volver atrás y usar la paleta de preguntas, y ves el resultado al final. Si intentas finalizar con preguntas sin responder, la página te pide confirmación.
- **Resultados:**
  - porcentaje total;
  - desglose por capítulo, nivel y dificultad;
  - revisión filtrable (todas, incorrectas o sin responder).
- **Repetir falladas:** puedes repetirlas al terminar o desde el filtro *Solo las que fallé*, que se guarda entre sesiones.
- **Historial:** se guardan los 10 últimos intentos.

### Atajos de teclado

| Tecla | Acción |
|---|---|
| `/` | Ir al buscador |
| `↑` `↓` `Enter` `Esc` | Moverse por los resultados de búsqueda |
| `A`–`D` o `1`–`4` | Responder una pregunta |
| `Enter` o `→` | Siguiente pregunta |
| `←` | Pregunta anterior (simulacro) |
| `Espacio` | Voltear tarjeta |
| `←` `→` | Tarjeta anterior o siguiente |

### General

- **Tema:** modo claro u oscuro. Sigue al sistema y se puede cambiar con el botón ☀/☾.
- **Móvil:** diseño adaptado, con el índice como menú desplegable.
- **Accesibilidad:** foco visible, estados `aria-pressed` y soporte de `prefers-reduced-motion`.

---

## Estructura del proyecto

```
Resumen y Practica ISTQB/
├── index.html                                  ← Página final para abrir en local (generada)
├── istqb-ctal-test-management-questions.json   ← Banco de 50 preguntas (generado)
├── build.js                                    ← Script de construcción
├── src/
│   └── template.html                           ← Diseño, estilos y lógica de la página
├── fuentes/                                    ← Fuentes de contenido (no modificar a mano sin motivo)
│   ├── ISTQB_CTAL_TM_Claude_Web_Con_Resumen_Listo.md
│   ├── ISTQB_CTAL_TM_50_Preguntas_Listas_Para_JSON.md
│   └── Prompt_Claude_50_Preguntas_ISTQB_CTAL_TM.md
├── dist/
│   └── istqb-ctal-tm-estudio.html              ← Versión para publicar como Artifact (generada)
└── .claude/launch.json                         ← Servidor de vista previa
```

> ⚠️ `index.html`, `dist/` y el `.json` son **archivos generados**. Si los editas a mano, el próximo `node build.js` sobrescribirá los cambios. Edita `src/template.html` o `fuentes/`.

---

## Cómo funciona `build.js`

```
fuentes/…Preguntas…md ──parse──► istqb-ctal-test-management-questions.json
                                          │
fuentes/…Resumen…md ──recorte──┐          │
                               ▼          ▼
                   src/template.html  (__SUMMARY_MD__, __QUESTIONS_JSON__)
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
          index.html                 dist/istqb-ctal-tm-estudio.html
    (con <!doctype>, uso local)     (sin esqueleto, para Artifact)
```

1. **Preguntas:** divide el MD por `## Pregunta N` y extrae los campos (`**Capítulo:**`, `**Tema:**`, `**Nivel:**`, `**Dificultad:**`, opciones `A.`–`D.`, `**Respuesta correcta:**`, `**Explicación:**`). La construcción se detiene con error si:
   - no hay exactamente 50 preguntas;
   - los IDs no van del 1 al 50 sin saltos;
   - falta alguna opción;
   - la respuesta correcta no es A, B, C o D.
2. **Resumen:** toma todo lo que va después de `# CONTENIDO DEL RESUMEN` y comprueba que no contenga `</script>`.
3. **Página:** sustituye los dos marcadores de la plantilla y escribe las dos versiones.

La página interpreta el Markdown en el navegador, así que el texto original viaja íntegro dentro del HTML.

---

## Editar el contenido

### Cambiar o ampliar el resumen

Edita `fuentes/ISTQB_CTAL_TM_Claude_Web_Con_Resumen_Listo.md` y ejecuta `node build.js`.

El renderizador reconoce estas convenciones:

| Markdown | Resultado en la página |
|---|---|
| `# 1.3.4 Título` | Nueva sección. El número define el capítulo (`1`) y la profundidad (`1.3.4` → nivel 3). |
| `## Idea clave`, `## Importante`, `## Principio`, `## Diferencia clave`, `## Resumen`… | Bloque **Clave de examen** |
| `## Ejemplo…` | Bloque **Ejemplo** |
| `### Subtítulo` dentro de un `##` | Tarjetas en cuadrícula |
| 3 o más `##` cortos sin tablas | Cuadrícula de mini-tarjetas |
| `- ítem` (3 o más ítems de 34 caracteres o menos) | Etiquetas (*chips*) |
| `- ítem` largo | Lista con viñetas |
| `1. paso` | Pasos numerados |
| `**A → B → C**` (párrafo completo) | Diagrama de flujo |
| `` `fórmula` `` (párrafo completo) | Recuadro de fórmula |
| `**frase**` (párrafo completo) | Frase destacada |
| `> cita` después de un texto con "poco útil" / "más útil" o "medible" | Cita en rojo / verde |
| Tabla con columna alineada a la derecha (`---:`) y valores numéricos | Barras proporcionales |
| Celdas `Sí` / `No` | Marcas de color |
| Tabla con encabezados `Tipo \| Influencia \| Interés` | Cuadrante de stakeholders |
| Sección `7.` con `## Término` + párrafo | Tarjetas de **Repaso rápido** |
| Sección `8.` | Etiquetas de prioridad |
| Sección `9.` | Casillas de Learning Objectives |

### Cambiar o añadir preguntas

Edita `fuentes/ISTQB_CTAL_TM_50_Preguntas_Listas_Para_JSON.md` respetando este formato:

```markdown
## Pregunta 1
**Capítulo:** 1
**Tema:** Test Planning
**Nivel:** K3
**Dificultad:** medium-high

Texto de la pregunta (puede incluir listas con "- " o "1.").

A. Opción A
B. Opción B
C. Opción C
D. Opción D

**Respuesta correcta:** B

**Explicación:** Texto de la explicación.

---
```

> Si cambias el número total de preguntas, actualiza también la comprobación `questions.length !== 50` en `build.js`.

Para que el botón *"Repasar en el resumen"* funcione con un **tema nuevo**, añádelo al mapa `TOPIC_SEC` de `src/template.html`:

```js
'Nombre del Tema': '1.3.4',   // número de la sección del resumen
```

### Cambiar el diseño

Todo está en `src/template.html`:

- **Colores y tipografías:** variables CSS en `:root`, con su versión para modo oscuro justo debajo.
- **Tipografías:** *Bricolage Grotesque* (títulos), *IBM Plex Sans* (texto) e *IBM Plex Mono* (datos), servidas por Google Fonts.
- **Colores de estado:** siguen la convención de un test report: verde *passed*, rojo *failed* y ámbar *blocked*.

---

## Formato del banco de preguntas (JSON)

```json
{
  "title": "ISTQB CTAL Test Management v3.0 - Question Bank",
  "version": "1.0",
  "totalQuestions": 50,
  "questions": [
    {
      "id": 1,
      "chapter": 1,
      "topic": "Test Planning",
      "level": "K3",
      "difficulty": "medium-high",
      "question": "…",
      "options": { "A": "…", "B": "…", "C": "…", "D": "…" },
      "correctAnswer": "B",
      "explanation": "…"
    }
  ]
}
```

| Campo | Valores |
|---|---|
| `chapter` | `1`, `2`, `3` |
| `level` | `K2`, `K3`, `K4` |
| `difficulty` | `medium`, `medium-high`, `high` |
| `correctAnswer` | `A`, `B`, `C`, `D` |

El JSON es independiente y se puede reutilizar en otras aplicaciones (Anki, Quizlet, LMS, etc.).

### Distribución actual

| | Cap. 1 | Cap. 2 | Cap. 3 | Total |
|---|---:|---:|---:|---:|
| Preguntas | 25 | 15 | 10 | **50** |

| Nivel | K2 | K3 | K4 |
|---|---:|---:|---:|
| Preguntas | 6 | 22 | 22 |

| Respuesta correcta | A | B | C | D |
|---|---:|---:|---:|---:|
| Veces | 14 | 18 | 13 | 5 |

> 📌 **Mejora pendiente:** el prompt original (`fuentes/Prompt_Claude_50_Preguntas…md`) recomendaba respuestas repartidas en unas 12–13 por letra y una distribución 10 / 15 / 25 por nivel. El banco actual se conservó tal cual. Conviene reequilibrar las respuestas, sobre todo la **B (18)** frente a la **D (5)**, para evitar que se aprenda un patrón. Recuerda que reordenar opciones implica actualizar `correctAnswer` y revisar que la explicación no cite letras.

---

## Datos y privacidad

El progreso se guarda **solo en tu navegador** (`localStorage`, clave `ctaltm-estudio-v1`):

| Dato | Clave interna |
|---|---|
| Secciones estudiadas | `studied` |
| Learning Objectives marcados | `los` |
| Estado de las tarjetas | `cards` |
| Preferencias de práctica | `quizPrefs` |
| Preguntas falladas | `quizWrong` |
| Historial de intentos | `quizHistory` |
| Tema elegido | `theme` |

- No se envía nada a ningún servidor.
- La versión local y la publicada guardan su progreso por separado, porque son orígenes distintos.
- En una ventana privada o si se borran los datos del sitio, el progreso empieza de cero. La página sigue funcionando igual.

**Reiniciar todo el progreso:** abre la consola del navegador (F12) y ejecuta:

```js
localStorage.removeItem('ctaltm-estudio-v1'); location.reload();
```

---

## Publicar una nueva versión

### GitHub Pages (automático)

El sitio se despliega con GitHub Actions ([`.github/workflows/static.yml`](.github/workflows/static.yml)) en cada `push` a `master`. También se puede lanzar a mano desde la pestaña **Actions** → *Deploy static content to Pages* → **Run workflow**.

El workflow:

1. ejecuta `node build.js` para regenerar la página y el JSON desde `fuentes/` y `src/`;
2. copia a `_site/` solo `index.html` y `istqb-ctal-test-management-questions.json`;
3. publica `_site/` en GitHub Pages.

Así, basta con editar un MD de `fuentes/` y hacer `push`: el sitio se reconstruye aunque olvides ejecutar `node build.js` en local. Las fuentes, el script y la plantilla no se publican como parte del sitio.

> Configuración necesaria (una sola vez): en el repositorio, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

El banco de preguntas también queda accesible en `https://braynerrosales.github.io/Resumen-y-Practica-ISTQB/istqb-ctal-test-management-questions.json`.

### Artifact de Claude (opcional)

Pide a Claude que vuelva a publicar `dist/istqb-ctal-tm-estudio.html` como Artifact en la URL existente.

---

## Fuentes

- **Resumen:** `ISTQB_CTAL_TM_Claude_Web_Con_Resumen_Listo.md`, basado en el *ISTQB CTAL Test Management Syllabus v3.0*.
- **Preguntas:** `ISTQB_CTAL_TM_50_Preguntas_Listas_Para_JSON.md`.

> ISTQB® es una marca registrada del International Software Testing Qualifications Board. Este material es de estudio personal y no es un producto oficial de ISTQB.
