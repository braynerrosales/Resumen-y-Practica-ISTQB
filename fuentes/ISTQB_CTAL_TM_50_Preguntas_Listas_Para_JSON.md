# Banco de 50 preguntas — ISTQB CTAL Test Management v3.0

> **Uso previsto:** Este archivo ya contiene las 50 preguntas.  
> Si se entrega a Claude u otro modelo, su tarea debe ser únicamente **convertirlas a JSON sin modificar el contenido, la respuesta correcta ni la explicación**.

---

## Pregunta 1
**Capítulo:** 1  
**Tema:** Test Planning  
**Nivel:** K3  
**Dificultad:** medium-high  

Un proyecto bancario inicia una nueva integración con un tercero. El Test Manager conoce los objetivos generales, pero todavía no se han confirmado los ambientes, los datos ni la disponibilidad del proveedor. ¿Cuál es la acción más apropiada durante Test Planning?

A. Esperar hasta que todos los detalles estén definidos antes de iniciar cualquier planificación.  
B. Elaborar una planificación inicial con los supuestos conocidos y actualizarla conforme se confirme el contexto.  
C. Definir únicamente los casos de prueba y dejar los recursos para el final.  
D. Iniciar ejecución exploratoria para obtener información antes de planificar.

**Respuesta correcta:** B

**Explicación:** La planificación debe iniciar temprano y ajustarse de forma iterativa. No es necesario esperar a que todos los detalles estén cerrados para comenzar a planificar.

---

## Pregunta 2
**Capítulo:** 1  
**Tema:** Test Monitoring vs Test Control  
**Nivel:** K3  
**Dificultad:** medium-high  

Durante una iteración se observa que 18 de 60 pruebas están bloqueadas por un ambiente inestable. El Test Manager registra el dato en el reporte diario y posteriormente decide mover temporalmente a dos QA hacia pruebas API no dependientes del ambiente afectado. ¿Qué representa la segunda acción?

A. Test Monitoring  
B. Test Analysis  
C. Test Control  
D. Test Completion

**Respuesta correcta:** C

**Explicación:** Registrar el bloqueo corresponde a Monitoring; reasignar recursos para responder a la desviación corresponde a Control.

---

## Pregunta 3
**Capítulo:** 1  
**Tema:** Test Completion  
**Nivel:** K2  
**Dificultad:** medium  

Una release terminó con todos los casos críticos ejecutados, pero existen defectos medios aceptados para producción. ¿Cuál actividad forma parte de Test Completion?

A. Eliminar los defectos aceptados para evitar que afecten las métricas.  
B. Reiniciar la ejecución de todos los casos para confirmar el cierre.  
C. Crear un nuevo plan de pruebas completo para la siguiente release.  
D. Comunicar los defectos conocidos, archivar el testware relevante y generar el reporte de cierre.

**Respuesta correcta:** D

**Explicación:** Test Completion incluye reporte final, archivo de testware, handover de información relevante y lessons learned.

---

## Pregunta 4
**Capítulo:** 1  
**Tema:** Stakeholders  
**Nivel:** K4  
**Dificultad:** high  

En un proyecto, el Product Owner revisa diariamente resultados y decide prioridades. Un director de área controla el presupuesto, pero rara vez participa en el detalle operativo. ¿Cómo deberían clasificarse principalmente?

A. Product Owner = Promoter; Director = Latent  
B. Product Owner = Defender; Director = Promoter  
C. Product Owner = Latent; Director = Apathetic  
D. Product Owner = Promoter; Director = Defender

**Respuesta correcta:** A

**Explicación:** El Product Owner combina alto interés y alta influencia. El director tiene alta influencia pero bajo interés operativo, por lo que encaja como Latent.

---

## Pregunta 5
**Capítulo:** 1  
**Tema:** Hybrid Software Development  
**Nivel:** K4  
**Dificultad:** high  

Un banco utiliza planificación secuencial para requisitos regulatorios, pero desarrollo y testing se realizan en sprints. El Test Manager detecta que las evidencias regulatorias se preparan solo al final, generando retrabajo. ¿Cuál es la mejor acción?

A. Eliminar la documentación regulatoria porque el equipo trabaja en Agile.  
B. Tratar las obligaciones regulatorias como parte del enfoque híbrido e integrarlas desde las iteraciones.  
C. Mantener completamente separados ambos modelos para evitar interferencias.  
D. Sustituir Scrum por un modelo totalmente secuencial.

**Respuesta correcta:** B

