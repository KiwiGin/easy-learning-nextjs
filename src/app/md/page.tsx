import MarkDownDisplay from '../../components/MarkDownDisplay'

export default function MarkdownPage() {
  const markdown1 = `
# Teoría de la Relatividad

## Introducción

La teoría de la relatividad es una teoría física que describe la relación entre el espacio y el tiempo. Fue desarrollada por Albert Einstein a principios del siglo XX. Hay dos teorías principales:

1. **Relatividad especial**: Publicada en 1905, establece que las leyes de la física son las mismas para todos los observadores no acelerados y que la velocidad de la luz en el vacío es constante.
2. **Relatividad general**: Publicada en 1915, generaliza la relatividad especial e introduce el concepto de gravedad como una curvatura del espacio-tiempo.

### Relatividad Especial

La relatividad especial se basa en dos postulados:

- Las leyes de la física son las mismas en todos los marcos de referencia inerciales.
- La velocidad de la luz en el vacío es la misma para todos los observadores, sin importar el movimiento de la fuente de luz.

### Relatividad General

La relatividad general amplía estos conceptos para incluir la gravedad:

> "La materia le dice al espacio cómo curvarse, y el espacio curvado le dice a la materia cómo moverse." - John Archibald Wheeler

La ecuación principal de la relatividad general es la ecuación de campo de Einstein:

$$R_{\\mu \\nu} - \\frac{1}{2} R g_{\\mu \\nu} + \\Lambda g_{\\mu \\nu} = \\frac{8 \\pi G}{c^4} T_{\\mu \\nu}$$

donde $R_{\\mu \\nu}$ es el tensor de Ricci, $R$ es la curvatura escalar, $g_{\\mu \\nu}$ es el tensor métrico, $\\Lambda$ es la constante cosmológica, $G$ es la constante de gravitación universal, $c$ es la velocidad de la luz, y $T_{\\mu \\nu}$ es el tensor de energía-momento.

### Conclusión

La teoría de la relatividad ha revolucionado nuestra comprensión del universo y ha sido confirmada por numerosos experimentos y observaciones.

Tabla comparativa:
| Relatividad Especial | Relatividad General |
|-----------------------|---------------------|
| Espacio y tiempo      | Gravedad            |
| Luz                  | Curvatura            | 
| Postulados            | Ecuaciones          |
`
const markdown2 = `
# Preguntas sobre Relatividad

## Pregunta 1

¿Cuál de los siguientes enunciados describe correctamente un postulado de la relatividad especial?

- [ ] A. La velocidad de la luz depende del movimiento del observador.
- [x] B. Las leyes de la física son las mismas para todos los observadores no acelerados.
- [ ] C. La masa de un objeto aumenta con su velocidad.
- [ ] D. El tiempo es absoluto y el mismo para todos los observadores.

## Pregunta 2

¿Qué describe la relatividad general?

- [ ] A. La interacción entre partículas subatómicas.
- [ ] B. La fuerza electromagnética.
- [x] C. La gravedad como una curvatura del espacio-tiempo.
- [ ] D. La teoría de los quarks.

## Pregunta 3

¿Cuál es el nombre del científico que desarrolló la teoría de la relatividad?

- [x] A. Albert Einstein
- [ ] B. Isaac Newton
- [ ] C. Niels Bohr
- [ ] D. Galileo Galilei
`

const markdown3 = `
# Solución a las Preguntas

## Solución Pregunta 1

La respuesta correcta es:

- [x] B. Las leyes de la física son las mismas para todos los observadores no acelerados.

Este es uno de los dos postulados fundamentales de la relatividad especial.

## Solución Pregunta 2

La respuesta correcta es:

- [x] C. La gravedad como una curvatura del espacio-tiempo.

La relatividad general describe la gravedad no como una fuerza, sino como una curvatura del espacio-tiempo causada por la masa y la energía.

## Solución Pregunta 3

La respuesta correcta es:

- [x] A. Albert Einstein

Albert Einstein desarrolló tanto la relatividad especial (1905) como la relatividad general (1915).
`

  return (
    <>
      <h1>MarkdownPage</h1>
      <MarkDownDisplay markdown={markdown1} />
      <MarkDownDisplay markdown={markdown2} />
      <MarkDownDisplay markdown={markdown3} />
    </>
  )
}
