# INSTRUCCIONES PARA CLAUDE — CONSTRUIR LA PÁGINA, NO GENERAR EL RESUMEN

## Objetivo

Construir una página web de estudio utilizando **exactamente el resumen que aparece más abajo en este mismo archivo**.

## Regla principal

**NO debes resumir el syllabus.**
**NO debes reinterpretar el contenido.**
**NO debes generar un resumen nuevo.**
**NO debes reemplazar el contenido existente por una versión propia.**

El resumen ya fue preparado previamente.

Tu trabajo es únicamente:

- convertir este contenido en una página web de estudio;
- organizarlo visualmente;
- crear navegación entre capítulos y temas;
- representar tablas, comparaciones, ejemplos y flujos de forma clara;
- mantener todo el contenido disponible para estudio;
- mejorar la experiencia visual sin modificar el significado.

## Uso del contenido

Todo lo que aparece después de la sección:

`# CONTENIDO DEL RESUMEN`

es la **fuente de datos definitiva de la página**.

Debes conservar:

- títulos;
- conceptos;
- definiciones;
- listas;
- ejemplos;
- comparaciones;
- tablas;
- términos en inglés utilizados por ISTQB;
- estructura por capítulos.

Puedes cambiar únicamente la **presentación visual**, no el contenido conceptual.

## Página esperada

La página debe sentirse como una plataforma de estudio y no como un documento plano.

Debe permitir como mínimo:

- navegación por secciones;
- sidebar o menú;
- diseño responsive;
- modo oscuro;
- buscador por concepto;
- tarjetas para conceptos importantes;
- tablas comparativas;
- bloques visuales para ejemplos;
- bloques destacados para conceptos de examen;
- progreso de lectura o estudio;
- sección de repaso rápido.

Si decides agregar flashcards, filtros o favoritos, deben construirse únicamente con el contenido ya existente en este archivo.

## Fuente de verdad

No utilizar Internet ni conocimiento externo para completar el contenido.

Si algún dato no está incluido aquí, no inventarlo.

---

# CONTENIDO DEL RESUMEN

# ISTQB CTAL Test Management v3.0 — Resumen estructurado para una página web

> Fuente base: ISTQB Certified Tester Advanced Level — Test Management Syllabus v3.0.
> Este archivo contiene el contenido de estudio resumido y estructurado para que pueda ser convertido en una página web.
> No añadir teoría que no esté sustentada por el syllabus.

---

# 0. Visión general

## Certificación

**Certified Tester Advanced Level — Test Management v3.0**

El syllabus está orientado a profesionales involucrados en la gestión de pruebas de software.

La certificación cubre principalmente tres bloques:

1. **Managing the Test Activities**
2. **Managing the Product**
3. **Managing the Team**

## Distribución del contenido

| Capítulo | Tema | Tiempo de formación |
|---|---|---:|
| 1 | Managing the Test Activities | 750 min |
| 2 | Managing the Product | 390 min |
| 3 | Managing the Team | 225 min |

## Niveles cognitivos

### K2 — Understand
Comprender, explicar, resumir o diferenciar conceptos.

### K3 — Apply
Aplicar un concepto, técnica o método a una situación concreta.

### K4 — Analyze
Analizar un contexto, evaluar información y seleccionar una acción apropiada.

## Idea central

En Advanced Level no basta con memorizar términos.

El foco está en comprender cómo debe actuar una persona responsable de la gestión de pruebas ante distintos contextos, riesgos, restricciones, métricas, defectos y necesidades del equipo.

---

# 1. Managing the Test Activities

Este capítulo cubre:

- Test Planning
- Test Monitoring
- Test Control
- Test Completion
- Context of Testing
- Stakeholders
- Hybrid Software Development
- SDLC Models
- Test Levels
- Test Types
- Risk-Based Testing
- Project Test Strategy
- Test Objectives
- Test Process Improvement
- IDEAL
- Model-Based Improvement
- Analytical-Based Improvement
- Retrospectives
- Test Tools
- Tool Selection
- Tool Lifecycle
- Tool Metrics

---

# 1.1 Test Process

El proceso de pruebas incluye actividades como:

- test planning
- test monitoring and control
- test analysis
- test design
- test implementation
- test execution
- test completion

En este syllabus, la gestión se concentra especialmente en:

- Test Planning
- Test Monitoring
- Test Control
- Test Completion

---

# 1.1.1 Test Planning

## Definición

Test Planning consiste en determinar cómo se alcanzarán los objetivos de prueba.

Debe considerar:

- contexto del proyecto
- alcance
- objetivos
- test approach
- riesgos
- recursos
- equipo
- herramientas
- ambientes
- datos
- calendario
- entregables
- stakeholders

La planificación debe comenzar lo antes posible y actualizarse conforme evoluciona el proyecto.

## Actividades principales

### Comprender el contexto

Se debe entender:

- estrategia organizacional
- políticas de prueba
- alcance
- test item
- restricciones
- stakeholders

### Identificar y analizar riesgos del producto