**Explicación:** En un modelo híbrido, las prácticas deben coordinarse. Las necesidades regulatorias no desaparecen por utilizar Agile y deben integrarse en la gestión del testing.

---

## Pregunta 6
**Capítulo:** 1  
**Tema:** Sequential vs Iterative  
**Nivel:** K2  
**Dificultad:** medium  

¿Cuál combinación describe mejor una diferencia típica entre un modelo secuencial y uno iterativo?

A. Secuencial: testing continuo; Iterativo: testing al final.  
B. Secuencial: sin automatización; Iterativo: solo pruebas automatizadas.  
C. Secuencial: reporting por hitos; Iterativo: reporting más continuo.  
D. Secuencial: sin Test Manager; Iterativo: Test Manager obligatorio.

**Respuesta correcta:** C

**Explicación:** El syllabus contrasta reporting más orientado a hitos en modelos secuenciales con reporting más continuo en modelos iterativos.

---

## Pregunta 7
**Capítulo:** 1  
**Tema:** Test Levels  
**Nivel:** K3  
**Dificultad:** medium-high  

Un producto presenta alto riesgo en la integración con un servicio externo. ¿En qué nivel debería el Test Manager reforzar especialmente alcance, objetivos y seguimiento?

A. System Integration Testing  
B. Solo Component Testing  
C. Solo Acceptance Testing  
D. Únicamente Static Testing

**Respuesta correcta:** A

**Explicación:** System Integration Testing se orienta a validar interacciones entre sistemas y debe alinearse con los riesgos de integración.

---

## Pregunta 8
**Capítulo:** 1  
**Tema:** Test Types  
**Nivel:** K3  
**Dificultad:** medium-high  

Un sistema cumple funcionalmente, pero negocio exige que responda en menos de dos segundos bajo carga. ¿Qué enfoque de gestión corresponde principalmente?

A. White-box testing management  
B. Functional testing management  
C. Black-box testing management  
D. Non-functional testing management

**Respuesta correcta:** D

**Explicación:** Performance es una característica no funcional y requiere criterios, ambientes y recursos específicos.

---

## Pregunta 9
**Capítulo:** 1  
**Tema:** Risk-Based Testing  
**Nivel:** K4  
**Dificultad:** high  

Se identifican tres riesgos:

- R1: error de etiqueta, likelihood alta, impact bajo.
- R2: doble débito, likelihood media, impact crítico.
- R3: lentitud en pantalla secundaria, likelihood media, impact medio.

Hay tiempo para intensificar solo una línea de pruebas. ¿Cuál debería priorizarse?

A. R1, porque tiene mayor likelihood.  
B. R2, porque el nivel de riesgo combina likelihood e impact.  
C. R3, porque tiene likelihood e impact equilibrados.  
D. R1 y R3 por igual, porque ambos ocurren con más frecuencia.

**Respuesta correcta:** B

**Explicación:** El nivel de riesgo depende de likelihood e impact. Un impacto crítico puede justificar mayor prioridad aun con likelihood media.

---

## Pregunta 10
**Capítulo:** 1  
**Tema:** Risk Identification  
**Nivel:** K3  
**Dificultad:** medium-high  

El Test Manager organiza una sesión de identificación de riesgos, pero solo invita a QA y desarrollo. Posteriormente negocio identifica un riesgo crítico de impacto financiero que nadie había considerado. ¿Qué problema se evidencia?

A. Se usó una técnica demasiado formal.  
B. La sesión debió limitarse a riesgos técnicos.  
C. Faltó representación adecuada de stakeholders relevantes.  
D. El riesgo debía descubrirse únicamente durante ejecución.

**Respuesta correcta:** C

**Explicación:** La identificación de riesgos debe involucrar una muestra amplia de stakeholders relevantes para evitar omisiones significativas.

---

## Pregunta 11
**Capítulo:** 1  
**Tema:** Quality Risk Assessment  
**Nivel:** K4  
**Dificultad:** high  

Un equipo intenta asignar valores monetarios exactos al impacto de todos los riesgos, pero no dispone de datos históricos confiables. ¿Qué enfoque es más apropiado?

A. Utilizar una evaluación cualitativa con escalas ordinales de likelihood e impact.  
B. Inventar valores promedio para poder multiplicarlos.  
C. Eliminar el análisis de impacto y usar solo likelihood.  
D. Usar únicamente número de casos de prueba como indicador de riesgo.

**Respuesta correcta:** A

