// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Cuentos personalizados para niños, con tu voz y tu historia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CINTILLO ANIMADO */}
      <div style={{
        backgroundColor: '#E0BBE4',
        color: '#6A1B9A',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '10px 0'
      }}>
        ✨ Crea tu historia, descárgala y hazla eterna con nuestra app ✨
      </div>

      {/* CONTENIDO */}
      <main style={{
        backgroundColor: '#FAE7FB',
        minHeight: '100vh',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', color: '#6A1B9A', marginBottom: '10px' }}>
          Bienvenido a Cuentos Eternos
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Donde cada historia se convierte en un recuerdo inolvidable narrado con tu voz.
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
            borderRadius: '12px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
        >
          📲 Descarga la App
        </a>

        {/* SECCIONES */}
        <div style={{ marginTop: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
          {[
            {
              titulo: '🎨 Personaliza tus cuentos',
              texto: 'Usa tu voz, tus fotos y tu historia para crear cuentos únicos.'
            },
            {
              titulo: '👨‍👩‍👧 Conexión familiar',
              texto: 'Fortalece el vínculo emocional con tus hijos cada noche.'
            },
            {
              titulo: '💤 Rutina de sueño mágica',
              texto: 'Relaja y guía a tus hijos con cuentos antes de dormir.'
            },
            {
              titulo: '📚 Biblioteca personal',
              texto: 'Accede y descarga todos los cuentos que hayas creado.'
            }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '20px',
              width: '260px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#6A1B9A', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.titulo}</h3>
              <p style={{ fontSize: '1rem', marginTop: '10px' }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