Los riesgos influyen en:

- prioridades
- técnicas
- esfuerzo
- cobertura
- secuencia de ejecución

### Definir tratamiento de riesgos

Las respuestas al riesgo pueden incluir:

- prevención
- mitigación
- corrección
- aceptación
- transferencia
- planes de contingencia

### Definir el test approach

Debe tomar en cuenta:

- estrategia organizacional
- regulaciones
- restricciones
- riesgos
- SDLC
- test levels
- test types
- técnicas

### Estimar y asignar recursos

Pueden incluir:

- personas
- tiempo
- herramientas
- ambientes
- infraestructura
- datos

### Establecer el test plan

El plan debe estar acordado con los stakeholders relevantes.

---

# 1.1.2 Test Monitoring

## Definición

Test Monitoring consiste en recopilar y analizar información sobre el estado y progreso del testing.

Ejemplos:

- pruebas ejecutadas
- passed
- failed
- blocked
- pendientes
- cobertura
- defectos
- esfuerzo consumido
- avance respecto al plan
- evolución de riesgos

## Ejemplo

Plan:

- 100 casos

Estado actual:

- 60 ejecutados
- 45 Passed
- 10 Failed
- 5 Blocked

Esto es **Test Monitoring**.

---

# 1.1.3 Test Control

## Definición

Test Control utiliza la información obtenida mediante Monitoring para tomar acciones que mantengan el testing alineado con los objetivos y el plan.

Ejemplos:

- repriorizar pruebas
- cambiar secuencia de ejecución
- reasignar recursos
- modificar el calendario
- revisar entry criteria
- revisar exit criteria
- tratar riesgos nuevos
- ajustar el plan
- escalar impedimentos

## Diferencia clave

**Monitoring = saber qué está pasando.**

**Control = decidir qué hacer con esa información.**

---

# 1.1.4 Test Completion

Test Completion ocurre normalmente en hitos como:

- fin de una iteración
- fin de un test level
- release
- cierre de proyecto

Incluye:

- crear el Test Completion Report
- aprobar y comunicar el cierre
- archivar testware
- entregar testware reutilizable
- comunicar defectos conocidos
- restaurar o limpiar ambientes
- documentar lessons learned
- identificar mejoras de proceso

## Idea clave

Finalizar la ejecución no equivale por sí solo a completar el proceso de testing.

---

# 1.2 Context of Testing

El Test Manager debe adaptar el testing al contexto.

Factores relevantes:

- tipo de producto
- industria
- regulación
- riesgos
- organización
- stakeholders
- SDLC
- test levels
- test types
- herramientas
- capacidades del equipo
- restricciones

---

# 1.2.1 Stakeholders

Los stakeholders tienen intereses diferentes respecto a la calidad y al testing.

Ejemplos:

- Developers
- Development Leads
- Development Managers
- Testers
- Test Leads
- Test Managers
- Project Managers
- Product Owners
- Business Users
- Operations
- Customers
- Users

## Ejemplos de intereses

### Developers
Necesitan información para corregir defectos y validar componentes.

### Testers
Necesitan requisitos, riesgos, datos, ambientes y criterios claros.

### Product Owners / Business
Necesitan información para decidir si el producto cumple necesidades y riesgos aceptables.

### Operations
Se interesa por readiness, estabilidad y comportamiento en producción.

### Customers / Users
Se interesan por utilidad, calidad y cumplimiento de necesidades.

---

# 1.2.2 Stakeholder Matrix

La matriz considera:

- influencia
- interés

| Tipo | Influencia | Interés |
|---|---|---|
| Promoters | Alta | Alta |
| Latents | Alta | Baja |
| Defenders | Baja | Alta |
| Apathetics | Baja | Baja |

## Promoters

Stakeholders muy relevantes para estrategia y decisiones.

## Latents

Tienen alto poder, aunque su interés cotidiano sea menor.

## Defenders

Tienen alto interés y pueden aportar feedback útil.

## Apathetics

Tienen bajo interés e influencia, pero pueden requerir comunicación puntual.

---

# 1.2.3 Hybrid Software Development

Un modelo híbrido combina elementos de distintos SDLC.

Puede aparecer por:

- transición hacia Agile
- regulación
- necesidades organizacionales
- partes del proyecto con distintos niveles de riesgo
- coexistencia de equipos con modelos distintos

En un contexto híbrido se requiere:

- flexibilidad
- colaboración
- comunicación
- coordinación entre equipos
- comprensión de los distintos modelos
- seguimiento de pruebas entre sprints y fases tradicionales

---

# 1.2.4 Sequential vs Iterative

| Aspecto | Sequential | Iterative / Agile |
|---|---|---|
| Estimación | Detallada desde etapas tempranas | Iterativa |
| Testware | Más formal y extenso | Más ligero |
| Roles | Test Manager más diferenciado | Roles integrados |
| Tools | Gestión por fases | CI/CD y automation importantes |
| Testing | Fases planificadas | Integrado en iteraciones |
| Automation | Estratégica | Desde etapas tempranas |
| Reporting | Por hitos | Continuo |
| Metrics | Métricas tradicionales | Tradicionales + métricas Agile |

