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

      {/* CINTILLO */}
      <div style={{
        backgroundColor: '#E0BBE4',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ccc'
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'scroll-left 15s linear infinite',
          fontWeight: 'bold',
          color: '#6A1B9A',
          fontSize: '16px'
        }}>
          ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
        </div>
      </div>

      {/* CONTENIDO */}
      <main style={{ textAlign: 'center', padding: '40px' }}>
        <h1>Bienvenido a Cuentos Eternos</h1>
        <p>Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.</p>
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
