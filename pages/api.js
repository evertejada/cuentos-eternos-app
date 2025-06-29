export default function handler(req, res) {
  const { nombre, escenario, tono } = req.body;

  if (!nombre || !escenario || !tono) {
    return res.status(400).json({ error: "Faltan datos. Asegúrate de incluir nombre, escenario y tono." });
  }

  const cuento = `
  Había una vez un niño llamado ${nombre}, que vivía en un lugar lleno de magia y aventuras.
  Un día, decidió explorar un entorno ${escenario}, sin imaginar que esa decisión cambiaría su vida.

  En medio del ${escenario}, ${nombre} encontró un objeto misterioso que brillaba con una luz especial.
  Al tocarlo, una voz suave y ${tono} le susurró una misión secreta que debía cumplir antes del anochecer.

  ${nombre} corrió valientemente a través del ${escenario}, enfrentando obstáculos, haciendo nuevos amigos mágicos
  y aprendiendo que el valor no es no tener miedo, sino seguir adelante a pesar de él.

  Finalmente, con el corazón lleno de orgullo y alegría, ${nombre} completó su misión, y el ${escenario} entero celebró su hazaña.

  Desde ese día, cada noche al mirar al cielo, ${nombre} recordaba que las verdaderas historias viven dentro de nosotros.

  Fin.
  `;

  res.status(200).json({ cuento });
}

