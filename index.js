// /pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuentos Eternos</title>
        <meta name="description" content="Donde cada historia se convierte en un recuerdo eterno." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cintillo superior */}
      <div className="bg-purple-200 text-purple-800 text-center text-sm py-2">
        ✨ Crea tu historia, descarga nuestra app y hazla eterna ✨
      </div>

      <main className="min-h-screen bg-purple-50 text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          Bienvenido a Cuentos Eternos
        </h1>
        <p className="text-lg text-purple-700 mb-6">
          Donde cada historia se convierte en un recuerdo eterno,<br />
          narrado con tu voz y tus emociones.
        </p>

        {/* BOTÓN DE DESCARGA */}
        <a
          href="https://tu-enlace.com" // 👉 REEMPLAZA ESTE ENLACE
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition duration-200"
        >
          📲 Descarga la App
        </a>

        {/* Cards de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">🎨 Personaliza tu historia</h3>
            <p className="text-gray-600 text-sm">Crea cuentos con tus personajes, tu voz y recuerdos reales.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 Conexión familiar</h3>
            <p className="text-gray-600 text-sm">Fortalece el vínculo entre padres e hijos con historias únicas.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">🧠 Educación emocional</h3>
            <p className="text-gray-600 text-sm">Ayuda a los niños a comprender sus emociones a través de cuentos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">📚 Tu biblioteca mágica</h3>
            <p className="text-gray-600 text-sm">Guarda y descarga todos los cuentos que crees con un solo clic.</p>
          </div>
        </div>
      </main>
    </>
  );
}