**Explicación:** Cuando no existen datos estadísticos suficientes, el syllabus permite una evaluación cualitativa basada en escalas como High, Medium y Low.

---

## Pregunta 12
**Capítulo:** 1  
**Tema:** Risk Likelihood  
**Nivel:** K2  
**Dificultad:** medium  

¿Cuál factor está más relacionado con la likelihood de un quality risk?

A. Daño reputacional potencial.  
B. Pérdida de ingresos por fallo.  
C. Criticidad del objetivo de negocio.  
D. Alta tasa de cambios en requisitos y personal.

**Respuesta correcta:** D

**Explicación:** La tasa de cambios, la complejidad, la madurez y los skills influyen en likelihood. Daño reputacional y pérdidas se relacionan más con impact.

---

## Pregunta 13
**Capítulo:** 1  
**Tema:** Risk Impact  
**Nivel:** K2  
**Dificultad:** medium  

¿Cuál elemento influye principalmente en el impact de un riesgo?

A. Madurez del equipo.  
B. Daño reputacional y pérdida de ingresos.  
C. Complejidad de la arquitectura.  
D. Disponibilidad del personal.

**Respuesta correcta:** B

**Explicación:** Impact considera consecuencias como reputación, ingresos, sanciones, seguridad y criticidad del negocio.

---

## Pregunta 14
**Capítulo:** 1  
**Tema:** Risk Mitigation  
**Nivel:** K4  
**Dificultad:** high  

Una funcionalidad crítica presenta riesgo alto. El equipo tiene un QA Senior, dos QA Mid y tiempo limitado. ¿Cuál distribución es más coherente con Risk-Based Testing?

A. Asignar al QA Senior a los elementos de mayor riesgo y usar técnicas más rigurosas allí.  
B. Distribuir el esfuerzo exactamente igual entre todas las funcionalidades.  
C. Asignar al QA Senior a los casos más simples para acelerar ejecución.  
D. Postergar la funcionalidad crítica hasta el final para tener más información.

**Respuesta correcta:** A

**Explicación:** Los elementos de mayor riesgo deben recibir mayor rigor, atención temprana y personal con las capacidades más fuertes.

---

## Pregunta 15
**Capítulo:** 1  
**Tema:** Heavyweight vs Lightweight RBT  
**Nivel:** K3  
**Dificultad:** medium-high  

Un sistema de soporte vital requiere análisis formal, documentación detallada y participación amplia de stakeholders. ¿Qué enfoque encaja mejor?

A. Lightweight Risk-Based Testing.  
B. Exploratory Testing como único enfoque.  
C. Heavyweight Risk-Based Testing.  
D. Planning Poker.

**Respuesta correcta:** C

**Explicación:** Los contextos safety-critical suelen requerir técnicas heavyweight, con mayor formalidad y profundidad.

---

## Pregunta 16
**Capítulo:** 1  
**Tema:** Heavyweight RBT Techniques  
**Nivel:** K2  
**Dificultad:** medium  

¿Cuál técnica pertenece a los ejemplos heavyweight mencionados en el syllabus?

A. Planning Poker  
B. Wideband Delphi  
C. PRAM  
D. Failure Mode and Effects Analysis (FMEA)

**Respuesta correcta:** D

**Explicación:** FMEA, Hazard Analysis, Cost of Exposure y Fault Tree Analysis son ejemplos heavyweight.

---

## Pregunta 17
**Capítulo:** 1  
**Tema:** Test Strategy vs Test Approach  
**Nivel:** K3  
**Dificultad:** medium-high  

Una organización define que las pruebas se priorizarán según riesgo. Para un proyecto concreto se decide usar API testing automatizado, regresión UI y pruebas exploratorias. ¿Cuál afirmación es correcta?

A. La priorización por riesgo es parte de la estrategia; las técnicas concretas forman parte del approach.  
B. Ambas decisiones son únicamente Test Completion.  
C. La automatización es siempre estrategia y no approach.  
D. La estrategia solo existe a nivel organizacional.

**Respuesta correcta:** A

**Explicación:** Strategy define la dirección general; Approach concreta niveles, tipos, técnicas y prácticas.

---

## Pregunta 18
**Capítulo:** 1  
**Tema:** SMART Objectives  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Cuál objetivo está mejor formulado según SMART?

A. Probar muy bien las funcionalidades críticas.  
B. Mejorar la calidad antes de producción.  
C. Ejecutar todos los tests asociados a riesgos altos antes del cierre de la iteración y cumplir los exit criteria definidos.  
D. Reducir defectos tanto como sea posible.

