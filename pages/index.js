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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '90vh',
      backgroundColor: '#F5E8FF',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#8E44AD',
        marginBottom: '1rem'
      }}>
        Bienvenido a Cuentos Eternos
      </h1>

      <p style={{
        fontSize: '1.4rem',
        color: '#5D3A9B',
        marginBottom: '2rem'
      }}>
        Donde cada historia puede ser tuya ✨
      </p>

      {/* TEXTO EN MOVIMIENTO */}
      <marquee behavior="scroll" direction="left" scrollamount="6" style={{
        fontSize: '1.2rem',
        color: '#6C3483',
        background: '#E8DAEF',
        padding: '10px 20px',
        borderRadius: '12px',
        fontWeight: '500',
        width: '80%'
      }}>
        ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
      </marquee>
    </div>
  );
}
