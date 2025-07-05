import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Cuentos personalizados que duran para siempre" />
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </Head>

      {/* CINTILLO ANIMADO */}
      <div style={{
        backgroundColor: '#f3e5f5',
        overflow: 'hidden',
        position: 'relative',
        height: '40px',
        borderBottom: '1px solid #ccc'
      }}>
        <div style={{
          display: 'inline-block',
          position: 'absolute',
          whiteSpace: 'nowrap',
          animation: 'scroll-left 15s linear infinite',
          fontWeight: 'bold',
          color: '#6a1b9a',
          fontSize: '16px'
        }}>
          ✨ Descarga nuestra app, inmortaliza lo que más amas con un cuento eterno ✨
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ color: '#6a1b9a' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '18px' }}>
          Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.
        </p>
        <a
          href="https://tu-enlace-de-descarga.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#8e24aa',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px'
          }}
        >
          📲 Descarga la App
        </a>
      </main>
    </>
  );
}

