import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Inmortaliza tus historias con nuestra app de cuentos personalizados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ backgroundColor: '#FAE7FB', minHeight: '100vh', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#6A1B9A', fontSize: '2.5rem' }}>Bienvenido a Cuentos Eternos</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Donde cada historia se convierte en un recuerdo eterno, narrado con tu voz y tus emociones.
        </p>

        {/* Botón de descarga */}
        <a
          href="https://tu-enlace-de-descarga.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#9C27B0',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          📲 Descarga la App
        </a>

        {/* Secciones destacadas */}
        <div style={{ marginTop: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {[
            {
              titulo: '🎨 Personaliza tu historia',
              texto: 'Crea cuentos con tus personajes, tu voz y recuerdos reales.'
            },
            {
              titulo: '👨‍👩‍👧 Cuentos en Familia',
              texto: 'Fortalece el vínculo entre padres e hijos con historias únicas.'
            },
            {
              titulo: '💗 Educación emocional',
              texto: 'Ayuda a los niños a comprender sus emociones a través de cuentos.'
            },
            {
              titulo: '📚 Tu biblioteca mágica',
              texto: 'Guarda y descarga todos los cuentos que crees con un solo clic.'
            }
          ].map((seccion, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '25px',
              width: '260px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ color: '#6A1B9A', fontWeight: 'bold', fontSize: '1.2rem' }}>{seccion.titulo}</h3>
              <p style={{ fontSize: '1rem', marginTop: '10px' }}>{seccion.texto}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
