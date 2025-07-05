// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta
          name="description"
          content="Cuentos personalizados para niños, con tu voz y tu historia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CINTILLO ANIMADO */}
      <div
        style={{
          backgroundColor: '#FFDDEE',
          color: '#6A1B9A',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '10px 0',
          animation: 'parpadeo 1.5s infinite',
        }}
      >
        ✨ Crea tu historia, descárgala y hazla eterna con nuestra app ✨
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main
        style={{
          background: 'linear-gradient(to bottom, #FDEBFF, #FFF)',
          minHeight: '100vh',
          padding: '40px 20px',
          textAlign: 'center',
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            color: '#6A1B9A',
            marginBottom: '20px',
            textShadow: '2px 2px #EBD9F4',
          }}
        >
          Bienvenido a <span style={{ color: '#AB47BC' }}>Cuentos Eternos</span>
        </h1>

        <p
          style={{
            fontSize: '1.3rem',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 30px',
          }}
        >
          Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.
        </p>

        <a
          href="https://tu-enlace-de-descarga.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#9C27B0',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '16px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
        >
          📲 Descarga la App
        </a>

        {/* CARDS DE BENEFICIOS */}
        <div
          style={{
            marginTop: '60px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px',
          }}
        >
          {[
            {
              titulo: '🎨 Personaliza tus cuentos',
              texto: 'Usa tu voz, tus fotos y tu historia para crear cuentos únicos.',
            },
            {
              titulo: '👨‍👩‍👧 Conexión familiar',
              texto: 'Fortalece el vínculo emocional con tus hijos cada noche.',
            },
            {
              titulo: '💤 Rutina de sueño mágica',
              texto: 'Relaja y guía a tus hijos con cuentos antes de dormir.',
            },
            {
              titulo: '📚 Biblioteca personal',
              texto: 'Accede y descarga todos los cuentos que hayas creado.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#FFF',
                borderRadius: '18px',
                padding: '24px',
                width: '260px',
                boxShadow: '0 8px 18px rgba(0,0,0,0.1)',
                textAlign: 'left',
                border: '2px solid #F3D0FA',
              }}
            >
              <h3
                style={{
                  color: '#7B1FA2',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                {item.titulo}
              </h3>
              <p style={{ fontSize: '1rem', marginTop: '10px', color: '#333' }}>
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* ANIMACIÓN GLOBAL */}
      <style jsx>{`
        @keyframes parpadeo {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
