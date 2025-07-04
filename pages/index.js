import { useState } from 'react';

export default function Home() {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [contenido, setContenido] = useState('');
  const [respuesta, setRespuesta] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/narrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, tipo, contenido }),
    });
    const data = await res.json();
    setRespuesta(data);
  };

  return (
    <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#F5E8FF', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#884EA0' }}>Bienvenido a Cuentos Eternos</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Donde cada historia puede ser tuya ✨</p>
    </div>
  );
}