**Respuesta correcta:** C

**Explicación:** El objetivo debe ser específico, medible, alcanzable, relevante y limitado en el tiempo.

---

## Pregunta 19
**Capítulo:** 1  
**Tema:** Exit Criteria  
**Nivel:** K4  
**Dificultad:** high  

Un equipo define como exit criterion “calidad aceptable”. Durante el cierre hay discusión porque nadie sabe si se cumplió. ¿Cuál es la mejor corrección?

A. Mantenerlo porque negocio puede decidir subjetivamente.  
B. Reemplazarlo por criterios medibles relacionados con test objectives.  
C. Sustituirlo por “100% de casos passed” en todos los proyectos.  
D. Eliminar exit criteria para evitar ambigüedad.

**Respuesta correcta:** B

**Explicación:** Los exit criteria deben ser medibles y vinculados con los objetivos de prueba; no existe una regla universal como “100% passed”.

---

## Pregunta 20
**Capítulo:** 1  
**Tema:** IDEAL  
**Nivel:** K3  
**Dificultad:** medium-high  

Después de una retrospectiva se concluye que la preparación tardía de datos es la principal causa de bloqueos. El equipo ya diagnosticó el problema y ahora define responsables, fechas y acciones para corregirlo. ¿Qué fase de IDEAL corresponde?

A. Initiating  
B. Diagnosing  
C. Establishing  
D. Learning

**Respuesta correcta:** C

**Explicación:** Establishing consiste en definir el plan concreto de mejora una vez diagnosticada la situación.

---

## Pregunta 21
**Capítulo:** 1  
**Tema:** Retrospectives  
**Nivel:** K4  
**Dificultad:** high  

En tres iteraciones consecutivas se reporta “ambiente inestable”, pero nunca se genera una acción específica. ¿Cuál es la debilidad principal de la retrospectiva?

A. Se está utilizando demasiado pronto.  
B. Se limita a identificar problemas sin convertirlos en acciones de mejora.  
C. Debería enfocarse solo en defectos de código.  
D. Las retrospectivas no deben tratar ambientes.

**Respuesta correcta:** B

**Explicación:** Una retrospectiva útil debe traducir hallazgos en acciones concretas y verificables de mejora.

---

## Pregunta 22
**Capítulo:** 1  
**Tema:** Tool Selection  
**Nivel:** K4  
**Dificultad:** high  

Un equipo propone migrar de Selenium a otra herramienta porque “es más moderna”. ¿Qué debería solicitar primero el Test Manager?

A. Una evaluación de compatibilidad, costos, beneficios, riesgos, skills e integración.  
B. La eliminación inmediata del framework actual.  
C. Aprobar la migración porque las herramientas nuevas siempre reducen mantenimiento.  
D. Comparar únicamente la velocidad de ejecución.

**Respuesta correcta:** A

**Explicación:** La selección de herramientas debe considerar factores técnicos y de negocio, además de riesgos, costos y beneficios.

---

## Pregunta 23
**Capítulo:** 1  
**Tema:** Tool Lifecycle  
**Nivel:** K3  
**Dificultad:** medium-high  

Un vendor anuncia el fin de soporte de una herramienta utilizada por el equipo. ¿Qué aspecto del Tool Lifecycle cobra mayor importancia?

A. Risk Identification del producto.  
B. Retirement y preservación/migración de datos.  
C. Component Testing.  
D. Defect Prevention.

**Respuesta correcta:** B

**Explicación:** En retirement deben considerarse reemplazo, preservación, archivo y migración de datos.

---

## Pregunta 24
**Capítulo:** 1  
**Tema:** Tool Metrics  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Qué herramienta es la más apropiada para proporcionar directamente información como response time y failure rate bajo carga?

A. Requirements management tool  
B. Defect management tool  
C. Static analysis tool  
D. Performance testing tool

**Respuesta correcta:** D

**Explicación:** Las herramientas de performance proporcionan métricas de comportamiento bajo carga, como tiempos de respuesta y tasas de fallo.

---

## Pregunta 25
**Capítulo:** 1  
**Tema:** RBT Success Metrics  
**Nivel:** K4  
**Dificultad:** high  

Al revisar la efectividad de Risk-Based Testing, el equipo detecta que varios tests omitidos correspondían a riesgos más altos que muchos tests ejecutados. ¿Qué indica esto?

