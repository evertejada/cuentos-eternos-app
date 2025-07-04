export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { cuento, voz } = req.body;

  if (!cuento || !voz) {
    return res.status(400).json({ message: 'Faltan datos en la solicitud' });
  }

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voz}`, {
      method: 'POST',
      headers: {
        'xi-api-key': 'TU_API_KEY_AQUI', // <--- reemplaza esto con tu API Key real
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: cuento,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8
        }
      })
    });

    const audioBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline; filename="cuento.mp3"');
    res.send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error al generar la narración' });
  }
}
