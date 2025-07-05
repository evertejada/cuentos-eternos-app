// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos | Crea cuentos mágicos</title>
        <meta
          name="description"
          content="Convierte tus recuerdos familiares en historias estilo Pixar con voz real, libros para colorear y mucho más."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 🔮 Ticker superior (usa clases del globals.css) */}
      <div className="ticker-container">
        <span className="ticker-text">
          ✨ Crea tu historia, descárgala y hazla eterna con nuestra app ✨
        </span>
      </div>

      {/* 🌈 HERO SECTION */}
      <section
        style={{
          background:
            'linear-gradient(135deg, #5a4bff 0%, #a34bff 50%, #ff80ff 100%)',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        {/* Logo opcional */}
        {/* <Image src="/logo.svg" alt="Logo" width={80} height={80} /> */}

        <h1
          style={{
            fontSize: '2.8rem',
            lineHeight: 1.2,
            fontWeight: 700,
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          Inmortaliza tus recuerdos<br />en&nbsp;
          <span style={{ color: '#ffe066' }}>cuentos mágicos</span>
        </h1>

        <p
          style={{
            maxWidth: '700px',
            margin: '20px auto 40px',
            fontSize: '1.2rem',
          }}
        >
          Transforma momentos familiares en historias estilo Pixar con narración
          de voz real e ilustraciones únicas.
        </p>

        <a href="#cta" className="button-primary">
          ¡Crea tu primer cuento ahora!
        </a>

        <p
          style={{
            marginTop: '12px',
            fontWeight: '600',
            color: '#ffd8ff',
          }}
        >
          Oferta inicial: Caricatura mágica por solo&nbsp;$1
        </p>
      </section>

      {/* ✨ CARACTERÍSTICAS MÁGICAS */}
      <section
        style={{
          padding: '60px 20px',
          background: 'radial-gradient(#f7eaff 0%, #faf5ff 80%)',
        }}
      >
        <h2 className="text-center mt-4 mb-4 fade-in">
          Nuestras Características Mágicas
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            {
              title: '📖 Cuentos Personalizados',
              desc: 'Historias únicas con tus seres queridos como protagonistas.',
            },
            {
              title: '🗣️ Narración con Voz Real',
              desc: 'Voces clonadas con IA para una experiencia inmersiva.',
            },
            {
              title: '☁️ Biblioteca en la Nube',
              desc: 'Accede a tus cuentos desde cualquier dispositivo.',
            },
            {
              title: '🎨 Libros para Colorear',
              desc: 'Convierte cada cuento en un libro imprimible.',
            },
            {
              title: '🏆 Gamificación & Recompensas',
              desc: 'Medallas, puntos y sorpresas por cada historia creada.',
            },
            {
              title: '🌙 Modo Noche Relajante',
              desc: 'Fondos suaves y audio ambiente para la hora de dormir.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="fade-in"
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ marginBottom: '8px', color: '#6a1b9a' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 SECCIÓN CTA FINAL */}
      <section
        id="cta"
        style={{
          padding: '60px 20px 100px',
          textAlign: 'center',
        }}
      >
        <h2 className="mb-4">¿Listo para escribir la próxima aventura?</h2>
        <a className="button-primary" href="#">
          Comenzar ahora
        </a>
      </section>
    </>
  );
}
