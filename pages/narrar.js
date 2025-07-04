import { useState } from 'react';

export default function NarrarCuento() {
  const [cuento, setCuento] = useState('');
  const [voz, setVoz] = useState('YOUR_VOICE_ID'); // ← Reemplaza esto por tu ID real de voz ElevenLabs
  const [audioUrl, setAudioUrl] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const narrar = async () => {
    setCargando(true);
    setError('');
    setAudioUrl(null);

    try {
      const respuesta = await fetch('/api/narrar-cuento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cuento, voz }),
      });

      const data = await respuesta.json();

      if (data.audioBase64) {
        const urlAudio = `data:audio/mpeg;base64,${data.audioBase64}`;
        setAudioUrl(urlAudio);
      } else {
        setError('No se pudo generar el audio.');
      }
    } catch (err) {
      setError('Error al conectar con la API.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: 'auto' }}>
      <h1>🎙️ Narrar Cuento con IA</h1>

      <textarea
        placeholder="Escribe aquí tu cuento..."
        value={cuento}
        onChange={(e) => setCuento(e.target.value)}
        rows={10}
        style={{ width: '100%', marginBottom: '1rem', padding: '1rem', fontSize: '1rem' }}
      />

      <input
        type="text"
        placeholder="ID de voz de ElevenLabs"
        value={voz}
        onChange={(e) => setVoz(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />

      <button
        onClick={narrar}
        disabled={cargando}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#5b21b6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {cargando ? 'Narrando...' : 'Narrar Cuento'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {audioUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>✅ Cuento narrado:</h3>
          <audio controls src={audioUrl} style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
}