---

# 1.2.5 Test Levels

El Test Manager debe adaptar la gestión a cada nivel.

## Component Testing

- definir alcance
- definir objetivos
- definir completion criteria
- coordinar con desarrollo

## Component Integration Testing

- definir secuencias de integración
- coordinar combinaciones
- monitorear progreso

## System Integration Testing

- alinear alcance con riesgos
- monitorear resultados
- gestionar issues

## System Testing

- adaptar planificación al SDLC
- asignar recursos
- seleccionar herramientas
- programar ejecución

## Acceptance Testing

- colaborar con stakeholders
- validar acceptance criteria
- coordinar UAT
- facilitar product sign-off

---

# 1.2.6 Test Types

## Functional Testing

Foco en:

- requisitos funcionales
- cobertura funcional
- progreso
- recursos

## Non-Functional Testing

Foco en características como:

- performance
- security
- usability
- reliability

## Black-Box Testing

Foco en:

- escenarios de usuario
- requisitos
- comportamiento externo

## White-Box Testing

Foco en:

- estructura interna
- lógica
- code coverage

---

# 1.3 Risk-Based Testing

## Definición

Risk-Based Testing utiliza los riesgos para dirigir el testing.

Permite decidir:

- qué probar
- qué probar primero
- cuánto probar
- con qué rigor
- con qué técnicas
- durante cuánto tiempo

## Principio

A mayor nivel de riesgo:

- antes debe iniciar el testing
- más intenso debe ser
- más prolongado puede ser
- mayor rigor debe aplicarse

---

# 1.3.1 Estructura del Risk Management

El syllabus organiza el proceso en:

## Risk Analysis

Incluye:

- Risk Identification
- Risk Assessment

## Risk Control

Incluye:

- Risk Monitoring
- Risk Mitigation

Flujo conceptual:

**Identification → Assessment → Mitigation + Monitoring**

Estas actividades pueden solaparse.

---

# 1.3.2 Product Risk vs Project Risk

## Product Risk

Situación potencial donde puede existir un problema de calidad en el producto.

Ejemplos:

- cálculo financiero incorrecto
- vulnerabilidad
- transferencia duplicada
- pérdida de información
- integración incorrecta

## Project Risk

Riesgo que afecta la ejecución del proyecto.

Ejemplos:

- ambiente no disponible
- falta de personal
- presión de tiempo
- dependencia externa
- datos incompletos
- problemas de coordinación

## Importante

Risk-Based Testing se enfoca principalmente en **quality risks / product risks**.

---

# 1.3.3 Risk Identification

Técnicas mencionadas en el syllabus:

- Expert Interviews
- Independent Assessments
- Retrospectives
- Risk Workshops
- Brainstorming
- Checklists
- Past Experience

## Idea importante

La identificación debe involucrar una muestra amplia de stakeholders relevantes.

Omitir stakeholders importantes puede provocar que riesgos significativos no sean identificados.

---

# 1.3.4 Quality Risk Assessment

El risk level se determina principalmente mediante:

- Risk Likelihood
- Risk Impact

## Factores que influyen en Likelihood

Ejemplos:

- complejidad técnica
- herramientas
- arquitectura
- madurez organizacional
- skills
- disponibilidad del personal
- conflictos
- proveedores
- equipos distribuidos
- liderazgo débil
- presión de tiempo
- presión de presupuesto
- falta de QA temprano
- alta tasa de cambios

## Factores que influyen en Impact

Ejemplos:

- frecuencia de uso
- criticidad de la funcionalidad
- criticidad del objetivo de negocio
- daño reputacional
- pérdida de ingresos
- pérdidas financieras
- impacto ambiental o social
- sanciones legales
- problemas de integración
- falta de workaround
- necesidades de seguridad

## Riesgo cuantitativo

Si existen suficientes datos estadísticos válidos, el riesgo puede evaluarse cuantitativamente.

Ejemplo conceptual:

`Risk Level = Likelihood × Impact`

## Riesgo cualitativo

Es común utilizar escalas:

- Very High
- High
- Medium
- Low
- Very Low

y combinarlas mediante una matriz de riesgo.

---

# 1.3.5 Risk Mitigation

El esfuerzo de testing debe ser proporcional al riesgo.

Para riesgos altos:

- probar antes
- usar técnicas más rigurosas
- dedicar mayor esfuerzo
- utilizar personal más capacitado
- considerar más test levels
- considerar más test types
- combinar static y dynamic testing cuando corresponda

Para riesgos bajos:

- puede iniciar más tarde
- puede usar técnicas menos rigurosas

## Otras respuestas al riesgo

Además del testing pueden existir:

- contingency plan
- transferir riesgo
- aceptar riesgo

---

# 1.3.6 Heavyweight vs Lightweight Risk-Based Testing

## Heavyweight

Características:

- formal
- procedimientos definidos
- documentación detallada
- grupos amplios de stakeholders
- análisis más profundo
- fórmulas o factores detallados