A. La priorización basada en riesgo no se aplicó correctamente.  
B. El RBT fue exitoso porque se ejecutaron más tests.  
C. Los riesgos altos deben omitirse para reducir costo.  
D. El problema pertenece únicamente a Test Completion.

**Respuesta correcta:** A

**Explicación:** Una señal esperada de RBT efectivo es que las pruebas omitidas tengan menor riesgo que las ejecutadas.

---

# Capítulo 2 — Managing the Product

## Pregunta 26
**Capítulo:** 2  
**Tema:** Project / Product / Process Metrics  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Cuál combinación clasifica mejor las métricas?

A. % tests executed = Product; defect density = Project; test efficiency = Product.  
B. % tests executed = Project; defect density = Product; test efficiency = Process.  
C. % tests executed = Process; defect density = Project; test efficiency = Product.  
D. Todas son Project Metrics.

**Respuesta correcta:** B

**Explicación:** El progreso corresponde a Project Metrics; atributos del producto a Product Metrics; efectividad/eficiencia a Process Metrics.

---

## Pregunta 27
**Capítulo:** 2  
**Tema:** Metrics Interpretation  
**Nivel:** K4  
**Dificultad:** high  

Un dashboard muestra 96% Passed. El 4% fallido corresponde a dos pruebas de transferencias de riesgo alto. ¿Cuál es la interpretación más apropiada?

A. El producto está listo porque supera 95% Passed.  
B. El porcentaje no es suficiente; debe analizarse junto con riesgos, severidad y exit criteria.  
C. El 4% puede ignorarse por ser pequeño.  
D. Solo debe revisarse si existen defectos críticos en producción.

**Respuesta correcta:** B

**Explicación:** Las métricas deben interpretarse en contexto. Un porcentaje alto puede ocultar fallos importantes en áreas de alto riesgo.

---

## Pregunta 28
**Capítulo:** 2  
**Tema:** Monitoring / Control Metrics  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Cuál métrica es particularmente útil durante Monitoring y Control para detectar desviaciones del plan?

A. Actual vs planned estimation in hours.  
B. Número total de reuniones realizadas.  
C. Cantidad de documentos generados.  
D. Número de personas del equipo.

**Respuesta correcta:** A

**Explicación:** Comparar esfuerzo real contra estimado permite identificar desviaciones y aplicar acciones de control.

---

## Pregunta 29
**Capítulo:** 2  
**Tema:** Test Reporting  
**Nivel:** K4  
**Dificultad:** high  

¿Cuál reporte aporta más valor a un stakeholder que debe decidir sobre una release?

A. “420 Passed, 18 Failed.”  
B. “Se ejecutó el 95% del alcance; 3 de los 18 fallos afectan riesgos altos y dos exit criteria aún no se cumplen.”  
C. “Se ejecutaron muchas pruebas esta semana.”  
D. “QA recomienda esperar porque todavía hay bugs.”

**Respuesta correcta:** B

**Explicación:** El reporte debe traducir datos en información útil para decidir, vinculando resultados, riesgos y criterios.

---

## Pregunta 30
**Capítulo:** 2  
**Tema:** Test Estimation  
**Nivel:** K4  
**Dificultad:** high  

Un equipo calcula 16 horas porque 80 casos tardan 12 minutos cada uno. Sin embargo, requiere preparar datos manualmente, ejecutar regresión y hacer re-testing. ¿Cuál es el problema principal?

A. La estimación solo considera ejecución y omite otras actividades necesarias.  
B. Doce minutos por caso nunca es una medida válida.  
C. La estimación debería basarse únicamente en defectos históricos.  
D. La regresión no debe incluirse en estimaciones.

**Respuesta correcta:** A

**Explicación:** La estimación debe considerar el conjunto de actividades de testing y factores del contexto, no solo tiempo de ejecución.

---

## Pregunta 31
**Capítulo:** 2  
**Tema:** Estimation Technique Selection  
**Nivel:** K4  
**Dificultad:** high  

Un proyecto nuevo tiene alta complejidad, poca información histórica y varios expertos disponibles. ¿Qué enfoque es más apropiado?

A. Solo ratio-based estimation.  
B. Solo extrapolation.  
C. Una técnica basada en expertos, como Wideband Delphi.  
D. Estimar únicamente por número de casos.

**Respuesta correcta:** C

**Explicación:** Con alta complejidad y pocos datos históricos, las técnicas expert-based son más adecuadas.

---

## Pregunta 32
**Capítulo:** 2  
**Tema:** Three-Point Estimation  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Por qué Three-Point Estimation es útil frente a una única estimación?

