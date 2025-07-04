import { useState } from 'react';

export default function NarrarCuento() {
  const [cuento, setCuento] = useState('');
  const [voz, setVoz] = useState('EXAMPLE_VOICE_ID'); // ← cambia esto por tu voz de ElevenLabs
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

      if (!respuesta.ok) {
        throw new Error(data.message || 'Error al generar narración');
      }

      const audioBase64 = data.audioBase64;
      const audioBlob = new Blob(
        [Uint8Array.from(atob(audioBase64), c => c.charCodeAt(0))],
        { type: 'audio/mpeg' }
      );
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (err) {
      setError(err.message);
    }

    setCargando(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎙️ Narrador de Cuentos</h1>
      
      <textarea
        rows={10}
        value={cuento}
        onChange={(e) => setCuento(e.target.value)}
        placeholder="Escribe aquí tu cuento..."
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <input
        type="text"
        value={voz}
        onChange={(e) => setVoz(e.target.value)}
        placeholder="Voice ID de ElevenLabs"
        style={{ width: '100%', marginBottom: '1rem' }}
      />

      <button onClick={narrar} disabled={cargando}>
        {cargando ? 'Narrando...' : '🎤 Generar Narración'}
      </button>

      {audioUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>🎧 Escucha tu cuento:</h3>
          <audio controls src={audioUrl} />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}
    </div>
  );
}