Ejemplos mencionados:

- Hazard Analysis
- Cost of Exposure
- FMEA
- Fault Tree Analysis

Se usa frecuentemente en sistemas safety-critical.

## Lightweight

Características:

- menor esfuerzo
- menor formalidad
- menos stakeholders
- escalas ordinales
- focus en likelihood + impact

Ejemplos mencionados:

- SST
- PRAM
- PRISMA

Se utiliza con frecuencia en aplicaciones no safety-critical.

---

# 1.3.7 Success Metrics de Risk-Based Testing

Preguntas útiles para evaluar si funcionó:

- ¿Participaron stakeholders relevantes?
- ¿La participación fue apropiada?
- ¿Se resolvieron incidentes críticos escapados a producción?
- ¿Los defectos de alta prioridad fueron encontrados temprano?
- ¿Se pudieron explicar resultados en términos de riesgo?
- ¿Las pruebas omitidas tenían menor riesgo que las ejecutadas?

---

# 1.4 Project Test Strategy

La estrategia de pruebas debe alinearse con:

- organizational test strategy
- contexto del proyecto
- riesgos
- stakeholders
- recursos
- restricciones
- SDLC

---

# 1.4.1 Test Strategy vs Test Approach

## Test Strategy

Describe cómo se realizará el testing para alcanzar los objetivos bajo determinadas circunstancias.

## Test Approach

Describe cómo se implementan las tareas de testing.

Puede incluir:

- test levels
- test types
- técnicas
- static testing
- dynamic testing
- scripted testing
- manual testing
- automatización

## Resumen

**Strategy = dirección general.**

**Approach = implementación concreta.**

---

# 1.4.2 Test Objectives

Los objetivos deben ser medibles y coherentes con:

- riesgos
- contexto
- stakeholders
- test scope
- recursos
- ambientes
- herramientas

---

# 1.4.3 SMART

Los objetivos deben seguir:

- **Specific**
- **Measurable**
- **Achievable**
- **Relevant**
- **Time-bound**

## Ejemplo

Objetivo poco útil:

> Mejorar la calidad.

Objetivo medible:

> Ejecutar todos los tests definidos para riesgos de nivel alto antes del cierre de la iteración y cumplir los exit criteria establecidos.

---

# 1.4.4 Exit Criteria

Permiten decidir cuándo una actividad de prueba puede finalizar.

Ejemplos:

- cobertura alcanzada
- riesgos cubiertos
- porcentaje de pruebas ejecutadas
- defectos críticos resueltos
- objetivos cumplidos

Deben relacionarse con los test objectives.

---

# 1.5 Improving the Test Process

El objetivo es mejorar:

- efectividad
- eficiencia
- calidad del proceso
- comunicación
- aprendizaje

La mejora puede iniciarse por:

- resultados insatisfactorios
- defectos inesperados
- cambios de contexto
- benchmarks
- problemas de comunicación

---

# 1.5.1 IDEAL

IDEAL significa:

1. **Initiating**
2. **Diagnosing**
3. **Establishing**
4. **Acting**
5. **Learning**

## Initiating

Definir:

- objetivos
- alcance
- stakeholders

## Diagnosing

Evaluar la situación actual e identificar oportunidades.

## Establishing

Definir el plan de mejora.

## Acting

Implementar las mejoras.

## Learning

Evaluar resultados y aprender.

---

# 1.5.2 Model-Based Test Process Improvement

Puede utilizar modelos de mejora existentes.

El syllabus menciona:

- TMMi
- TPI NEXT

Estos modelos permiten comparar el estado actual del proceso contra un modelo de referencia y definir mejoras.

---

# 1.5.3 Analytical-Based Improvement

Parte del análisis de información real del proyecto.

Puede utilizar:

- métricas
- problemas
- causas
- defectos
- tendencias

para identificar oportunidades concretas.

---

# 1.5.4 Retrospectives

Las retrospectivas permiten:

- analizar qué funcionó
- identificar problemas
- encontrar causas
- definir acciones
- mejorar el siguiente ciclo

## Ejemplo

Problema:

30% de las pruebas se bloquearon por datos.

Acción:

Preparar datasets antes de la siguiente iteración.

---

# 1.6 Test Tools

Las herramientas deben seleccionarse según contexto y necesidad.

No deben introducirse únicamente por popularidad.

---

# 1.6.1 Good Practices for Tool Introduction

Considerar:

- necesidad real
- objetivos
- piloto
- capacitación
- soporte
- integración
- riesgos
- costos
- beneficios

---

# 1.6.2 Technical and Business Aspects

## Aspectos técnicos

- compatibilidad
- tecnología
- integración
- infraestructura
- mantenimiento
- interoperabilidad

## Aspectos de negocio

- costo
- beneficios
- ROI
- licencias
- capacitación
- vendor
- sostenibilidad

---

# 1.6.3 Tool Selection

La selección debe analizar:

