import { useState } from 'react';

export default function Home() {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [contenido, setContenido] = useState('');
  const [respuesta, setRespuesta] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/narrar-cuento', {
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
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#7e3ff2' }}>
        Bienvenido a Cuentos Eternos
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Donde cada historia puede ser tuya ✨
      </p>

      <a
        href="https://tupagina.com/formulario"
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          backgroundColor: '#7e3ff2',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '18px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Crear mi caricatura mágica
      </a>

      <div style={{ marginTop: '50px', maxWidth: '100%', width: '560px' }}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/WSL7c6L5YuE"
          title="Cuento de Jessica"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🧩 FORMULARIO PARA GENERAR CUENTO CON VOZ */}
      <form onSubmit={handleSubmit} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input
          type="text"
          placeholder="Título del cuento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Selecciona el tipo</option>
          <option value="aventura">Aventura</option>
          <option value="selva">Selva</option>
          <option value="luna">Luna</option>
        </select>
        <textarea
          placeholder="Contenido del cuento"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows={4}
          required
        />
        <button type="submit">Generar Cuento con Voz</button>

        {respuesta && (
          <div style={{ marginTop: '20px' }}>
            <p><strong>Voz usada:</strong> {respuesta.voz}</p>
            <p><strong>Narración:</strong> {respuesta.narracion}</p>
            <a href={respuesta.linkDescarga} target="_blank" rel="noopener noreferrer">
              Descargar audio
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
