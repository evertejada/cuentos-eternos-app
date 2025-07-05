import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Cuentos personalizados que duran para siempre" />
      </Head>

      {/* CINTILLO ANIMADO */}
      <div style={{
        backgroundColor: '#f3e5f5',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        height: '40px',
        borderBottom: '1px solid #ccc',
        fontFamily: 'Arial',
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'scroll-left 15s linear infinite',
          fontWeight: 'bold',
          color: '#6a1b9a',
          fontSize: '16px',
        }}>
          ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ color: '#4a148c' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '18px' }}>
          Donde cada historia se convierte en un recuerdo eterno,<br />
          narrado con tu voz y tus emociones.
        </p>
        <button style={{
          backgroundColor: '#8e24aa',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          📲 Descarga la App
        </button>
      </main>
    </>
  );
}
