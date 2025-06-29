export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { titulo, tipo, contenido } = req.body;

  const voz = tipo === 'aventura' ? 'male_adventurous' :
              tipo === 'selva' ? 'jungle_friendly' :
              tipo === 'luna' ? 'calm_female' :
              'narrador_base';

  // Simulación de IA narradora
  const narracion = `Narrando con voz tipo ${voz}: ${titulo} - ${contenido}`;

  // Simulación de procesamiento IA
  await new Promise(resolve => setTimeout(resolve, 2000));

  res.status(200).json({
    titulo,
    tipo,
    voz,
    narracion,
    linkDescarga: `https://cuentoseternos.com/audio/${titulo.replace(/\s+/g, '-')}.mp3`
  });
}

