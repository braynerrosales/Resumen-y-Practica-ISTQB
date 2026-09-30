// Genera el banco de preguntas JSON y la página de estudio a partir de los MD en /fuentes.
// Uso: node build.js
const fs = require('fs');
const path = require('path');

const root = __dirname;
const src = (f) => path.join(root, 'fuentes', f);

// ---------- 1. Preguntas: MD -> JSON (texto literal, sin modificar) ----------
const qmd = fs.readFileSync(src('ISTQB_CTAL_TM_50_Preguntas_Listas_Para_JSON.md'), 'utf8').replace(/\r\n/g, '\n');
const blocks = qmd.split(/^## Pregunta (\d+)\s*$/m);
const questions = [];
for (let i = 1; i < blocks.length; i += 2) {
  const id = Number(blocks[i]);
  const body = blocks[i + 1].split(/^---\s*$/m)[0];
  const field = (name) => {
    const m = body.match(new RegExp('^\\*\\*' + name + ':\\*\\*\\s*(.+?)\\s*$', 'm'));
    if (!m) throw new Error(`Pregunta ${id}: falta ${name}`);
    return m[1].trim();
  };
  const lines = body.split('\n');
  const startQ = lines.findIndex((l) => /^\*\*Dificultad:\*\*/.test(l)) + 1;
  const firstOpt = lines.findIndex((l) => /^A\. /.test(l));
  const question = lines.slice(startQ, firstOpt).map((l) => l.replace(/\s+$/, '')).join('\n').trim();
  const options = {};
  for (const letter of ['A', 'B', 'C', 'D']) {
    const l = lines.find((x) => x.startsWith(letter + '. '));
    if (!l) throw new Error(`Pregunta ${id}: falta opción ${letter}`);
    options[letter] = l.slice(3).trim();
  }
  questions.push({
    id,
    chapter: Number(field('Capítulo')),
    topic: field('Tema'),
    level: field('Nivel'),
    difficulty: field('Dificultad'),
    question,
    options,
    correctAnswer: field('Respuesta correcta'),
    explanation: field('Explicación'),
  });
}
if (questions.length !== 50) throw new Error('Se esperaban 50 preguntas, hay ' + questions.length);
questions.forEach((q, i) => {
  if (q.id !== i + 1) throw new Error('ID fuera de secuencia en ' + q.id);
  if (!'ABCD'.includes(q.correctAnswer)) throw new Error('Respuesta inválida en ' + q.id);
});
const bank = {
  title: 'ISTQB CTAL Test Management v3.0 - Question Bank',
  version: '1.0',
  totalQuestions: 50,
  questions,
};
const bankJson = JSON.stringify(bank, null, 2);
fs.writeFileSync(path.join(root, 'istqb-ctal-test-management-questions.json'), bankJson, 'utf8');

// ---------- 2. Resumen: todo lo que sigue a "# CONTENIDO DEL RESUMEN" ----------
const smd = fs.readFileSync(src('ISTQB_CTAL_TM_Claude_Web_Con_Resumen_Listo.md'), 'utf8').replace(/\r\n/g, '\n');
const marker = '# CONTENIDO DEL RESUMEN';
const summary = smd.slice(smd.indexOf(marker) + marker.length).trim();
if (/<\/script/i.test(summary)) throw new Error('El resumen contiene </script>');

// ---------- 3. Página ----------
const tpl = fs.readFileSync(path.join(root, 'src', 'template.html'), 'utf8');
const page = tpl
  .split('__SUMMARY_MD__').join(summary)
  .split('__QUESTIONS_JSON__').join(JSON.stringify(bank));

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
// Versión para publicar como Artifact (el visor añade el esqueleto HTML)
fs.writeFileSync(path.join(root, 'dist', 'istqb-ctal-tm-estudio.html'), page, 'utf8');
// Versión local para abrir con doble clic
const local = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n' + page + '\n</body>\n</html>\n';
fs.writeFileSync(path.join(root, 'index.html'), local, 'utf8');

const count = (k) => questions.reduce((a, q) => ((a[q[k]] = (a[q[k]] || 0) + 1), a), {});
console.log('Preguntas:', questions.length, 'por capítulo', count('chapter'), 'nivel', count('level'), 'respuestas', count('correctAnswer'));
console.log('Resumen:', summary.length, 'caracteres');