- riesgos
- costos
- beneficios
- contexto
- skills
- mantenimiento
- integración
- proceso de adopción

---

# 1.6.4 Tool Lifecycle

Incluye etapas como:

- adquisición / introducción
- uso
- mantenimiento
- evolución
- retiro

## Evolution

La herramienta puede necesitar cambios por:

- nuevas necesidades
- cambios del entorno
- vendor
- tecnología

## Retirement

Debe planificarse:

- reemplazo
- conservación de datos
- migración
- archivo

---

# 1.6.5 Tool Metrics

Ejemplos:

## Test Management Tools

- planned tests
- executed tests
- passed
- failed
- skipped
- blocked

## Requirements Tools

- requirements coverage
- traceability

## Defect Tools

- severity
- priority
- status
- defect density
- defect lead time

## Static Analysis

- code complexity

## Performance Tools

- response time
- failure rate

## Coverage Tools

- code coverage

---

# 2. Managing the Product

Este capítulo cubre:

- Test Metrics
- Monitoring
- Control
- Completion
- Reporting
- Test Estimation
- Defect Management

---

# 2.1 Test Metrics

## Objetivo

Las métricas permiten determinar si los test objectives están siendo alcanzados.

Cada métrica debe:

- definirse
- medirse
- monitorearse
- reportarse

---

# 2.1.1 Categorías de métricas

## Project Metrics

Miden el progreso respecto a criterios del proyecto.

Ejemplos:

- porcentaje ejecutado
- porcentaje passed
- porcentaje failed

## Product Metrics

Miden atributos del producto.

Ejemplos:

- calidad observada
- cobertura
- comportamiento del producto

## Process Metrics

Miden:

- capacidad del proceso
- efectividad
- eficiencia

---

# 2.1.2 Métricas de Monitoring / Control / Completion

Ejemplos mencionados:

| Métrica | Monitoring / Control | Completion |
|---|---|---|
| Requirements coverage | Sí | Sí |
| Product risk coverage | Sí | Sí |
| Code coverage | Sí | No |
| Actual vs planned estimation | Sí | No |
| Executed test cases by status | Sí | Sí |
| Resolved vs accumulated defects | Sí | No |
| Actual vs planned automated tests | No | Sí |
| Actual vs planned cost | No | Sí |

## Idea

Monitoring / Control se concentra principalmente en progreso.

Completion se concentra principalmente en cumplimiento de objetivos.

---

# 2.1.3 Test Reporting

Los reportes deben ayudar a stakeholders a tomar decisiones.

No basta con mostrar datos.

Hay que comunicar:

- progreso
- riesgos
- desviaciones
- defectos relevantes
- cumplimiento de objetivos
- exit criteria
- implicaciones

## Ejemplo

Reporte poco útil:

> 420 Passed, 18 Failed.

Reporte más útil:

> El 95% del alcance fue ejecutado. Permanecen 18 fallos; algunos afectan funcionalidades de riesgo alto y deben evaluarse antes del cierre.

---

# 2.2 Test Estimation

La estimación debe considerar todas las actividades necesarias para testing.

No solo ejecución.

---

# 2.2.1 Factores que influyen en el esfuerzo

Ejemplos:

- complejidad
- riesgos
- test basis
- calidad de requisitos
- skills
- experiencia
- automatización
- herramientas
- ambientes
- datos
- dependencias
- SDLC
- test levels
- test types
- restricciones de tiempo

---

# 2.2.2 Selección de técnica

Factores relevantes:

- complejidad
- disponibilidad de datos históricos
- disponibilidad de expertos
- conocimiento de modelos
- tiempo disponible
- SDLC

## Regla conceptual del syllabus

Si la complejidad es baja, pueden utilizarse técnicas basadas en métricas.

Si la complejidad es alta, pueden utilizarse técnicas basadas en expertos.

En un modelo secuencial puede ser apropiado Wideband Delphi.

En Agile puede ser apropiado Planning Poker.

---

# 2.2.3 Three-Point Estimation

Utiliza:

- Optimistic
- Most Likely
- Pessimistic

Permite calcular:

- expected value
- standard deviation

Su objetivo es representar incertidumbre.

---

# 2.2.4 Ratio-Based Estimation

Utiliza relaciones derivadas de información histórica.

Necesita datos anteriores confiables.

---

# 2.2.5 Extrapolation

Utiliza tendencias históricas para proyectar esfuerzo futuro.

También depende de datos históricos.

---

# 2.2.6 Wideband Delphi

Técnica basada en expertos.

Proceso general:

1. expertos estiman
2. se comparan resultados
3. se discuten diferencias
4. se revisan estimaciones
5. se busca convergencia

---

# 2.2.7 Planning Poker

Técnica basada en estimación del equipo.

Frecuente en Agile.

Proceso conceptual:

1. entender el trabajo
2. estimar individualmente
3. revelar estimaciones
4. discutir diferencias
5. volver a estimar

---

# 2.3 Defect Management

## Objetivo

Gestionar defectos permite:

- conocer el estado del producto
- monitorear calidad
- priorizar correcciones
- controlar trabajo
- obtener información para mejora