A. Elimina completamente la incertidumbre.  
B. Utiliza optimistic, most likely y pessimistic para representar incertidumbre.  
C. No requiere conocimiento del trabajo.  
D. Solo puede utilizarse en Agile.

**Respuesta correcta:** B

**Explicación:** La técnica incorpora distintos escenarios de esfuerzo y permite representar la variabilidad de la estimación.

---

## Pregunta 33
**Capítulo:** 2  
**Tema:** Ratio-Based Estimation  
**Nivel:** K3  
**Dificultad:** medium-high  

¿En qué contexto tiene más sentido utilizar ratio-based estimation?

A. Cuando existen datos históricos confiables de proyectos similares.  
B. Cuando no existe información histórica ni expertos.  
C. Cuando el proyecto es completamente desconocido y altamente innovador.  
D. Solo cuando se utiliza Scrum.

**Respuesta correcta:** A

**Explicación:** Ratio-based estimation depende de relaciones obtenidas de información histórica relevante y confiable.

---

## Pregunta 34
**Capítulo:** 2  
**Tema:** Planning Poker vs Wideband Delphi  
**Nivel:** K3  
**Dificultad:** medium-high  

Un equipo Agile necesita estimar trabajo durante planificación de iteración. ¿Qué técnica encaja mejor con el contexto según el syllabus?

A. Fault Tree Analysis  
B. Planning Poker  
C. FMEA  
D. Hazard Analysis

**Respuesta correcta:** B

**Explicación:** Planning Poker es una técnica basada en el equipo ampliamente adecuada para contextos Agile.

---

## Pregunta 35
**Capítulo:** 2  
**Tema:** Defect Lifecycle  
**Nivel:** K4  
**Dificultad:** high  

Una prueba automatizada falla. Antes de crear un defecto del producto se descubre que el script tenía un selector incorrecto. ¿Qué principio demuestra este caso?

A. Todo test fallido debe generar un defecto.  
B. Una anomalía requiere investigación porque no siempre implica un defecto del producto.  
C. Los fallos de automatización son External Failures.  
D. Los scripts no forman parte del proceso de defect management.

**Respuesta correcta:** B

**Explicación:** Una discrepancia observada puede originarse en producto, ambiente, datos, automatización o interpretación; debe investigarse.

---

## Pregunta 36
**Capítulo:** 2  
**Tema:** Cross-Functional Defect Management  
**Nivel:** K4  
**Dificultad:** high  

Un equipo utiliza una buena herramienta de defectos, pero desarrollo y QA casi no conversan. Los defectos permanecen días sin clarificación. ¿Cuál es la mejor conclusión?

A. La herramienta debería sustituirse.  
B. La comunicación es innecesaria si el workflow está configurado.  
C. La herramienta no sustituye una comunicación efectiva entre participantes.  
D. El problema pertenece solo al Product Owner.

**Respuesta correcta:** C

**Explicación:** Effective Defect Management requiere comunicación, herramienta adecuada, workflow y participación de los stakeholders.

---

## Pregunta 37
**Capítulo:** 2  
**Tema:** Agile Defect Management  
**Nivel:** K4  
**Dificultad:** high  

En un equipo Agile co-located se detecta un defecto que puede corregirse inmediatamente en la misma iteración. ¿Qué enfoque es coherente con el syllabus?

A. Siempre debe existir un defect report formal antes de corregirlo.  
B. Puede gestionarse de forma ligera si el contexto lo permite y el acuerdo del equipo está definido.  
C. Debe esperar a la siguiente iteración.  
D. Debe escalarse al comité de defectos.

**Respuesta correcta:** B

**Explicación:** En Agile, Defect Management puede ser menos formal. El nivel de formalidad depende del contexto y de los acuerdos del equipo.

---

## Pregunta 38
**Capítulo:** 2  
**Tema:** Hybrid Defect Management  
**Nivel:** K4  
**Dificultad:** high  

Un equipo Agile usa Jira y un proveedor secuencial usa otra herramienta. Los defectos críticos no se reflejan a tiempo entre equipos. ¿Qué acción es más apropiada?

A. Mantener los sistemas totalmente independientes.  
B. Pedir que QA copie manualmente todo al final de cada sprint.  
C. Establecer alineación de atributos y sincronización entre herramientas, preferiblemente automatizada.  
D. Eliminar el seguimiento de defectos del proveedor.

**Respuesta correcta:** C

