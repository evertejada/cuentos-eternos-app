import { useState } from 'react';

export default function ProbarCuento() {
  const [nombre, setNombre] = useState('');
  const [escenario, setEscenario] = useState('');
  const [tono, setTono] = useState('');
  const [cuento, setCuento] = useState('');

  const generarCuento = async () => {
    const res = await fetch('/api/cuento', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, escenario, tono }),
    });

    const data = await res.json();
    setCuento(data.cuento || data.error || 'No se generó cuento.');
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>🧠 Generador de Cuentos Eternos</h1>

      <input
        placeholder="👶 Nombre del niño"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }}
      />
      <input
        placeholder="🌳 Escenario (bosque, espacio, etc)"
        value={escenario}
        onChange={(e) => setEscenario(e.target.value)}
        style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }}
      />
      <input
        placeholder="🎭 Tono (divertido, misterioso, educativo...)"
        value={tono}
        onChange={(e) => setTono(e.target.value)}
        style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }}
      />

      <button onClick={generarCuento} style={{ padding: 10, fontWeight: 'bold' }}>
        Generar cuento ✨
      </button>

      <pre style={{ marginTop: 20, background: '#f4f4f4', padding: 20, whiteSpace: 'pre-wrap' }}>
        {cuento}
      </pre>
    </div>
  );
}