---

# 2.3.1 Defect Lifecycle

La detección temprana reduce el costo total de calidad.

## Static Testing

Busca defectos directamente en work products.

Ejemplos:

- requirements
- design
- code

## Dynamic Testing

El defecto puede manifestarse como un failure.

La diferencia entre actual y expected constituye una anomalía que debe investigarse.

## Idea importante

Un test fallido no necesariamente implica automáticamente un defecto del producto.

También puede existir:

- problema de automatización
- error de datos
- misunderstanding
- problema de ambiente

---

# 2.3.2 Cross-Functional Defect Management

Defect Management requiere:

- buena comunicación
- defect workflow
- herramientas
- roles claros
- coordinación entre stakeholders

La herramienta no sustituye la comunicación.

La reunión de defectos tampoco sustituye una buena herramienta.

Ambas cosas se complementan.

---

# 2.3.3 Defect Management en Agile

Puede ser menos formal.

No todos los defectos requieren necesariamente un reporte formal inmediato.

Sí se recomienda crear defect reports cuando:

- bloquean trabajo del sprint
- no pueden resolverse en la misma iteración
- requieren otros equipos
- requieren proveedores
- se necesita seguimiento formal

Los defectos no resueltos pueden añadirse al Product Backlog.

El nivel de formalidad depende de:

- co-location
- time zones
- cantidad de equipos
- madurez
- tamaño
- riesgos
- regulación
- contratos

---

# 2.3.4 Hybrid Defect Management

Retos comunes:

- diferentes herramientas
- diferentes workflows
- distinta cadencia
- distinta priorización
- falta de transparencia
- alineación de planes

Buenas prácticas:

- sincronizar herramientas
- acordar defect attributes
- involucrar Product Owners
- compartir planes
- coordinar prioridades

---

# 2.3.5 Defect Report Information

La información debe ser suficiente para:

- gestionar el lifecycle
- evaluar calidad
- evaluar progreso
- evaluar un increment
- analizar capacidad del proceso

## Información mínima importante

- defect title
- short summary
- detailed description
- steps to reproduce
- severity
- priority

## Información adicional habitual

- unique ID
- creation date/time
- reporter
- project
- SDLC phase
- current state
- owner
- change history
- references

## Principio

No agregar campos innecesarios.

Cada campo aumenta esfuerzo y puede generar confusión.

Recopilar únicamente información que tenga utilidad real.

---

# 2.3.6 Defect Data for Process Improvement

Los defectos pueden utilizarse para mejorar procesos.

Ejemplos:

- root cause → prevenir defectos similares
- defect location → detectar clusters
- reopened defects → evaluar calidad del debugging
- duplicate / rejected → evaluar calidad de reportes

No registrar defectos reduce la visibilidad y dificulta la mejora basada en datos.

---

# 3. Managing the Team

Este capítulo cubre:

- competencias
- skills
- skill assessment
- skill development
- management skills
- motivation
- stakeholder relationships
- cost of quality
- cost-benefit

---

# 3.1 Four Areas of Competence

El syllabus divide las competencias en cuatro grupos.

---

# 3.1.1 Professional Competence

Capacidad para realizar tareas especializadas.

Ejemplos:

- test techniques
- tecnología
- dominio de negocio
- project management
- test management

---

# 3.1.2 Methodological Competence

Capacidad para resolver tareas complejas o nuevas.

Ejemplos:

- analytical skills
- conceptual skills
- judgment

---

# 3.1.3 Social Competence

Capacidad para trabajar con otras personas.

Ejemplos:

- communication
- cooperation
- conflict management
- teamwork
- adaptability
- assertiveness

---

# 3.1.4 Personal Competence

Capacidad y disposición para desarrollarse y gestionar el propio desempeño.

Ejemplos:

- self-management
- responsibility
- ability to receive criticism
- reliability
- resilience
- confidence
- discipline
- openness to change
- willingness to learn
- ability to delegate

---

# 3.2 Required Skills

Las necesidades dependen del contexto.

Ejemplos:

## Test Planning

Requiere:

- conceptual knowledge
- strategy development

## Monitoring and Control

Requiere:

- project management skills

## Test Analysis

Requiere:

- analytical skills
- risk analysis

La composición del equipo debe cubrir los skills necesarios.

Si faltan capacidades, puede utilizarse apoyo externo.

---

# 3.3 Skill Development

Las capacidades pueden desarrollarse mediante:

- experiencia
- educación
- training
- acompañamiento
- aprendizaje práctico

El objetivo es cerrar gaps entre:

**skills requeridos vs skills disponibles**

---

# 3.4 Management Skills

La persona responsable de gestión necesita combinar:

- conocimiento técnico
- capacidad de planificación
- comunicación
- liderazgo
- coordinación
- resolución de conflictos
- toma de decisiones
- gestión de stakeholders

---

# 3.5 Motivation — Herzberg

El syllabus utiliza la Motivation-Hygiene Theory.

---

# 3.5.1 Motivators