**Explicación:** En contextos híbridos, uno de los retos clave es alinear atributos, herramientas y visibilidad de defectos entre equipos.

---

## Pregunta 39
**Capítulo:** 2  
**Tema:** Defect Report Information  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Cuál conjunto representa información fundamental para gestionar un defecto?

A. Título, descripción, pasos, severity y priority.  
B. Nombre del sprint, cantidad de testers y presupuesto.  
C. Únicamente screenshot y severity.  
D. Únicamente título y responsable.

**Respuesta correcta:** A

**Explicación:** El syllabus destaca título, descripción detallada, pasos para reproducir, severity y priority como información esencial.

---

## Pregunta 40
**Capítulo:** 2  
**Tema:** Defect Data for Process Improvement  
**Nivel:** K4  
**Dificultad:** high  

Durante varios meses aumenta el porcentaje de defectos reabiertos. ¿Cuál análisis es más útil?

A. Evaluar la calidad de las correcciones/debugging y buscar causas recurrentes.  
B. Eliminar el estado Reopened del workflow.  
C. Cerrar automáticamente defectos después del primer fix.  
D. Medir únicamente cuántos casos fueron ejecutados.

**Respuesta correcta:** A

**Explicación:** La información sobre reopened defects puede utilizarse para evaluar la calidad del debugging y detectar oportunidades de mejora.

---

# Capítulo 3 — Managing the Team

## Pregunta 41
**Capítulo:** 3  
**Tema:** Four Areas of Competence  
**Nivel:** K3  
**Dificultad:** medium-high  

Un QA domina técnicas de prueba y APIs, pero presenta dificultad para manejar conflictos dentro del equipo. ¿Qué área de competencia necesita principalmente fortalecer?

A. Professional competence  
B. Methodological competence  
C. Social competence  
D. Personal competence

**Respuesta correcta:** C

**Explicación:** Conflict management, comunicación y cooperación pertenecen principalmente a Social Competence.

---

## Pregunta 42
**Capítulo:** 3  
**Tema:** Professional Competence  
**Nivel:** K2  
**Dificultad:** medium  

¿Cuál ejemplo corresponde principalmente a Professional Competence?

A. Conocimiento de test techniques y dominio de negocio.  
B. Capacidad de recibir críticas.  
C. Resolución de conflictos interpersonales.  
D. Adaptabilidad social.

**Respuesta correcta:** A

**Explicación:** Professional Competence incluye conocimientos especializados, técnicas de testing, tecnología y dominio de negocio.

---

## Pregunta 43
**Capítulo:** 3  
**Tema:** Required Skills  
**Nivel:** K4  
**Dificultad:** high  

Un proyecto requiere API testing, performance y conocimiento bancario. El equipo tiene experiencia fuerte en API y banca, pero nadie domina performance. ¿Cuál es la respuesta más apropiada?

A. Ignorar performance porque el equipo actual no tiene el skill.  
B. Ejecutar performance con cualquier QA sin preparación.  
C. Identificar el gap y cubrirlo mediante desarrollo de skills o apoyo externo.  
D. Reemplazar a todo el equipo.

**Respuesta correcta:** C

**Explicación:** La gestión debe comparar skills requeridos contra disponibles y cerrar gaps mediante training, desarrollo o expertos externos.

---

## Pregunta 44
**Capítulo:** 3  
**Tema:** Methodological Competence  
**Nivel:** K3  
**Dificultad:** medium-high  

Un QA debe analizar una historia ambigua, identificar riesgos y decidir qué información necesita antes de diseñar pruebas. ¿Qué competencia resulta especialmente relevante?

A. Social competence  
B. Methodological competence  
C. Hygiene factor  
D. External failure competence

**Respuesta correcta:** B

**Explicación:** Analytical, conceptual y judgment skills forman parte de Methodological Competence.

---

## Pregunta 45
**Capítulo:** 3  
**Tema:** Personal Competence  
**Nivel:** K3  
**Dificultad:** medium-high  

Un Test Lead técnicamente fuerte tiene problemas para delegar, aceptar feedback y adaptarse a cambios. ¿Qué área debería desarrollar principalmente?

A. Professional competence  
B. Social competence  
C. Personal competence  
D. Appraisal competence

**Respuesta correcta:** C

**Explicación:** Delegación, capacidad de recibir críticas, resiliencia y apertura al cambio son ejemplos de Personal Competence.

---

## Pregunta 46
**Capítulo:** 3  
**Tema:** Motivators vs Hygiene Factors  
**Nivel:** K4  
**Dificultad:** high  

