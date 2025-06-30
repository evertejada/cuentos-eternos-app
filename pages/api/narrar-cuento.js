export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { cuento, voz } = req.body;

  if (!cuento || !voz) {
    return res.status(400).json({ message: 'Faltan datos en la solicitud' });
  }

  try {
    // Aquí puedes integrar la lógica de narración o IA
    return res.status(200).json({
      success: true,
      audioUrl: 'https://tu-servidor.com/audio-generado.mp3',
      mensaje: 'Narración generada con éxito'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
