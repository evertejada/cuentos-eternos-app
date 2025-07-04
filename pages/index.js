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
      {/* NAVBAR PRINCIPAL */}
      <nav style={{ backgroundColor: '#6a1b9a', padding: '15px 0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link href="/"><span style={{ color: 'white', fontWeight: 'bold' }}>Inicio</span></Link>
        <Link href="/narrar"><span style={{ color: 'white' }}>Narrar</span></Link>
        <Link href="/probar-cuento"><span style={{ color: 'white' }}>Probar Cuento</span></Link>
        <Link href="/caricatura-entregada"><span style={{ color: 'white' }}>Caricatura</span></Link>
        <Link href="/mis-compras"><span style={{ color: 'white' }}>Mis Compras</span></Link>
        <Link href="/mis-cuentos"><span style={{ color: 'white' }}>Mis Cuentos</span></Link>
        <Link href="/clonar-voz"><span style={{ color: 'white' }}>Clonar mi Voz</span></Link>
        <Link href="/biblioteca"><span style={{ color: 'white' }}>Biblioteca</span></Link>
      </nav>

      {/* HERO PRINCIPAL */}
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ color: '#7b1fa2', fontSize: '3em' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>Donde cada historia puede ser tuya ✨</p>
        <marquee style={{ color: '#6a1b9a', fontWeight: 'bold', fontSize: '1.1em' }}>
          🎉 Crea tu historia mágica. Descarga nuestra App ahora. 🎉
        </marquee>
      </div>
    </div>
  );
}
