# Instrucciones para Claude — Generar banco de 50 preguntas ISTQB CTAL Test Management v3.0 en JSON

## Objetivo

Generar un archivo `.json` con **exactamente 50 preguntas** basadas en el contenido del:

**ISTQB Certified Tester Advanced Level — Test Management v3.0**

El banco de preguntas estará dirigido a un perfil **QA Mid / Senior / QA Lead**, por lo que las preguntas **NO deben ser básicas ni de simple memorización**.

La mayoría debe exigir:

- análisis de contexto;
- priorización;
- toma de decisiones;
- interpretación de métricas;
- gestión de riesgos;
- selección de estrategias;
- estimación;
- gestión de defectos;
- gestión de equipo;
- evaluación de costo-beneficio.

---

# Fuente de contenido

Utilizar únicamente como fuente:

1. El resumen ISTQB CTAL Test Management v3.0 proporcionado junto con este archivo.
2. El syllabus oficial ISTQB CTAL Test Management v3.0, si también está disponible.

## Regla obligatoria

No inventar conceptos que no estén cubiertos por el material.

No incorporar:

- conceptos de otras certificaciones ISTQB;
- contenido de Foundation que no sea utilizado en este syllabus;
- técnicas externas no mencionadas;
- frameworks de liderazgo no presentes en el material;
- preguntas de trivia.

Las preguntas deben conservar la terminología oficial del syllabus.

---

# Nivel de dificultad

El banco debe estar diseñado para personas con experiencia real en QA.

Distribución recomendada:

| Nivel | Cantidad |
|---|---:|
| Medio | 10 |
| Medio-Alto | 20 |
| Alto | 20 |

No generar preguntas tipo:

> ¿Qué significa SMART?

o:

> ¿Qué es Test Monitoring?

Eso sería demasiado sencillo.

Preferir preguntas como:

> Un equipo presenta una desviación del 30% respecto al plan y varios casos bloqueados por ambiente. ¿Cuál sería la acción más apropiada del Test Manager según el contexto?

---

# Distribución cognitiva

Utilizar como referencia los niveles ISTQB:

| Nivel | Enfoque | Cantidad aproximada |
|---|---|---:|
| K2 | Comprender / diferenciar | 10 |
| K3 | Aplicar | 15 |
| K4 | Analizar | 25 |

La mayoría debe ser K3 y K4.

---

# Distribución por capítulo

Generar las 50 preguntas distribuidas aproximadamente así:

## Chapter 1 — Managing the Test Activities

**25 preguntas**

Cubrir:

- Test Planning
- Test Monitoring
- Test Control
- Test Completion
- Stakeholders
- Stakeholder Matrix
- Hybrid Software Development
- Sequential vs Iterative
- Test Levels
- Test Types
- Risk-Based Testing
- Product Risk
- Project Risk
- Risk Identification
- Risk Assessment
- Likelihood
- Impact
- Risk Mitigation
- Heavyweight vs Lightweight RBT
- Project Test Strategy
- Test Strategy vs Test Approach
- SMART
- Exit Criteria
- IDEAL
- Retrospectives
- Tool Selection
- Tool Lifecycle
- Tool Metrics

---

## Chapter 2 — Managing the Product

**15 preguntas**

Cubrir:

- Project Metrics
- Product Metrics
- Process Metrics
- Monitoring / Control / Completion metrics
- Test Reporting
- Test Estimation
- Estimation Factors
- Three-Point Estimation
- Ratio-Based Estimation
- Extrapolation
- Wideband Delphi
- Planning Poker
- Defect Lifecycle
- Cross-Functional Defect Management
- Agile Defect Management
- Hybrid Defect Management
- Defect Report Information
- Defect Data for Process Improvement

---

## Chapter 3 — Managing the Team

**10 preguntas**

Cubrir:

- Professional Competence
- Methodological Competence
- Social Competence
- Personal Competence
- Required Skills
- Skill Gaps
- Skill Development
- Management Skills
- Motivators
- Hygiene Factors
- Cost of Quality
- Prevention Cost
- Appraisal Cost
- Internal Failure Cost
- External Failure Cost
- Cost-Benefit Relationship of Testing

---

# Tipo de preguntas

Priorizar preguntas basadas en escenarios.

Al menos **35 de las 50 preguntas** deben presentar una situación de proyecto.

Ejemplos de contexto:

- banca;
- APIs;
- integración;
- Agile;
- modelos híbridos;
- proyectos regulados;
- equipos distribuidos;
- regresión;
- defectos críticos;
- ambientes inestables;
- restricciones de tiempo;
- falta de recursos;
- problemas de cobertura;
- release decisions;
- CI/CD;
- automatización.

Los escenarios pueden ser realistas, pero no deben depender de conocimiento bancario externo.

---

# Reglas para las opciones

Cada pregunta debe contener exactamente:

- A
- B
- C
- D

Solo una debe ser correcta.

Las otras tres deben ser **distractores plausibles**.

## No hacer

Evitar opciones obviamente incorrectas como:

- "No hacer nada"
- "Cancelar todo el proyecto"
- "Ignorar los riesgos"
- "Ejecutar todas las pruebas sin analizar nada"

Salvo que tengan sentido real dentro del escenario.

Los distractores deben representar errores razonables que podría cometer un QA con experiencia.

---

# Calidad de los distractores

Los distractores deben poder confundirse con la respuesta correcta si la persona:

- confunde Monitoring con Control;
- confunde Product Risk con Project Risk;
- prioriza solo Likelihood y no Impact;
- interpreta métricas sin contexto;
- selecciona herramientas solo por popularidad;
- confunde Prevention con Appraisal;
- confunde Internal con External Failure;
- selecciona una técnica de estimación incorrecta para el contexto;
- aplica un nivel de formalidad incorrecto en defect management;
- usa la misma estrategia para todos los riesgos.

---

# Estructura JSON obligatoria

El archivo debe contener esta estructura:

```json
{
  "title": "ISTQB CTAL Test Management v3.0 - Question Bank",
  "version": "1.0",
  "totalQuestions": 50,
  "questions": [
    {
      "id": 1,
      "chapter": 1,
      "section": "1.3 Risk-Based Testing",
      "topic": "Quality Risk Assessment",
      "level": "K4",
      "difficulty": "high",
      "question": "Texto de la pregunta",
      "options": {
        "A": "Opción A",
        "B": "Opción B",
        "C": "Opción C",
        "D": "Opción D"
      },
      "correctAnswer": "B",
      "explanation": "Explicación breve de por qué B es correcta y por qué el principio aplicado corresponde al syllabus."
    }
  ]
}
```

---

# Campos obligatorios por pregunta

Cada objeto debe incluir:

- `id`
- `chapter`
- `section`
- `topic`
- `level`
- `difficulty`
- `question`
- `options`
- `correctAnswer`
- `explanation`

---

# Valores permitidos

## level

Solo:

```text
K2
K3
K4
```

## difficulty

Solo:

```text
medium
medium-high
high
```

## correctAnswer

Solo:

```text
A
B
C
D
```

---

# Reglas de identificación

Los IDs deben ir exactamente del:

```text
1 al 50
```

Sin:

- duplicados;
- saltos;
- IDs alfanuméricos.

---

# Reglas de explicación

Cada pregunta debe incluir una explicación breve.

La explicación debe:

- indicar el principio ISTQB aplicado;
- explicar por qué la opción correcta es la mejor;
- evitar repetir toda la pregunta;
- tener aproximadamente entre 2 y 5 líneas.

No incluir referencias bibliográficas largas.

---

# Reglas de dificultad

## Medio

Puede requerir distinguir conceptos similares.

Ejemplo:

- Monitoring vs Control
- Product vs Project Risk

Pero debe contener contexto.

---

## Medio-Alto

Debe requerir aplicar un principio a un escenario.

Ejemplo:

- seleccionar técnica de estimación;
- decidir cómo mitigar un riesgo;
- interpretar métricas.

---

## Alto

Debe presentar:

- múltiples datos;
- información parcialmente relevante;
- dos o más opciones aparentemente correctas;
- necesidad de elegir la opción más adecuada según el contexto.

La respuesta correcta debe depender de aplicar correctamente el razonamiento del syllabus.

---

# Reglas para preguntas K4

Las preguntas K4 deben evitar depender de definiciones literales.

Deben requerir analizar:

- contexto;
- riesgos;
- restricciones;
- métricas;
- stakeholders;
- SDLC;
- recursos;
- impacto.

Ejemplo de estructura:

```text
Un proyecto utiliza un modelo híbrido.
El equipo Agile registra defectos en Jira mientras un proveedor secuencial utiliza otra herramienta.
Los defectos críticos tardan en sincronizarse y afectan la priorización.

¿Cuál sería la acción más apropiada del Test Manager?
```

La respuesta correcta debería estar relacionada con:

- alineación;
- sincronización de defect management tools;
- transparencia;
- participación de stakeholders.

---

# Ejemplos de estilos de pregunta

## Risk-Based Testing

Presentar varios riesgos con diferentes niveles de:

- likelihood
- impact

Preguntar:

- cuál priorizar;
- qué intensidad de pruebas aplicar;
- qué técnica utilizar;
- cuándo comenzar el testing.

---

## Metrics

Mostrar datos como:

```text
Execution: 92%
Passed: 88%
Failed: 4%
Blocked: 8%
```

Agregar información de riesgo.

Preguntar cuál es la interpretación más adecuada.

Evitar asumir que un porcentaje alto de Passed significa automáticamente readiness.

---

## Estimation

Presentar:

- complejidad;
- datos históricos;
- disponibilidad de expertos;
- SDLC;
- restricciones de tiempo.

Preguntar cuál técnica sería más apropiada.

---

## Defect Management

Presentar casos donde:

- no está claro si la anomalía es un defecto;
- hay varios equipos;
- Agile y sequential conviven;
- se usan distintas herramientas;
- algunos defectos quedan para otra iteración.

Preguntar por la mejor acción.

---

## Team Management

Presentar:

- gaps de skills;
- problemas de comunicación;
- falta de autonomía;
- motivación;
- ambientes inestables;
- necesidad de capacitación.

Preguntar qué tipo de competencia o factor está involucrado.

---

## Cost of Quality

Presentar actividades reales y pedir clasificarlas entre:

- Prevention
- Appraisal
- Internal Failure
- External Failure

En preguntas difíciles, mezclar varias actividades en el escenario.

---

# Balance de respuestas

Distribuir las respuestas correctas de manera equilibrada.

Aproximadamente:

- A: 12 o 13
- B: 12 o 13
- C: 12 o 13
- D: 12 o 13

Evitar patrones como:

```text
A A A B B B C C C
```

La secuencia debe parecer natural.

---

# Reglas de redacción

Las preguntas deben:

- estar en español;
- conservar los términos ISTQB relevantes en inglés;
- sonar profesionales;
- ser claras;
- evitar ambigüedades innecesarias;
- tener una única mejor respuesta.

Utilizar términos como:

- Test Manager
- Test Planning
- Monitoring
- Control
- Risk-Based Testing
- Likelihood
- Impact
- Test Strategy
- Test Approach
- Exit Criteria
- Defect Management

cuando corresponda.

---

# Evitar preguntas demasiado simples

No generar:

```text
¿Qué significa IDEAL?
```

Preferir:

```text
Después de una retrospectiva se identificó que la principal causa de bloqueos es la preparación tardía de datos. El Test Manager ya analizó el estado actual y acordó con los stakeholders que debe corregirse. ¿Qué actividad del modelo IDEAL corresponde a definir el plan concreto de mejora?
```

---

# Evitar pistas en la respuesta

No utilizar:

- una opción mucho más larga que las demás;
- palabras absolutas solo en distractores;
- repetir literalmente palabras de la pregunta únicamente en la respuesta correcta;
- respuestas evidentemente técnicas frente a tres opciones absurdas.

---

# Validación final obligatoria

Antes de entregar el JSON, verificar:

- [ ] Existen exactamente 50 preguntas.
- [ ] Los IDs van de 1 a 50.
- [ ] Cada pregunta tiene exactamente 4 opciones.
- [ ] Solo existe una respuesta correcta.
- [ ] Todas tienen explicación.
- [ ] No existen preguntas duplicadas.
- [ ] Al menos 35 son escenarios.
- [ ] Predominan K3 y K4.
- [ ] Las preguntas no son triviales.
- [ ] Hay cobertura de los 3 capítulos.
- [ ] El JSON es válido.
- [ ] No existen comentarios dentro del JSON.
- [ ] No utilizar Markdown dentro del archivo `.json`.
- [ ] No incluir texto antes ni después del JSON final.

---

# Resultado esperado

Crear un archivo:

```text
istqb-ctal-test-management-questions.json
```

con **50 preguntas de dificultad Mid/Senior**, útiles para una aplicación web de estudio y simulación de examen.
