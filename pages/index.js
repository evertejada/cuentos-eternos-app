// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos | Inmortaliza tus recuerdos</title>
        <meta
          name="description"
          content="Convierte tus recuerdos familiares en historias estilo Pixar con voz clonada, ilustraciones únicas y libros para colorear descargables."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 🔮 TICKER SUPERIOR */}
      <div className="ticker-container">
        <span className="ticker-text">
          ✨ Crea tu historia, descárgala y hazla eterna con nuestra app ✨
        </span>
      </div>

      {/* 🎬 HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, #5a4bff 0%, #a34bff 50%, #ff80ff 100%)',
          color: '#fff',
          padding: '90px 20px',
          textAlign: 'center',
          borderBottomLeftRadius: '28px',
          borderBottomRightRadius: '28px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            lineHeight: 1.2,
            fontWeight: 800,
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          Inmortaliza tus momentos<br />
          en <span style={{ color: '#ffe066' }}>cuentos mágicos</span>
        </h1>

        <p
          style={{
            maxWidth: '740px',
            margin: '24px auto 48px',
            fontSize: '1.2rem',
            fontWeight: '500',
          }}
        >
          Historias estilo Pixar con voz real, ilustraciones increíbles y libros para colorear.
          Vive una experiencia única con tu familia, cada noche.
        </p>

        <a href="#cta" className="button-primary">
          ✨ ¡Empieza tu primer cuento!
        </a>

        <p
          style={{
            marginTop: '14px',
            fontWeight: '600',
            color: '#ffd8ff',
          }}
        >
          🪄 Oferta inicial: Caricatura mágica por solo <strong>$1</strong>
        </p>
      </section>

      {/* 🧩 CARACTERÍSTICAS MÁGICAS */}
      <section
        style={{
          padding: '70px 20px',
          background: 'radial-gradient(circle at top, #f7eaff 0%, #faf5ff 100%)',
        }}
      >
        <h2 className="text-center mt-4 mb-5 fade-in" style={{ fontSize: '2rem' }}>
          Nuestras Características Mágicas
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            {
              title: '📖 Cuentos Personalizados',
              desc: 'Historias únicas donde tu hijo, mamá o abuelita son los protagonistas.',
            },
            {
              title: '🗣️ Voz Real Clonada',
              desc: 'Usamos IA para narrar los cuentos con la voz del papá, mamá o abuelos.',
            },
            {
              title: '☁️ Biblioteca Mágica',
              desc: 'Tus cuentos quedan guardados en la nube, accesibles en cualquier dispositivo.',
            },
            {
              title: '🎨 Libros para Colorear',
              desc: 'Cada historia se transforma en un libro imprimible con estilo Pixar.',
            },
            {
              title: '🏆 Recompensas y Logros',
              desc: 'Cada cuento desbloquea medallas, puntos y sorpresas para motivar a los niños.',
            },
            {
              title: '🌙 Modo Noche',
              desc: 'Pantalla oscura y audio relajante para dormir con cuentos mágicos.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="fade-in"
              style={{
                background: '#fff',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              }}
            >
              <h3 style={{ marginBottom: '10px', color: '#6a1b9a', fontSize: '1.1rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#444' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA FINAL */}
      <section
        id="cta"
        style={{
          padding: '60px 20px 100px',
          textAlign: 'center',
        }}
      >
        <h2 className="mb-4">¿Listo para escribir la próxima historia de tu vida?</h2>
        <a className="button-primary" href="#">
          Comenzar ahora
        </a>
      </section>
    </>
  );
}