Pueden generar crecimiento y satisfacción.

Ejemplos:

- reconocimiento
- apreciación
- mayor responsabilidad
- autonomía
- tareas interesantes
- tareas desafiantes
- avance profesional
- desarrollo

---

# 3.5.2 Hygiene Factors

Su existencia no garantiza mayor satisfacción.

Su ausencia puede desmotivar.

Ejemplos:

- remuneración apropiada
- buenas políticas de personal
- management style adecuado
- objetivos realistas
- condiciones de trabajo
- especificaciones claras
- test objects maduros
- ambientes estables
- seguridad laboral
- buenas relaciones interpersonales

## Idea clave

La gestión debe:

- reducir factores desmotivadores
- fortalecer factores motivadores

---

# 3.6 Cost of Quality

El Cost of Quality agrupa los costos relacionados con calidad y defectos.

Existen cuatro categorías.

---

# 3.6.1 Defect Prevention Costs

Costos proactivos destinados a prevenir problemas.

Ejemplos:

- training
- reviews tempranos
- comunicación
- prácticas para mejorar calidad

---

# 3.6.2 Appraisal Costs

Costos asociados con detectar defectos.

Ejemplos:

- static testing
- dynamic testing
- reviews
- ejecución de pruebas

---

# 3.6.3 Internal Failure Costs

Costos reactivos antes de liberar el producto.

Ejemplos:

- corregir defectos
- re-testing
- workarounds internos
- retrabajo

---

# 3.6.4 External Failure Costs

Costos reactivos después de la entrega.

Ejemplos:

- pérdida de ingresos
- pérdida de activos
- impacto en salud o seguridad
- daño ambiental
- costos legales
- correcciones en producción
- despliegues correctivos

---

# 3.7 Cost-Benefit Relationship of Testing

El objetivo no es maximizar el testing sin límite.

El Test Manager debe ayudar a encontrar un equilibrio entre:

- costo de testing
- beneficio esperado
- riesgo
- costo de fallos

## Idea central

**Muy poco testing** puede producir baja calidad y altos costos de fallos.

**Demasiado testing** puede generar retrasos y costos mayores que el beneficio.

El objetivo es encontrar un nivel apropiado de testing.

---

# 4. Comparaciones clave

## Monitoring vs Control

| Monitoring | Control |
|---|---|
| Recopila información | Toma acciones |
| Mide progreso | Corrige desviaciones |
| Evalúa estado | Ajusta el plan |

---

## Product Risk vs Project Risk

| Product Risk | Project Risk |
|---|---|
| Afecta calidad del producto | Afecta ejecución del proyecto |
| Error funcional | Falta de recursos |
| Seguridad | Ambiente no disponible |
| Datos incorrectos | Retraso de proveedor |

---

## Test Strategy vs Test Approach

| Strategy | Approach |
|---|---|
| Dirección general | Implementación |
| Define cómo alcanzar objetivos | Define cómo ejecutar las tareas |

---

## Prevention vs Appraisal

| Prevention | Appraisal |
|---|---|
| Evitar defectos | Detectar defectos |
| Training | Testing |
| Reviews tempranos | Inspecciones |

---

## Internal vs External Failure

| Internal Failure | External Failure |
|---|---|
| Antes de entrega | Después de entrega |
| Defecto encontrado en QA | Defecto encontrado en producción |

---

## Heavyweight vs Lightweight RBT

| Heavyweight | Lightweight |
|---|---|
| Formal | Menos formal |
| Documentación detallada | Documentación reducida |
| Más stakeholders | Menos stakeholders |
| Mayor esfuerzo | Menor esfuerzo |
| Safety-critical | Frecuente en contextos menos críticos |

---

# 5. Flujos para mostrar visualmente

## Test Management

**Planning → Monitoring → Control → Completion**

## Risk Management

**Risk Identification → Risk Assessment → Risk Mitigation / Risk Monitoring**

## IDEAL

**Initiating → Diagnosing → Establishing → Acting → Learning**

## Defect Lifecycle conceptual

**Detect → Report → Analyze → Prioritize → Fix → Retest → Close**

---

# 6. Ejemplos prácticos

## Ejemplo 1 — Monitoring vs Control

Se planificaron 100 pruebas.

Estado:

- 60 ejecutadas
- 45 Passed
- 10 Failed
- 5 Blocked

Esto es **Monitoring**.

El Test Manager detecta que los 5 bloqueos se deben a un ambiente inestable y decide:

- escalar el incidente
- ejecutar primero las pruebas no dependientes
- reasignar temporalmente recursos

Esto es **Control**.

---

## Ejemplo 2 — Product Risk

Una API bancaria puede procesar dos veces una transferencia.

Likelihood: Media

Impact: Crítico

El riesgo debe recibir alta atención porque el impacto es significativo.

Acciones posibles:

- probar temprano
- aumentar cobertura
- ejecutar pruebas de concurrencia
- usar pruebas negativas
- automatizar regresión crítica

---

## Ejemplo 3 — Project Risk