El equipo recibe reconocimiento, autonomía y oportunidades de crecimiento, pero trabaja con ambientes extremadamente inestables y objetivos poco realistas. ¿Qué interpretación es más adecuada?

A. Los motivators compensan completamente cualquier problema de condiciones.  
B. Los ambientes y objetivos poco realistas son hygiene factors cuya ausencia puede desmotivar.  
C. La autonomía es un hygiene factor.  
D. El reconocimiento es un external failure cost.

**Respuesta correcta:** B

**Explicación:** Condiciones de trabajo y objetivos realistas pertenecen a Hygiene Factors. Su ausencia puede producir desmotivación aunque existan motivators.

---

## Pregunta 47
**Capítulo:** 3  
**Tema:** Cost of Quality  
**Nivel:** K3  
**Dificultad:** medium-high  

Clasifique correctamente las siguientes actividades:

1. Training de desarrolladores en secure coding.  
2. Ejecución de pruebas.  
3. Corrección de un bug encontrado en QA.  
4. Hotfix por defecto detectado en producción.

A. Prevention, Appraisal, Internal Failure, External Failure  
B. Appraisal, Prevention, External Failure, Internal Failure  
C. Prevention, Internal Failure, Appraisal, External Failure  
D. Appraisal, Appraisal, Internal Failure, Prevention

**Respuesta correcta:** A

**Explicación:** Training previene; testing detecta; corregir antes de release es Internal Failure; corregir después de release es External Failure.

---

## Pregunta 48
**Capítulo:** 3  
**Tema:** Prevention vs Appraisal  
**Nivel:** K3  
**Dificultad:** medium-high  

¿Cuál actividad es un Prevention Cost y no un Appraisal Cost?

A. Dynamic Testing  
B. Revisar tempranamente el test basis para prevenir problemas posteriores.  
C. Ejecutar regresión.  
D. Analizar resultados de performance.

**Respuesta correcta:** B

**Explicación:** Prevention busca evitar problemas antes de que ocurran; Appraisal busca detectarlos mediante evaluación o testing.

---

## Pregunta 49
**Capítulo:** 3  
**Tema:** Cost-Benefit of Testing  
**Nivel:** K4  
**Dificultad:** high  

Un stakeholder propone duplicar indefinidamente el esfuerzo de testing “para asegurar calidad”. ¿Qué respuesta está más alineada con el syllabus?

A. Más testing siempre produce mejor retorno.  
B. El objetivo es encontrar un equilibrio donde el beneficio esperado justifique el costo y el riesgo residual.  
C. El testing debe detenerse al alcanzar 50% de cobertura.  
D. El costo no debe considerarse en decisiones de calidad.

**Respuesta correcta:** B

**Explicación:** El syllabus plantea que tanto testing insuficiente como excesivo pueden ser perjudiciales; debe buscarse un equilibrio costo-beneficio.

---

## Pregunta 50
**Capítulo:** 3  
**Tema:** Integrated Test Management Decision  
**Nivel:** K4  
**Dificultad:** high  

Un proyecto regulado tiene deadline cercano, defectos críticos en una integración de alto riesgo, un ambiente inestable y solo un QA Senior disponible. ¿Cuál respuesta combina mejor los principios de Test Management?

A. Mantener el plan original para no afectar el cronograma.  
B. Ejecutar primero todos los casos fáciles para elevar el porcentaje de avance.  
C. Repriorizar según riesgo, asignar al QA Senior al área crítica, ajustar el plan y comunicar el impacto a stakeholders.  
D. Suspender todo testing hasta estabilizar completamente el ambiente.

**Respuesta correcta:** C

**Explicación:** La respuesta combina Risk-Based Testing, asignación de skills, Test Control y comunicación con stakeholders frente a una desviación real.

---

# Instrucción para conversión a JSON

Convertir estas 50 preguntas a un archivo:

`istqb-ctal-test-management-questions.json`

Cada pregunta debe mantener exactamente:

- `id`
- `chapter`
- `topic`
- `level`
- `difficulty`
- `question`
- `options`
- `correctAnswer`
- `explanation`

## Reglas

- No cambiar el texto de las preguntas.
- No cambiar las opciones.
- No cambiar la respuesta correcta.
- No cambiar la explicación.
- No agregar preguntas nuevas.
- No eliminar preguntas.
- Deben existir exactamente 50 objetos.
- El JSON final debe ser válido.
