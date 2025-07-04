export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { cuento, voz } = req.body;
  if (!cuento || !voz) {
    return res.status(400).json({ message: 'Faltan datos en la solicitud' });
  }

  try {
    const respuestaIA = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voz}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': 'sk_87632061b257861f32fd4126efaefe70ecf6e289c9cb1bac'
        },
        body: JSON.stringify({
          text: cuento,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.7,
            similarity_boost: 0.8
          }
        })
      }
    );

    const audioBuffer = await respuestaIA.arrayBuffer();
    const audioBase64 = Buffer.from(audioBuffer).toString('base64');

    return res.status(200).json({
      success: true,
      mensaje: 'Narración generada con éxito',
      audioBase64
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error al generar la narración' });
  }
}