El ambiente QA estará fuera de servicio durante dos días.

Esto afecta la ejecución del proyecto, no directamente la calidad del producto.

Es un **Project Risk**.

---

## Ejemplo 4 — Metrics

Reporte:

> 95% de pruebas Passed.

Por sí solo no basta.

Si el 5% fallido afecta funcionalidades de riesgo alto, el producto puede no estar listo.

Las métricas deben interpretarse junto con:

- riesgos
- severidad
- alcance
- cobertura
- exit criteria

---

## Ejemplo 5 — Defect Management

Durante una prueba se obtiene HTTP 500.

Antes de concluir que existe un defecto del producto deben descartarse causas como:

- datos incorrectos
- error de ambiente
- script de automatización
- misunderstanding del requisito

Después se crea el defect report si corresponde.

---

## Ejemplo 6 — Cost of Quality

### Prevention
Review temprano de requisitos.

### Appraisal
Ejecución de pruebas.

### Internal Failure
Bug encontrado y corregido en QA.

### External Failure
Bug encontrado por un cliente en producción.

---

# 7. Conceptos para repaso rápido

## Planning
Definir cómo alcanzar los objetivos de testing.

## Monitoring
Medir y observar el progreso.

## Control
Actuar ante desviaciones.

## Completion
Cerrar, archivar, comunicar y aprender.

## Risk-Based Testing
Priorizar testing según riesgo.

## Likelihood
Probabilidad de ocurrencia.

## Impact
Consecuencia si el riesgo ocurre.

## Test Strategy
Dirección general del testing.

## Test Approach
Forma concreta de implementar el testing.

## SMART
Método para definir objetivos medibles.

## IDEAL
Modelo de mejora continua.

## Metrics
Indicadores para evaluar progreso y objetivos.

## Test Estimation
Estimación del esfuerzo requerido para testing.

## Defect Management
Proceso para registrar, analizar, priorizar, corregir y cerrar anomalías o defectos.

## Professional Competence
Skills especializados.

## Methodological Competence
Capacidad analítica y conceptual.

## Social Competence
Capacidad de comunicación y colaboración.

## Personal Competence
Autogestión y desarrollo personal.

## Motivators
Factores que pueden generar satisfacción.

## Hygiene Factors
Factores cuya ausencia puede desmotivar.

## Prevention Cost
Costo de prevenir defectos.

## Appraisal Cost
Costo de detectar defectos.

## Internal Failure Cost
Costo de defectos antes de entrega.

## External Failure Cost
Costo de defectos después de entrega.

---

# 8. Prioridades de estudio

## Muy importante

- Planning vs Monitoring vs Control vs Completion
- Risk-Based Testing
- Likelihood + Impact
- Product Risk vs Project Risk
- Stakeholders
- Test Strategy vs Test Approach
- SMART
- IDEAL
- Metrics
- Estimation techniques
- Defect Management
- Cost of Quality

## Importante

- Hybrid SDLC
- Test Levels
- Test Types
- Tool Selection
- Tool Lifecycle
- Four Areas of Competence
- Motivators vs Hygiene Factors
- Agile / Hybrid Defect Management

---

# 9. Learning Objectives resumidos

## Chapter 1

Debes poder:

- resumir Planning, Monitoring, Control y Completion
- comparar intereses de stakeholders
- explicar testing en modelos híbridos
- comparar actividades según SDLC
- comparar test levels y test types
- analizar actividades de gestión para un proyecto
- explicar Risk-Based Testing
- identificar riesgos
- evaluar likelihood e impact
- seleccionar mitigaciones
- diferenciar Heavyweight y Lightweight RBT
- seleccionar un Test Approach
- definir objetivos SMART
- aplicar IDEAL
- participar en retrospectives
- analizar selección de herramientas

## Chapter 2

Debes poder:

- elegir métricas apropiadas
- usar métricas para controlar progreso
- analizar resultados y preparar reports
- explicar factores de estimación
- seleccionar técnicas de estimación
- implementar defect workflow
- explicar Defect Management en Agile
- explicar retos en Hybrid
- definir información útil en defect reports
- usar estadísticas de defectos para process improvement

## Chapter 3

Debes poder:

- identificar skills en las cuatro áreas de competencia
- analizar skills requeridos por contexto
- evaluar gaps
- desarrollar skills
- explicar management skills
- diferenciar motivators y hygiene factors
- clasificar Cost of Quality
- aplicar una evaluación costo-beneficio del testing

---

# 10. Mensaje final del resumen

Un Test Manager no se limita a coordinar ejecución.

Debe ser capaz de:

- entender el contexto
- identificar riesgos
- definir estrategia
- planificar
- medir
- controlar
- comunicar
- estimar
- gestionar defectos
- mejorar procesos
- seleccionar herramientas
- desarrollar al equipo
- demostrar el valor del testing

La idea central de este nivel es pasar de:

**“ejecutar pruebas”**

a:

**“gestionar el testing para tomar mejores decisiones sobre calidad, riesgo y negocio”.**
