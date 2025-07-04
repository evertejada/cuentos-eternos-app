import { useState } from 'react';
import Link from 'next/link';

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
    <div>
      {/* NAVBAR COMPLETO */}
      <nav style={{ background: '#7D3C98', padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'white', fontWeight: 'bold' }}>Inicio</Link>
        <Link href="/narrar" style={{ color: 'white' }}>Narrar</Link>
        <Link href="/probar-cuento" style={{ color: 'white' }}>Probar Cuento</Link>
        <Link href="/caricatura-entregada" style={{ color: 'white' }}>Caricatura</Link>
        <Link href="/mis-compras" style={{ color: 'white' }}>Mis Compras</Link>
        <Link href="/mis-cuentos" style={{ color: 'white' }}>Mis Cuentos</Link>
        <Link href="/clonar-mi-voz" style={{ color: 'white' }}>Clonar mi Voz</Link>
        <Link href="/biblioteca" style={{ color: 'white' }}>Biblioteca</Link>
        <Link href="/upsell" style={{ color: '#FAD02E', fontWeight: 'bold' }}>Upsell</Link>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: '#F5E8FF', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#884EA0' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Donde cada historia puede ser tuya ✨</p>
      </div>
    </div>
  );
}
